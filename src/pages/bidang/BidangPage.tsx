// src/pages/bidang/BidangPage.tsx
// Bidang route page (AGENTS.md section 6). Full TypeScript React implementation —
// replaces the retired static bidang-*.html iframes with native, typed components.
// Design language of the original pages is preserved (same layout, palette, accents).
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { LanguageToggle } from "../../features/language/LanguageToggle";
import { getStoredLanguage, I18N_REACT, type Language } from "../../i18n";
import { updateDocumentSeo } from "../../services/seo";
import { ROUTES } from "../../constants/routes";
import { BIDANG_CONTENT, BIDANG_ORDER, type BidangType } from "./data";
import { BidangHero } from "./sections/BidangHero";
import { BidangDetail } from "./sections/BidangDetail";

export interface BidangPageProps {
  type?: BidangType;
}

/** Route/alias segment -> canonical bidang key (covers /bidang/:type legacy paths). */
function resolveBidangType(raw?: string): BidangType {
  const cleaned = (raw ?? "").replace(/^bidang-/, "").toLowerCase();
  if (cleaned in BIDANG_CONTENT) {
    return cleaned as BidangType;
  }
  return "pariwisata";
}

export function BidangPage({ type: directType }: BidangPageProps) {
  const { type: paramType } = useParams<{ type?: string }>();
  const navigate = useNavigate();
  const [lang, setLang] = useState<Language>(getStoredLanguage());

  // Keep the page in sync with the global language toggle.
  useEffect(() => {
    const handleLangChange = (e: Event) => {
      const customEvent = e as CustomEvent<Language>;
      if (customEvent.detail) {
        setLang(customEvent.detail);
      }
    };
    window.addEventListener("disbudpar-lang-change", handleLangChange);
    return () => window.removeEventListener("disbudpar-lang-change", handleLangChange);
  }, []);

  const resolvedType = resolveBidangType(directType ?? paramType);
  const content = BIDANG_CONTENT[resolvedType];
  const meta = content.meta;

  // SEO per bidang (canonical route, language aware)
  useEffect(() => {
    updateDocumentSeo(resolvedType, lang);
  }, [resolvedType, lang]);

  const t = I18N_REACT[lang];
  const en = lang === "en";
  const activeIndex = BIDANG_ORDER.indexOf(resolvedType);
  const prevType = BIDANG_ORDER[(activeIndex + BIDANG_ORDER.length - 1) % BIDANG_ORDER.length];
  const nextType = BIDANG_ORDER[(activeIndex + 1) % BIDANG_ORDER.length];

  return (
    <div
      id={`bidang-page-${resolvedType}`}
      className="bidang-page"
      style={{ ["--bidang-accent" as string]: meta.accent }}
    >
      {/* Top bar: brand + back */}
      <header className="bidang-top-nav">
        <Link className="bidang-brand" to={ROUTES.home}>
          <img
            src="/logo_banyuwangi.png"
            alt={en ? "Banyuwangi Regency Government logo" : "Logo Pemkab Banyuwangi"}
            width={32}
            height={42}
            referrerPolicy="no-referrer"
          />
          <div>
            <span className="bidang-brand-title">DISBUDPAR BANYUWANGI</span>
            <span className="bidang-brand-sub">
              {en ? "Culture and Tourism Office" : "Dinas Kebudayaan dan Pariwisata"}
            </span>
          </div>
        </Link>
        <div className="bidang-nav-actions">
          <Link className="bidang-btn-back" to={ROUTES.home}>
            <span aria-hidden="true">←</span>
            <span>{en ? "Back to Main Home" : "Kembali ke Beranda Utama"}</span>
          </Link>
        </div>
      </header>

      {/* Hero + switcher + stats */}
      <BidangHero type={resolvedType} content={content} lang={lang} />

      {/* Detail: tupoksi + showcase + contact */}
      <BidangDetail content={content} lang={lang} />

      {/* Floating utility dock (kept from the previous React shell) */}
      <div className="bidang-dock">
        <button
          id="btn-back-to-home"
          type="button"
          onClick={() => navigate(ROUTES.home)}
          className="bidang-dock-btn"
          title={t.bidang_back_home}
        >
          <ArrowLeft size={14} />
          <span>{t.bidang_back_home}</span>
        </button>

        {/* Roving prev/next across the four divisions (3-click principle) */}
        <Link
          to={ROUTES.bidang[prevType]}
          className="bidang-dock-btn bidang-dock-btn--icon"
          title={en ? "Previous division" : "Bidang sebelumnya"}
          aria-label={en ? "Previous division" : "Bidang sebelumnya"}
        >
          ‹
        </Link>
        <Link
          to={ROUTES.bidang[nextType]}
          className="bidang-dock-btn bidang-dock-btn--icon"
          title={en ? "Next division" : "Bidang berikutnya"}
          aria-label={en ? "Next division" : "Bidang berikutnya"}
        >
          ›
        </Link>

        <LanguageToggle />
      </div>
    </div>
  );
}
