// src/lib/seo.ts
import { getStoredLanguage, type Language } from "./i18n";

export type BidangSectionKey = "pariwisata" | "ekraf" | "kebudayaan" | "pemasaran";
export type ProfilSectionKey =
  | "profil-disbudpar"
  | "profil-visi-misi"
  | "profil-struktur-organisasi"
  | "profil-profil-pemimpin"
  | "profil-dokumen";
export type ProfilSubMenuKey =
  | "disbudpar"
  | "visi-misi"
  | "struktur-organisasi"
  | "profil-pemimpin"
  | "dokumen";
export type SeoSectionKey = "home" | BidangSectionKey | ProfilSectionKey;

export interface SectionSeoData {
  titleId: string;
  titleEn: string;
  shortTitleId: string;
  shortTitleEn: string;
  descriptionId: string;
  descriptionEn: string;
  keywordsId: string;
  keywordsEn: string;
  divisionNameId: string;
  divisionNameEn: string;
  badgeId: string;
  badgeEn: string;
  path: string;
  image?: string;
}

export interface ProfilSubPageMetaOptions {
  lang?: Language;
  url?: string;
  image?: string;
  customTitle?: string;
  customDescription?: string;
  keywords?: string[];
}

export const SEO_DATA: Record<SeoSectionKey, SectionSeoData> = {
  home: {
    titleId: "DISBUDPAR Banyuwangi — Eksplorasi 3D & Portal Resmi Budaya & Pariwisata",
    titleEn: "DISBUDPAR Banyuwangi — 3D Exploration & Cultural Tourism Portal",
    shortTitleId: "Beranda",
    shortTitleEn: "Home",
    descriptionId: "Portal resmi Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi: Eksplorasi 3D interaktif Arsitektur Pelinggihan Suku Using, agenda festival, destinasi, dan 4 pilar bidang.",
    descriptionEn: "Official portal of Banyuwangi Culture and Tourism Office: Interactive 3D Pelinggihan architecture, festival calendar, destinations, and 4 specialized divisions.",
    keywordsId: "DISBUDPAR Banyuwangi, Pelinggihan Suku Using, Wisata Banyuwangi, Budaya Banyuwangi, Arsitektur 3D Banyuwangi, Pariwisata Jawa Timur, Kawah Ijen, Gandrung Sewu, B-Fest 2026",
    keywordsEn: "DISBUDPAR Banyuwangi, Using Architecture, Banyuwangi Tourism, East Java Culture, 3D Architecture, Ijen Crater, Gandrung Sewu, Banyuwangi Festival",
    divisionNameId: "Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi",
    divisionNameEn: "Banyuwangi Culture and Tourism Office",
    badgeId: "Portal Resmi",
    badgeEn: "Official Portal",
    path: "/",
    image: "/gallery/pelinggihan.jpg",
  },
  pariwisata: {
    titleId: "Bidang Pariwisata & Destinasi — DISBUDPAR Kabupaten Banyuwangi",
    titleEn: "Tourism & Destinations Division — Banyuwangi Culture & Tourism Office",
    shortTitleId: "Pariwisata & Destinasi",
    shortTitleEn: "Tourism & Destinations",
    descriptionId: "Data resmi Bidang Pariwisata Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi: Pengembangan Destinasi, Industri Pariwisata, Standarisasi Usaha, Homestay, dan Pemandu Wisata.",
    descriptionEn: "Official data of the Tourism & Destinations Division of DISBUDPAR Banyuwangi: Destination development, tourism industry standards, homestays, and tour guides.",
    keywordsId: "Bidang Pariwisata Banyuwangi, Destinasi Wisata Banyuwangi, Industri Pariwisata, Standarisasi Usaha Wisata, Homestay Banyuwangi, Pemandu Wisata, Kawah Ijen, Pulau Merah, Alas Purwo, Teluk Hijau",
    keywordsEn: "Banyuwangi Tourism Division, Tourism Destinations, Tourism Industry Standards, Banyuwangi Homestays, Certified Tour Guides, Ijen Crater, Red Island, Alas Purwo National Park",
    divisionNameId: "Bidang Pariwisata & Pengembangan Destinasi",
    divisionNameEn: "Tourism & Destinations Division",
    badgeId: "Pilar 01 • Destinasi & Industri",
    badgeEn: "Pillar 01 • Destinations & Industry",
    path: "/pariwisata",
    image: "/gallery/ijen-geopark.jpg",
  },
  ekraf: {
    titleId: "Bidang Ekonomi Kreatif (E-Kraf) — DISBUDPAR Kabupaten Banyuwangi",
    titleEn: "Creative Economy Division (E-Kraf) — Banyuwangi Culture & Tourism Office",
    shortTitleId: "Ekonomi Kreatif (E-Kraf)",
    shortTitleEn: "Creative Economy (E-Kraf)",
    descriptionId: "Data resmi Bidang Ekonomi Kreatif Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi: 17 Subsektor Ekraf, Batik Using, Kerajinan Bambu, Kopi Ijen, Kuliner Tradisi, dan Sertifikasi HKI.",
    descriptionEn: "Official data of the Creative Economy Division of DISBUDPAR Banyuwangi: 17 creative subsectors, Using batik, bamboo handicrafts, Ijen specialty coffee, traditional culinary, and IP certification.",
    keywordsId: "Bidang Ekonomi Kreatif Banyuwangi, Ekraf Banyuwangi, 17 Subsektor Ekraf, Batik Using Gajah Oling, Kerajinan Bambu Gintangan, Kopi Ijen, Kuliner Banyuwangi, Sertifikasi HKI Kemenkumham",
    keywordsEn: "Banyuwangi Creative Economy, Ekraf Banyuwangi, 17 Creative Subsectors, Using Batik Gajah Oling, Bamboo Handicrafts, Ijen Coffee, Banyuwangi Culinary, Intellectual Property Certification",
    divisionNameId: "Bidang Ekonomi Kreatif (E-Kraf)",
    divisionNameEn: "Creative Economy Division (E-Kraf)",
    badgeId: "Pilar 02 • Ekonomi Kreatif",
    badgeEn: "Pillar 02 • Creative Economy",
    path: "/ekraf",
    image: "/gallery/barong-kemiren.jpg",
  },
  kebudayaan: {
    titleId: "Bidang Kebudayaan & Tradisi — DISBUDPAR Kabupaten Banyuwangi",
    titleEn: "Culture & Living Traditions Division — Banyuwangi Culture & Tourism Office",
    shortTitleId: "Kebudayaan & Tradisi",
    shortTitleEn: "Culture & Living Traditions",
    descriptionId: "Data resmi Bidang Kebudayaan Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi: Warisan Budaya Takbenda (WBTb), Seni Gandrung, Seblang, Rumah Adat Using, Museum Blambangan, dan Pelestarian Cagar Budaya.",
    descriptionEn: "Official data of the Culture Division of DISBUDPAR Banyuwangi: Intangible Cultural Heritage (WBTb), Gandrung Dance, Seblang Ritual, Using Traditional House, Blambangan Museum, and Cultural Heritage Preservation.",
    keywordsId: "Bidang Kebudayaan Banyuwangi, Warisan Budaya Takbenda, WBTb Banyuwangi, Tari Gandrung, Ritual Seblang, Rumah Adat Suku Using Kemiren, Tikel Balung, Museum Blambangan, Cagar Budaya",
    keywordsEn: "Banyuwangi Culture Division, Intangible Cultural Heritage, Gandrung Dance, Seblang Ritual, Using Traditional House Kemiren, Blambangan Museum, Cultural Conservation East Java",
    divisionNameId: "Bidang Kebudayaan & Pelestarian Cagar Budaya",
    divisionNameEn: "Culture & Living Traditions Division",
    badgeId: "Pilar 03 • Warisan Budaya",
    badgeEn: "Pillar 03 • Cultural Heritage",
    path: "/kebudayaan",
    image: "/gallery/penari-gandrung.jpg",
  },
  pemasaran: {
    titleId: "Bidang Pemasaran Pariwisata — DISBUDPAR Kabupaten Banyuwangi",
    titleEn: "Tourism Marketing Division — Banyuwangi Culture & Tourism Office",
    shortTitleId: "Pemasaran & Promosi",
    shortTitleEn: "Marketing & Promotion",
    descriptionId: "Data resmi Bidang Pemasaran Pariwisata Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi: Kalender Event Banyuwangi Festival (B-Fest), Gandrung Sewu, BEC, Branding Majestic Banyuwangi, dan Kemitraan Wisata.",
    descriptionEn: "Official data of the Tourism Marketing Division of DISBUDPAR Banyuwangi: Banyuwangi Festival (B-Fest) event calendar, Gandrung Sewu, Banyuwangi Ethno Carnival, BEC, Majestic Banyuwangi branding, and tourism partnerships.",
    keywordsId: "Bidang Pemasaran Pariwisata Banyuwangi, Kalender Event Banyuwangi Festival, B-Fest 2026, Gandrung Sewu, Banyuwangi Ethno Carnival, BEC, Branding Majestic Banyuwangi, Promosi Wisata",
    keywordsEn: "Banyuwangi Tourism Marketing, Banyuwangi Festival Calendar, B-Fest 2026, Gandrung Sewu, Banyuwangi Ethno Carnival, BEC, Majestic Banyuwangi, Tourism Promotion",
    divisionNameId: "Bidang Pemasaran Pariwisata",
    divisionNameEn: "Tourism Marketing Division",
    badgeId: "Pilar 04 • Promosi & Branding",
    badgeEn: "Pillar 04 • Branding & Promotion",
    path: "/pemasaran",
    image: "/gallery/gandrung-sewu-festival.jpg",
  },
  "profil-disbudpar": {
    titleId: "Profil DISBUDPAR Banyuwangi — Kantor, 4 Bidang & Sejarah Pimpinan",
    titleEn: "DISBUDPAR Banyuwangi Profile — Agency, 4 Divisions & History",
    shortTitleId: "Profil DISBUDPAR",
    shortTitleEn: "DISBUDPAR Profile",
    descriptionId: "Profil resmi DISBUDPAR Banyuwangi: Fasilitas Gedung Pelinggihan Using, 4 bidang teknis, 1 sekretariat, dan rekam jejak kepemimpinan dinas dari masa ke masa.",
    descriptionEn: "Official profile of Banyuwangi Culture & Tourism Office: Using Pelinggihan facilities, 4 operational divisions, secretariat, and agency leadership history.",
    keywordsId: "Profil DISBUDPAR Banyuwangi, Kantor Dinas Pariwisata Banyuwangi, Gedung Pelinggihan Using, 4 Bidang 1 Sekretariat, Kepala Dinas Pariwisata Banyuwangi, Sejarah Kadispar",
    keywordsEn: "DISBUDPAR Banyuwangi Profile, Department Office, Pelinggihan Architecture, 4 Divisions & Secretariat, Former Tourism Department Heads Banyuwangi",
    divisionNameId: "Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi",
    divisionNameEn: "Banyuwangi Culture and Tourism Office",
    badgeId: "Sub Menu 01 • Profil Lembaga",
    badgeEn: "Sub Menu 01 • Institutional Profile",
    path: "/profil/disbudpar",
    image: "/gallery/pelinggihan.jpg",
  },
  "profil-visi-misi": {
    titleId: "Visi & Misi DISBUDPAR Banyuwangi — Arah Strategis, IKU 2026 & BerAKHLAK",
    titleEn: "Vision & Mission — DISBUDPAR Banyuwangi Strategic Goals & KPI 2026",
    shortTitleId: "Visi & Misi",
    shortTitleEn: "Vision & Mission",
    descriptionId: "Visi pembangunan daerah Banyuwangi, 5 misi strategis pariwisata-kebudayaan, 3 pilar keluhuran Using, target IKU 2026, serta panduan perilaku ASN BerAKHLAK.",
    descriptionEn: "Banyuwangi regional vision, 5 strategic tourism & cultural missions, 3 core pillars, 2026 Key Performance Indicators (KPI), and BerAKHLAK civil servant values.",
    keywordsId: "Visi Misi DISBUDPAR Banyuwangi, Visi Banyuwangi Maju Berkah, 5 Misi Strategis Disbudpar, IKU 2026, Sasaran Strategis Pariwisata, BerAKHLAK, Arah Kebijakan Banyuwangi",
    keywordsEn: "Vision Mission DISBUDPAR Banyuwangi, Strategic Goals Tourism, KPI 2026, BerAKHLAK Core Values, Tourism Policy Banyuwangi",
    divisionNameId: "Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi",
    divisionNameEn: "Banyuwangi Culture and Tourism Office",
    badgeId: "Sub Menu 02 • Arah Strategis",
    badgeEn: "Sub Menu 02 • Strategic Direction",
    path: "/profil/visi-misi",
    image: "/gallery/ijen-geopark.jpg",
  },
  "profil-struktur-organisasi": {
    titleId: "Struktur Organisasi & Tupoksi — DISBUDPAR Kabupaten Banyuwangi",
    titleEn: "Organizational Structure & Duties — DISBUDPAR Banyuwangi",
    shortTitleId: "Struktur & Tupoksi",
    shortTitleEn: "Structure & Duties",
    descriptionId: "Bagan hierarki komando dan rincian tugas pokok dan fungsi (Tupoksi) DISBUDPAR Banyuwangi berdasarkan Perbup No. 8/2016 dari Kepala Dinas hingga UPTD.",
    descriptionEn: "Official organizational hierarchy chart and duties/functions of DISBUDPAR Banyuwangi under Regent Decree No. 8/2016 from Head of Agency to UPTD units.",
    keywordsId: "Struktur Organisasi DISBUDPAR Banyuwangi, Tupoksi Dinas Pariwisata, Perbup No 8 2016, Bagan Kelembagaan Disbudpar, Eselon II b III b, UPTD Pariwisata",
    keywordsEn: "Organizational Chart DISBUDPAR Banyuwangi, Duties and Functions, Regent Decree 8 2016, Institutional Structure, Division Heads",
    divisionNameId: "Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi",
    divisionNameEn: "Banyuwangi Culture and Tourism Office",
    badgeId: "Sub Menu 03 • Tata Kelola",
    badgeEn: "Sub Menu 03 • Governance Structure",
    path: "/profil/struktur-organisasi",
    image: "/logo_banyuwangi.png",
  },
  "profil-profil-pemimpin": {
    titleId: "Profil Pemimpin & Pejabat Struktural — DISBUDPAR Kabupaten Banyuwangi",
    titleEn: "Leadership Profile & Structural Officials — DISBUDPAR Banyuwangi",
    shortTitleId: "Profil Pemimpin",
    shortTitleEn: "Leadership Profile",
    descriptionId: "Profil Kepala Dinas M. Taufik Kurniawan, S.Sos, M.Si, rekam jejak karier pengabdian, 5 program prioritas dinas, serta jajaran pejabat struktural eselon III & IV.",
    descriptionEn: "Profile of Agency Head M. Taufik Kurniawan, S.Sos, M.Si, public service track record, 5 priority agendas, and echelon III & IV structural officials.",
    keywordsId: "Kepala Dinas Pariwisata Banyuwangi, M Taufik Kurniawan, Pimpinan Disbudpar Banyuwangi, Sekretaris Dinas, Kepala Bidang Disbudpar, Pejabat Struktural Banyuwangi",
    keywordsEn: "Head of Tourism Office Banyuwangi, M Taufik Kurniawan, Disbudpar Leadership, Secretary, Division Heads, Echelon Officials",
    divisionNameId: "Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi",
    divisionNameEn: "Banyuwangi Culture and Tourism Office",
    badgeId: "Sub Menu 04 • Kepemimpinan",
    badgeEn: "Sub Menu 04 • Leadership",
    path: "/profil/profil-pemimpin",
    image: "/logo_banyuwangi.png",
  },
  "profil-dokumen": {
    titleId: "Dokumen Perencanaan & Pelaporan — DISBUDPAR Kabupaten Banyuwangi",
    titleEn: "Planning & Accountability Documents — DISBUDPAR Banyuwangi",
    shortTitleId: "Dokumen Resmi",
    shortTitleEn: "Official Documents",
    descriptionId: "Publikasi resmi dokumen perencanaan & akuntabilitas DISBUDPAR Banyuwangi: Renstra 2021–2026, Renja tahunan, LKjIP predikat A, IKU, PK, dan SOP pelayanan.",
    descriptionEn: "Official publication of DISBUDPAR Banyuwangi planning documents: 2021–2026 Strategic Plan, Annual Work Plan, Grade A LKjIP report, KPI, and SOP.",
    keywordsId: "Dokumen Perencanaan DISBUDPAR Banyuwangi, Renstra Disbudpar 2021 2026, Renja 2026, LKjIP Banyuwangi, LAKIP Nilai A, IKU, Perjanjian Kinerja, SOP Pelayanan Disbudpar",
    keywordsEn: "Planning Documents DISBUDPAR Banyuwangi, Strategic Plan Renstra, Renja, Performance Accountability LKjIP, KPI, Service SOP",
    divisionNameId: "Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi",
    divisionNameEn: "Banyuwangi Culture and Tourism Office",
    badgeId: "Sub Menu 05 • Akuntabilitas",
    badgeEn: "Sub Menu 05 • Accountability",
    path: "/profil/dokumen",
    image: "/logo_banyuwangi.png",
  },
};

