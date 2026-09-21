// src/i18n/index.ts
export type Language = 'id' | 'en';

export const STORAGE_LANG_KEY = 'disbudpar_lang';

export function getStoredLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_LANG_KEY);
    if (saved === 'en' || saved === 'id') {
      return saved;
    }
    // Auto-detect browser language if international tourist
    if (typeof navigator !== 'undefined' && navigator.language && !navigator.language.startsWith('id')) {
      return 'en';
    }
  } catch {
    // fallback
  }
  return 'id';
}

export function setStoredLanguage(lang: Language): void {
  try {
    localStorage.setItem(STORAGE_LANG_KEY, lang);
    window.dispatchEvent(new CustomEvent('disbudpar-lang-change', { detail: lang }));
  } catch {
    // ignore
  }
}

export const I18N_REACT = {
  id: {
    news_modal_title: "Warta Pariwisata Banyuwangi",
    news_modal_close: "Tutup jendela warta",
    news_modal_views: "Tayangan",
    news_modal_source: "Sumber Resmi:",
    news_modal_source_sub: "Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi",
    news_modal_share: "Bagikan Warta Ini:",
    news_modal_copy: "Salin Tautan",
    news_modal_copied: "Tautan Disalin!",
    news_modal_open_ext: "Buka Berita Asli",
    news_modal_loading: "Memuat isi berita...",
    news_modal_err_title: "Gagal Memuat Berita",
    news_modal_retry: "Coba Lagi",
    news_modal_close_btn: "Tutup",
    news_modal_tag_fallback: "Informasi",

    // Bidang page
    bidang_back_home: "Kembali ke Beranda",
    bidang_open_tab: "Buka di Tab Baru",
    bidang_nav_portal: "Portal Resmi Bidang",
    bidang_title_pariwisata: "Bidang Pariwisata & Destinasi",
    bidang_badge_pariwisata: "Pilar 01 • Destinasi & Industri",
    bidang_title_ekraf: "Bidang Ekonomi Kreatif (E-Kraf)",
    bidang_badge_ekraf: "Pilar 02 • Ekonomi Kreatif",
    bidang_title_kebudayaan: "Bidang Kebudayaan & Tradisi",
    bidang_badge_kebudayaan: "Pilar 03 • Warisan Budaya",
    bidang_title_pemasaran: "Bidang Pemasaran Pariwisata",
    bidang_badge_pemasaran: "Pilar 04 • Promosi & Branding",
    
    // Switcher labels
    lang_toggle_label: "Ganti bahasa / Switch language",
    lang_id: "Indonesia",
    lang_en: "English",
  },
  en: {
    news_modal_title: "Banyuwangi Tourism News",
    news_modal_close: "Close news dialog",
    news_modal_views: "Views",
    news_modal_source: "Official Source:",
    news_modal_source_sub: "Culture and Tourism Office of Banyuwangi Regency",
    news_modal_share: "Share This Article:",
    news_modal_copy: "Copy Link",
    news_modal_copied: "Link Copied!",
    news_modal_open_ext: "Open Original Source",
    news_modal_loading: "Loading news content...",
    news_modal_err_title: "Failed to Load News",
    news_modal_retry: "Retry",
    news_modal_close_btn: "Close",
    news_modal_tag_fallback: "Information",

    // Bidang page
    bidang_back_home: "Back to Home",
    bidang_open_tab: "Open in New Tab",
    bidang_nav_portal: "Official Division Portal",
    bidang_title_pariwisata: "Tourism & Destinations Division",
    bidang_badge_pariwisata: "Pillar 01 • Destinations & Industry",
    bidang_title_ekraf: "Creative Economy Division (E-Kraf)",
    bidang_badge_ekraf: "Pillar 02 • Creative Economy",
    bidang_title_kebudayaan: "Culture & Living Traditions Division",
    bidang_badge_kebudayaan: "Pillar 03 • Cultural Heritage",
    bidang_title_pemasaran: "Tourism Marketing Division",
    bidang_badge_pemasaran: "Pillar 04 • Branding & Promotion",

    // Switcher labels
    lang_toggle_label: "Switch language / Ganti bahasa",
    lang_id: "Indonesian",
    lang_en: "English",
  }
} as const;
