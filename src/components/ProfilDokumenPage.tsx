import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  Building2,
  Target,
  Users,
  FolderArchive,
  Layers,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";
import { getStoredLanguage, type Language } from "../lib/i18n";
import { injectProfilDokumenSeo } from "../lib/seo";

// Modular sub-menu components
import { ProfilDisbudpar } from "./profil/ProfilDisbudpar";
import { ProfilVisiMisi } from "./profil/ProfilVisiMisi";
import { ProfilStruktur } from "./profil/ProfilStruktur";
import { ProfilPemimpin } from "./profil/ProfilPemimpin";
import { ProfilDokumen } from "./profil/ProfilDokumen";

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
  emoji: string;
  subId: string;
  subEn: string;
  icon: any;
  color: string;
}

const TABS: TabItem[] = [
  {
    id: "disbudpar",
    num: "01",
    titleId: "Disbudpar",
    titleEn: "Disbudpar",
    shortTitleId: "Disbudpar",
    shortTitleEn: "Disbudpar",
    emoji: "🏛️",
    subId: "Profil Lembaga & Fasilitas",
    subEn: "Agency Profile & Office",
    icon: Building2,
    color: "#c9a24a",
  },
  {
    id: "visi-misi",
    num: "02",
    titleId: "Visi & Misi",
    titleEn: "Vision & Mission",
    shortTitleId: "Visi & Misi",
    shortTitleEn: "Vision & Mission",
    emoji: "🎯",
    subId: "Arah Kebijakan Strategis",
    subEn: "Strategic Direction",
    icon: Target,
    color: "#c9a24a",
  },
  {
    id: "struktur-organisasi",
    num: "03",
    titleId: "Struktur Organisasi",
    titleEn: "Organizational Structure",
    shortTitleId: "Struktur Organisasi",
    shortTitleEn: "Organization",
    emoji: "📑",
    subId: "Bagan & Rincian Tugas",
    subEn: "Chart & Function Duties",
    icon: Layers,
    color: "#c9a24a",
  },
  {
    id: "profil-pemimpin",
    num: "04",
    titleId: "Profil Pemimpin",
    titleEn: "Leadership Profiles",
    shortTitleId: "Profil Pemimpin",
    shortTitleEn: "Leadership",
    emoji: "👤",
    subId: "Kepala Dinas & Pejabat",
    subEn: "Head of Agency & Officials",
    icon: Users,
    color: "#c9a24a",
  },
  {
    id: "dokumen",
    num: "05",
    titleId: "Dokumen Resmi",
    titleEn: "Official Documents",
    shortTitleId: "Dokumen Resmi",
    shortTitleEn: "Documents",
    emoji: "📂",
    subId: "Renstra, Renja, LKjIP & IKU",
    subEn: "Renstra, Renja, LKjIP & KPI",
    icon: FolderArchive,
    color: "#c9a24a",
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

  // Listen for language changes
  useEffect(() => {
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
    window.addEventListener("storage", handleStorage);
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const handleTabClick = (tabId: ProfilTabKey) => {
    navigate(`/${tabId}`);
  };

  const isEn = lang === "en";
  const currentTabIdx = TABS.findIndex((t) => t.id === activeTab);
  const currentTabInfo = currentTabIdx !== -1 ? TABS[currentTabIdx] : TABS[0];
  const prevTab = currentTabIdx > 0 ? TABS[currentTabIdx - 1] : null;
  const nextTab = currentTabIdx < TABS.length - 1 ? TABS[currentTabIdx + 1] : null;

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
    <div className="min-h-screen bg-[#05070a] text-[#dfe7e0] font-sans selection:bg-[#c9a24a]/30 selection:text-[#fff] flex flex-col relative overflow-x-hidden">
      {/* Signature Landing Page Atmospheric Ambient Lighting */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-80"
        style={{
          background: `
            radial-gradient(120% 80% at 50% -10%, rgba(20, 44, 80, 0.45) 0%, transparent 65%),
            radial-gradient(circle at 10% 30%, rgba(201, 162, 74, 0.08) 0%, transparent 45%),
            radial-gradient(circle at 90% 60%, rgba(56, 189, 248, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 50% 90%, rgba(20, 44, 80, 0.25) 0%, transparent 60%)
          `
        }}
      />
      {/* Top clean navigation bar (Matching Gambar 2 Bidang style) */}
      <header className="sticky top-0 z-50 bg-[#060a0e]/90 backdrop-blur-xl border-b border-white/[0.08] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          {/* Left: Official Logo & Department Branding */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo_banyuwangi.png"
              alt="Logo Banyuwangi"
              className="h-9 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-bold tracking-[0.14em] text-white uppercase leading-tight font-sans">
                DISBUDPAR BANYUWANGI
              </span>
              <span className="text-[10px] tracking-[0.16em] text-[#94a3b8] uppercase font-mono font-medium leading-tight">
                {isEn ? "CULTURE & TOURISM OFFICE" : "DINAS KEBUDAYAAN DAN PARIWISATA"}
              </span>
            </div>
          </Link>

          {/* Right: Return to Home Button & Language Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-[#f0f5f1] hover:text-white border border-white/[0.12] hover:border-[#c9a24a]/50 text-xs font-semibold tracking-wide transition-all shadow-sm"
              title={isEn ? "Return to Main Landing Page" : "Kembali ke Beranda Utama"}
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5 text-[#c9a24a]" />
              <span className="hidden sm:inline">
                {isEn ? "Back to Main Home" : "Kembali ke Beranda Utama"}
              </span>
              <span className="sm:hidden">{isEn ? "Home" : "Beranda"}</span>
            </button>

            <LanguageToggle />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-1 w-full">
        {/* Submenu Pill Switcher Bar (Identical to Bidang .bidang-switcher) */}
        <div className="mb-10 pb-4 border-b border-white/[0.08]">
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="text-[11px] font-mono tracking-[0.18em] uppercase text-[#c9a24a] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a24a] animate-pulse" />
              {isEn ? "PROFILE & DOCUMENT SUB-MENU" : "SUB-MENU PROFIL & DOKUMEN"}
            </span>
            <span className="text-[11px] font-mono text-[#64748b]">
              SUB-MENU {currentTabInfo.num} / 05
            </span>
          </div>

          <div
            ref={navTabsRef}
            role="tablist"
            aria-label={isEn ? "Profile and Document Sub-menus" : "Sub-menu Profil dan Dokumen"}
            className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none snap-x"
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  data-active={isActive}
                  onClick={() => handleTabClick(tab.id)}
                  className={`group inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all snap-center flex-shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-[#c9a24a] text-[#060a0e] border border-[#c9a24a] font-bold shadow-[0_4px_16px_rgba(201,162,74,0.3)]"
                      : "bg-white/[0.04] text-[#94a3b8] hover:text-white hover:bg-white/[0.09] border border-white/[0.1]"
                  }`}
                >
                  <span className="text-sm select-none">{tab.emoji}</span>
                  <span>{isEn ? tab.titleEn : tab.titleId}</span>
                </button>
              );
            })}
          </div>
        </div>

        {activeTab === "disbudpar" && <ProfilDisbudpar isEn={isEn} />}
        {activeTab === "visi-misi" && <ProfilVisiMisi isEn={isEn} />}
        {activeTab === "struktur-organisasi" && <ProfilStruktur isEn={isEn} />}
        {activeTab === "profil-pemimpin" && <ProfilPemimpin isEn={isEn} />}
        {activeTab === "dokumen" && <ProfilDokumen isEn={isEn} />}

        {/* Sub-menu In-Page Pagination (Previous & Next Navigation) */}
        <section className="mt-16 pt-8 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Previous Tab */}
            {prevTab ? (
              <button
                onClick={() => handleTabClick(prevTab.id)}
                className="w-full sm:w-auto group flex items-center gap-3 p-3.5 sm:px-5 sm:py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-[#c9a24a]/40 text-left transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-[#c9a24a] group-hover:-translate-x-0.5 transition-transform flex-shrink-0">
                  <ChevronLeft className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#78837c] uppercase tracking-wider block">
                    {isEn ? "Previous Sub-menu" : "Sub-menu Sebelumnya"}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#dfe7e0] group-hover:text-[#c9a24a] transition-colors">
                    {prevTab.emoji} {isEn ? prevTab.titleEn : prevTab.titleId}
                  </span>
                </div>
              </button>
            ) : (
              <div className="hidden sm:block" />
            )}

            {/* Next Tab */}
            {nextTab ? (
              <button
                onClick={() => handleTabClick(nextTab.id)}
                className="w-full sm:w-auto group flex items-center justify-between sm:justify-end gap-3 p-3.5 sm:px-5 sm:py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-[#c9a24a]/40 text-right transition-all ml-auto"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#78837c] uppercase tracking-wider block">
                    {isEn ? "Next Sub-menu" : "Sub-menu Selanjutnya"}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#dfe7e0] group-hover:text-[#c9a24a] transition-colors">
                    {nextTab.emoji} {isEn ? nextTab.titleEn : nextTab.titleId}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-[#c9a24a] group-hover:translate-x-0.5 transition-transform flex-shrink-0">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            ) : (
              <div className="hidden sm:block" />
            )}
          </div>
        </section>
      </main>

      {/* Footer Branding matching landing page tone */}
      <footer className="border-t border-white/[0.06] bg-[#030508] py-8 px-4 text-center text-xs text-[#78837c]">
        <div className="max-w-2xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2">
            <img src="/logo_banyuwangi.png" alt="Logo Banyuwangi" className="h-5 w-auto opacity-70" />
            <span className="font-semibold text-[#aab4ad] tracking-wider uppercase text-[11px]">
              Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi
            </span>
          </div>
          <p className="leading-relaxed text-[11px]">
            &copy; {new Date().getFullYear()} Pemerintah Kabupaten Banyuwangi. Jl. Ahmad Yani No. 78, Kel. Taman Baru, Kec. Banyuwangi, Jawa Timur 68416.
          </p>
        </div>
      </footer>
    </div>
  );
}

