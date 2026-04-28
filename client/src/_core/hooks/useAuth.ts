import { trpc } from "@/lib/trpc";
import { useCallback, useEffect, useMemo, useState } from "react";

type UseAuthOptions = {
  redirectOnUnauthenticated?: boolean;
  redirectPath?: string;
};

export function useAuth(options?: UseAuthOptions) {
  const { redirectOnUnauthenticated = false, redirectPath = "/login" } =
    options ?? {};
  const utils = trpc.useUtils();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const meQuery = trpc.auth.me.useQuery(undefined, {
    retry: false,
    refetchOnWindowFocus: false,
  });

  const logout = useCallback(() => {
    if (isLoggingOut) return;
    setIsLoggingOut(true);

    // Immediately clear cached user data so the UI reflects logged-out state
    utils.auth.me.setData(undefined, null);

    // Selectively clear auth/session storage but PRESERVE non-auth
    // user preferences such as the cookie-consent record, theme, language,
    // and any onboarding-tutorial "already seen" flags so the tutorial
    // doesn't replay on every login.
    const PRESERVE_PREFIXES = [
      "amerilend_cookie_consent",
      "theme",
      "i18nextLng",
      "amerilend_dashboard_onboarding",
      "onboarding_completed",
      "amerilend_", // covers any future tutorial / preference keys
    ];
    const shouldPreserve = (key: string) =>
      PRESERVE_PREFIXES.some((p) => key === p || key.startsWith(p));
    try {
      const preserved: Record<string, string> = {};
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && shouldPreserve(k)) {
          const v = localStorage.getItem(k);
          if (v !== null) preserved[k] = v;
        }
      }
      localStorage.clear();
      for (const [k, v] of Object.entries(preserved)) {
        localStorage.setItem(k, v);
      }
    } catch {
      /* storage unavailable */
    }
    try {
      sessionStorage.clear();
    } catch {
      /* storage unavailable */
    }

    // Clear client-accessible cookies (preferences, analytics, etc.) but
    // preserve the cookie-consent record so the banner doesn't reappear.
    document.cookie.split(";").forEach((c) => {
      const name = c.split("=")[0].trim();
      if (!name || name === "amerilend_cookie_consent") return;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
    });

    // Navigate to the dedicated server-side logout endpoint.
    // This guarantees the httpOnly session cookie is cleared via Set-Cookie
    // header on a direct browser navigation (not a fetch/tRPC call that may
    // have its Set-Cookie headers stripped by Vercel's rewrite proxy).
    // The server redirects back to "/" after clearing the cookie.
    window.location.href = "/api/logout";
  }, [utils, isLoggingOut]);

  const state = useMemo(() => {
    // Treat as loading when no user yet AND a (re)fetch is in-flight.
    // This prevents the brief "not authenticated" flash between login and cache refresh.
    const isResolving =
      meQuery.isLoading ||
      isLoggingOut ||
      (!meQuery.data && meQuery.isFetching);
    return {
      user: meQuery.data ?? null,
      loading: isResolving,
      error: meQuery.error ?? null,
      isAuthenticated: Boolean(meQuery.data),
    };
  }, [
    meQuery.data,
    meQuery.error,
    meQuery.isLoading,
    meQuery.isFetching,
    isLoggingOut,
  ]);

  useEffect(() => {
    if (!redirectOnUnauthenticated) return;
    if (meQuery.isLoading || isLoggingOut) return;
    if (state.user) return;
    if (typeof window === "undefined") return;
    if (window.location.pathname === redirectPath) return;

    window.location.href = redirectPath
  }, [
    redirectOnUnauthenticated,
    redirectPath,
    meQuery.isLoading,
    state.user,
    isLoggingOut,
  ]);

  return {
    ...state,
    refresh: () => meQuery.refetch(),
    logout,
  };
}
