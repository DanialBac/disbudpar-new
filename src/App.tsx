import { HashRouter, Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { KageLandingPage } from "./components/KageLandingPage";
import { BidangPage } from "./components/BidangPage";
import { ProfilDokumenPage } from "./components/ProfilDokumenPage";
import { updateDocumentSeo } from "./lib/seo";
import { getStoredLanguage, type Language } from "./lib/i18n";
import "./shaders/threeui.css";

function RouteSeoSync() {
  const location = useLocation();
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

  useEffect(() => {
    updateDocumentSeo(location.pathname, lang);
  }, [location.pathname, lang]);

  return null;
}

function AppRoutes() {
  const navigate = useNavigate();

  // Listen for navigation messages from child iframes (kage.html and bidang-*.html)
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === "NAVIGATE_HASH" && typeof e.data.hash === "string") {
        const cleanPath = e.data.hash.replace(/^#/, "");
        navigate(cleanPath || "/");
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [navigate]);

  return (
    <>
      <RouteSeoSync />
      <Routes>
        <Route
          path="/"
          element={
          <div className="shader-frame">
            <KageLandingPage
              headingFont="onest"
              bodyFont="onest"
              headingWeight="400"
              bodyWeight="300"
              primaryColor="#142c50"
              headingSize={46}
              bodySize={17}
              headingLetterSpacing={-0.012}
            />
          </div>
        }
      />
      {/* Dedicated Pages for Bidang (Direct Route structure) */}
      <Route path="/pariwisata" element={<BidangPage type="pariwisata" />} />
      <Route path="/ekraf" element={<BidangPage type="ekraf" />} />
      <Route path="/kebudayaan" element={<BidangPage type="kebudayaan" />} />
      <Route path="/pemasaran" element={<BidangPage type="pemasaran" />} />

      {/* Dedicated Pages for Profil (Direct Route structure matching Bidang) */}
      <Route path="/disbudpar" element={<ProfilDokumenPage activeSubpage="disbudpar" />} />
      <Route path="/visi-misi" element={<ProfilDokumenPage activeSubpage="visi-misi" />} />
      <Route path="/struktur-organisasi" element={<ProfilDokumenPage activeSubpage="struktur-organisasi" />} />
      <Route path="/profil-pemimpin" element={<ProfilDokumenPage activeSubpage="profil-pemimpin" />} />
      <Route path="/dokumen" element={<ProfilDokumenPage activeSubpage="dokumen" />} />

      {/* Direct shortcuts & alias routes for sub-menus */}
      <Route path="/pemimpin" element={<ProfilDokumenPage activeSubpage="profil-pemimpin" />} />
      <Route path="/struktur" element={<ProfilDokumenPage activeSubpage="struktur-organisasi" />} />
      <Route path="/visimisi" element={<ProfilDokumenPage activeSubpage="visi-misi" />} />

      {/* Prefixed /profil/... aliases for backward compatibility */}
      <Route path="/profil" element={<Navigate to="/disbudpar" replace />} />
      <Route path="/profil/disbudpar" element={<ProfilDokumenPage activeSubpage="disbudpar" />} />
      <Route path="/profil/visi-misi" element={<ProfilDokumenPage activeSubpage="visi-misi" />} />
      <Route path="/profil/visimisi" element={<ProfilDokumenPage activeSubpage="visi-misi" />} />
      <Route path="/profil/struktur-organisasi" element={<ProfilDokumenPage activeSubpage="struktur-organisasi" />} />
      <Route path="/profil/struktur" element={<ProfilDokumenPage activeSubpage="struktur-organisasi" />} />
      <Route path="/profil/profil-pemimpin" element={<ProfilDokumenPage activeSubpage="profil-pemimpin" />} />
      <Route path="/profil/pemimpin" element={<ProfilDokumenPage activeSubpage="profil-pemimpin" />} />
      <Route path="/profil/dokumen" element={<ProfilDokumenPage activeSubpage="dokumen" />} />
      <Route path="/profil/:subpage" element={<ProfilDokumenPage />} />

      {/* Aliases for Bidang */}
      <Route path="/bidang-pariwisata" element={<Navigate to="/pariwisata" replace />} />
      <Route path="/bidang-ekraf" element={<Navigate to="/ekraf" replace />} />
      <Route path="/bidang-kebudayaan" element={<Navigate to="/kebudayaan" replace />} />
      <Route path="/bidang-pemasaran" element={<Navigate to="/pemasaran" replace />} />
      <Route path="/bidang/:type" element={<BidangPage />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;
