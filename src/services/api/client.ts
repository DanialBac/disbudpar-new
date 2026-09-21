// src/services/api/client.ts
// Centralized HTTP client (AGENTS.md section 8). All fetch calls go through here.

export type ApiErrorKind = "network" | "http" | "invalid-json";

export class ApiError extends Error {
  readonly kind: ApiErrorKind;
  readonly status?: number;

  constructor(kind: ApiErrorKind, status?: number) {
    super(kind === "http" ? `HTTP ${status ?? ""}`.trim() : kind);
    this.name = "ApiError";
    this.kind = kind;
    this.status = status;
  }
}

export async function fetchJson(url: string, init?: RequestInit): Promise<unknown> {
  let res: Response;
  try {
    res = await fetch(url, init);
  } catch {
    throw new ApiError("network");
  }
  if (!res.ok) {
    throw new ApiError("http", res.status);
  }
  try {
    return (await res.json()) as unknown;
  } catch {
    throw new ApiError("invalid-json");
  }
}
