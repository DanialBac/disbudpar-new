// src/pages/profil/sections/ProfilDisbudparSection.tsx
// Profil → Disbudpar content section (AGENTS.md section 6).
// Apple-design-language redesign: one calm light canvas on the dark shell,
// huge tight-tracked sans headlines, iOS-settings-style list rows, white cards
// with ultra-soft shadows, dark pill CTAs, gold used only as a micro accent.
import {
  Building,
  Landmark,
  Layers,
  Award,
  MapPin,
  Clock,
  Phone,
  ArrowUpRight
} from "lucide-react";
import { Link } from "react-router-dom";

interface ProfilDisbudparProps {
  isEn?: boolean;
}

export function ProfilDisbudpar({ isEn = false }: ProfilDisbudparProps) {
  const stats = [
    {
      num: "1",
      unit: isEn ? "HQ" : "Pusat",
      label: isEn ? "Headquarters, Jl. A. Yani" : "Kantor Pusat, Jl. A. Yani",
      icon: Building
    },
    {
      num: "4",
      unit: isEn ? "Divisions" : "Bidang",
      label: isEn ? "Technical divisions + secretariat" : "Bidang teknis + sekretariat",
      icon: Layers
    },
    {
      num: "2",
      unit: "UPTD",
      label: isEn ? "Museum & cultural venues" : "Museum & balai budaya",
      icon: Landmark
    },
    {
      num: "A",
      unit: "SAKIP",
      label: isEn ? "Accountability grade, WTP opinion" : "Predikat akuntabilitas, opini WTP",
      icon: Award
    }
  ];

  const pillars = [
    {
      code: isEn ? "SECRETARIAT" : "SEKRETARIAT",
      titleId: "Sekretariat Dinas",
      titleEn: "Agency Secretariat",
      icon: "🏢",
      descId: "Perencanaan program, keuangan, keumuman, dan kepegawaian dinas.",
      descEn: "Program planning, finance, general affairs, and personnel.",
      route: "/profil/struktur-organisasi"
    },
    {
      code: isEn ? "PILLAR 01" : "PILAR 01",
      titleId: "Pariwisata & Destinasi",
      titleEn: "Tourism & Destinations",
      icon: "🏝️",
      descId: "Destinasi alam & bahari, CHSE, desa wisata, dan keselamatan wisata.",
      descEn: "Nature & marine destinations, CHSE, tourist villages, and safety.",
      route: "/pariwisata"
    },
    {
      code: isEn ? "PILLAR 02" : "PILAR 02",
      titleId: "Ekonomi Kreatif",
      titleEn: "Creative Economy",
      icon: "🎨",
      descId: "Inkubasi 17 subsektor, kurasi produk, dan fasilitasi hak cipta (HKI).",
      descEn: "17-subsector incubation, product curation, and IP facilitation.",
      route: "/ekraf"
    },
    {
      code: isEn ? "PILLAR 03" : "PILAR 03",
      titleId: "Kebudayaan & Adat",
      titleEn: "Culture & Heritage",
      icon: "🏛️",
      descId: "Cagar budaya, warisan takbenda, dan pembinaan 200+ sanggar seni.",
      descEn: "Heritage sites, intangible culture, and 200+ art studios.",
      route: "/kebudayaan"
    },
    {
      code: isEn ? "PILLAR 04" : "PILAR 04",
      titleId: "Pemasaran Pariwisata",
      titleEn: "Tourism Marketing",
      icon: "📢",
      descId: "Banyuwangi Festival, branding Majestic Banyuwangi, dan promosi global.",
      descEn: "Banyuwangi Festival, Majestic Banyuwangi branding, global promotion.",
      route: "/pemasaran"
    },
    {
      code: "UPTD",
      titleId: "Museum & Taman Budaya",
      titleEn: "Museum & Cultural Center",
      icon: "🏺",
      descId: "Museum Blambangan, 4.000+ koleksi arkeologi, dan panggung seni daerah.",
      descEn: "Blambangan Museum, 4,000+ archaeological pieces, regional stages.",
      route: "/profil/struktur-organisasi"
    }
  ];

  // Organizational structure — every row deep-links to its page (3-click rule).
  const workUnits = [
    {
      labelId: "Sekretariat",
      labelEn: "Secretariat",
      route: "/profil/struktur-organisasi"
    },
    {
      labelId: "Bidang Pariwisata dan Destinasi",
      labelEn: "Tourism and Destinations Division",
      route: "/pariwisata"
    },
    {
      labelId: "Bidang Ekonomi Kreatif (E-Kraf)",
      labelEn: "Creative Economy Division (E-Kraf)",
      route: "/ekraf"
    },
    {
      labelId: "Bidang Kebudayaan dan Adat",
      labelEn: "Culture and Heritage Division",
      route: "/kebudayaan"
    },
    {
      labelId: "Bidang Pemasaran Pariwisata",
      labelEn: "Tourism Marketing Division",
      route: "/pemasaran"
    },
    {
      labelId: "UPTD Museum & Taman Budaya",
      labelEn: "UPTD Museum & Cultural Center",
      route: "/profil/struktur-organisasi"
    }
  ];

  const formerLeaders = [
    {
      name: "Drs. Suprayitno, M.Si",
      period: isEn ? "2008 – 2011" : "2008 s.d 2011",
      legacyId: "Perintis identitas destinasi 'The Sunrise of Java'.",
      legacyEn: "Pioneered the 'The Sunrise of Java' destination identity.",
      incumbent: false
    },
    {
      name: "H. Choiril Ustadi Yudawanto, S.Sos, M.Si",
      period: isEn ? "2011 – 2013" : "2011 s.d 2013",
      legacyId: "Inisiator Banyuwangi Festival (B-Fest) & Gandrung Sewu.",
      legacyEn: "Initiator of Banyuwangi Festival (B-Fest) & Gandrung Sewu.",
      incumbent: false
    },
    {
      name: "Drs. M. Yanuarto Bramuda, M.Si, M.AP",
      period: isEn ? "2013 – 2023" : "2013 s.d 2023",
      legacyId: "Membawa Banyuwangi meraih UNWTO Award PBB di Madrid.",
      legacyEn: "Led Banyuwangi to the UNWTO Award of the United Nations in Madrid.",
      incumbent: false
    },
    {
      name: "Dra. Hj. Chusnul Khotimah, M.M",
      period: isEn ? "2023 (Acting)" : "2023 (Plt)",
      legacyId: "Menjaga kontinuitas tata kelola & layanan dinas.",
      legacyEn: "Maintained governance stability & service continuity.",
      incumbent: false
    },
    {
      name: "M. Taufik Kurniawan, S.Sos, M.Si",
      period: isEn ? "2023 – Present" : "2023 s.d Sekarang",
      legacyId: "Mengawal Ijen UNESCO Global Geopark & transformasi digital.",
      legacyEn: "Stewards Ijen UNESCO Global Geopark & digital transformation.",
      incumbent: true
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-6 py-8 sm:py-14 antialiased">
      {/* ════════════════════════════════════════════════════════════
          One calm light canvas (Apple product-page feel) on the dark shell.
          ════════════════════════════════════════════════════════════ */}
      <div className="rounded-[28px] sm:rounded-[36px] bg-[#f5f5f7] text-[#1d1d1f] px-5 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.6)]">

        {/* ── Intro ─────────────────────────────────────────────── */}
        <header className="text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#a07a1f]">
            {isEn ? "Official Profile" : "Profil Resmi"}
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-[#1d1d1f]">
            {isEn ? "Culture and Tourism Office" : "Dinas Kebudayaan dan Pariwisata"}
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-[#6e6e73] font-normal">
            {isEn ? "Government of Banyuwangi Regency" : "Pemerintah Kabupaten Banyuwangi"}
          </p>
        </header>

        {/* ── Photo ─────────────────────────────────────────────── */}
        <figure className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-3xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]">
            <img
              src="/pelinggihan.jpg"
              alt={
                isEn
                  ? "DISBUDPAR Banyuwangi headquarters — Balai Pelinggihan Using"
                  : "Kantor DISBUDPAR Banyuwangi — Balai Pelinggihan Using"
              }
              className="w-full aspect-[16/9] object-cover"
              loading="eager"
            />
          </div>
          <figcaption className="mt-3 text-center text-xs text-[#6e6e73]">
            {isEn
              ? "Balai Pelinggihan Using — headquarters, Jl. A. Yani No. 78, Banyuwangi"
              : "Balai Pelinggihan Using — kantor pusat, Jl. A. Yani No. 78, Banyuwangi"}
          </figcaption>
        </figure>

        {/* ── Narrative: lead left, body right (Apple feature copy) ── */}
        <section className="mt-16 sm:mt-24 max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
            {isEn ? "The driving force of culture and tourism" : "Motor penggerak kebudayaan dan pariwisata"}
          </h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <p className="text-lg sm:text-xl font-medium leading-[1.6] text-[#1d1d1f]">
              {isEn
                ? "Advancing the noble values of Using heritage, empowering creative talents, and delivering world-class sustainable tourism."
                : "Memajukan nilai luhur warisan Using, memberdayakan talenta kreatif, dan menghadirkan pariwisata berkelanjutan kelas dunia."}
            </p>
            <p className="text-[15px] leading-[1.8] text-[#6e6e73]">
              {isEn
                ? "The Office drives culture- and tourism-based regional development — raising the quality of standardized tourism services and strengthening tourism as a mainstay of the regional economy and community welfare. It operates through 1 Secretariat, 4 technical divisions, and Technical Implementation Units managing the Blambangan Museum and the Cultural Center, with accountability proven by a WTP opinion and Predicate A in the regional SAKIP system."
                : "Dinas ini menggerakkan pembangunan daerah berbasis kebudayaan dan pariwisata — meningkatkan kualitas layanan wisata terstandarisasi serta memperkuat pariwisata sebagai andalan perekonomian daerah dan kesejahteraan masyarakat. Dinas beroperasi melalui 1 Sekretariat, 4 bidang teknis, dan Unit Pelaksana Teknis pengelola Museum Blambangan serta Taman Budaya, dengan akuntabilitas yang dibuktikan melalui opini WTP dan predikat A SAKIP."}
            </p>
          </div>
        </section>

        {/* ── Organizational structure — iOS-settings-style list ──── */}
        <section aria-labelledby="profil-struktur-title" className="mt-16 sm:mt-24 max-w-4xl mx-auto">
          <h3 id="profil-struktur-title" className="text-2xl sm:text-3xl font-semibold tracking-tight text-center text-[#1d1d1f]">
            {isEn ? "Organizational Structure" : "Struktur Organisasi"}
          </h3>
          <p className="mt-2 text-center text-sm text-[#6e6e73]">
            {isEn ? "Tap a unit to open its page." : "Ketuk unit untuk membuka halamannya."}
          </p>

          <ol className="mt-8 overflow-hidden rounded-3xl bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
            {workUnits.map((unit, idx) => (
              <li key={unit.labelEn} className={idx > 0 ? "border-t border-black/5" : undefined}>
                <Link
                  to={unit.route}
                  className="group flex items-center gap-4 px-5 sm:px-7 py-4 sm:py-5 transition-colors hover:bg-[#fafafa] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1d1d1f]/40"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7] text-sm font-semibold tabular-nums text-[#6e6e73]"
                    aria-hidden="true"
                  >
                    {idx + 1}
                  </span>
                  <span className="min-w-0 flex-1 text-[15px] sm:text-base font-medium leading-snug text-[#1d1d1f]">
                    {isEn ? unit.labelEn : unit.labelId}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-[#a07a1f] opacity-0 transition-opacity group-hover:opacity-100 max-sm:opacity-60"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Leadership — quiet rows, gold dot marks the incumbent ── */}
        <section aria-labelledby="profil-pimpinan-title" className="mt-16 sm:mt-24 max-w-4xl mx-auto">
          <h3 id="profil-pimpinan-title" className="text-2xl sm:text-3xl font-semibold tracking-tight text-center text-[#1d1d1f]">
            {isEn ? "Heads of Office, 2008 – Present" : "Kepala Dinas, 2008 – Sekarang"}
          </h3>

          <ol className="mt-8 overflow-hidden rounded-3xl bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
            {formerLeaders.map((leader, idx) => (
              <li key={leader.name} className={idx > 0 ? "border-t border-black/5" : undefined}>
                <div className="flex items-start gap-4 px-5 sm:px-7 py-4 sm:py-5">
                  <span
                    className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${
                      leader.incumbent ? "bg-[#c9a24a] shadow-[0_0_0_4px_rgba(201,162,74,0.15)]" : "bg-black/15"
                    }`}
                    aria-hidden="true"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <p className="text-[15px] sm:text-base font-semibold leading-snug text-[#1d1d1f]">
                        {leader.name}
                      </p>
                      <span className="text-xs font-medium tabular-nums tracking-wide text-[#6e6e73]">
                        {leader.period}
                      </span>
                    </div>
                    <p className="mt-1 text-[13px] leading-relaxed text-[#6e6e73]">
                      {isEn ? leader.legacyEn : leader.legacyId}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-center text-xs text-[#6e6e73]">
            <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-[#c9a24a] align-middle" aria-hidden="true" />
            {isEn ? "Current head of office" : "Kepala dinas petahana"}
          </p>
        </section>

        {/* ── Stats — quiet spec sheet ───────────────────────────── */}
        <section className="mt-16 sm:mt-24 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-3xl bg-white p-5 sm:p-6 shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f5f7] text-[#6e6e73]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-4xl font-semibold tracking-tight text-[#1d1d1f]">
                    {stat.num}
                    <span className="ml-1.5 text-base font-medium text-[#a07a1f]">{stat.unit}</span>
                  </p>
                  <p className="mt-1.5 text-[11px] sm:text-xs leading-snug text-[#6e6e73]">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Pillars — white app-card grid ──────────────────────── */}
        <section aria-labelledby="profil-pilar-title" className="mt-16 sm:mt-24 max-w-4xl mx-auto">
          <h3 id="profil-pilar-title" className="text-2xl sm:text-3xl font-semibold tracking-tight text-center text-[#1d1d1f]">
            {isEn ? "Divisions & Technical Units" : "Bidang & Unit Teknis"}
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <Link
                key={pillar.code}
                to={pillar.route}
                className="group flex flex-col rounded-3xl bg-white p-6 sm:p-7 shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d1d1f]/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5f5f7] text-2xl">
                  <span aria-hidden="true">{pillar.icon}</span>
                </div>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a07a1f]">
                  {pillar.code}
                </p>
                <h4 className="mt-1 text-lg font-semibold tracking-tight text-[#1d1d1f]">
                  {isEn ? pillar.titleEn : pillar.titleId}
                </h4>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[#6e6e73]">
                  {isEn ? pillar.descEn : pillar.descId}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[#1d1d1f]">
                  {isEn ? "Learn more" : "Selengkapnya"}
                  <ArrowUpRight
                    className="h-4 w-4 text-[#a07a1f] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Contact — centered, dark pill CTA ──────────────────── */}
        <footer className="mt-16 sm:mt-24 max-w-2xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
            {isEn ? "Visit Us" : "Kunjungi Kami"}
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-3 text-sm text-[#6e6e73] sm:grid-cols-3">
            <p className="flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-[#a07a1f]" aria-hidden="true" />
              Jl. A. Yani No. 78
            </p>
            <p className="flex items-center justify-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-[#a07a1f]" aria-hidden="true" />
              {isEn ? "Mon–Fri, 07.30–15.30" : "Senin–Jumat, 07.30–15.30"}
            </p>
            <p className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-[#a07a1f]" aria-hidden="true" />
              (0333) 424172
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=Dinas+Kebudayaan+dan+Pariwisata+Kabupaten+Banyuwangi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1d1d1f] px-7 py-3 text-sm font-medium text-white shadow-md transition-all hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d1d1f]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f5f7]"
          >
            {isEn ? "Open in Google Maps" : "Buka di Google Maps"}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </footer>
      </div>
    </div>
  );
}
