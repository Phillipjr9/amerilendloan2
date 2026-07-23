import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trpc } from "@/lib/trpc";
import { Loader2, Phone } from "lucide-react";
import { Link, useLocation } from "wouter";
import { toast } from "sonner";
import { useAuth } from "@/_core/hooks/useAuth";
import SEOHead from "@/components/SEOHead";
import { COMPANY_PHONE_DISPLAY_SHORT, COMPANY_PHONE_RAW, COMPANY_SUPPORT_EMAIL } from "@/const";

export default function OTPLogin() {
  const [, setLocation] = useLocation();
  const { isAuthenticated, loading: authLoading } = useAuth();

  const postLoginTarget = (() => {
    if (typeof window === "undefined") return "/dashboard";
    const next = new URLSearchParams(window.location.search).get("next");
    if (!next || !next.startsWith("/") || next.startsWith("//") || next.startsWith("/\\")) return "/dashboard";
    return next;
  })();

  const finishLogin = (sessionCode?: string | null) => {
    if (sessionCode) {
      window.location.href = `/api/auth/session?code=${encodeURIComponent(sessionCode)}&redirect=${encodeURIComponent(postLoginTarget)}`;
    } else {
      window.location.href = postLoginTarget;
    }
  };

  useEffect(() => {
    if (isAuthenticated && !authLoading) setLocation(postLoginTarget);
  }, [isAuthenticated, authLoading]);

  // Surface OAuth errors from URL params
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const errorParam = params.get("error");
    if (!errorParam) return;
    const msgs: Record<string, string> = {
      google_auth_failed: "Google sign-in failed. Please try again.",
      github_auth_failed: "GitHub sign-in failed. Please try again.",
      session_expired: "Your session expired. Please sign in again.",
      access_denied: "Sign-in was cancelled.",
    };
    toast.error(msgs[errorParam] || `Sign-in error: ${errorParam}`);
    const url = new URL(window.location.href);
    url.searchParams.delete("error");
    window.history.replaceState({}, "", url.pathname + (url.search || "") + url.hash);
  }, []);

  const [step, setStep] = useState<"email" | "code">("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const requestCodeMutation = trpc.auth.supabaseRequestOTP.useMutation({
    onSuccess: () => {
      toast.success("Verification code sent to your email");
      setStep("code");
    },
    onError: (err) => toast.error(err.message || "Failed to send code"),
  });

  const verifyCodeMutation = trpc.auth.supabaseVerifyOTP.useMutation({
    onSuccess: (data) => {
      toast.success("Signed in successfully!");
      finishLogin(data?.sessionCode);
    },
    onError: (err) => toast.error(err.message || "Invalid or expired code"),
  });

  const handleRequestCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return toast.error("Enter your email address");
    requestCodeMutation.mutate({ email: email.trim() });
  };

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length !== 6) return toast.error("Enter the 6-digit code");
    verifyCodeMutation.mutate({ email: email.trim(), token: code });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f0f7f6] to-white">
      <SEOHead
        title="Log In"
        description="Sign in to your AmeriLend account to manage your loans, make payments, and track your application status."
        path="/login"
      />

      <header className="bg-white border-b border-gray-100 shadow-sm py-0">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2">
              <img src="/images/logo-new.jpg" alt="AmeriLend" className="h-9 w-auto rounded" />
              <span className="text-xl font-bold text-[#0A2540] hidden sm:inline">AmeriLend</span>
            </a>
          </Link>
          <a href={`tel:${COMPANY_PHONE_RAW}`} className="hidden sm:flex items-center gap-1 text-xs text-gray-600 hover:text-[#0A2540]">
            <Phone className="w-4 h-4" />
            {COMPANY_PHONE_DISPLAY_SHORT}
          </a>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#0A2540]">Welcome to AmeriLend</h1>
            <p className="text-slate-500 mt-2">Sign in or create an account with your email</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-slate-200/60 overflow-hidden p-8">
            {step === "email" ? (
              <form onSubmit={handleRequestCode} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0A2540]/20 focus:border-[#0A2540] transition-all"
                    required
                    autoFocus
                  />
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                  <p className="text-sm text-blue-700">
                    We'll send a 6-digit code to your email. No password needed — works for both new and existing accounts.
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={requestCodeMutation.isPending}
                  className="w-full bg-[#0A2540] hover:bg-[#0A2540]/90 text-white py-3.5 rounded-lg font-semibold transition-all shadow-sm"
                >
                  {requestCodeMutation.isPending ? (
                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" />Sending code...</>
                  ) : "Send Verification Code"}
                </Button>

                <div className="text-center">
                  <a href={`mailto:${COMPANY_SUPPORT_EMAIL}`} className="text-xs text-slate-500 hover:text-[#0A2540] transition-colors">
                    Need help? Contact Support
                  </a>
                </div>
              </form>
            ) : (
              <form onSubmit={handleVerifyCode} className="space-y-5">
                <div className="text-center mb-2">
                  <p className="text-slate-600 text-sm">
                    Code sent to <strong className="text-slate-800">{email}</strong>
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Verification Code</label>
                  <Input
                    type="text"
                    inputMode="numeric"
                    placeholder="000000"
                    value={code}
                    onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    className="w-full px-4 py-4 border border-slate-200 rounded-lg text-center text-2xl tracking-widest font-mono focus:ring-2 focus:ring-[#0A2540]/20 focus:border-[#0A2540] transition-all"
                    maxLength={6}
                    required
                    autoFocus
                  />
                  <p className="text-xs text-slate-500 text-center mt-2">Check your email — expires in 10 minutes</p>
                </div>

                <Button
                  type="submit"
                  disabled={verifyCodeMutation.isPending}
                  className="w-full bg-[#0A2540] hover:bg-[#0A2540]/90 text-white py-3.5 rounded-lg font-semibold transition-all shadow-sm"
                >
                  {verifyCodeMutation.isPending ? (
                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" />Verifying...</>
                  ) : "Verify & Sign In"}
                </Button>

                <div className="flex gap-3">
                  <Button type="button" variant="outline" onClick={() => { setStep("email"); setCode(""); }} className="flex-1">
                    ← Change Email
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    disabled={requestCodeMutation.isPending}
                    onClick={() => requestCodeMutation.mutate({ email: email.trim() })}
                    className="flex-1"
                  >
                    Resend Code
                  </Button>
                </div>
              </form>
            )}
          </div>

          <div className="mt-6 text-center text-sm text-slate-500">
            <Link href="/"><a className="text-[#0A2540] hover:underline font-medium">← Back to Home</a></Link>
          </div>

          <div className="mt-6 text-center">
            <div className="flex justify-center">
              <img src="/ssl-seal.png" alt="SSL Secure" className="h-16 w-auto opacity-80" />
            </div>
          </div>

          <div className="mt-4 text-center text-xs text-slate-500 space-y-1">
            <div>
              <a href="/legal/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-[#0A2540] hover:underline mx-2">Terms</a>
              <span className="text-slate-300">•</span>
              <a href="/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#0A2540] hover:underline mx-2">Privacy</a>
              <span className="text-slate-300">•</span>
              <a href={`mailto:${COMPANY_SUPPORT_EMAIL}`} className="text-[#0A2540] hover:underline mx-2">Support</a>
            </div>
            <p className="text-slate-400">🔒 Protected by 256-bit SSL encryption</p>
          </div>
        </div>
      </div>
    </div>
  );
}
