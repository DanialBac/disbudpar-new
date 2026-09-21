# Project Map

## Application Entry

src/main.tsx
src/app/App.tsx (app shell: HashRouter + AppRoutes)

## Router

src/app/router.tsx (semua definisi rute terpusat)

## Pages

### Home (Landing)

src/pages/home/HomePage.tsx (wrapper KageLandingPage)

### Bidang

src/pages/bidang/BidangPage.tsx (pariwisata, ekraf, kebudayaan, pemasaran)
src/pages/bidang/sections/

### Profil & Dokumen

src/pages/profil/ProfilDokumenPage.tsx
src/pages/profil/sections/
- ProfilDisbudparSection.tsx
- ProfilVisiMisiSection.tsx
- ProfilStrukturSection.tsx
- ProfilPemimpinSection.tsx
- ProfilDokumenSection.tsx

## Features

### Language

src/features/language/LanguageToggle.tsx

### News

src/features/news/news.api.ts (API berita terpusat)
src/features/news/components/NewsDetailModal.tsx

## Landing Page Frames (3D/Shader)

src/shaders/landing-pages/
- LandingPageFrame.tsx
- pageRecipes.ts
- pageTypography.ts

## Static Landing Pages (served as-is)

public/landing-pages/
- kage.html
- api-config.js (GENERATED oleh `bun run api:sync` — jangan edit manual)
- secret-pathways-assets/

## Bidang Pages (full TypeScript, menggantikan bidang-*.html)

src/pages/bidang/
- BidangPage.tsx (route page: top bar + dock + SEO)
- data.ts (sumber konten 4 bidang, typed, ID+EN)
- sections/BidangHero.tsx (hero + switcher + stats)
- sections/BidangDetail.tsx (tupoksi + katalog + kontak + footer)

## Codegen Bridge

scripts/generate-api-config.ts (dijalankan via `bun run api:sync`):
menurunkan public/landing-pages/api-config.js dari src/services/api/endpoints.ts

## API (single source of truth)

src/services/api/
- client.ts (HTTP client terpusat: fetchJson + ApiError)
- endpoints.ts (satu sumber kebenaran untuk semua API eksternal:
  BANYUWANGI_TOURISM_ENDPOINTS untuk portal berita,
  SIJAMUWANGI_ENDPOINTS untuk API events/agenda —
  events() langsung & eventsViaProxy() via proxy dev /api-sijamuwangi di vite.config.ts)

## SEO

src/services/seo/index.ts (SEO per-halaman)

## Internationalization

src/i18n/index.ts (bahasa id/en + storage)

## Shared Types

src/types/api.ts (NewsArticle, SijamuwangiEvent)

## Global Styling

src/styles/globals.css (token & base Tailwind)
src/styles/animations.css (gaya landing page 3D)

## Constants

src/constants/ — direncanakan; route path saat ini didefinisikan di src/app/router.tsx

## Utilities

src/lib/ — (kosong; utilitas kecil framework-independent ditempatkan di sini bila ada)
