// src/pages/profil/ProfilDokumenPage.tsx
// Profil route page (AGENTS.md section 6). Shell reuses the Bidang design language
// (same top bar, hero, switcher, dock and footer classes) so both sub-menu families
// look and behave identically. The five content sections are untouched.
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  Building2,
  Target,
  Users,
  FolderArchive,
  Layers,
  type LucideIcon
} from "lucide-react";
import { LanguageToggle } from "../../features/language/LanguageToggle";
import { getStoredLanguage, type Language } from "../../i18n";
import { injectProfilDokumenSeo } from "../../services/seo";
import { ROUTES } from "../../constants/routes";

// Modular sub-menu sections
import { ProfilDisbudpar } from "./sections/ProfilDisbudparSection";
import { ProfilVisiMisi } from "./sections/ProfilVisiMisiSection";
import { ProfilStruktur } from "./sections/ProfilStrukturSection";
import { ProfilPemimpin } from "./sections/ProfilPemimpinSection";
import { ProfilDokumen } from "./sections/ProfilDokumenSection";

export type ProfilTabKey =
  | "disbudpar"
  | "visi-misi"
  | "struktur-organisasi"
  | "profil-pemimpin"
  | "dokumen";

interface TabItem {
  id: ProfilTabKey;
  num: string;
  titleId: string;
  titleEn: string;
  shortTitleId: string;
  shortTitleEn: string;
  subId: string;
  subEn: string;
  /** Accent color for this pillar (drives pill, glow, hero light). */
  accent: string;
  icon: LucideIcon;
  /** Route path from constants/routes.ts. */
  path: string;
}

const TABS: TabItem[] = [
  {
    id: "disbudpar",
    num: "01",
    titleId: "Disbudpar",
    titleEn: "Disbudpar",
    shortTitleId: "Disbudpar",
    shortTitleEn: "Disbudpar",
    subId: "Profil Lembaga & Fasilitas",
    subEn: "Agency Profile & Office",
    accent: "#38bdf8",
    icon: Building2,
    path: ROUTES.profil.disbudpar,
  },
  {
    id: "visi-misi",
    num: "02",
    titleId: "Visi & Misi",
    titleEn: "Vision & Mission",
    shortTitleId: "Visi & Misi",
    shortTitleEn: "Vision & Mission",
    subId: "Arah Kebijakan Strategis",
    subEn: "Strategic Direction",
    accent: "#e2b168",
    icon: Target,
    path: ROUTES.profil.visiMisi,
  },
  {
    id: "struktur-organisasi",
    num: "03",
    titleId: "Struktur Organisasi",
    titleEn: "Organizational Structure",
    shortTitleId: "Struktur Organisasi",
    shortTitleEn: "Organization",
    subId: "Bagan & Rincian Tugas",
    subEn: "Chart & Function Duties",
    accent: "#a78bfa",
    icon: Layers,
    path: ROUTES.profil.strukturOrganisasi,
  },
  {
    id: "profil-pemimpin",
    num: "04",
    titleId: "Profil Pemimpin",
    titleEn: "Leadership Profiles",
    shortTitleId: "Profil Pemimpin",
    shortTitleEn: "Leadership",
    subId: "Kepala Dinas & Pejabat",
    subEn: "Head of Agency & Officials",
    accent: "#22c55e",
    icon: Users,
    path: ROUTES.profil.profilPemimpin,
  },
  {
    id: "dokumen",
    num: "05",
    titleId: "Dokumen Resmi",
    titleEn: "Official Documents",
    shortTitleId: "Dokumen Resmi",
    shortTitleEn: "Documents",
    subId: "Renstra, Renja, LKjIP & IKU",
    subEn: "Renstra, Renja, LKjIP & KPI",
    accent: "#ec4899",
    icon: FolderArchive,
    path: ROUTES.profil.dokumen,
  },
];

function normalizeProfilTab(key?: string): ProfilTabKey {
  if (!key) return "disbudpar";
  const clean = key.toLowerCase().trim().replace(/_/g, "-");
  if (clean === "visimisi" || clean === "visi-misi" || clean === "visi" || clean === "misi") {
    return "visi-misi";
  }
  if (clean === "struktur" || clean === "struktur-organisasi" || clean === "organisasi" || clean === "tupoksi") {
    return "struktur-organisasi";
  }
  if (clean === "pemimpin" || clean === "profil-pemimpin" || clean === "pimpinan" || clean === "pejabat") {
    return "profil-pemimpin";
  }
  if (clean === "dokumen" || clean === "perencanaan" || clean === "pelaporan" || clean === "sakip") {
    return "dokumen";
  }
  if (clean === "disbudpar" || clean === "profil" || clean === "lembaga") {
    return "disbudpar";
  }
  return "disbudpar";
}

