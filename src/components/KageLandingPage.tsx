import { useState, useEffect, useCallback } from "react";
import {
  splitTypographyProps,
  usePageTypography,
  type PageTypographyProps,
} from "../shaders/landing-pages/pageTypography";
import { LandingPageFrame, type LandingPageProps } from "../shaders/landing-pages/LandingPageFrame";
import { KAGE_TYPOGRAPHY } from "../shaders/landing-pages/pageRecipes";
import { NewsDetailModal } from "./NewsDetailModal";
import type { NewsArticle } from "../types";
import { getStoredLanguage, setStoredLanguage, type Language } from "../lib/i18n";

export type { PageTypographyProps } from "../shaders/landing-pages/pageTypography";
export type { LandingPageProps } from "../shaders/landing-pages/LandingPageFrame";

export function KageLandingPage(props: LandingPageProps & PageTypographyProps) {
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(KAGE_TYPOGRAPHY, type);

  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [initialArticle, setInitialArticle] = useState<Partial<NewsArticle> | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (!e.data) return;

      if (e.data.type === "BANYUWANGI_NEWS_CLICK" && e.data.slug) {
        setActiveSlug(e.data.slug);
        setInitialArticle(e.data.article || null);
        setIsModalOpen(true);
      }

      if (e.data.type === "DISBUDPAR_LANG_CHANGE" && (e.data.lang === "id" || e.data.lang === "en")) {
        setStoredLanguage(e.data.lang as Language);
      }
    };

    const handleCustomLang = (e: Event) => {
      const customEvent = e as CustomEvent<Language>;
      if (customEvent.detail) {
        const iframes = document.querySelectorAll("iframe");
        iframes.forEach((iframe) => {
          iframe.contentWindow?.postMessage({ type: "DISBUDPAR_SET_LANG", lang: customEvent.detail }, "*");
        });
      }
    };

    window.addEventListener("message", handleMessage);
    window.addEventListener("disbudpar-lang-change", handleCustomLang);
    return () => {
      window.removeEventListener("message", handleMessage);
      window.removeEventListener("disbudpar-lang-change", handleCustomLang);
    };
  }, []);

  const handleApplyScene = useCallback((frameEl: HTMLIFrameElement) => {
    const currentLang = getStoredLanguage();
    frameEl.contentWindow?.postMessage({ type: "DISBUDPAR_SET_LANG", lang: currentLang }, "*");
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveSlug(null);
    setInitialArticle(null);
  };

  return (
    <>
      <LandingPageFrame
        {...frame}
        customization={customization}
        title="Kage — DISBUDPAR Banyuwangi"
        sourceUrl="/landing-pages/kage.html?v=20260920-v2"
        applyScene={handleApplyScene}
      />

      <NewsDetailModal
        slug={activeSlug}
        initialData={initialArticle}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
