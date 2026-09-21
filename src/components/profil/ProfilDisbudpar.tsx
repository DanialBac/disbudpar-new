import { useState } from "react";
import {
  Building2,
  MapPin,
  Phone,
  CheckCircle2,
  Sparkles,
  Clock,
  ChevronRight,
  ExternalLink,
  Landmark,
  Layers,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

interface ProfilDisbudparProps {
  isEn?: boolean;
}

export function ProfilDisbudpar({ isEn = false }: ProfilDisbudparProps) {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const officePhotos = [
    {
      titleId: "Balai Pelinggihan & Kantor Utama",
      titleEn: "Pelinggihan Pavilion & Headquarters",
      descId: "Gedung arsitektur tradisional Using untuk ruang pertemuan budayawan dan pelayanan publik.",
      descEn: "Traditional Using landmark hosting cultural assemblies and administrative desks.",
      src: "/pelinggihan.jpg",
      badge: "Kantor Pusat"
    },
    {
      titleId: "Pelayanan Perizinan & Konsultasi Terpadu",
      titleEn: "Integrated Public Service Hall",
      descId: "Layanan satu pintu rekomendasi izin sanggar seni, event budaya, dan sertifikasi CHSE.",
      descEn: "One-stop center providing cultural permits, event advisories, and CHSE standardizations.",
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
      badge: "Layanan Publik"
    },
    {
      titleId: "Amfiteater & Ruang Ekspresi Budaya",
      titleEn: "Open Amphitheater & Art Arena",
      descId: "Panggung terbuka sarasehan pelaku seni dan latihan gladi tari kolosal Gandrung.",
      descEn: "Open-air stage designed for Gandrung rehearsals and dialogues with creative artisans.",
      src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80",
      badge: "Panggung Budaya"
    }
  ];

  const currentPhoto = officePhotos[activePhotoIdx];

  const stats = [
    {
      num: "1",
      unit: "Pusat",
      label: isEn ? "HEADQUARTERS OFFICE" : "KANTOR PUSAT JL. A. YANI",
      icon: Building2,
      color: "#38bdf8"
    },
    {
      num: "4",
      unit: "Bidang",
      label: isEn ? "TECHNICAL DIVISIONS" : "4 BIDANG & 1 SEKRETARIAT",
      icon: Layers,
      color: "#ec4899"
    },
    {
      num: "2",
      unit: "UPTD",
      label: isEn ? "MUSEUM & CULTURAL VENUES" : "MUSEUM & BALAI BUDAYA",
      icon: Landmark,
      color: "#c9a24a"
    },
    {
      num: "A",
      unit: "SAKIP",
      label: isEn ? "ACCOUNTABILITY GRADE" : "AKUNTABILITAS PREDIKAT A",
      icon: Award,
      color: "#10b981"
    }
  ];

  const pillars = [
    {
      code: "SEKRETARIAT",
      titleId: "Sekretariat Dinas",
      titleEn: "Agency Secretariat",
      icon: "🏢",
      color: "#38bdf8",
      subId: "Program, Keuangan, Umum & Kepegawaian",
      subEn: "Program, Finance, General Admin & HR",
      descId: "Mengkoordinasikan perumusan program kerja tahunan, akuntabilitas anggaran, dan pembinaan ASN.",
      descEn: "Coordinates annual work plans, budget accountability, and civil servant capacity building.",
      highlights: [
        "Penyusunan Renja, Renstra & SAKIP",
        "Pengelolaan Keuangan & Aset Daerah",
        "Disiplin & Pengembangan SDM ASN"
      ],
      route: "/profil/struktur-organisasi"
    },
    {
      code: "PILAR 01",
      titleId: "Bidang Pariwisata & Destinasi",
      titleEn: "Tourism & Destinations",
      icon: "🏝️",
      color: "#38bdf8",
      subId: "Daya Tarik Wisata, Tata Kelola & Pokdarwis",
      subEn: "Attractions Development & Communities",
      descId: "Merancang zonasi destinasi alam dan bahari, standardisasi CHSE, dan pembinaan Desa Wisata.",
      descEn: "Governs nature & marine tourism sites, CHSE certifications, and tourist village networks.",
      highlights: [
        "Sertifikasi & Standarisasi CHSE Destinasi",
        "Pengembangan Jejaring Desa Wisata",
        "Mitigasi Keselamatan & Audit Wisata"
      ],
      route: "/pariwisata"
    },
    {
      code: "PILAR 02",
      titleId: "Bidang Ekonomi Kreatif (E-Kraf)",
      titleEn: "Creative Economy Division",
      icon: "🎨",
      color: "#ec4899",
      subId: "Inkubasi 17 Subsektor & Hak Cipta (HKI)",
      subEn: "17 Subsectors Incubation & IP Patents",
      descId: "Mendorong daya saing pelaku kreatif, kurasi suvenir lokal, serta fasilitasi HKI Batik & Kerajinan.",
      descEn: "Nurtures creative MSMEs, local merchandise curation, and IP trademark registration.",
      highlights: [
        "Fasilitasi HKI Seni & Motif Gajah Oling",
        "Inkubasi Kopi Rakyat & Kuliner Tradisional",
        "Kurasi Produk Masuk Rantai Pasok Nasional"
      ],
      route: "/ekraf"
    },
    {
      code: "PILAR 03",
      titleId: "Bidang Kebudayaan & Adat",
      titleEn: "Culture & Heritage Division",
      icon: "🏛️",
      color: "#c9a24a",
      subId: "Cagar Budaya, Tradisi Adat & Sanggar Seni",
      subEn: "Cultural Monuments & Traditional Arts",
      descId: "Melindungi cagar budaya, registrasi Warisan Budaya Takbenda (WBTb), dan pembinaan sanggar kesenian.",
      descEn: "Safeguards historical landmarks, registers UNESCO/national ICH, and fosters art studios.",
      highlights: [
        "Registrasi Cagar Budaya & Naskah Kuno",
        "Pembinaan 200+ Sanggar Seni & Paguyuban",
        "Revitalisasi Bahasa & Tradisi Sakral Seblang"
      ],
      route: "/kebudayaan"
    },
    {
      code: "PILAR 04",
      titleId: "Bidang Pemasaran Pariwisata",
      titleEn: "Tourism Marketing Division",
      icon: "📢",
      color: "#10b981",
      subId: "Banyuwangi Festival (B-Fest) & Promosi",
      subEn: "Banyuwangi Festival & Strategic Branding",
      descId: "Menyelenggarakan kalender Kharisma Event Nusantara (KEN), promosi Majestic Banyuwangi, dan travel expo.",
      descEn: "Curates official festival calendars, global tourism roadshows, and international media expo.",
      highlights: [
        "Penyelenggaraan B-Fest (Gandrung Sewu, BEC)",
        "Kampanye Branding Digital & Multi-Platform",
        "Kemitraan Maskapai & Agen Wisata Global"
      ],
      route: "/pemasaran"
    },
    {
      code: "UPTD TEKNIS",
      titleId: "UPTD Museum & Taman Budaya",
      titleEn: "Museum & Cultural Center Units",
      icon: "🏺",
      color: "#a855f7",
      subId: "Museum Blambangan & Balai Budaya",
      subEn: "Blambangan Museum & Arts Pavilion",
      descId: "Mengelola ribuan artefak sejarah purbakala dan panggung pementasan seni bagi seniman daerah.",
      descEn: "Manages archaeological collections and operates creative open stages for regional performers.",
      highlights: [
        "Konservasi 4.000+ Koleksi Arkeologi",
        "Pemanduan Edukasi Sejarah Blambangan",
        "Fasilitasi Ruang Latihan Pertunjukan Seni"
      ],
      route: "/profil/struktur-organisasi"
    }
  ];

  const formerLeaders = [
    {
      name: "Drs. Suprayitno, M.Si",
      period: "2008 – 2011",
      legacyId: "Perintisan Konsep & Re-branding 'The Sunrise of Java'",
      legacyEn: "Pioneered 'The Sunrise of Java' Destination Identity",
      descId: "Menata struktur kelembagaan awal dinas gabungan dan merumuskan pemetaan 10 destinasi wisata rintisan.",
      descEn: "Established initial department structure and mapped out the first 10 flagship tourist destinations.",
      tag: "Fondasi Awal"
    },
    {
      name: "H. Choiril Ustadi Yudawanto, S.Sos, M.Si",
      period: "2011 – 2013",
      legacyId: "Inisiator Banyuwangi Festival (B-Fest) & Gandrung Sewu",
      legacyEn: "Initiator of Banyuwangi Festival & Gandrung Sewu",
      descId: "Memprakarsai penyelenggaraan perdana kalender festival terpadu serta pagelaran kolosal tari Gandrung Sewu.",
      descEn: "Pioneered the integrated festival calendar and inaugurated the massive Gandrung Sewu dance.",
      tag: "Pelopor Festival"
    },
    {
      name: "Drs. M. Yanuarto Bramuda, M.Si, M.AP",
      period: "2013 – 2023",
      legacyId: "Akselerasi Global & Juara Dunia UNWTO PBB Madrid",
      legacyEn: "Global Scale & UNWTO United Nations Champion",
      descId: "Membawa Banyuwangi meraih gelar UNWTO Award bidang Inovasi Kebijakan Publik dan melipatgandakan kunjungan turis.",
      descEn: "Won the prestigious UNWTO Award for Tourism Policy Innovation and multiplied tourist arrivals.",
      tag: "Juara Dunia UNWTO"
    },
    {
      name: "Dra. Hj. Chusnul Khotimah, M.M",
      period: "2023 (Plt)",
      legacyId: "Stabilitas Tata Kelola & Kontinuitas Layanan",
      legacyEn: "Governance Stability & Service Continuity",
      descId: "Menjaga kontinuitas event nasional KEN Kemenparekraf serta memperkuat sinergi mutu pelayanan dinas.",
      descEn: "Maintained continuity for national event agendas and strengthened internal service quality.",
      tag: "Kontinuitas Layanan"
    },
    {
      name: "M. Taufik Kurniawan, S.Sos, M.Si",
      period: "2023 – Sekarang",
      legacyId: "Transformasi Digital, UNESCO Geopark & Desa Mandiri",
      legacyEn: "Digital Transformation & UNESCO Geopark Stewardship",
      descId: "Mengawal status Ijen UNESCO Global Geopark, perlindungan hak cipta seniman, dan integrasi ekosistem wisata desa.",
      descEn: "Champions Ijen UNESCO Global Geopark, IP copyright protections, and digital village ecotourism.",
      tag: "Petahana Aktif"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-20 font-sans text-slate-100 antialiased">
      
      {/* 1. HERO SECTION: 2-KOLOM SEIMBANG (BRANDING KIRI & VISUAL KANAN) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Kolom Kiri: Profil & Kontak Dinas */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c9a24a]/15 border border-[#c9a24a]/30 text-[#e6be64] text-xs font-semibold tracking-wider uppercase font-mono">
            <Building2 className="w-3.5 h-3.5" />
            <span>{isEn ? "OFFICIAL PROFILE • DISBUDPAR" : "PROFIL RESMI • PEMKAB BANYUWANGI"}</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              {isEn
                ? "Department of Culture and Tourism"
                : "Dinas Kebudayaan dan Pariwisata"}
              <span className="block text-[#c9a24a] font-serif font-normal italic text-2xl sm:text-3xl lg:text-4xl mt-1">
                Kabupaten Banyuwangi
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl pt-1">
              {isEn
                ? "Official government authority dedicated to safeguarding indigenous Using heritage, accelerating creative economy subsectors, and driving world-class sustainable ecotourism."
                : "Perangkat daerah resmi Pemerintah Kabupaten Banyuwangi yang bertugas memajukan keluhuran ekosistem kebudayaan, menggerakkan ekonomi kreatif lokal, serta memajukan pariwisata berkelanjutan kelas dunia."}
            </p>
          </div>

          {/* Kartu Kontak Cepat */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#c9a24a]/10 text-[#c9a24a] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-slate-400 font-medium">Alamat Kantor</p>
                <p className="text-xs text-white font-medium truncate">Jl. A. Yani No. 78</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-slate-400 font-medium">Jam Kerja</p>
                <p className="text-xs text-white font-medium truncate">Senin–Jum (07.30–15.30)</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-slate-400 font-medium">Telepon Pelayanan</p>
                <p className="text-xs text-white font-medium truncate">(0333) 424172</p>
              </div>
            </div>
          </div>

          <div>
            <a
              href="https://maps.google.com/?q=Dinas+Kebudayaan+dan+Pariwisata+Kabupaten+Banyuwangi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#c9a24a] hover:bg-[#b89139] text-slate-950 text-xs font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>{isEn ? "Open Google Maps" : "Petunjuk Arah Google Maps"}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Showcase Fasilitas / Balai Pelinggihan */}
        <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-white/10 bg-slate-900/70 shadow-2xl flex flex-col">
          <div className="relative h-60 sm:h-72 w-full overflow-hidden group">
            <img
              src={currentPhoto.src}
              alt={isEn ? currentPhoto.titleEn : currentPhoto.titleId}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-black/60 text-[#e6be64] border border-[#c9a24a]/30 backdrop-blur-md">
                {currentPhoto.badge}
              </span>
            </div>
          </div>

          <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
            <div className="space-y-1.5">
              <h3 className="text-base font-bold text-white">
                {isEn ? currentPhoto.titleEn : currentPhoto.titleId}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {isEn ? currentPhoto.descEn : currentPhoto.descId}
              </p>
            </div>

            {/* Pilihan Foto Tab Navigasi */}
            <div className="pt-3 border-t border-white/10 grid grid-cols-3 gap-2">
              {officePhotos.map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhotoIdx(idx)}
                  className={`py-2 px-1.5 rounded-xl text-[11px] font-mono font-medium transition-all text-center truncate ${
                    activePhotoIdx === idx
                      ? "bg-[#c9a24a] text-slate-950 font-bold shadow"
                      : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5"
                  }`}
                >
                  0{idx + 1}. {photo.badge}
                </button>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* 2. STATS BAR: 4 KARTU BERJARAK LEGA DENGAN IKON & WARNA AKSEN */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-white/20 transition-all shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}15`, color: stat.color }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 tracking-wider font-semibold">
                  0{idx + 1}
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-baseline gap-1.5">
                  {stat.num}
                  <span className="text-lg font-bold" style={{ color: stat.color }}>
                    {stat.unit}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. STRUKTUR KELEMBAGAAN: 6 PILAR BIDANG (EQUAL HEIGHT & AMAN PADDING) */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <span className="text-[#c9a24a] font-mono text-xs font-bold uppercase tracking-[0.2em] block mb-1">
              {isEn ? "INSTITUTIONAL PILLARS" : "STRUKTUR KELEMBAGAAN RESMI"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {isEn
                ? "1 Secretariat, 4 Strategic Divisions & Technical Units"
                : "1 Sekretariat, 4 Bidang Teknis & Unit Pelaksana"}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-light leading-relaxed">
            {isEn
              ? "Operating in synergy to preserve heritage, nurture creative industries, and expand sustainable tourism."
              : "Beroperasi secara sinergis mengawal pemajuan kebudayaan, kurasi industri kreatif, dan pariwisata berkelanjutan."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.code}
              className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-[#c9a24a]/50 transition-all flex flex-col justify-between group shadow-lg backdrop-blur-md relative"
            >
              <div className="space-y-4">
                {/* Header Kartu */}
                <div className="flex items-center justify-between">
                  <span
                    className="px-3 py-1 rounded-full font-mono text-[10px] font-bold tracking-wider uppercase"
                    style={{
                      backgroundColor: `${pillar.color}15`,
                      color: pillar.color,
                      border: `1px solid ${pillar.color}30`
                    }}
                  >
                    {pillar.code}
                  </span>
                  <span className="text-2xl p-1 bg-white/5 rounded-xl">{pillar.icon}</span>
                </div>

                {/* Judul & Subtitle */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#c9a24a] transition-colors">
                    {isEn ? pillar.titleEn : pillar.titleId}
                  </h3>
                  <p className="text-xs text-[#c9a24a] font-medium mt-1">
                    {isEn ? pillar.subEn : pillar.subId}
                  </p>
                </div>

                {/* Deskripsi Singkat */}
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {isEn ? pillar.descEn : pillar.descId}
                </p>

                {/* Poin Strategis */}
                <div className="pt-3 border-t border-white/10 space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                    FOKUS KERJA STRATEGIS
                  </span>
                  <div className="space-y-1.5">
                    {pillar.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c9a24a] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tombol Navigasi (Dengan Safe Padding Agar Tidak Terpotong) */}
              <div className="pt-5 mt-6 border-t border-white/10">
                <Link
                  to={pillar.route}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-[#c9a24a] text-slate-200 hover:text-slate-950 text-xs font-semibold transition-all flex items-center justify-between border border-white/10 hover:border-transparent group/btn"
                >
                  <span className="truncate">{isEn ? "Explore Functions" : "Lihat Halaman / Tupoksi"}</span>
                  <ChevronRight className="w-4 h-4 shrink-0 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. JEJAK KEPEMIMPINAN: TIMELINE DENGAN PADDING LEGA & AKSEN JELAS */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <span className="text-[#c9a24a] font-mono text-xs font-bold uppercase tracking-[0.2em] block mb-1">
              {isEn ? "HISTORICAL TIMELINE" : "JEJAK KEPEMIMPINAN"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {isEn
                ? "Heads of Banyuwangi Culture & Tourism"
                : "Kepala Dinas dari Masa ke Masa"}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-light leading-relaxed">
            {isEn
              ? "Honoring leaders whose dedicated vision shaped Banyuwangi into an international cultural destination."
              : "Apresiasi dedikasi para pimpinan yang meletakkan tonggak kemajuan kebudayaan dan pariwisata Sunrise of Java."}
          </p>
        </div>

        <div className="space-y-4">
          {formerLeaders.map((leader, idx) => {
            const isIncumbent = idx === formerLeaders.length - 1;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all ${
                  isIncumbent
                    ? "bg-slate-900/90 border-[#c9a24a] shadow-xl ring-1 ring-[#c9a24a]/30"
                    : "bg-slate-900/50 border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center font-mono font-bold text-sm shrink-0 ${
                        isIncumbent
                          ? "bg-[#c9a24a] text-slate-950 font-black shadow-md"
                          : "bg-white/5 text-[#c9a24a] border border-white/10"
                      }`}
                    >
                      0{idx + 1}
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                            isIncumbent
                              ? "bg-[#c9a24a] text-slate-950"
                              : "bg-[#c9a24a]/15 text-[#e6be64] border border-[#c9a24a]/30"
                          }`}
                        >
                          {leader.period}
                        </span>
                        <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full border border-sky-500/20">
                          {leader.tag}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {leader.name}
                      </h3>

                      <p className="text-xs text-[#c9a24a] font-medium">
                        {isEn ? leader.legacyEn : leader.legacyId}
                      </p>

                      <p className="text-xs text-slate-300 leading-relaxed max-w-3xl pt-0.5 font-light">
                        {isEn ? leader.descEn : leader.descId}
                      </p>
                    </div>
                  </div>

                  {isIncumbent && (
                    <div className="shrink-0 self-start md:self-center pt-2 md:pt-0">
                      <Link
                        to="/profil/profil-pemimpin"
                        className="px-4 py-2 rounded-xl bg-[#c9a24a] hover:bg-[#b89139] text-slate-950 text-xs font-bold transition-all flex items-center gap-2 shadow"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{isEn ? "Incumbent Profile" : "Profil Petahana"}</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}