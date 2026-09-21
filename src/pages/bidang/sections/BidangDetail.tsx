// src/pages/bidang/sections/BidangDetail.tsx
// Detail section for Bidang pages (AGENTS.md section 6): tupoksi grid, showcase catalog, contact box.
// Ported from the static bidang-*.html body. Lucide icons replace emoji icons.
import { MapPin } from "lucide-react";
import type { BidangContent } from "../data";
import { BIDANG_FOOTER } from "../data";
import type { Language } from "../../../i18n";

interface BidangDetailProps {
  content: BidangContent;
  lang: Language;
}

export function BidangDetail({ content, lang }: BidangDetailProps) {
  const { tupoksi, showcase, contact } = content;
  const en = lang === "en";

  const mailtoHref = `mailto:${contact.mailto}?subject=${encodeURIComponent(contact.subject)}`;

  return (
    <>
      {/* Tupoksi */}
      <section className="bidang-section-wrap">
        <div className="bidang-container">
          <div className="bidang-section-head">
            <span className="bidang-section-tag">{en ? tupoksi.tagEn : tupoksi.tagId}</span>
            <h2 className="bidang-section-title font-editorial">
              {en ? tupoksi.titleEn : tupoksi.titleId}
            </h2>
          </div>

          <div className="bidang-tupoksi-grid">
            {tupoksi.items.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.titleId} className="bidang-tupoksi-card">
                  <div className="bidang-tupoksi-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="bidang-tupoksi-title">{en ? item.titleEn : item.titleId}</h3>
                  <p className="bidang-tupoksi-desc">{en ? item.descEn : item.descId}</p>
                </div>
              );
            })}
          </div>

          {/* Showcase catalog */}
          <div className="bidang-section-head bidang-section-head--spaced">
            <span className="bidang-section-tag">{en ? showcase.tagEn : showcase.tagId}</span>
            <h2 className="bidang-section-title font-editorial">
              {en ? showcase.titleEn : showcase.titleId}
            </h2>
          </div>

          <div className="bidang-products-grid">
            {showcase.items.map((item) => (
              <article key={item.titleId} className="bidang-product-card">
                <div className="bidang-product-thumb">
                  <img
                    src={item.image}
                    alt={en ? item.imageAltEn : item.imageAltId}
                    loading="lazy"
                  />
                  <span className="bidang-product-tag">{en ? item.tagEn : item.tagId}</span>
                </div>
                <div className="bidang-product-body">
                  <h3 className="bidang-product-title">{en ? item.titleEn : item.titleId}</h3>
                  <p className="bidang-product-desc">{en ? item.descEn : item.descId}</p>
                  <div className="bidang-product-meta">
                    <span className="bidang-product-loc">
                      <MapPin size={12} aria-hidden="true" />
                      {en ? item.locEn : item.locId}
                    </span>
                    <span className="bidang-product-note">{en ? item.noteEn : item.noteId}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Contact box */}
          <div className="bidang-contact-box">
            <div className="bidang-contact-info">
              <h3>{en ? contact.titleEn : contact.titleId}</h3>
              <p>{en ? contact.descEn : contact.descId}</p>
            </div>
            <a className="bidang-contact-btn" href={mailtoHref}>
              {en ? contact.ctaEn : contact.ctaId}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bidang-page-footer">
        <p>{en ? BIDANG_FOOTER.en : BIDANG_FOOTER.id}</p>
      </footer>
    </>
  );
}
