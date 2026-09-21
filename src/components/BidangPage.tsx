import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";
import { getStoredLanguage, I18N_REACT, type Language } from "../lib/i18n";
import { updateDocumentSeo } from "../lib/seo";

export type BidangType = "pariwisata" | "ekraf" | "kebudayaan" | "pemasaran";

interface BidangMeta {
  titleId: string;
  titleEn: string;
  shortTitleId: string;
  shortTitleEn: string;
  sourceUrl: string;
  icon: string;
  accent: string;
  badgeId: string;
  badgeEn: string;
}

const BIDANG_DATA: Record<BidangType, BidangMeta> = {
  pariwisata: {
    titleId: "Bidang Pariwisata & Destinasi — DISBUDPAR Banyuwangi",
    titleEn: "Tourism & Destinations Division — Banyuwangi Culture & Tourism",
    shortTitleId: "Pariwisata & Destinasi",
    shortTitleEn: "Tourism & Destinations",
    sourceUrl: "/landing-pages/bidang-pariwisata.html",
    icon: "🏝️",
    accent: "#38bdf8",
    badgeId: "Pilar 01 • Destinasi & Industri",
    badgeEn: "Pillar 01 • Destinations & Industry",
  },
  ekraf: {
    titleId: "Bidang Ekonomi Kreatif (E-Kraf) — DISBUDPAR Banyuwangi",
    titleEn: "Creative Economy Division (E-Kraf) — Banyuwangi Culture & Tourism",
    shortTitleId: "Ekonomi Kreatif (E-Kraf)",
    shortTitleEn: "Creative Economy (E-Kraf)",
    sourceUrl: "/landing-pages/bidang-ekraf.html",
    icon: "🎨",
    accent: "#ec4899",
    badgeId: "Pilar 02 • Ekonomi Kreatif",
    badgeEn: "Pillar 02 • Creative Economy",
  },
  kebudayaan: {
    titleId: "Bidang Kebudayaan & Tradisi — DISBUDPAR Banyuwangi",
    titleEn: "Culture & Living Traditions Division — Banyuwangi Culture & Tourism",
    shortTitleId: "Kebudayaan & Tradisi",
    shortTitleEn: "Culture & Living Traditions",
    sourceUrl: "/landing-pages/bidang-kebudayaan.html",
    icon: "🏛️",
    accent: "#e2b168",
    badgeId: "Pilar 03 • Warisan Budaya",
    badgeEn: "Pillar 03 • Cultural Heritage",
  },
  pemasaran: {
    titleId: "Bidang Pemasaran Pariwisata — DISBUDPAR Banyuwangi",
    titleEn: "Tourism Marketing Division — Banyuwangi Culture & Tourism",
    shortTitleId: "Pemasaran & Promosi",
    shortTitleEn: "Marketing & Promotion",
    sourceUrl: "/landing-pages/bidang-pemasaran.html",
    icon: "📢",
    accent: "#22c55e",
    badgeId: "Pilar 04 • Promosi & Branding",
    badgeEn: "Pillar 04 • Branding & Promotion",
  },
};

export interface BidangPageProps {
  type?: BidangType;
}

export function BidangPage({ type: directType }: BidangPageProps) {
  const { type: paramType } = useParams<{ type?: string }>();
  const navigate = useNavigate();
  const [loadedUrl, setLoadedUrl] = useState<string | null>(null);
  const [lang, setLang] = useState<Language>(getStoredLanguage());

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

  // Normalize type
  let resolvedType: BidangType = "pariwisata";
  const rawType = directType || paramType;
  if (rawType) {
    const cleaned = rawType.replace(/^bidang-/, "").toLowerCase() as BidangType;
    if (cleaned in BIDANG_DATA) {
      resolvedType = cleaned;
    }
  }

  const meta = BIDANG_DATA[resolvedType];
  const pageTitle = lang === "en" ? meta.titleEn : meta.titleId;
  const shortTitle = lang === "en" ? meta.shortTitleEn : meta.shortTitleId;
  const badge = lang === "en" ? meta.badgeEn : meta.badgeId;
  const loaded = loadedUrl === meta.sourceUrl;
  const t = I18N_REACT[lang];

  useEffect(() => {
    updateDocumentSeo(resolvedType, lang);
  }, [resolvedType, lang]);

  return (
    <div
      id={`bidang-page-${resolvedType}`}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "#060a0e",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Loading Overlay */}
      {!loaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#060a0e",
            color: "#f0f5f1",
            gap: 16,
            transition: "opacity 0.3s ease",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "rgba(255, 255, 255, 0.05)",
              border: `1px solid ${meta.accent}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              boxShadow: `0 0 24px ${meta.accent}40`,
            }}
          >
            {meta.icon}
          </div>
          <div style={{ textAlign: "center" }}>
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: meta.accent,
                fontWeight: 700,
                display: "block",
                marginBottom: 4,
              }}
            >
              {badge}
            </span>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>
              {lang === "en" ? `Loading ${shortTitle}...` : `Memuat ${shortTitle}...`}
            </h3>
          </div>
        </div>
      )}

      {/* Floating Back Button & Language Toggle */}
      <div
        style={{
          position: "fixed",
          bottom: 20,
          left: 20,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <button
          id="btn-back-to-home"
          onClick={() => navigate("/")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 18px",
            borderRadius: 100,
            background: "rgba(12, 20, 29, 0.85)",
            border: "1px solid rgba(223, 231, 224, 0.2)",
            color: "#f0f5f1",
            fontSize: 12,
            fontWeight: 600,
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.borderColor = meta.accent;
            e.currentTarget.style.boxShadow = `0 12px 28px rgba(0,0,0,0.7), 0 0 16px ${meta.accent}40`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.borderColor = "rgba(223, 231, 224, 0.2)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.6)";
          }}
          title={t.bidang_back_home}
        >
          <ArrowLeft size={14} />
          <span>{t.bidang_back_home}</span>
        </button>

        <a
          id="btn-open-new-tab"
          href={meta.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 38,
            height: 38,
            borderRadius: 100,
            background: "rgba(12, 20, 29, 0.85)",
            border: "1px solid rgba(223, 231, 224, 0.2)",
            color: "#94a3b8",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.borderColor = meta.accent;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#94a3b8";
            e.currentTarget.style.borderColor = "rgba(223, 231, 224, 0.2)";
          }}
          title={t.bidang_open_tab}
        >
          <ExternalLink size={14} />
        </a>

        {/* Global Language Toggle */}
        <LanguageToggle />
      </div>

      {/* Frame hosting the dedicated page */}
      <iframe
        id={`iframe-bidang-${resolvedType}`}
        title={pageTitle}
        src={meta.sourceUrl}
        sandbox="allow-downloads allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
        loading="eager"
        onLoad={() => setLoadedUrl(meta.sourceUrl)}
        style={{
          width: "100%",
          height: "100%",
          border: 0,
          display: "block",
          background: "#060a0e",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.25s ease",
        }}
      />
    </div>
  );
}
