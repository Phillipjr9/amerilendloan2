/**
 * Cleanup script: remove test users and their associated data
 * Run: node _cleanup_test_data.cjs
 * 
 * This removes:
 * - Users with emails matching *@test-amerilend.com
 * - Their loan applications, bank accounts, etc.
 */
require('dotenv').config();
const postgres = require('postgres');

const sql = postgres(process.env.DATABASE_URL, { ssl: 'require' });

async function cleanup() {
  console.log('🧹 Starting test data cleanup...\n');

  // Find test users
  const testUsers = await sql`
    SELECT id, email, name FROM users 
    WHERE email LIKE '%@test-amerilend.com'
    OR (name = 'Test Flow User' AND email NOT LIKE '%@amerilendloan.com')
  `;

  console.log(`Found ${testUsers.length} test users to remove:\n`);
  testUsers.forEach(u => console.log(`  - ${u.email} (ID: ${u.id})`));

  if (testUsers.length === 0) {
    console.log('\n✅ No test users found. Database is clean.');
    await sql.end();
    return;
  }

  const userIds = testUsers.map(u => u.id);

  console.log('\n📋 Deleting associated data...\n');

  // Delete chat messages first (references chat_sessions)
  try {
    const result = await sql`DELETE FROM chat_messages WHERE sender_id = ANY(${userIds})`;
    if (result.count > 0) console.log(`  ✓ Deleted ${result.count} chat messages`);
  } catch (err) { console.log(`  - Skipped chat_messages`); }

  // Delete chat sessions
  try {
    const result = await sql`DELETE FROM chat_sessions WHERE user_id = ANY(${userIds})`;
    if (result.count > 0) console.log(`  ✓ Deleted ${result.count} chat sessions`);
  } catch (err) { console.log(`  - Error: ${err.message.slice(0, 50)}`); }

  // Delete from tables with userId column (camelCase)
  const camelCaseTables = [
    'legalAcceptances', 'notificationPreferences', 'userNotifications', 
    'accountActivity', 'otpCodes', 'loginAttempts', 'autopaySettings',
    'savedPaymentMethods', 'referralProgram', 'userRewardsBalance',
    'bankAccounts', 'verificationDocuments', 'supportTickets',
    'userDevices', 'trustedDevices', 'emailVerificationTokens', 'userSessions'
  ];

  // Also try snake_case tables with user_id
  const snakeCaseTables = [
    'payment_preferences', 'user_notification_settings'
  ];

  for (const table of camelCaseTables) {
    try {
      const result = await sql`DELETE FROM ${sql(table)} WHERE "userId" = ANY(${userIds})`;
      if (result.count > 0) console.log(`  ✓ Deleted ${result.count} from ${table}`);
    } catch (err) { /* table may not exist */ }
  }

  for (const table of snakeCaseTables) {
    try {
      const result = await sql`DELETE FROM ${sql(table)} WHERE user_id = ANY(${userIds})`;
      if (result.count > 0) console.log(`  ✓ Deleted ${result.count} from ${table}`);
    } catch (err) { /* table may not exist */ }
  }

  // Delete payments first (references loanApplications)
  try {
    const loanIds = await sql`SELECT id FROM "loanApplications" WHERE "userId" = ANY(${userIds})`;
    if (loanIds.length > 0) {
      const ids = loanIds.map(l => l.id);
      await sql`DELETE FROM payments WHERE "loanId" = ANY(${ids})`;
      await sql`DELETE FROM disbursements WHERE "loanId" = ANY(${ids})`;
    }
  } catch (err) { /* ignore */ }

  // Delete loan applications
  try {
    const result = await sql`DELETE FROM "loanApplications" WHERE "userId" = ANY(${userIds})`;
    if (result.count > 0) console.log(`  ✓ Deleted ${result.count} loan applications`);
  } catch (err) { console.log(`  - Error loans: ${err.message.slice(0, 50)}`); }

  // Finally delete test users
  try {
    const deleteResult = await sql`DELETE FROM users WHERE id = ANY(${userIds})`;
    console.log(`\n✅ Deleted ${deleteResult.count} test users`);
  } catch (err) {
    console.error(`\n❌ Failed to delete users: ${err.message}`);
  }

  // Show remaining counts
  const remaining = await sql`SELECT COUNT(*) as count FROM users`;
  const remainingLoans = await sql`SELECT COUNT(*) as count FROM "loanApplications"`;
  
  console.log('\n══════════════════════════════════════');
  console.log('  CLEANUP COMPLETE');
  console.log('══════════════════════════════════════');
  console.log(`  Remaining users: ${remaining[0].count}`);
  console.log(`  Remaining loans: ${remainingLoans[0].count}`);
  console.log('══════════════════════════════════════\n');

  await sql.end();
}

cleanup().catch(err => {
  console.error('Cleanup failed:', err);
  sql.end().then(() => process.exit(1));
});
