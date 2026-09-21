// src/services/api/endpoints.ts
// Centralized API base URLs & endpoints (AGENTS.md section 8).
// Single source of truth for every external API used by the app.
// `bun run api:sync` regenerates public/landing-pages/api-config.js from this file.

// ─── Shared query helpers ────────────────────────────────────────────
export type ApiQueryParams = Record<string, string | number>;

function buildQuery(params?: ApiQueryParams): string {
  if (!params) return "";
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    search.append(key, String(value));
  }
  const qs = search.toString();
  return qs ? `?${qs}` : "";
}

// ─── Banyuwangi Tourism (news portal) ────────────────────────────────
export const BANYUWANGI_TOURISM_BASE_URL = "https://banyuwangitourism.com";

export const BANYUWANGI_TOURISM_ENDPOINTS = {
  newsDetail: (slug: string) =>
    `${BANYUWANGI_TOURISM_BASE_URL}/api/news/detail/${encodeURIComponent(slug)}`,
  newsUpload: (foto: string) =>
    `${BANYUWANGI_TOURISM_BASE_URL}/upload/news/${encodeURIComponent(foto)}`,
  newsArticle: (slug: string) =>
    `${BANYUWANGI_TOURISM_BASE_URL}/berita/${encodeURIComponent(slug)}`,
  newsIndex: `${BANYUWANGI_TOURISM_BASE_URL}/berita`,
  /** List endpoint of the public news API, e.g. newsList({ category: "nasional", orderBy: "desc" }) */
  newsList: (params?: ApiQueryParams) =>
    `${BANYUWANGI_TOURISM_BASE_URL}/api/news${buildQuery(params)}`,
  /** Public news portal (used by the static landing page): https://.../news */
  newsPortalIndex: `${BANYUWANGI_TOURISM_BASE_URL}/news`,
  newsPortalArticle: (slug: string) =>
    `${BANYUWANGI_TOURISM_BASE_URL}/news/${encodeURIComponent(slug)}`,
} as const;

// ─── Sijamuwangi (events/agenda API, Banyuwangi Regency) ─────────────
export const SIJAMUWANGI_BASE_URL = "https://api-sijamuwangi.banyuwangikab.go.id";

// Dev proxy prefix (see vite.config.ts server.proxy) — avoids CORS during development.
export const SIJAMUWANGI_PROXY_PATH = "/api-sijamuwangi";

export const SIJAMUWANGI_ENDPOINTS = {
  /** GET /v1/public/events — e.g. events({ per_page: 20, page: 1 }) */
  events: (params?: ApiQueryParams) =>
    `${SIJAMUWANGI_BASE_URL}/v1/public/events${buildQuery(params)}`,
  /** Same as events() but via the dev proxy path (no CORS in dev). */
  eventsViaProxy: (params?: ApiQueryParams) =>
    `${SIJAMUWANGI_PROXY_PATH}/v1/public/events${buildQuery(params)}`,
} as const;

// ─── Helpers ─────────────────────────────────────────────────────────
export function isAbsoluteUrl(url: string): boolean {
  return url.startsWith("http://") || url.startsWith("https://");
}
