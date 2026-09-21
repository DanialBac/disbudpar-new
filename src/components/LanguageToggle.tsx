import { useEffect, useState } from "react";
import { getStoredLanguage, setStoredLanguage, type Language } from "../lib/i18n";

interface LanguageToggleProps {
  className?: string;
  onLanguageChange?: (lang: Language) => void;
}

export function LanguageToggle({ className = "", onLanguageChange }: LanguageToggleProps) {
  const [lang, setLang] = useState<Language>(getStoredLanguage());

  useEffect(() => {
    const handleLangChange = (e: Event) => {
      const customEvent = e as CustomEvent<Language>;
      if (customEvent.detail) {
        setLang(customEvent.detail);
      }
    };

    const handleWindowMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === "DISBUDPAR_LANG_CHANGE" && (e.data.lang === "id" || e.data.lang === "en")) {
        setLang(e.data.lang);
      }
    };

    window.addEventListener("disbudpar-lang-change", handleLangChange);
    window.addEventListener("message", handleWindowMessage);
    return () => {
      window.removeEventListener("disbudpar-lang-change", handleLangChange);
      window.removeEventListener("message", handleWindowMessage);
    };
  }, []);

  const changeLanguage = (newLang: Language) => {
    if (newLang === lang) return;
    setLang(newLang);
    setStoredLanguage(newLang);
    onLanguageChange?.(newLang);

    // Notify all iframes
    const iframes = document.querySelectorAll("iframe");
    iframes.forEach((iframe) => {
      iframe.contentWindow?.postMessage({ type: "DISBUDPAR_SET_LANG", lang: newLang }, "*");
    });
  };

  return (
    <div
      className={`inline-flex items-center gap-1 bg-black/40 border border-[#2b3530] p-1 rounded-full backdrop-blur-md transition-colors ${className}`}
      role="group"
      aria-label="Language selector / Pemilih bahasa"
    >
      <button
        type="button"
        onClick={() => changeLanguage("id")}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide transition-all ${
          lang === "id"
            ? "bg-[#dfa14a] text-[#0d120f] shadow-md shadow-[#dfa14a]/20"
            : "text-[#94a69b] hover:text-[#dfe7e0] hover:bg-white/5"
        }`}
        aria-pressed={lang === "id"}
        title="Bahasa Indonesia"
      >
        <span className="text-xs leading-none">🇮🇩</span>
        <span>ID</span>
      </button>
      <span className="text-xs text-[#425048] select-none">/</span>
      <button
        type="button"
        onClick={() => changeLanguage("en")}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide transition-all ${
          lang === "en"
            ? "bg-[#dfa14a] text-[#0d120f] shadow-md shadow-[#dfa14a]/20"
            : "text-[#94a69b] hover:text-[#dfe7e0] hover:bg-white/5"
        }`}
        aria-pressed={lang === "en"}
        title="English (International)"
      >
        <span className="text-xs leading-none">🇬🇧</span>
        <span>EN</span>
      </button>
    </div>
  );
}