/**
 * Resolves a given pathname or route string to a matching SeoSectionKey
 */
export function resolveSeoSectionKey(pathname: string): SeoSectionKey {
  const clean = pathname.replace(/^#\/?/, "/").replace(/^\/+/, "").toLowerCase();

  if (!clean || clean === "/" || clean === "home") {
    return "home";
  }

  // Profil & Dokumen sub-pages
  if (clean.includes("profil/disbudpar") || clean === "disbudpar" || clean === "profil-disbudpar") return "profil-disbudpar";
  if (clean.includes("profil/visi-misi") || clean.includes("visi-misi") || clean.includes("visimisi") || clean === "visimisi" || clean === "profil-visi-misi") return "profil-visi-misi";
  if (clean.includes("profil/struktur") || clean.includes("struktur-organisasi") || clean === "struktur" || clean === "profil-struktur-organisasi") return "profil-struktur-organisasi";
  if (clean.includes("profil/pemimpin") || clean.includes("profil-pemimpin") || clean === "pemimpin" || clean === "profil-profil-pemimpin") return "profil-profil-pemimpin";
  if (clean.includes("profil/dokumen") || clean === "dokumen" || clean === "profil-dokumen") return "profil-dokumen";

  if (clean.includes("pariwisata")) return "pariwisata";
  if (clean.includes("ekraf")) return "ekraf";
  if (clean.includes("kebudayaan")) return "kebudayaan";
  if (clean.includes("pemasaran")) return "pemasaran";

  return "home";
}

/**
 * Maps a Profil subpage key or path to its canonical ProfilSectionKey
 */
export function normalizeProfilSubPageKey(subPage: string): ProfilSectionKey {
  const clean = subPage.replace(/^#\/?/, "/").replace(/^\/+/, "").toLowerCase();
  if (clean.includes("visi") || clean.includes("misi")) return "profil-visi-misi";
  if (clean.includes("struktur") || clean.includes("tupoksi")) return "profil-struktur-organisasi";
  if (clean.includes("pemimpin") || clean.includes("pejabat") || clean.includes("kepala")) return "profil-profil-pemimpin";
  if (clean.includes("dokumen") || clean.includes("renstra") || clean.includes("lkjip")) return "profil-dokumen";
  return "profil-disbudpar";
}

/**
 * Helper to set or create a <meta> tag by attribute selector
 */
function setMetaTag(selector: string, attrName: string, attrValue: string, content: string): void {
  if (typeof document === "undefined") return;
  let element = document.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

/**
 * Helper to set or create a <link> tag
 */
function setLinkTag(rel: string, href: string): void {
  if (typeof document === "undefined") return;
  let element = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

/**
 * Dynamically injects meta tags into the document head for each sub-page
 * of the Profil & Dokumen section, including unique titles, descriptions,
 * keywords, OpenGraph, Twitter Cards, canonical links, and tailored Schema.org JSON-LD.
 *
 * @param subPage - Sub-page key ('disbudpar', 'visi-misi', 'struktur-organisasi', 'profil-pemimpin', 'dokumen', or route string)
 * @param options - Configuration for language, canonical URL, custom image, or overrides
 * @returns Injected metadata record with resolved absolute URL and image
 */
export function injectProfilDokumenSeo(
  subPage: ProfilSubMenuKey | ProfilSectionKey | string,
  options?: ProfilSubPageMetaOptions
): SectionSeoData & { resolvedUrl: string; resolvedImage: string } {
  const sectionKey = normalizeProfilSubPageKey(subPage);
  const meta = SEO_DATA[sectionKey];
  const lang = options?.lang || getStoredLanguage();

  const title = options?.customTitle || (lang === "en" ? meta.titleEn : meta.titleId);
  const description = options?.customDescription || (lang === "en" ? meta.descriptionEn : meta.descriptionId);
  const baseKeywords = lang === "en" ? meta.keywordsEn : meta.keywordsId;
  const keywords = options?.keywords && options.keywords.length > 0
    ? `${options.keywords.join(", ")}, ${baseKeywords}`
    : baseKeywords;
  const shortTitle = lang === "en" ? meta.shortTitleEn : meta.shortTitleId;
  const divisionName = lang === "en" ? meta.divisionNameEn : meta.divisionNameId;

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    const origin = window.location.origin;
    const defaultPageUrl = `${origin}/#${meta.path}`;
    const pageUrl = options?.url || defaultPageUrl;
    const resolvedImage = options?.image || (meta.image ? `${origin}${meta.image}` : `${origin}/logo_banyuwangi.png`);

    // 1. Title
    document.title = title;

    // 2. HTML lang attribute
    if (document.documentElement) {
      document.documentElement.lang = lang;
    }

    // 3. Meta Description, Keywords, Author, Robots
    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords);
    setMetaTag('meta[name="author"]', 'name', 'author', 'Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi');
    setMetaTag('meta[name="robots"]', 'name', 'robots', 'index, follow');

    // 4. OpenGraph Social Cards
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi');
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', pageUrl);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', resolvedImage);
    setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', lang === "id" ? "id_ID" : "en_US");

    // 5. Twitter / X Cards
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', resolvedImage);

    // 6. Canonical Link
    setLinkTag('canonical', pageUrl);

    // 7. Domain-Tailored Schema.org JSON-LD Structured Data
    const jsonLdId = 'disbudpar-seo-jsonld';
    let scriptEl = document.getElementById(jsonLdId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = jsonLdId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }

    const homeUrl = `${origin}/#/`;

    // Generate specific structured data object depending on sub-menu content
    let specificSchemaGraphItem: Record<string, any> = {
      "@type": "GovernmentOffice",
      "name": divisionName,
      "description": description,
      "url": pageUrl
    };

    if (sectionKey === "profil-disbudpar") {
      specificSchemaGraphItem = {
        "@type": "GovernmentBuilding",
        "name": "Kantor Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi",
        "alternateName": "Gedung Pelinggihan Suku Using Disbudpar",
        "description": description,
        "image": resolvedImage,
        "url": pageUrl,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Ahmad Yani No. 78, Taman Baru",
          "addressLocality": "Banyuwangi",
          "addressRegion": "Jawa Timur",
          "postalCode": "68416",
          "addressCountry": "ID"
        },
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Gedung Pelinggihan Suku Using", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Lobi Pelayanan Terpadu Satu Pintu", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Ruang Rapat Blambangan", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Amfiteater Terbuka Seni Budaya", "value": true }
        ]
      };
    } else if (sectionKey === "profil-visi-misi") {
      specificSchemaGraphItem = {
        "@type": "GovernmentOrganization",
        "name": "Arah Strategis & Visi Misi DISBUDPAR Banyuwangi",
        "url": pageUrl,
        "description": description,
        "slogan": "Terwujudnya Banyuwangi yang Maju, Sejahtera, dan Berkah melalui Penguatan Pariwisata Berkelanjutan dan Pelestarian Nilai Budaya yang Luhur",
        "knowsAbout": [
          "Keluhuran Budaya Using",
          "Pariwisata Hijau Berkelanjutan",
          "Kesejahteraan & Perekonomian Rakyat",
          "Core Values ASN BerAKHLAK",
          "Indikator Kinerja Utama (IKU) 2026"
        ]
      };
    } else if (sectionKey === "profil-struktur-organisasi") {
      specificSchemaGraphItem = {
        "@type": "GovernmentOrganization",
        "name": "Bagan Struktur Organisasi & Tupoksi DISBUDPAR Banyuwangi",
        "url": pageUrl,
        "description": description,
        "legislationLegalForce": "Peraturan Bupati Banyuwangi Nomor 8 Tahun 2016",
        "department": [
          { "@type": "AdministrativeArea", "name": "Sekretariat Dinas" },
          { "@type": "AdministrativeArea", "name": "Bidang Pariwisata & Destinasi" },
          { "@type": "AdministrativeArea", "name": "Bidang Ekonomi Kreatif" },
          { "@type": "AdministrativeArea", "name": "Bidang Kebudayaan & Cagar Budaya" },
          { "@type": "AdministrativeArea", "name": "Bidang Pemasaran Pariwisata" },
          { "@type": "AdministrativeArea", "name": "UPTD Pengelolaan Destinasi & Budaya" }
        ]
      };
    } else if (sectionKey === "profil-profil-pemimpin") {
      specificSchemaGraphItem = {
        "@type": "Person",
        "name": "M. Taufik Kurniawan, S.Sos, M.Si",
        "jobTitle": "Kepala Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi",
        "worksFor": {
          "@type": "GovernmentOrganization",
          "name": "Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi"
        },
        "description": description,
        "image": `${origin}/logo_banyuwangi.png`,
        "url": pageUrl
      };
    } else if (sectionKey === "profil-dokumen") {
      specificSchemaGraphItem = {
        "@type": "CollectionPage",
        "name": "Arsip Dokumen Perencanaan & Pelaporan Kinerja DISBUDPAR",
        "url": pageUrl,
        "description": description,
        "hasPart": [
          { "@type": "DigitalDocument", "name": "Rencana Strategis (Renstra) 2021-2026", "encodingFormat": "application/pdf" },
          { "@type": "DigitalDocument", "name": "Rencana Kerja Tahunan (Renja) 2026", "encodingFormat": "application/pdf" },
          { "@type": "DigitalDocument", "name": "Laporan Kinerja Instansi Pemerintah (LKjIP/LAKIP)", "encodingFormat": "application/pdf" },
          { "@type": "DigitalDocument", "name": "Indikator Kinerja Utama (IKU) Daerah", "encodingFormat": "application/pdf" },
          { "@type": "DigitalDocument", "name": "Standar Operasional Prosedur (SOP) Layanan", "encodingFormat": "application/pdf" }
        ]
      };
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "GovernmentOrganization",
          "@id": `${origin}/#organization`,
          "name": "Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi",
          "alternateName": "DISBUDPAR Banyuwangi",
          "url": origin,
          "logo": `${origin}/logo_banyuwangi.png`,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. Ahmad Yani No. 78, Taman Baru",
            "addressLocality": "Banyuwangi",
            "addressRegion": "Jawa Timur",
            "postalCode": "68416",
            "addressCountry": "ID"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+62-333-424172",
            "contactType": "customer service",
            "areaServed": "ID",
            "availableLanguage": ["id", "en"]
          }
        },
        specificSchemaGraphItem,
        {
          "@type": "WebPage",
          "@id": pageUrl,
          "url": pageUrl,
          "name": title,
          "description": description,
          "inLanguage": lang === "id" ? "id-ID" : "en-US",
          "isPartOf": {
            "@type": "WebSite",
            "name": "Portal Resmi DISBUDPAR Kabupaten Banyuwangi",
            "url": origin
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": lang === "id" ? "Beranda" : "Home",
                "item": homeUrl
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": lang === "id" ? "Profil & Dokumen" : "Profile & Documents",
                "item": `${origin}/#/profil/disbudpar`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": shortTitle,
                "item": pageUrl
              }
            ]
          }
        }
      ]
    };

    scriptEl.textContent = JSON.stringify(structuredData);

    return {
      ...meta,
      titleId: title,
      titleEn: title,
      descriptionId: description,
      descriptionEn: description,
      resolvedUrl: pageUrl,
      resolvedImage,
    };
  }

  return {
    ...meta,
    resolvedUrl: meta.path,
    resolvedImage: meta.image || "/logo_banyuwangi.png",
  };
}

