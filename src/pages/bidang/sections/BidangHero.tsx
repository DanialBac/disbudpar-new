// src/pages/bidang/sections/BidangHero.tsx
// Hero section for Bidang pages (AGENTS.md section 6: large visual section of a page -> sections/).
// Ported from the static bidang-*.html hero: badge, editorial title, switcher, quick stats.
import { Link } from "react-router-dom";
import type { BidangType, BidangContent } from "../data";
import { BIDANG_ORDER, BIDANG_CONTENT } from "../data";
import { ROUTES } from "../../../constants/routes";
import type { Language } from "../../../i18n";

interface BidangHeroProps {
  type: BidangType;
  content: BidangContent;
  lang: Language;
}

export function BidangHero({ type, content, lang }: BidangHeroProps) {
  const { meta, hero } = content;
  const en = lang === "en";

  return (
    <section
      className="bidang-hero"
      style={{ ["--bidang-accent" as string]: meta.accent }}
    >
      <div className="bidang-container">
        <span className="bidang-badge-pill">
          {en
            ? `Pillar ${meta.pillar.num} • ${meta.pillar.labelEn}`
            : `Pilar ${meta.pillar.num} • ${meta.pillar.labelId}`}
        </span>

        <h1 className="bidang-hero-title font-editorial">
          {en ? hero.titleEn : hero.titleId}
        </h1>

        <p className="bidang-hero-desc">{en ? hero.descEn : hero.descId}</p>

        {/* Sub-nav switcher to other bidang pages */}
        <nav className="bidang-switcher" aria-label={en ? "Divisions" : "Bidang"}>
          {BIDANG_ORDER.map((key) => {
            const item = BIDANG_CONTENT[key];
            const isActive = key === type;
            return (
              <Link
                key={key}
                to={ROUTES.bidang[key]}
                className={`bidang-switcher-link${isActive ? " is-active" : ""}`}
                style={isActive ? { ["--bidang-accent" as string]: item.meta.accent } : undefined}
                aria-current={isActive ? "page" : undefined}
              >
                {en ? item.meta.switcherLabelEn : item.meta.switcherLabelId}
              </Link>
            );
          })}
        </nav>

        {/* Quick Stats */}
        <div className="bidang-stats-grid">
          {hero.stats.map((stat) => (
            <div key={stat.labelId} className="bidang-stat-card">
              <div className="bidang-stat-num">
                {stat.value}
                {stat.suffix ? <span>{stat.suffix}</span> : null}
              </div>
              <div className="bidang-stat-label">{en ? stat.labelEn : stat.labelId}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
