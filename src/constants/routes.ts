// src/constants/routes.ts
// Route paths reused by code (AGENTS.md section 13).

export const ROUTES = {
  home: "/",
  bidang: {
    pariwisata: "/pariwisata",
    ekraf: "/ekraf",
    kebudayaan: "/kebudayaan",
    pemasaran: "/pemasaran",
  },
  profil: {
    disbudpar: "/disbudpar",
    visiMisi: "/visi-misi",
    strukturOrganisasi: "/struktur-organisasi",
    profilPemimpin: "/profil-pemimpin",
    dokumen: "/dokumen",
  },
} as const;

export type BidangRoutePath = (typeof ROUTES.bidang)[keyof typeof ROUTES.bidang];
export type ProfilRoutePath = (typeof ROUTES.profil)[keyof typeof ROUTES.profil];