// Aliases for user convenience and integration
export const injectProfilDokumenMetaTags = injectProfilDokumenSeo;
export const injectSubPageMetaTags = injectProfilDokumenSeo;

/**
 * Dynamically updates document head title, description, keywords, OpenGraph,
 * Twitter cards, canonical link, and JSON-LD structured data based on current route and language.
 */
export function updateDocumentSeo(pathname: string, lang: Language): void {
  if (typeof document === "undefined") return;

  const sectionKey = resolveSeoSectionKey(pathname);

  // If this is one of the Profil & Dokumen sub-pages, delegate to injectProfilDokumenSeo
  if (sectionKey.startsWith("profil-")) {
    injectProfilDokumenSeo(sectionKey as ProfilSectionKey, { lang });
    return;
  }

  const meta = SEO_DATA[sectionKey];

  const title = lang === "en" ? meta.titleEn : meta.titleId;
  const description = lang === "en" ? meta.descriptionEn : meta.descriptionId;
  const keywords = lang === "en" ? meta.keywordsEn : meta.keywordsId;
  const divisionName = lang === "en" ? meta.divisionNameEn : meta.divisionNameId;
  const shortTitle = lang === "en" ? meta.shortTitleEn : meta.shortTitleId;

  // 1. Title
  document.title = title;

  // 2. HTML lang attribute
  if (document.documentElement) {
    document.documentElement.lang = lang;
  }

  // 3. Meta Description & Keywords
  setMetaTag('meta[name="description"]', 'name', 'description', description);
  setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords);
  setMetaTag('meta[name="author"]', 'name', 'author', 'Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi');
  setMetaTag('meta[name="robots"]', 'name', 'robots', 'index, follow');

  const origin = typeof window !== "undefined" ? window.location.origin : "https://disbudpar.banyuwangikab.go.id";
  const currentUrl = typeof window !== "undefined" ? window.location.href : meta.path;
  const resolvedImage = meta.image ? `${origin}${meta.image}` : `${origin}/logo_banyuwangi.png`;

  // 4. OpenGraph Social Tags
  setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
  setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
  setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
  setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi');
  setMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);
  setMetaTag('meta[property="og:image"]', 'property', 'og:image', resolvedImage);
  setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', lang === "id" ? "id_ID" : "en_US");

  // 5. Twitter Card Tags
  setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
  setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
  setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
  setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', resolvedImage);

  // 6. Canonical Link
  setLinkTag('canonical', currentUrl);

  // 7. Schema.org JSON-LD Structured Data
  const jsonLdId = 'disbudpar-seo-jsonld';
  let scriptEl = document.getElementById(jsonLdId) as HTMLScriptElement | null;
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = jsonLdId;
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }

  const homeUrl = `${origin}/#/`;
  const pageUrl = currentUrl;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GovernmentOrganization",
        "@id": `${origin}/#organization`,
        "name": "Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi",
        "alternateName": "DISBUDPAR Banyuwangi",
        "url": origin,
        "logo": `${origin}/logo_banyuwangi.png`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Ahmad Yani No. 78, Taman Baru",
          "addressLocality": "Banyuwangi",
          "addressRegion": "Jawa Timur",
          "postalCode": "68416",
          "addressCountry": "ID"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+62-333-424172",
          "contactType": "customer service",
          "areaServed": "ID",
          "availableLanguage": ["id", "en"]
        },
        ...(sectionKey !== "home"
          ? {
              "department": {
                "@type": "GovernmentOffice",
                "name": divisionName,
                "description": description,
                "url": pageUrl
              }
            }
          : {})
      },
      {
        "@type": "WebPage",
        "@id": pageUrl,
        "url": pageUrl,
        "name": title,
        "description": description,
        "inLanguage": lang === "id" ? "id-ID" : "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Portal Resmi DISBUDPAR Kabupaten Banyuwangi",
          "url": origin
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": lang === "id" ? "Beranda" : "Home",
              "item": homeUrl
            },
            ...(sectionKey !== "home"
              ? [
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": shortTitle,
                    "item": pageUrl
                  }
                ]
              : [])
          ]
        }
      }
    ]
  };

  scriptEl.textContent = JSON.stringify(structuredData);
}

