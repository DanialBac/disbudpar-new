import { useState } from "react";
import {
  CheckCircle2,
  Sparkles,
  TrendingUp,
  ChevronDown,
  ChevronUp
} from "lucide-react";

interface ProfilVisiMisiProps {
  isEn: boolean;
}

export function ProfilVisiMisi({ isEn }: ProfilVisiMisiProps) {
  const [expandedMisi, setExpandedMisi] = useState<number | null>(0);
  const [selectedBerakhlak, setSelectedBerakhlak] = useState<number>(0);

  const misis = [
    {
      num: "01",
      titleId: "Mewujudkan Sumber Daya Manusia Unggul, Berdaya Saing, dan Berkarakter Luhur",
      titleEn: "Fostering Superior Human Resources with Competitiveness and Noble Character",
      descId: "Meningkatkan kompetensi insan pariwisata, sertifikasi pemandu wisata, penguatan kapasitas pengelola homestay, serta pewarisan nilai adat budaya Using kepada generasi muda Banyuwangi.",
      descEn: "Enhancing the competencies of tourism workers, certifying tour guides, upskilling homestay hosts, and passing down noble indigenous Using heritage to the next generation.",
      tujuanId: "Menciptakan tenaga kerja dan pegiat budaya yang tersertifikasi secara nasional dan internasional.",
      tujuanEn: "Creating a certified, globally competitive cultural and hospitality workforce.",
      programsId: [
        "Sertifikasi BNSP Pemandu Wisata & Pengelola Homestay",
        "Penyelenggaraan Gandrung Goes to School & Sanggar Binaan",
        "Pelatihan Bahasa Asing & Pelayanan Prima (Hospitality)",
        "Pengembangan Kapasitas Pengurus Pokdarwis se-Kabupaten"
      ],
      programsEn: [
        "National BNSP Certification for Tour Guides & Homestay Operators",
        "Gandrung Goes to School & Youth Arts Mentorship",
        "Foreign Language Fluency & Hospitality Excellence Training",
        "Capacity Building for Regency-wide Tourism Awareness Councils"
      ],
      ikuId: "Persentase Tenaga Kerja Pariwisata Tersertifikasi (Target: >85%)"
    },
    {
      num: "02",
      titleId: "Mengembangkan Destinasi Wisata Berkualitas, Berkelanjutan & Berbasis Konservasi",
      titleEn: "Developing High-Quality, Sustainable & Conservation-Driven Destinations",
      descId: "Menjaga kelestarian ekologi Ijen UNESCO Global Geopark, mengoptimalkan daya dukung lingkungan (carrying capacity), memperluas jaringan Desa Wisata mandiri, dan standardisasi sarana prasarana CHSE.",
      descEn: "Conserving the ecology of Ijen UNESCO Global Geopark, balancing environmental carrying capacities, expanding self-reliant Tourism Villages, and CHSE facility standardization.",
      tujuanId: "Menjadikan Banyuwangi sebagai episentrum ekowisata dunia yang lestari dan ramah lingkungan.",
      tujuanEn: "Positioning Banyuwangi as an eco-conscious, sustainable world-class destination hub.",
      programsId: [
        "Konservasi & Edukasi Ijen UNESCO Global Geopark",
        "Pengembangan 25+ Desa Wisata Tematik Berbasis Adat",
        "Audit Berkala CHSE (Cleanliness, Health, Safety, Environment)",
        "Pengelolaan Jalur Evakuasi & Mitigasi Risiko Wisata Alam"
      ],
      programsEn: [
        "Ijen UNESCO Global Geopark Ecological Management",
        "Development of 25+ Thematic Indigenous Tourism Villages",
        "Periodic CHSE Audits Across Natural & Marine Destinations",
        "Natural Hazard Evacuation Routes & Traveler Safety Protocols"
      ],
      ikuId: "Lama Tinggal Wisatawan (Length of Stay: Target 2.8 Hari)"
    },
    {
      num: "03",
      titleId: "Memperkuat Ekosistem Ekonomi Kreatif yang Inklusif dan Berdaya Saing Global",
      titleEn: "Strengthening an Inclusive, Globally Competitive Creative Economy Ecosystem",
      descId: "Mengakselerasi 17 subsektor ekonomi kreatif, kurasi suvenir batik Gajah Oling, kopi rakyat Ijen Robusta, fasilitasi Hak Kekayaan Intelektual (HKI), dan memperluas rantai pasok ke perhotelan.",
      descEn: "Accelerating 17 creative subsectors, curating Gajah Oling batik merchandise, specialty Ijen Robusta coffee, expediting IP copyright patents, and hotel supply chains.",
      tujuanId: "Meningkatkan kontribusi produk kreatif lokal terhadap Pendapatan Domestik Regional Bruto (PDRB).",
      tujuanEn: "Maximizing the revenue contribution of authentic creative MSMEs to regional GDP.",
      programsId: [
        "Fasilitasi Gratis Pendaftaran HKI (Hak Cipta & Merek) Pelaku Ekraf",
        "Pemberdayaan Klinik Inovasi Kreatif (KIK) Banyuwangi",
        "Kurasi & Showcase Produk Ekraf di Terminal Wisata Terpadu",
        "Penyelenggaraan Festival Batik Banyuwangi & Coffee Week"
      ],
      programsEn: [
        "Complimentary Intellectual Property Patent Registrations",
        "Creative Innovation Clinic (KIK) Consultation Hub",
        "Product Showcases at Integrated Tourism Gateways",
        "Banyuwangi Batik Festival & Coffee Week Exhibitions"
      ],
      ikuId: "Jumlah Pelaku Ekraf Terfasilitasi HKI (Target: 500+ HKI Baru)"
    },
    {
      num: "04",
      titleId: "Melindungi, Melestarikan, dan Merevitalisasi Warisan Seni Budaya Daerah",
      titleEn: "Safeguarding, Conserving, and Revitalizing Regional Cultural Heritage",
      descId: "Melindungi cagar budaya bersejarah peninggalan Kerajaan Blambangan, merevitalisasi bahasa dan sastra Using, mencatatkan Warisan Budaya Takbenda (WBTb), dan mendukung kesejahteraan seniman tradisi.",
      descEn: "Preserving historical monuments of the Blambangan Kingdom, reviving the Using dialect, registering Intangible Cultural Heritage, and ensuring traditional artisans' welfare.",
      tujuanId: "Memastikan kelestarian warisan leluhur sebagai identitas martabat jati diri wong Using.",
      tujuanEn: "Ensuring timeless transmission of indigenous traditions as the pride of the Using community.",
      programsId: [
        "Inventarisasi & Ekskavasi Penyelamatan Cagar Budaya",
        "Pencatatan WBTb Nasional & Dunia (Gandrung, Seblang, Kebo-keboan)",
        "Program Pembinaan & Insentif Kinerja Sanggar Tradisi",
        "Penerbitan Buku Muatan Lokal Budaya Using untuk Pendidikan"
      ],
      programsEn: [
        "Archaeological Heritage Monument Registration & Conservation",
        "National & UNESCO Intangible Cultural Heritage Filings",
        "Capacity Subsidies & Mentorship for 200+ Traditional Troupes",
        "Indigenous Using Culture School Curriculum Publications"
      ],
      ikuId: "Persentase Cagar Budaya & Objek Pemajuan Terlindungi (Target: 100%)"
    },
    {
      num: "05",
      titleId: "Meningkatkan Akuntabilitas Tata Kelola Birokrasi & Pelayanan Publik Digital",
      titleEn: "Enhancing Bureaucratic Accountability & Digital Public Services",
      descId: "Mewujudkan tata kelola dinas yang transparan, akuntabel dengan predikat SAKIP A, mengintegrasikan sistem informasi data pariwisata satu pintu, serta mempercepat perizinan seni budaya.",
      descEn: "Upholding transparent, accountable SAKIP A-grade governance, integrating unified tourism data portals, and accelerating cultural permit services.",
      tujuanId: "Menghadirkan pelayanan prima birokrasi yang adaptif, bersih, transparan, dan terpercaya.",
      tujuanEn: "Delivering agile, honest, transparent, and trustworthy public services.",
      programsId: [
        "Pengembangan Portal Satu Data Pariwisata & Kebudayaan",
        "Digitalisasi Layanan Izin Rekomendasi Pentas Seni & Pemakaian Balai",
        "Implementasi Standar Pelayanan Publik Bebas Pungli (Zona Integritas)",
        "Publikasi Terbuka Dokumen Renstra, Renja, LKjIP & Keuangan"
      ],
      programsEn: [
        "One-Stop Banyuwangi Tourism & Culture Unified Data Engine",
        "Paperless Permit Approvals for Cultural Performances",
        "Integrity Zone Anti-Corruption Service Certification",
        "Open-Access Publication of Renstra, Renja, and SAKIP Blueprints"
      ],
      ikuId: "Indeks Kepuasan Masyarakat (IKM Layanan: Target 88.5 / Kategori Sangat Baik)"
    },
  ];

  const berakhlakList = [
    {
      name: "Berorientasi Pelayanan",
      tag: "Komitmen Prima",
      color: "#38bdf8",
      panduan: [
        "Memahami dan memenuhi kebutuhan masyarakat, wisatawan, serta budayawan secara solutif.",
        "Ramah, cekatan, solutif, dan dapat diandalkan dalam setiap loket pelayanan publik.",
        "Melakukan perbaikan berkelanjutan pada sistem informasi pariwisata."
      ]
    },
    {
      name: "Akuntabel",
      tag: "Bertanggung Jawab",
      color: "#10b981",
      panduan: [
        "Melaksanakan tugas dengan jujur, bertanggung jawab, cermat, disiplin, dan berintegritas tinggi.",
        "Menggunakan kekayaan dan barang milik daerah secara bertanggung jawab, efektif, dan efisien.",
        "Tidak menyalahgunakan kewenangan jabatan dalam perizinan maupun pengelolaan anggaran festival."
      ]
    },
    {
      name: "Kompeten",
      tag: "Terus Belajar",
      color: "#f59e0b",
      panduan: [
        "Meningkatkan kompetensi diri untuk menjawab tantangan industri pariwisata yang selalu dinamis.",
        "Membantu orang lain dan pelaku UMKM kreatif untuk terus bertumbuh dan belajar.",
        "Melaksanakan tugas dinas dengan kualitas terbaik dan standar profesionalisme tinggi."
      ]
    },
    {
      name: "Harmonis",
      tag: "Saling Peduli",
      color: "#ec4899",
      panduan: [
        "Menghargai setiap orang apapun latar belakang suku, agama, dan afiliasi budayanya.",
        "Suka menolong sesama rekan aparatur dan pegiat seni yang membutuhkan pendampingan.",
        "Membangun lingkungan kerja dinas yang kondusif, guyub, dan penuh rasa kekeluargaan."
      ]
    },
    {
      name: "Loyal",
      tag: "Berdedikasi Tinggi",
      color: "#a855f7",
      panduan: [
        "Memegang teguh ideologi Pancasila, UUD 1945, NKRI, serta pemerintahan yang sah.",
        "Menjaga nama baik sesama ASN, pimpinan Pemkab Banyuwangi, instansi, dan negara.",
        "Menjaga rahasia jabatan dan rahasia kedinasan sesuai regulasi yang berlaku."
      ]
    },
    {
      name: "Adaptif",
      tag: "Inovatif & Lincah",
      color: "#06b6d4",
      panduan: [
        "Cepat menyesuaikan diri menghadapi perubahan tren pariwisata global dan kemajuan teknologi.",
        "Terus berinovasi dan mengembangkan kreativitas dalam penyelenggaraan event daerah.",
        "Bertindak proaktif dalam menyelesaikan hambatan yang dihadapi pelaku wisata di lapangan."
      ]
    },
    {
      name: "Kolaboratif",
      tag: "Sinergi Bersama",
      color: "#e2b168",
      panduan: [
        "Memberi kesempatan kepada berbagai pihak (akademisi, bisnis, komunitas, pemerintah, media) untuk berkontribusi.",
        "Terbuka dalam bekerja sama untuk menghasilkan nilai tambah bagi perekonomian warga.",
        "Menggerakkan pemanfaatan berbagai sumber daya untuk mencapai tujuan bersama."
      ]
    },
  ];

  const currentBerakhlak = berakhlakList[selectedBerakhlak];

  return (
    <div className="space-y-16">
      {/* 1. OFFICIAL VISION PROCLAMATION: Open, Airy, Majestic (Gambar 2 Style) */}
      <section className="relative space-y-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c9a24a]/12 border border-[#c9a24a]/30 text-[#c9a24a] text-xs font-bold tracking-[0.16em] uppercase font-mono shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isEn ? "PILLAR 02 • REGIONAL VISION & MISSION" : "SUB-MENU 02 • VISI & MISI RESMI"}</span>
          </div>

          <h1 className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-[1.25] tracking-tight">
            {isEn
              ? "“Realizing an Advanced, Prosperous, and Culturally Dignified Banyuwangi Anchored in Sustainable World-Class Tourism”"
              : "“Terwujudnya Banyuwangi yang Maju, Sejahtera, dan Berkah melalui Penguatan Pariwisata Berkelanjutan dan Pelestarian Nilai Budaya yang Luhur”"}
          </h1>

          <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed font-light">
            {isEn
              ? "A synchronized commitment anchored in the Medium-Term Regional Development Plan (RPJMD), establishing cultural pride and sustainable ecotourism as the primary engine for equitable economic prosperity."
              : "Komitmen terpadu yang selaras dengan Rencana Pembangunan Jangka Menengah Daerah (RPJMD) Kabupaten Banyuwangi, menempatkan keluhuran budaya dan pariwisata hijau sebagai lokomotif utama pertumbuhan ekonomi kerakyatan."}
          </p>
        </div>

        {/* 3 Core Pillars of Vision in Gambar 2 card style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="rounded-2xl bg-[rgba(14,23,33,0.75)] border border-white/[0.1] p-6 backdrop-blur-md hover:border-[#38bdf8]/40 transition-all shadow-lg space-y-2">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-[#38bdf8] tracking-widest uppercase px-2.5 py-0.5 rounded bg-[#38bdf8]/10 border border-[#38bdf8]/20">
                PILAR 01
              </span>
              <span className="text-xl">🏛️</span>
            </div>
            <h3 className="text-base font-bold text-white">Keluhuran Budaya Using</h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
              Pondasi moral, kearifan lokal, perlindungan cagar budaya bersejarah, dan pewarisan tradisi leluhur Blambangan.
            </p>
          </div>

          <div className="rounded-2xl bg-[rgba(14,23,33,0.75)] border border-white/[0.1] p-6 backdrop-blur-md hover:border-[#10b981]/40 transition-all shadow-lg space-y-2">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-[#10b981] tracking-widest uppercase px-2.5 py-0.5 rounded bg-[#10b981]/10 border border-[#10b981]/20">
                PILAR 02
              </span>
              <span className="text-xl">🌿</span>
            </div>
            <h3 className="text-base font-bold text-white">Pariwisata Hijau Berkelanjutan</h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
              Ijen UNESCO Global Geopark, ecotourism ramah lingkungan, Desa Wisata mandiri, dan standardisasi CHSE.
            </p>
          </div>

          <div className="rounded-2xl bg-[rgba(14,23,33,0.75)] border border-white/[0.1] p-6 backdrop-blur-md hover:border-[#c9a24a]/40 transition-all shadow-lg space-y-2">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-[#c9a24a] tracking-widest uppercase px-2.5 py-0.5 rounded bg-[#c9a24a]/10 border border-[#c9a24a]/20">
                PILAR 03
              </span>
              <span className="text-xl">✨</span>
            </div>
            <h3 className="text-base font-bold text-white">Ekonomi Kreatif &amp; Kerakyatan</h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
              Pemberdayaan 17 subsektor ekraf, pengrajin batik Gajah Oling, kopi rakyat Ijen, serta rantai pasok homestay warga.
            </p>
          </div>
        </div>
      </section>

      {/* 2. 5 STRATEGIC MISSIONS (Expandable & Interactive) */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.08] pb-4">
          <div>
            <span className="text-[#c9a24a] font-mono text-xs font-semibold uppercase tracking-[0.2em]">
              {isEn ? "5 STRATEGIC MISSIONS" : "5 MISI STRATEGIS OPERASIONAL"}
            </span>
            <h2 className="font-editorial text-2xl md:text-3xl text-[#dfe7e0] mt-1">
              {isEn ? "Action Agenda & Performance Indicators" : "Arah Kebijakan, Program & Indikator Capaian"}
            </h2>
          </div>
          <p className="text-xs text-[#78837c] max-w-md font-light">
            {isEn
              ? "Click each mission card to inspect priority programs and targeted Key Performance Indicators (KPI)."
              : "Klik kartu misi untuk meninjau rincian program prioritas dan target Indikator Kinerja Utama (IKU)."}
          </p>
        </div>

        <div className="space-y-3.5">
          {misis.map((m, idx) => {
            const isExpanded = expandedMisi === idx;
            return (
              <div
                key={m.num}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isExpanded
                    ? "bg-[rgba(14,23,34,0.9)] border-[#c9a24a]/50 shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
                    : "bg-[rgba(12,19,27,0.65)] border-white/[0.08] hover:border-white/[0.18]"
                }`}
              >
                {/* Header Row */}
                <button
                  onClick={() => setExpandedMisi(isExpanded ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 transition-colors hover:bg-white/[0.02]"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] text-[#c9a24a] font-mono font-bold flex items-center justify-center text-xs flex-shrink-0 shadow-inner">
                      {m.num}
                    </span>

                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base font-semibold text-[#dfe7e0] leading-snug">
                        {isEn ? m.titleEn : m.titleId}
                      </h3>
                      <p className="text-xs text-[#78837c] leading-relaxed line-clamp-2">
                        {isEn ? m.descEn : m.descId}
                      </p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#c9a24a]">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-white/[0.06] space-y-4 bg-black/20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                      
                      {/* Left: Tujuan & Program */}
                      <div className="lg:col-span-8 space-y-3">
                        <div>
                          <span className="text-[10px] font-mono text-[#c9a24a] uppercase tracking-wider block font-bold">
                            TUJUAN STRATEGIS:
                          </span>
                          <p className="text-xs sm:text-sm text-[#dfe7e0] font-medium mt-0.5">
                            {isEn ? m.tujuanEn : m.tujuanId}
                          </p>
                        </div>

                        <div>
                          <span className="text-[10px] font-mono text-[#78837c] uppercase tracking-wider block font-bold mb-1.5">
                            PROGRAM PRIORITAS OPERASIONAL:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {(isEn ? m.programsEn : m.programsId).map((prog, pIdx) => (
                              <div key={pIdx} className="flex items-start gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-[#aab4ad]">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#c9a24a] flex-shrink-0 mt-0.5" />
                                <span>{prog}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: IKU Card */}
                      <div className="lg:col-span-4 p-4 rounded-xl bg-white/[0.04] border border-white/[0.1] space-y-2 flex flex-col justify-center">
                        <div className="flex items-center gap-2 text-[#c9a24a]">
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                            TARGET CAPAIAN (IKU)
                          </span>
                        </div>
                        <p className="text-xs text-[#dfe7e0] font-medium leading-relaxed">
                          {m.ikuId}
                        </p>
                        <span className="text-[10px] font-mono text-[#10b981] bg-[#10b981]/15 px-2 py-0.5 rounded self-start">
                          Terukur &amp; Terverifikasi SAKIP
                        </span>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. TARGET INDIKATOR KINERJA UTAMA (IKU DASHBOARD) */}
      <section className="p-6 sm:p-8 rounded-3xl bg-[rgba(12,19,27,0.75)] border border-white/[0.1] backdrop-blur-xl space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-4">
          <div>
            <span className="text-[#c9a24a] font-mono text-xs font-semibold uppercase tracking-[0.2em]">
              {isEn ? "PERFORMANCE KPI DASHBOARD" : "INDIKATOR KINERJA UTAMA (IKU) TARGET 2026"}
            </span>
            <h3 className="font-editorial text-xl sm:text-2xl text-[#dfe7e0] mt-1">
              {isEn ? "Regency Key Performance Targets" : "Target Sasaran Pembangunan Pariwisata & Budaya"}
            </h3>
          </div>
          <span className="text-xs text-[#78837c] font-mono">Sumber: Perjanjian Kinerja Resmi Disbudpar</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1 hover:border-[#10b981]/40 transition-colors">
            <span className="text-[10px] font-mono text-[#78837c] uppercase tracking-wider block">KUNJUNGAN WISATAWAN</span>
            <span className="text-2xl sm:text-3xl font-light text-[#f0f5f1] font-mono block">5.200.000+</span>
            <span className="text-[11px] text-[#10b981] flex items-center gap-1 font-mono">
              <TrendingUp className="w-3 h-3" /> Wisnus &amp; Wisman
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1 hover:border-[#38bdf8]/40 transition-colors">
            <span className="text-[10px] font-mono text-[#78837c] uppercase tracking-wider block">LAMA TINGGAL (LOS)</span>
            <span className="text-2xl sm:text-3xl font-light text-[#f0f5f1] font-mono block">2,85 Hari</span>
            <span className="text-[11px] text-[#38bdf8] block font-mono">Meningkat dari 2,4 Hari</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1 hover:border-[#c9a24a]/40 transition-colors">
            <span className="text-[10px] font-mono text-[#78837c] uppercase tracking-wider block">INDEKS KEPUASAN (IKM)</span>
            <span className="text-2xl sm:text-3xl font-light text-[#f0f5f1] font-mono block">88,75 / 100</span>
            <span className="text-[11px] text-[#c9a24a] block font-mono">Predikat Sangat Baik (A)</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1 hover:border-[#ec4899]/40 transition-colors">
            <span className="text-[10px] font-mono text-[#78837c] uppercase tracking-wider block">CAGAR BUDAYA TERDATA</span>
            <span className="text-2xl sm:text-3xl font-light text-[#f0f5f1] font-mono block">100%</span>
            <span className="text-[11px] text-[#ec4899] block font-mono">Tersertifikasi Pemkab</span>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES ASN BerAKHLAK (Interactive Guide) */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.08] pb-4">
          <div>
            <span className="text-[#c9a24a] font-mono text-xs font-semibold uppercase tracking-[0.2em]">
              {isEn ? "ORGANIZATIONAL CULTURE" : "TATA NILAI BUDAYA KERJA APARATUR"}
            </span>
            <h2 className="font-editorial text-2xl md:text-3xl text-[#dfe7e0] mt-1">
              {isEn ? "ASN Core Values: BerAKHLAK" : "Nilai Dasar ASN: BerAKHLAK & Pedoman Perilaku"}
            </h2>
          </div>
          <p className="text-xs text-[#78837c] max-w-md font-light">
            {isEn
              ? "Standardized ethical code and performance foundation practiced across all Disbudpar personnel."
              : "Pedoman perilaku kerja seluruh aparatur Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi."}
          </p>
        </div>

        {/* BerAKHLAK Buttons Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
          {berakhlakList.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedBerakhlak(idx)}
              className={`p-3.5 rounded-2xl text-center border transition-all ${
                selectedBerakhlak === idx
                  ? "bg-[rgba(14,23,34,0.95)] border-[#c9a24a]/60 shadow-[0_8px_24px_rgba(0,0,0,0.4)] ring-1 ring-[#c9a24a]/30"
                  : "bg-[rgba(12,19,27,0.6)] border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.16]"
              }`}
            >
              <div
                className="w-9 h-9 mx-auto rounded-xl flex items-center justify-center font-mono font-bold text-sm mb-2 shadow-inner"
                style={{ backgroundColor: `${item.color}20`, color: item.color, border: `1px solid ${item.color}35` }}
              >
                {item.name[0]}
              </div>
              <span className="text-xs font-semibold text-[#dfe7e0] block truncate leading-tight">
                {item.name}
              </span>
              <span className="text-[10px] text-[#78837c] block mt-0.5 truncate font-mono">
                {item.tag}
              </span>
            </button>
          ))}
        </div>

        {/* Selected BerAKHLAK Detail Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[rgba(12,19,27,0.78)] border border-white/[0.1] backdrop-blur-xl space-y-5 shadow-xl">
          <div className="flex items-center gap-3 border-b border-white/[0.06] pb-4">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-bold text-lg shadow-inner"
              style={{ backgroundColor: `${currentBerakhlak.color}25`, color: currentBerakhlak.color, border: `1px solid ${currentBerakhlak.color}40` }}
            >
              {currentBerakhlak.name[0]}
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#c9a24a] uppercase tracking-widest block font-semibold">
                PANDUAN PERILAKU UTAMA:
              </span>
              <h4 className="text-base sm:text-lg font-semibold text-[#dfe7e0]">
                {currentBerakhlak.name} ({currentBerakhlak.tag})
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentBerakhlak.panduan.map((p, pIdx) => (
              <div key={pIdx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2 hover:border-white/[0.12] transition-colors">
                <span
                  className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-mono font-bold"
                  style={{ backgroundColor: `${currentBerakhlak.color}25`, color: currentBerakhlak.color }}
                >
                  0{pIdx + 1}
                </span>
                <p className="text-xs text-[#aab4ad] leading-relaxed">
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
