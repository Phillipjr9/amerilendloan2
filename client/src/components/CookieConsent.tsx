import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Cookie, Lock } from "lucide-react";

const COOKIE_CONSENT_KEY = "amerilend_cookie_consent";

type CookieDecision = "accepted" | "denied";

type CookiePreference = {
  decision: CookieDecision;
  essential: true;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  updatedAt: string;
};

function readStoredConsent(): CookiePreference | null {
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CookiePreference>;
    if (parsed && (parsed.decision === "accepted" || parsed.decision === "denied")) {
      return parsed as CookiePreference;
    }
    return {
      decision: "accepted",
      essential: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      preferences: Boolean(parsed.preferences),
      updatedAt: parsed.updatedAt ?? new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

function writeConsent(next: Omit<CookiePreference, "updatedAt">) {
  const payload: CookiePreference = {
    ...next,
    updatedAt: new Date().toISOString(),
  };
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(payload));
  } catch {
    /* storage unavailable */
  }
  try {
    const oneYear = 60 * 60 * 24 * 365;
    document.cookie = `${COOKIE_CONSENT_KEY}=${encodeURIComponent(payload.decision)};max-age=${oneYear};path=/;SameSite=Lax`;
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: payload }));
  return payload;
}

export default function CookieConsent() {
  const [decision, setDecision] = useState<"pending" | CookieDecision>("pending");
  const [showBanner, setShowBanner] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [preferences, setPreferences] = useState(true);

  useEffect(() => {
    const stored = readStoredConsent();
    if (stored) {
      setDecision(stored.decision);
    } else {
      const t = setTimeout(() => setShowBanner(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  function acceptAll() {
    writeConsent({ decision: "accepted", essential: true, analytics: true, marketing: true, preferences: true });
    setDecision("accepted");
    setShowBanner(false);
  }

  function saveSelected() {
    writeConsent({ decision: "accepted", essential: true, analytics, marketing, preferences });
    setDecision("accepted");
    setShowBanner(false);
  }

  function denyAll() {
    writeConsent({ decision: "denied", essential: true, analytics: false, marketing: false, preferences: false });
    setDecision("denied");
    setShowBanner(false);
  }

  if (decision === "accepted") return null;

  if (decision === "denied") {
    return (
      <div
        className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-block-title"
      >
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-center">
          <div className="mx-auto w-14 h-14 rounded-full bg-[#FFF3CD] flex items-center justify-center mb-4">
            <Lock className="w-7 h-7 text-[#C9A227]" />
          </div>
          <h2 id="cookie-block-title" className="text-xl font-semibold text-[#0A2540] mb-2">
            Cookies are required
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Amerilend uses cookies to keep you signed in, secure your session, and run essential
            parts of the site. You must accept cookies to continue using the website.
          </p>
          <div className="flex flex-col gap-2">
            <button
              onClick={acceptAll}
              className="w-full px-5 py-3 text-sm font-semibold text-white bg-[#0A2540] hover:bg-[#0d3158] rounded-lg transition-colors"
            >
              Accept Cookies & Continue
            </button>
            <Link href="/legal/privacy-policy" className="text-xs text-gray-500 hover:text-[#0A2540] underline">
              Read our Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-4 duration-500">
      <div className="mx-auto max-w-4xl bg-white border border-gray-200 rounded-xl shadow-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Cookie className="w-8 h-8 text-[#C9A227] flex-shrink-0 hidden sm:block" />
        <div className="flex-1 text-sm text-gray-600 space-y-3">
          <p>
            We use cookies to enhance your experience, analyze site traffic, and personalize content.
            Cookies are required to use Amerilend &mdash; you can fine-tune optional categories below.{" "}
            <Link href="/legal/privacy-policy" className="text-[#0A2540] underline hover:text-[#C9A227]">
              Privacy Policy
            </Link>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <label className="flex items-center justify-between gap-2 rounded-lg border px-3 py-2 bg-gray-50">
              <span className="text-xs font-medium text-gray-700">Essential (required)</span>
              <input type="checkbox" checked disabled className="accent-[#0A2540]" />
            </label>
            <label className="flex items-center justify-between gap-2 rounded-lg border px-3 py-2">
              <span className="text-xs font-medium text-gray-700">Analytics</span>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="accent-[#0A2540]"
              />
            </label>
            <label className="flex items-center justify-between gap-2 rounded-lg border px-3 py-2">
              <span className="text-xs font-medium text-gray-700">Preferences</span>
              <input
                type="checkbox"
                checked={preferences}
                onChange={(e) => setPreferences(e.target.checked)}
                className="accent-[#0A2540]"
              />
            </label>
            <label className="flex items-center justify-between gap-2 rounded-lg border px-3 py-2">
              <span className="text-xs font-medium text-gray-700">Marketing</span>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="accent-[#0A2540]"
              />
            </label>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto flex-wrap">
          <button
            onClick={denyAll}
            className="flex-1 sm:flex-none px-4 py-2 text-sm text-gray-500 hover:text-gray-700 border border-gray-300 rounded-lg transition-colors"
          >
            Decline
          </button>
          <button
            onClick={saveSelected}
            className="flex-1 sm:flex-none px-4 py-2 text-sm text-[#0A2540] hover:text-[#C9A227] border border-[#0A2540] rounded-lg transition-colors"
          >
            Save Preferences
          </button>
          <button
            onClick={acceptAll}
            className="flex-1 sm:flex-none px-5 py-2 text-sm font-semibold text-white bg-[#0A2540] hover:bg-[#0d3158] rounded-lg transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}