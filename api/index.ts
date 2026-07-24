// Vercel serverless entry point
import "dotenv/config";
import express from "express";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "../server/_core/oauth";
import { appRouter } from "../server/routers";
import { createContext } from "../server/_core/context";
import { serveStatic } from "../server/_core/static";
import { sdk } from "../server/_core/sdk";
import { getSessionCookieOptions } from "../server/_core/cookies";
import { COOKIE_NAME, SESSION_COOKIE_MS } from "../shared/const";
import { redeemSessionCode } from "../server/_core/session-code";
import { logger } from "../server/_core/logger";

let app: express.Express | null = null;

function createApp() {
  if (app) return app;

  const _app = express();

  _app.set("trust proxy", 1);

  _app.use((req, res, next) => {
    if (req.originalUrl === "/api/stripe/webhook") return next();
    return express.json({ limit: "10mb" })(req, res, next);
  });
  _app.use((req, res, next) => {
    if (req.originalUrl === "/api/stripe/webhook") return next();
    return express.urlencoded({ limit: "10mb", extended: true })(req, res, next);
  });

  // CORS
  _app.use((req, res, next) => {
    const origin = req.headers.origin;
    const allowed = [
      "https://www.amerilendloan.com",
      "https://amerilendloan.com",
      process.env.VITE_APP_URL,
    ].filter(Boolean);
    if (origin && allowed.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
    }
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    if (req.method === "OPTIONS") return res.sendStatus(204);
    next();
  });

  // Health check
  _app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });
  _app.get("/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Session cookie endpoint
  _app.get("/api/auth/session", (req, res) => {
    const code = typeof req.query.code === "string" ? req.query.code : "";
    const redirect = typeof req.query.redirect === "string" ? req.query.redirect : "/dashboard";
    const safeRedirect = redirect.startsWith("/") && !redirect.startsWith("//") ? redirect : "/dashboard";

    const sessionToken = redeemSessionCode(code);
    if (!sessionToken) {
      return res.redirect(302, "/login?error=session_expired");
    }

    const cookieOptions = getSessionCookieOptions(req);
    res.cookie(COOKIE_NAME, sessionToken, { ...cookieOptions, maxAge: SESSION_COOKIE_MS });
    res.redirect(302, safeRedirect);
  });

  // Logout endpoint
  _app.get("/api/logout", (req, res) => {
    const cookieOptions = getSessionCookieOptions(req);
    res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: 0 });
    res.clearCookie(COOKIE_NAME, { path: "/" });
    res.setHeader("Clear-Site-Data", '"cookies", "cache"');
    res.setHeader("Cache-Control", "no-store");
    res.redirect(302, "/");
  });

  // OAuth routes
  registerOAuthRoutes(_app);

  // tRPC
  _app.use(
    "/api/trpc",
    createExpressMiddleware({ router: appRouter, createContext })
  );

  app = _app;
  return _app;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const application = createApp();
  return new Promise((resolve, reject) => {
    application(req as any, res as any, (err: any) => {
      if (err) reject(err);
      else resolve(undefined);
    });
  });
}
