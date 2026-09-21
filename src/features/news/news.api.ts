// src/features/news/news.api.ts
// News domain API (AGENTS.md sections 7 & 8): all news fetching goes through here.
import { ApiError, fetchJson } from "../../services/api/client";
import {
  BANYUWANGI_TOURISM_ENDPOINTS,
  isAbsoluteUrl,
} from "../../services/api/endpoints";
import type { NewsArticle } from "../../types/api";

function isNewsArticle(value: unknown): value is NewsArticle {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.title === "string" &&
    (typeof v.text === "string" || v.text === undefined)
  );
}

export async function fetchNewsArticleDetail(slug: string): Promise<NewsArticle> {
  const data = await fetchJson(BANYUWANGI_TOURISM_ENDPOINTS.newsDetail(slug));
  if (!isNewsArticle(data)) {
    throw new ApiError("invalid-json");
  }
  return data;
}

export function getNewsImageUrl(foto?: string): string {
  if (!foto) return "/gallery/gandrung-sewu.jpg";
  if (isAbsoluteUrl(foto)) return foto;
  return BANYUWANGI_TOURISM_ENDPOINTS.newsUpload(foto);
}

export function getNewsArticleUrl(slug: string): string {
  return BANYUWANGI_TOURISM_ENDPOINTS.newsArticle(slug);
}

export function getNewsIndexUrl(): string {
  return BANYUWANGI_TOURISM_ENDPOINTS.newsIndex;
}
