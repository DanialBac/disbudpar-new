// scripts/generate-api-config.ts
// Codegen bridge (AGENTS.md section 8 — single source of truth).
//
// Evaluates src/services/api/endpoints.ts with Bun and emits
// public/landing-pages/api-config.js — a dependency-free IIFE consumed by the
// static landing pages (kage.html, bidang-*.html), which Vite serves as-is and
// which therefore cannot import TypeScript modules.
//
// Every path, base URL and query convention is derived from the evaluated
// module, so editing endpoints.ts and re-running `bun run api:sync` is enough.
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import {
  BANYUWANGI_TOURISM_BASE_URL,
  BANYUWANGI_TOURISM_ENDPOINTS,
  SIJAMUWANGI_BASE_URL,
  SIJAMUWANGI_PROXY_PATH,
  SIJAMUWANGI_ENDPOINTS,
} from "../src/services/api/endpoints";

const here = dirname(fileURLToPath(import.meta.url));
const outPath = join(here, "../public/landing-pages/api-config.js");

const PROBE = "__API_CONFIG_PROBE__";

/** Derives `function (value) { return <prefix> + encodeURIComponent(value) + <suffix>; }` from the real TS function. */
function slugFn(fn: (value: string) => string): string {
  const sample = fn(PROBE);
  const parts = sample.split(PROBE);
  if (parts.length !== 2) {
    throw new Error(`Cannot derive slug endpoint from sample: ${sample}`);
  }
  const [prefix, suffix] = parts;
  return [
    "function (value) {",
    `      return ${JSON.stringify(prefix)} + encodeURIComponent(value) + ${JSON.stringify(suffix)};`,
    "    }",
  ].join("\n    ");
}

/** Derives `function (params) { return <base> + <path> + buildQuery(params); }` from the real TS function. */
function queryFn(fn: (params?: Record<string, string | number>) => string, base: string): string {
  const bare = fn();
  if (!bare.startsWith(base)) {
    throw new Error(`Endpoint sample does not start with base ${base}: ${bare}`);
  }
  const path = bare.slice(base.length);
  return [
    "function (params) {",
    `      return ${JSON.stringify(base)} + ${JSON.stringify(path)} + buildQuery(params);`,
    "    }",
  ].join("\n    ");
}

const output = `// public/landing-pages/api-config.js
// GENERATED FILE — DO NOT EDIT BY HAND.
// Source of truth: src/services/api/endpoints.ts (regenerate with \`bun run api:sync\`).
// Consumed by the static landing pages (kage.html, bidang-*.html), which are
// served as-is by Vite and cannot import TypeScript modules.
(function (global) {
  "use strict";

  function buildQuery(params) {
    if (!params) return "";
    var search = new URLSearchParams();
    Object.keys(params).forEach(function (key) {
      search.append(key, String(params[key]));
    });
    var qs = search.toString();
    return qs ? "?" + qs : "";
  }

  var banyuwangiTourism = {
    newsDetail: ${slugFn(BANYUWANGI_TOURISM_ENDPOINTS.newsDetail)},
    newsUpload: ${slugFn(BANYUWANGI_TOURISM_ENDPOINTS.newsUpload)},
    newsArticle: ${slugFn(BANYUWANGI_TOURISM_ENDPOINTS.newsArticle)},
    newsIndex: ${JSON.stringify(BANYUWANGI_TOURISM_ENDPOINTS.newsIndex)},
    newsList: ${queryFn(BANYUWANGI_TOURISM_ENDPOINTS.newsList, BANYUWANGI_TOURISM_BASE_URL)},
    newsPortalIndex: ${JSON.stringify(BANYUWANGI_TOURISM_ENDPOINTS.newsPortalIndex)},
    newsPortalArticle: ${slugFn(BANYUWANGI_TOURISM_ENDPOINTS.newsPortalArticle)},
  };

  var sijamuwangi = {
    events: ${queryFn(SIJAMUWANGI_ENDPOINTS.events, SIJAMUWANGI_BASE_URL)},
    eventsViaProxy: ${queryFn(SIJAMUWANGI_ENDPOINTS.eventsViaProxy, SIJAMUWANGI_PROXY_PATH)},
  };

  global.API_CONFIG = {
    BANYUWANGI_TOURISM_BASE_URL: ${JSON.stringify(BANYUWANGI_TOURISM_BASE_URL)},
    SIJAMUWANGI_BASE_URL: ${JSON.stringify(SIJAMUWANGI_BASE_URL)},
    SIJAMUWANGI_PROXY_PATH: ${JSON.stringify(SIJAMUWANGI_PROXY_PATH)},
    banyuwangiTourism: banyuwangiTourism,
    sijamuwangi: sijamuwangi,
  };
})(typeof window !== "undefined" ? window : globalThis);
`;

writeFileSync(outPath, output, "utf8");
console.log(`[api:sync] wrote ${outPath}`);
