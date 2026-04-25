import { formatCurrency, formatDate } from "./utils";

interface StatementParams {
  loan: any;
  paymentSchedule: any[];
  user: any;
  totalPaid: number;
  remainingBalance: number;
  paidPayments: number;
  totalPayments: number;
}

const escape = (v: unknown): string =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const statusLabel = (s: string): string => {
  const map: Record<string, string> = {
    paid: "Paid",
    pending: "Scheduled",
    overdue: "Overdue",
    failed: "Failed",
    refunded: "Refunded",
    upcoming: "Upcoming",
  };
  return map[s] ?? s;
};

const statusColor = (s: string): string => {
  switch (s) {
    case "paid":
      return "#0a7a3a";
    case "overdue":
    case "failed":
      return "#b91c1c";
    case "refunded":
      return "#6b7280";
    default:
      return "#0a2540";
  }
};

export function buildStatementOfAccountHtml(params: StatementParams): string {
  const { loan, paymentSchedule, user, totalPaid, remainingBalance, paidPayments, totalPayments } = params;

  const approvedAmount = Number(loan.approvedAmount ?? loan.requestedAmount ?? 0);
  const processingFee = Number(loan.processingFeeAmount ?? 0);
  const interestRate = loan.interestRate ?? null;
  const termMonths = loan.termMonths ?? loan.termInMonths ?? null;

  const generatedAt = new Date();
  const periodStart = loan.createdAt ? new Date(loan.createdAt) : generatedAt;

  const fullName: string = user?.fullName || user?.name || loan.fullName || "Borrower";
  const email: string = user?.email || loan.email || "";
  const phone: string = user?.phone || loan.phone || "";

  // Build a chronological transaction history. We synthesize from loan lifecycle
  // and the payment schedule, since there is no separate ledger endpoint.
  type Txn = { date: Date; description: string; debit: number; credit: number };
  const txns: Txn[] = [];

  if (loan.createdAt) {
    txns.push({
      date: new Date(loan.createdAt),
      description: "Loan application submitted",
      debit: 0,
      credit: 0,
    });
  }

  if (loan.approvedAt && approvedAmount > 0) {
    txns.push({
      date: new Date(loan.approvedAt),
      description: `Loan approved — principal ${formatCurrency(approvedAmount)}`,
      debit: approvedAmount,
      credit: 0,
    });
  }

  if (loan.feePaidAt && processingFee > 0) {
    txns.push({
      date: new Date(loan.feePaidAt),
      description: "Processing fee received",
      debit: 0,
      credit: processingFee,
    });
  }

  if (loan.disbursedAt) {
    txns.push({
      date: new Date(loan.disbursedAt),
      description: `Funds disbursed${loan.disbursementMethod ? ` (${loan.disbursementMethod})` : ""}`,
      debit: 0,
      credit: 0,
    });
  }

  for (const p of paymentSchedule) {
    if (p.status === "paid" && p.paidAt) {
      const amt = Number(p.paidAmount ?? p.dueAmount ?? 0);
      txns.push({
        date: new Date(p.paidAt),
        description: `Installment #${p.installmentNumber} payment received`,
        debit: 0,
        credit: amt,
      });
    }
  }

  txns.sort((a, b) => a.date.getTime() - b.date.getTime());

  // Running principal balance: starts at 0, debits add, credits (payments) subtract.
  let running = 0;
  const txnRows = txns
    .map((t) => {
      running = running + t.debit - t.credit;
      return `
        <tr>
          <td>${escape(formatDate(t.date))}</td>
          <td>${escape(t.description)}</td>
          <td class="num">${t.debit ? formatCurrency(t.debit) : ""}</td>
          <td class="num">${t.credit ? formatCurrency(t.credit) : ""}</td>
          <td class="num">${formatCurrency(running)}</td>
        </tr>`;
    })
    .join("");

  const scheduleRows = paymentSchedule
    .map(
      (p) => `
        <tr>
          <td>#${escape(p.installmentNumber)}</td>
          <td>${escape(formatDate(new Date(p.dueDate)))}</td>
          <td class="num">${formatCurrency(Number(p.dueAmount ?? 0))}</td>
          <td class="num">${p.paidAmount ? formatCurrency(Number(p.paidAmount)) : "—"}</td>
          <td><span class="status" style="color:${statusColor(p.status)}">${escape(statusLabel(p.status))}</span></td>
          <td>${p.paidAt ? escape(formatDate(new Date(p.paidAt))) : "—"}</td>
        </tr>`,
    )
    .join("");

  const accountNumber = loan.loanAccountNumber || "—";
  const trackingNumber = loan.trackingNumber || `#${loan.id}`;

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Statement of Account — Loan ${escape(trackingNumber)}</title>
<style>
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; color: #0a2540; background: #f7f8fa; padding: 24px; }
  .page { max-width: 880px; margin: 0 auto; background: #fff; border: 1px solid #e5e7eb; padding: 40px 48px; }
  .header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #0a2540; padding-bottom: 16px; margin-bottom: 24px; }
  .brand { font-size: 22px; font-weight: 700; letter-spacing: 0.5px; color: #0a2540; }
  .brand-sub { font-size: 11px; color: #6b7280; margin-top: 2px; letter-spacing: 0.3px; text-transform: uppercase; }
  .doc-title { text-align: right; }
  .doc-title h1 { margin: 0; font-size: 16px; text-transform: uppercase; letter-spacing: 1.5px; color: #0a2540; }
  .doc-title .date { font-size: 11px; color: #6b7280; margin-top: 4px; }
  .meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px; }
  .meta-block h3 { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #6b7280; margin: 0 0 6px 0; font-weight: 600; }
  .meta-block .line { font-size: 13px; line-height: 1.55; }
  .meta-block .line strong { color: #0a2540; }
  .summary { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 28px; }
  .summary .cell { background: #f9fafb; border: 1px solid #e5e7eb; padding: 12px; }
  .summary .label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.8px; color: #6b7280; margin-bottom: 4px; }
  .summary .value { font-size: 15px; font-weight: 700; color: #0a2540; }
  .section-title { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #0a2540; border-bottom: 1px solid #d1d5db; padding-bottom: 6px; margin: 24px 0 12px; font-weight: 700; }
  table { width: 100%; border-collapse: collapse; font-size: 12px; }
  th { text-align: left; background: #0a2540; color: #fff; padding: 8px 10px; font-weight: 600; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; }
  td { padding: 8px 10px; border-bottom: 1px solid #e5e7eb; vertical-align: top; }
  td.num, th.num { text-align: right; font-variant-numeric: tabular-nums; }
  .status { font-weight: 600; font-size: 11px; }
  .totals { margin-top: 16px; display: grid; grid-template-columns: 1fr 240px; }
  .totals .totals-box { border: 1px solid #d1d5db; padding: 10px 12px; }
  .totals .totals-row { display: flex; justify-content: space-between; padding: 4px 0; font-size: 12px; }
  .totals .totals-row.total { border-top: 1px solid #d1d5db; margin-top: 4px; padding-top: 8px; font-weight: 700; font-size: 13px; }
  .footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 11px; color: #6b7280; line-height: 1.6; }
  .footer strong { color: #0a2540; }
  .actions { max-width: 880px; margin: 0 auto 16px; display: flex; gap: 8px; justify-content: flex-end; }
  .actions button { background: #0a2540; color: #fff; border: 0; padding: 8px 16px; font-size: 13px; cursor: pointer; }
  .actions button.secondary { background: #fff; color: #0a2540; border: 1px solid #0a2540; }
  @media print {
    body { background: #fff; padding: 0; }
    .actions { display: none; }
    .page { border: 0; padding: 24px; max-width: none; }
  }
</style>
</head>
<body>
  <div class="actions">
    <button class="secondary" onclick="window.close()">Close</button>
    <button onclick="window.print()">Print / Save as PDF</button>
  </div>
  <div class="page">
    <div class="header">
      <div>
        <div class="brand">AmeriLend</div>
        <div class="brand-sub">Personal Lending Services</div>
      </div>
      <div class="doc-title">
        <h1>Statement of Account</h1>
        <div class="date">Issued: ${escape(formatDate(generatedAt))}</div>
        <div class="date">Period: ${escape(formatDate(periodStart))} – ${escape(formatDate(generatedAt))}</div>
      </div>
    </div>

    <div class="meta-grid">
      <div class="meta-block">
        <h3>Account Holder</h3>
        <div class="line"><strong>${escape(fullName)}</strong></div>
        ${email ? `<div class="line">${escape(email)}</div>` : ""}
        ${phone ? `<div class="line">${escape(phone)}</div>` : ""}
      </div>
      <div class="meta-block">
        <h3>Loan Account</h3>
        <div class="line">Account #: <strong>${escape(accountNumber)}</strong></div>
        <div class="line">Tracking #: <strong>${escape(trackingNumber)}</strong></div>
        <div class="line">Type: <strong>${escape(loan.loanType ?? "—")}</strong></div>
        <div class="line">Status: <strong>${escape(loan.status ?? "—")}</strong></div>
      </div>
    </div>

    <div class="summary">
      <div class="cell"><div class="label">Approved Amount</div><div class="value">${formatCurrency(approvedAmount)}</div></div>
      <div class="cell"><div class="label">Total Paid</div><div class="value">${formatCurrency(totalPaid)}</div></div>
      <div class="cell"><div class="label">Outstanding Balance</div><div class="value">${formatCurrency(remainingBalance)}</div></div>
      <div class="cell"><div class="label">Installments</div><div class="value">${paidPayments} of ${totalPayments}</div></div>
    </div>

    ${interestRate || termMonths ? `
    <div class="meta-grid" style="margin-top:0;">
      ${interestRate ? `<div class="meta-block"><h3>Interest Rate</h3><div class="line"><strong>${escape(interestRate)}%</strong> APR</div></div>` : ""}
      ${termMonths ? `<div class="meta-block"><h3>Term</h3><div class="line"><strong>${escape(termMonths)}</strong> months</div></div>` : ""}
    </div>` : ""}

    <div class="section-title">Transaction History</div>
    ${
      txns.length > 0
        ? `<table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th class="num">Debit</th>
                <th class="num">Credit</th>
                <th class="num">Balance</th>
              </tr>
            </thead>
            <tbody>${txnRows}</tbody>
          </table>`
        : `<p style="font-size:12px;color:#6b7280;">No transactions have posted to this account yet.</p>`
    }

    <div class="totals">
      <div></div>
      <div class="totals-box">
        <div class="totals-row"><span>Approved principal</span><span>${formatCurrency(approvedAmount)}</span></div>
        <div class="totals-row"><span>Payments applied</span><span>− ${formatCurrency(totalPaid)}</span></div>
        <div class="totals-row total"><span>Balance due</span><span>${formatCurrency(remainingBalance)}</span></div>
      </div>
    </div>

    <div class="section-title">Repayment Schedule</div>
    ${
      paymentSchedule.length > 0
        ? `<table>
            <thead>
              <tr>
                <th>#</th>
                <th>Due Date</th>
                <th class="num">Amount Due</th>
                <th class="num">Amount Paid</th>
                <th>Status</th>
                <th>Paid On</th>
              </tr>
            </thead>
            <tbody>${scheduleRows}</tbody>
          </table>`
        : `<p style="font-size:12px;color:#6b7280;">A repayment schedule has not been generated for this loan.</p>`
    }

    <div class="footer">
      <p>This statement reflects activity on your AmeriLend loan account as of <strong>${escape(formatDate(generatedAt))}</strong>. If any item appears incorrect, please contact our support team within 30 days.</p>
      <p><strong>AmeriLend</strong> &middot; support@amerilendloan.com &middot; (945) 212-1609 &middot; www.amerilendloan.com</p>
      <p style="font-size:10px;margin-top:8px;">This document is generated electronically and is valid without a signature.</p>
    </div>
  </div>
</body>
</html>`;
}

export function openStatementOfAccount(params: StatementParams): void {
  const html = buildStatementOfAccountHtml(params);
  const w = window.open("", "_blank", "width=960,height=900");
  if (!w) {
    // Popup blocked — fall back to a blob download.
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `amerilend-statement-${params.loan.trackingNumber || params.loan.id}.html`;
    a.click();
    URL.revokeObjectURL(url);
    return;
  }
  w.document.open();
  w.document.write(html);
  w.document.close();
}