interface ProfilDokumenPageProps {
  activeSubpage?: ProfilTabKey;
}

/** Maps each tab to its content section component. */
const SECTION_COMPONENTS: Record<ProfilTabKey, (props: { isEn: boolean }) => React.ReactNode> = {
  "disbudpar": ProfilDisbudpar,
  "visi-misi": ProfilVisiMisi,
  "struktur-organisasi": ProfilStruktur,
  "profil-pemimpin": ProfilPemimpin,
  "dokumen": ProfilDokumen,
};

export function ProfilDokumenPage({ activeSubpage }: ProfilDokumenPageProps) {
  const { subpage } = useParams<{ subpage?: string }>();
  const navigate = useNavigate();
  const [lang, setLang] = useState<Language>(getStoredLanguage());
  const navTabsRef = useRef<HTMLDivElement>(null);

  // Determine active tab from prop or URL param with normalization
  const activeTab: ProfilTabKey = normalizeProfilTab(
    activeSubpage || subpage || "disbudpar"
  );

  // Synchronize SEO on mount / tab / lang change
  useEffect(() => {
    injectProfilDokumenSeo(activeTab, { lang });
  }, [activeTab, lang]);

  // Smooth scroll to top when active tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  // Listen for language changes: custom event (same-tab toggle), storage
  // (cross-tab), and postMessage (from embedded iframes).
  useEffect(() => {
    const handleLangEvent = (e: Event) => {
      const customEvent = e as CustomEvent<Language>;
      if (customEvent.detail === "id" || customEvent.detail === "en") {
        setLang(customEvent.detail);
      }
    };
    const handleStorage = (e: StorageEvent) => {
      if (e.key === "disbudpar_lang" && (e.newValue === "id" || e.newValue === "en")) {
        setLang(e.newValue as Language);
      }
    };
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === "DISBUDPAR_LANG_CHANGE" && (e.data.lang === "id" || e.data.lang === "en")) {
        setLang(e.data.lang as Language);
      }
    };
    window.addEventListener("disbudpar-lang-change", handleLangEvent);
    window.addEventListener("storage", handleStorage);
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("disbudpar-lang-change", handleLangEvent);
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const handleTabClick = (tabId: ProfilTabKey) => {
    const tab = TABS.find((t) => t.id === tabId);
    navigate(tab ? tab.path : ROUTES.profil.disbudpar);
  };

  // Keyboard navigation: ArrowLeft / ArrowRight moves between sub-menus
  const handleTablistKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const currentIdx = TABS.findIndex((t) => t.id === activeTab);
    const delta = e.key === "ArrowRight" ? 1 : -1;
    const nextIdx = (currentIdx + delta + TABS.length) % TABS.length;
    handleTabClick(TABS[nextIdx].id);
  };

  const isEn = lang === "en";
  const currentTabIdx = TABS.findIndex((t) => t.id === activeTab);
  const currentTabInfo = currentTabIdx !== -1 ? TABS[currentTabIdx] : TABS[0];
  const accent = currentTabInfo.accent;
  // Circular prev/next across the five sub-menus (same roving dock as Bidang)
  const prevTab = TABS[(currentTabIdx + TABS.length - 1) % TABS.length];
  const nextTab = TABS[(currentTabIdx + 1) % TABS.length];
  const SectionComponent = SECTION_COMPONENTS[activeTab];

  // Auto-scroll active tab into view when on mobile/tablet
  useEffect(() => {
    if (navTabsRef.current) {
      const activeEl = navTabsRef.current.querySelector<HTMLElement>("[data-active='true']");
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [activeTab]);

  return (
    <div
      className="bidang-page"
      style={{ ["--bidang-accent" as string]: accent }}
    >
      {/* Top bar: brand + back (identical to Bidang pages) */}
      <header className="bidang-top-nav">
        <Link className="bidang-brand" to={ROUTES.home}>
          <img
            src="/logo_banyuwangi.png"
            alt={isEn ? "Banyuwangi Regency Government logo" : "Logo Pemkab Banyuwangi"}
            width={32}
            height={42}
            referrerPolicy="no-referrer"
          />
          <div>
            <span className="bidang-brand-title">DISBUDPAR BANYUWANGI</span>
            <span className="bidang-brand-sub">
              {isEn ? "Culture and Tourism Office" : "Dinas Kebudayaan dan Pariwisata"}
            </span>
          </div>
        </Link>
        <div className="bidang-nav-actions">
          <button
            type="button"
            onClick={() => navigate(ROUTES.home)}
            className="bidang-btn-back"
            title={isEn ? "Back to Main Home" : "Kembali ke Beranda Utama"}
          >
            <span aria-hidden="true">←</span>
            <span>{isEn ? "Back to Main Home" : "Kembali ke Beranda Utama"}</span>
          </button>
        </div>
      </header>

      {/* Hero: badge, editorial title, sub-menu switcher (identical to Bidang hero) */}
      <section className="bidang-hero">
        <div className="bidang-container">
          <span className="bidang-badge-pill">
            {isEn ? `PROFILE ${currentTabInfo.num} / 05` : `PROFIL ${currentTabInfo.num} / 05`}
          </span>

          <h1 className="bidang-hero-title font-editorial">
            {isEn ? currentTabInfo.titleEn : currentTabInfo.titleId}
          </h1>

          <p className="bidang-hero-desc">{isEn ? currentTabInfo.subEn : currentTabInfo.subId}</p>

          {/* Sub-menu switcher — same pill language as the Bidang switcher */}
          <div
            ref={navTabsRef}
            role="tablist"
            aria-label={isEn ? "Profile and Document Sub-menus" : "Sub-menu Profil dan Dokumen"}
            onKeyDown={handleTablistKeyDown}
            className="bidang-switcher"
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  data-active={isActive}
                  onClick={() => handleTabClick(tab.id)}
                  className={`bidang-switcher-link${isActive ? " is-active" : ""}`}
                  style={{ ["--bidang-accent" as string]: tab.accent }}
                  title={isEn ? tab.subEn : tab.subId}
                >
                  <Icon size={13} strokeWidth={2} aria-hidden="true" />
                  <span>{isEn ? tab.shortTitleEn : tab.shortTitleId}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main content area — same container rhythm as Bidang sections */}
      <main className="bidang-section-wrap">
        <div className="bidang-container">
          {/* Active sub-menu section — remounts on tab change, so the
              profil-fade-up entrance animation replays (CSS-driven, no state). */}
          <div className="profil-section" style={{ minHeight: "40vh" }} key={activeTab}>
            <SectionComponent isEn={isEn} />
          </div>
        </div>
      </main>

      {/* Footer (identical to Bidang pages) */}
      <footer className="bidang-page-footer">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          {isEn
            ? "Culture and Tourism Office of Banyuwangi Regency • Government of Banyuwangi Regency"
            : "Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi • Pemerintah Kabupaten Banyuwangi"}
        </p>
      </footer>

      {/* Floating utility dock (identical to Bidang pages) */}
      <div className="bidang-dock">
        <button
          id="btn-back-to-home"
          type="button"
          onClick={() => navigate(ROUTES.home)}
          className="bidang-dock-btn"
          title={isEn ? "Back to Home" : "Kembali ke Beranda"}
        >
          <ArrowLeft size={14} />
          <span>{isEn ? "Back to Home" : "Kembali ke Beranda"}</span>
        </button>

        {/* Roving prev/next across the five sub-menus (3-click principle) */}
        <button
          type="button"
          onClick={() => handleTabClick(prevTab.id)}
          className="bidang-dock-btn bidang-dock-btn--icon"
          title={isEn ? "Previous sub-menu" : "Sub-menu sebelumnya"}
          aria-label={isEn ? "Previous sub-menu" : "Sub-menu sebelumnya"}
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => handleTabClick(nextTab.id)}
          className="bidang-dock-btn bidang-dock-btn--icon"
          title={isEn ? "Next sub-menu" : "Sub-menu berikutnya"}
          aria-label={isEn ? "Next sub-menu" : "Sub-menu berikutnya"}
        >
          ›
        </button>

        <LanguageToggle />
      </div>
    </div>
  );
}
