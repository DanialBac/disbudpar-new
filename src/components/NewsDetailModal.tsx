import { useEffect, useState } from "react";
import { X, Calendar, Eye, Building2, ExternalLink, Loader2, AlertCircle } from "lucide-react";
import type { NewsArticle } from "../types";
import { getStoredLanguage, I18N_REACT, type Language } from "../lib/i18n";

interface NewsDetailModalProps {
  slug: string | null;
  initialData?: Partial<NewsArticle> | null;
  isOpen: boolean;
  onClose: () => void;
}

export function NewsDetailModal({ slug, initialData, isOpen, onClose }: NewsDetailModalProps) {
  const [detailArticle, setDetailArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lang, setLang] = useState<Language>(getStoredLanguage());

  // Derive active display data: prefer fetched detail, fallback to initialData
  const activeArticle: Partial<NewsArticle> | null = detailArticle || initialData || null;

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

  useEffect(() => {
    if (!isOpen || !slug) {
      return;
    }

    let isMounted = true;
    const fetchArticleDetail = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`https://banyuwangitourism.com/api/news/detail/${encodeURIComponent(slug)}`);
        if (!res.ok) {
          throw new Error(lang === "en" ? `Failed to load article (HTTP ${res.status})` : `Gagal memuat berita (HTTP ${res.status})`);
        }
        const data = await res.json();
        if (isMounted) {
          if (data && (data.title || data.text)) {
            setDetailArticle(data);
          } else {
            throw new Error(lang === "en" ? "Unexpected article format" : "Format data berita tidak sesuai");
          }
        }
      } catch (err: unknown) {
        if (isMounted) {
          const defaultMsg = lang === "en" ? "Failed to reach Banyuwangi Tourism server" : "Gagal menghubungi server Banyuwangi Tourism";
          const msg = err instanceof Error ? err.message : defaultMsg;
          setError(msg);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchArticleDetail();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      isMounted = false;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, slug, onClose, lang]);

  if (!isOpen) return null;

  const t = I18N_REACT[lang];

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return lang === "en" ? "Recent" : "Terkini";
    try {
      const d = new Date(dateStr.replace(/-/g, "/"));
      if (isNaN(d.getTime())) return dateStr.slice(0, 10);
      const monthsId = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
      const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const months = lang === "en" ? monthsEn : monthsId;
      return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
    } catch {
      return dateStr.slice(0, 10);
    }
  };

  const getImgUrl = (foto?: string) => {
    if (!foto) return "/gallery/gandrung-sewu.jpg";
    if (foto.startsWith("http://") || foto.startsWith("https://")) return foto;
    return `https://banyuwangitourism.com/upload/news/${encodeURIComponent(foto)}`;
  };

  return (
    <div
      id="react-news-modal-overlay"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="react-news-modal-title"
    >
      <div
        id="react-news-modal-container"
        className="relative w-full max-w-3xl max-h-[88vh] flex flex-col bg-[#121614] border border-[#2b3530] text-[#dfe7e0] rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#242d28] bg-[#161c19]/90 sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-2 h-2 rounded-full bg-[#dfa14a] animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest text-[#a8b8ae] font-medium">
              {t.news_modal_title}
            </span>
          </div>
          <button
            id="react-news-modal-close-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#94a69b] hover:text-[#f3f7f4] hover:bg-[#202924] transition-colors"
            aria-label={t.news_modal_close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-8 space-y-6">
          {activeArticle ? (
            <>
              {/* Category & Date Metadata */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#dfa14a]/15 text-[#dfa14a] border border-[#dfa14a]/30 text-xs font-semibold tracking-wider uppercase">
                  {activeArticle.category || t.news_modal_tag_fallback}
                </span>
                <div className="flex items-center gap-4 text-xs tracking-wider text-[#8a9e91]">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#dfa14a]" />
                    {formatDate(activeArticle.created_at)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-[#dfa14a]" />
                    {activeArticle.views ?? 0} {t.news_modal_views}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h2
                id="react-news-modal-title"
                className="text-xl sm:text-2xl lg:text-3xl font-serif font-semibold text-[#f5f8f5] leading-snug tracking-tight"
              >
                {activeArticle.title}
              </h2>

              {/* Source Attribution */}
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#b8c7bd] bg-[#1a221e] px-3.5 py-2 rounded-lg border border-[#27332c]">
                <Building2 className="w-4 h-4 text-[#dfa14a] shrink-0" />
                <span>{activeArticle.sumber || t.news_modal_source_sub}</span>
              </div>

              {/* Cover Image */}
              <div className="relative rounded-lg overflow-hidden border border-[#27332c] bg-[#18201c] aspect-video w-full">
                <img
                  src={getImgUrl(activeArticle.foto)}
                  alt={activeArticle.title_foto || activeArticle.title || "Cover"}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/gallery/gandrung-sewu.jpg";
                  }}
                />
              </div>

              {/* Body Text */}
              <div className="relative min-h-[140px]">
                {loading && (
                  <div className="flex items-center gap-2 text-xs text-[#a0b5a7] mb-4 bg-[#1a221e]/80 p-2.5 rounded border border-[#2c3a32]">
                    <Loader2 className="w-4 h-4 animate-spin text-[#dfa14a]" />
                    <span>{lang === "en" ? "Updating full text from official server..." : "Memperbarui isi naskah utuh dari server resmi..."}</span>
                  </div>
                )}

                {error && !activeArticle.text && (
                  <div className="flex items-center gap-2 p-4 text-xs text-[#e57373] bg-[#2a1b1b] border border-[#522b2b] rounded-lg">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {activeArticle.text ? (
                  <div
                    className="prose prose-invert max-w-none text-[#cdd8d0] leading-relaxed space-y-4 text-sm sm:text-base font-light [&>p]:mb-4 [&>p]:leading-relaxed [&>p]:text-[#c3d1c6]"
                    dangerouslySetInnerHTML={{ __html: activeArticle.text }}
                  />
                ) : (
                  <p className="text-sm text-[#94a69b] italic">
                    {lang === "en" ? "Loading article content..." : "Memuat paragraf artikel..."}
                  </p>
                )}
              </div>
            </>
          ) : (
            <div className="py-20 flex flex-col items-center justify-center gap-3 text-[#94a69b]">
              <Loader2 className="w-7 h-7 animate-spin text-[#dfa14a]" />
              <p className="text-sm">{t.news_modal_loading}</p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-t border-[#242d28] bg-[#161c19]/90">
          <a
            id="react-news-modal-external-link"
            href={
              slug
                ? `https://banyuwangitourism.com/berita/${encodeURIComponent(slug)}`
                : "https://banyuwangitourism.com/berita"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#dfa14a] text-[#121614] font-medium text-xs sm:text-sm hover:bg-[#e8b15d] transition-colors"
          >
            <span>{lang === "en" ? "Open on Banyuwangi Tourism Portal" : "Buka di Portal Banyuwangi Tourism"}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            id="react-news-modal-dismiss-btn"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs sm:text-sm text-[#a8b8ae] hover:text-[#f3f7f4] hover:bg-[#202924] transition-colors"
          >
            {t.news_modal_close_btn}
          </button>
        </div>
      </div>
    </div>
  );
}
