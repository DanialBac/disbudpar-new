# Project Architecture

## Stack

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Oxlint

## Architecture

This project follows the canonical layered feature-oriented architecture
documented in AGENTS.md section 3.

```text
src/
├── app/                # App shell & centralized routing (AGENTS.md 13/14)
│   ├── App.tsx
│   └── router.tsx
├── features/
│   ├── language/       # LanguageToggle component
│   └── news/
│       ├── news.api.ts # News domain API (AGENTS.md 7/8)
│       └── components/ # NewsDetailModal
├── pages/
│   ├── home/
│   │   └── HomePage.tsx        # Landing page (Kage)
│   ├── bidang/
│   │   ├── BidangPage.tsx      # Halaman bidang (4 divisi)
│   │   └── sections/
│   └── profil/
│       ├── ProfilDokumenPage.tsx
│       └── sections/           # 5 sub-menu profil sections
├── services/
│   ├── api/
│   │   ├── client.ts   # HTTP client terpusat (fetchJson + ApiError)
│   │   └── endpoints.ts# Base URL & endpoint Banyuwangi Tourism
│   └── seo/
│       └── index.ts    # SEO per-halaman (updateDocumentSeo dll.)
├── i18n/
│   └── index.ts        # Bahasa id/en + storage (STORAGE_LANG_KEY)
├── styles/
│   ├── globals.css     # Token desain & base Tailwind
│   └── animations.css  # Gaya landing page 3D (threeui)
├── types/
│   └── api.ts          # NewsArticle, SijamuwangiEvent
├── lib/                # (kosong; utilitas kecil ditempatkan di sini bila ada)
└── main.tsx            # Entry point

public/landing-pages/   # Landing page statis (kage.html) — dilayani apa adanya; halaman Bidang kini React di pages/bidang/
public/gallery/         # Aset galeri
```

## Key Conventions

- Semua fetch API lewat `features/<domain>/<domain>.api.ts`, yang memakai
  `services/api/client.ts` + `services/api/endpoints.ts`. Tidak ada fetch
  langsung di komponen.
- **Jembatan codegen untuk halaman statis:** `bun run api:sync` menurunkan
  `public/landing-pages/api-config.js` (file GENERATED) dari
  `endpoints.ts`. Halaman statis (kage.html) memakai
  `window.API_CONFIG` — jangan pernah menulis URL API literal di sana.
  Setelah mengubah `endpoints.ts`, jalankan `bun run api:sync` lagi.
- Halaman Bidang (pariwisata/ekraf/kebudayaan/pemasaran) adalah komponen
  TypeScript native di `pages/bidang/` (data.ts + sections/) — bukan lagi
  halaman statis HTML. Konten baru ditambah lewat `data.ts`, bukan HTML.
- Routing terpusat di `src/app/router.tsx`; App.tsx hanya shell.
- SEO terpusat di `services/seo/`, dipanggil dari router dan halaman.
- Halaman statis di `public/landing-pages/` tidak dibundle Vite; mereka
  berkomunikasi dengan React via `postMessage`.
