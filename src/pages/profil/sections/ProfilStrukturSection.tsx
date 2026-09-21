import { useState } from "react";
import {
  Layers,
  Search,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

interface ProfilStrukturProps {
  isEn: boolean;
}

interface UnitDetail {
  id: string;
  badge: string;
  titleId: string;
  titleEn: string;
  leadId: string;
  leadEn: string;
  nip: string;
  color: string;
  icon: string;
  dasarHukum: string;
  subUnitsId: string[];
  subUnitsEn: string[];
  tupoksiId: string[];
  tupoksiEn: string[];
  layananPublik: string[];
  route?: string;
}

export function ProfilStruktur({ isEn }: ProfilStrukturProps) {
  const [activeUnitId, setActiveUnitId] = useState<string>("kadis");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeView, setActiveView] = useState<"chart" | "search">("chart");

  const units: UnitDetail[] = [
    {
      id: "kadis",
      badge: "PIMPINAN TERTINGGI (ESELON II.B)",
      titleId: "Kepala Dinas Kebudayaan dan Pariwisata",
      titleEn: "Head of Culture and Tourism Office",
      leadId: "M. Taufik Kurniawan, S.Sos, M.Si",
      leadEn: "M. Taufik Kurniawan, S.Sos, M.Si",
      nip: "19750812 199803 1 005",
      color: "#e2b168",
      icon: "👑",
      dasarHukum: "Perbup Banyuwangi No. 8 Tahun 2016 Bab III Pasal 4",
      subUnitsId: [
        "Membawahkan 1 Sekretariat Dinas",
        "Membawahkan 4 Bidang Teknis Urusan",
        "Membawahkan 2 UPTD Pelaksana Teknis",
        "Membawahkan Kelompok Jabatan Fungsional"
      ],
      subUnitsEn: [
        "Directs Agency Secretariat",
        "Directs 4 Technical Operating Divisions",
        "Directs 2 Regional Technical Units",
        "Oversees Functional Expert Staff Groups"
      ],
      tupoksiId: [
        "Memimpin, mengoordinasikan, membina, dan mengendalikan seluruh pelaksanaan urusan pemerintahan daerah di bidang kebudayaan dan kepariwisataan.",
        "Merumuskan kebijakan teknis rencana strategis (Renstra) 5 tahunan dan rencana kerja tahunan (Renja) dinas.",
        "Menetapkan rekomendasi strategis tata kelola destinasi, kalender festival internasional (B-Fest), dan perlindungan cagar budaya daerah.",
        "Membangun kemitraan pentahelix dengan kementerian, asosiasi pariwisata, lembaga internasional (UNESCO/UNWTO), serta paguyuban adat Using.",
        "Mengendalikan akuntabilitas kinerja instansi pemerintah (SAKIP) dan penggunaan anggaran daerah secara transparan."
      ],
      tupoksiEn: [
        "Leading, coordinating, guiding, and controlling municipal public governance in culture and tourism sectors.",
        "Formulating strategic blueprints (Renstra) and annual institutional action programs (Renja).",
        "Issuing executive endorsements for destination management, international festivals, and heritage protections.",
        "Forging pentahelix partnerships with ministries, travel associations, international bodies (UNESCO/UNWTO), and Using tribes.",
        "Safeguarding institutional performance accountability (SAKIP) and transparent public resource allocations."
      ],
      layananPublik: [
        "Konsultasi Kebijakan Pariwisata Makro",
        "Audiensi & Kemitraan Strategis Daerah",
        "Pemberian Rekomendasi Event Skala Internasional"
      ],
      route: "/profil/profil-pemimpin"
    },
    {
      id: "sekretariat",
      badge: "KOORDINASI ADMINISTRASI (ESELON III.A)",
      titleId: "Sekretariat Dinas",
      titleEn: "Agency Secretariat",
      leadId: "Sekretaris Dinas",
      leadEn: "Agency Secretary",
      nip: "19780415 200212 1 003",
      color: "#38bdf8",
      icon: "🏢",
      dasarHukum: "Perbup Banyuwangi No. 8 Tahun 2016 Bab IV Pasal 8",
      subUnitsId: [
        "Sub Bagian Penyusunan Program dan Keuangan",
        "Sub Bagian Umum dan Kepegawaian"
      ],
      subUnitsEn: [
        "Sub-Division of Work Programming and Finance",
        "Sub-Division of General Administration and HR"
      ],
      tupoksiId: [
        "Mengkoordinasikan perumusan rencana kerja tahunan (Renja), rencana strategis (Renstra), indikator kinerja utama (IKU), dan laporan LKjIP.",
        "Menyelenggarakan penatausahaan administrasi keuangan, pembayaran gaji aparatur, pengelolaan kas, dan pelaporan pertanggungjawaban anggaran.",
        "Melaksanakan tata kelola administrasi kepegawaian, pembinaan disiplin ASN, kenaikan pangkat, dan pengembangan kompetensi aparatur dinas.",
        "Mengelola urusan surat-menyurat dinas, kearsipan elektronik, kerumahtanggaan kantor, keprotokolan, serta pengadaan perlengkapan kantor.",
        "Mengkoordinasikan tindak lanjut hasil pemeriksaan dan audit Inspektorat Daerah maupun Badan Pemeriksa Keuangan (BPK)."
      ],
      tupoksiEn: [
        "Coordinating institutional Renja, Renstra, KPI indicators, and LKjIP accountability reporting.",
        "Administering budgetary financial affairs, payroll, treasury governance, and audit accounting reports.",
        "Managing civil servant personnel affairs, HR training, promotion tracks, and code-of-conduct enforcement.",
        "Directing official correspondence, digital archiving, building maintenance, logistics, and protocol.",
        "Handling regulatory compliance and municipal inspectorate statutory audit resolutions."
      ],
      layananPublik: [
        "Pelayanan Surat Keterangan Magang / Penelitian Mahasiswa",
        "Permohonan Data Terbuka Publik (PPID)",
        "Pelayanan Kearsipan & Administrasi Kerja Sama"
      ],
      route: "/profil/dokumen"
    },
    {
      id: "pariwisata",
      badge: "PILAR TEKNIS 01 (ESELON III.B)",
      titleId: "Bidang Pariwisata & Destinasi",
      titleEn: "Tourism & Destinations Division",
      leadId: "Kepala Bidang Pariwisata",
      leadEn: "Head of Tourism Division",
      nip: "19800620 200604 1 011",
      color: "#38bdf8",
      icon: "🏝️",
      dasarHukum: "Perbup Banyuwangi No. 8 Tahun 2016 Bab V Pasal 14",
      subUnitsId: [
        "Seksi Pengembangan Daya Tarik Wisata",
        "Seksi Tata Kelola Usaha & Industri Pariwisata",
        "Seksi Kelembagaan & Pembinaan Pokdarwis"
      ],
      subUnitsEn: [
        "Tourist Attractions Development Section",
        "Tourism Business Standardization Section",
        "Institutional Mentorship & Pokdarwis Section"
      ],
      tupoksiId: [
        "Menyusun rencana induk pembangunan kepariwisataan daerah (Ripparkab) dan zonasi kawasan destinasi unggulan.",
        "Melakukan standardisasi, verifikasi teknis, dan sertifikasi CHSE (Cleanliness, Health, Safety, Environment) bagi objek wisata dan hotel.",
        "Melaksanakan pembinaan dan pendampingan bagi Kelompok Sadar Wisata (Pokdarwis) serta pengelola Desa Wisata tematik se-Banyuwangi.",
        "Melakukan audit keselamatan sarana wisata tirta, wisata petualangan alam pegunungan, dan pemantauan daya dukung lingkungan (carrying capacity).",
        "Memfasilitasi peningkatan kualitas homestay warga lokal sesuai standar internasional ASEAN Tourism Standard."
      ],
      tupoksiEn: [
        "Formulating municipal tourism masterplans (Ripparkab) and eco-zoning blueprints.",
        "Conducting safety audits, compliance certifications, and CHSE standardizations for attraction sites.",
        "Guiding village tourism councils (Pokdarwis) and rural homestay operators across thematic clusters.",
        "Auditing aquatic and mountaineering adventure sports safety and destination carrying capacity thresholds.",
        "Upgrading community homestay standards to meet ASEAN Tourism Standard specifications."
      ],
      layananPublik: [
        "Rekomendasi Teknis Tanda Daftar Usaha Pariwisata (TDUP)",
        "Verifikasi & Fasilitasi Sertifikasi CHSE Usaha Wisata",
        "Pembinaan & Pendampingan Legalitas Pokdarwis Desa Wisata"
      ],
      route: "/pariwisata"
    },
    {
      id: "ekraf",
      badge: "PILAR TEKNIS 02 (ESELON III.B)",
      titleId: "Bidang Ekonomi Kreatif (E-Kraf)",
      titleEn: "Creative Economy Division",
      leadId: "Kepala Bidang Ekonomi Kreatif",
      leadEn: "Head of Creative Economy Division",
      nip: "19830214 200903 2 004",
      color: "#ec4899",
      icon: "🎨",
      dasarHukum: "Perbup Banyuwangi No. 8 Tahun 2016 Bab VI Pasal 19",
      subUnitsId: [
        "Seksi Pengembangan 17 Subsektor Ekraf",
        "Seksi Fasilitasi Hak Kekayaan Intelektual (HKI) & Kemitraan",
        "Seksi Kurasi Produk & Klinik Inovasi Kreatif (KIK)"
      ],
      subUnitsEn: [
        "17 Creative Subsectors Incubation Section",
        "IP Rights & Commercial Partnerships Section",
        "Product Curation & Creative Innovation Clinic (KIK)"
      ],
      tupoksiId: [
        "Mengembangkan potensi 17 subsektor ekonomi kreatif, khususnya kriya batik Using, seni pertunjukan, kuliner tradisional, fesyen, dan musik.",
        "Memfasilitasi pendaftaran Hak Cipta, Merek, dan Paten Hak Kekayaan Intelektual (HKI) secara cuma-cuma bagi seniman dan pengrajin lokal.",
        "Mengoperasikan Klinik Inovasi Kreatif (KIK) untuk pendampingan kemasan, kurasi rasa, dan digital marketing bagi pelaku UMKM kreatif.",
        "Membangun jejaring rantai pasok antara suvenir produk lokal dengan jaringan hotel berbintang, pusat oleh-oleh, dan bandara.",
        "Menyelenggarakan workshop desain, kriya bambu, batik pewarna alam, dan inkubasi start-up kreatif anak muda Banyuwangi."
      ],
      tupoksiEn: [
        "Nurturing 17 creative subsectors, with deep focus on Using batik crafts, performing arts, specialty coffee, and music.",
        "Facilitating zero-cost official IP copyright and trademark patent applications for artisans and innovators.",
        "Operating the Creative Innovation Clinic (KIK) for packaging redesign, branding, and digital e-commerce scaling.",
        "Connecting local souvenir producers into regional hospitality supply chains, gift centers, and airports.",
        "Hosting craft masterclasses, natural-dye batik workshops, and youth creative start-up incubators."
      ],
      layananPublik: [
        "Fasilitasi Gratis Pendaftaran HKI (Hak Cipta & Merek)",
        "Konsultasi Klinik Inovasi Kreatif & Redesain Kemasan Produk",
        "Kurasi Suvenir Resmi Banyuwangi Festival"
      ],
      route: "/ekraf"
    },
    {
      id: "kebudayaan",
      badge: "PILAR TEKNIS 03 (ESELON III.B)",
      titleId: "Bidang Kebudayaan & Adat",
      titleEn: "Culture & Heritage Division",
      leadId: "Kepala Bidang Kebudayaan",
      leadEn: "Head of Culture Division",
      nip: "19790918 200501 1 008",
      color: "#e2b168",
      icon: "🏛️",
      dasarHukum: "Perbup Banyuwangi No. 8 Tahun 2016 Bab VII Pasal 24",
      subUnitsId: [
        "Seksi Cagar Budaya & Permuseuman",
        "Seksi Kesenian Tradisional & Adat Using",
        "Seksi Sejarah, Nilai Budaya & Bahasa Daerah"
      ],
      subUnitsEn: [
        "Heritage Monuments & Museums Section",
        "Traditional Arts & Using Customs Section",
        "History, Cultural Values & Local Dialect Section"
      ],
      tupoksiId: [
        "Melaksanakan registrasi, penetapan, pelindungan, dan pemugaran situs Cagar Budaya bersejarah peninggalan Kerajaan Blambangan.",
        "Melakukan pembinaan dan verifikasi legalitas izin operasional sanggar seni tari Gandrung, jaranan buto, mocoan pacul gowang, dan teater Using.",
        "Mendokumentasikan dan mendaftarkan Warisan Budaya Takbenda (WBTb) Indonesia ke Kementerian Kebudayaan dan UNESCO.",
        "Mengembangkan kurikulum muatan lokal bahasa dan sastra Using untuk sekolah dasar dan menengah di Kabupaten Banyuwangi.",
        "Memfasilitasi penyelenggaraan ritual adat sakral masyarakat Using (Seblang Bakungan, Seblang Olehsari, Kebo-keboan, Tumpeng Sewu)."
      ],
      tupoksiEn: [
        "Registering, surveying, and restoring archaeological Cagar Budaya monuments from the Blambangan Kingdom.",
        "Accrediting and verifying operational permits for Gandrung, Jaranan, and indigenous Using performing arts academies.",
        "Documenting and filing Intangible Cultural Heritage (WBTb) applications to national authorities and UNESCO.",
        "Developing Using language and folk literature local content textbooks for regency schools.",
        "Facilitating indigenous sacred ceremonies (Seblang Bakungan, Seblang Olehsari, Kebo-keboan, Tumpeng Sewu)."
      ],
      layananPublik: [
        "Pemberian Surat Rekomendasi Pentas Seni Tradisional / Sanggar",
        "Pendaftaran & Inventarisasi Objek Cagar Budaya",
        "Fasilitasi Riset Sejarah & Budaya Suku Using"
      ],
      route: "/kebudayaan"
    },
    {
      id: "pemasaran",
      badge: "PILAR TEKNIS 04 (ESELON III.B)",
      titleId: "Bidang Pemasaran Pariwisata",
      titleEn: "Tourism Marketing Division",
      leadId: "Kepala Bidang Pemasaran",
      leadEn: "Head of Marketing Division",
      nip: "19821105 200801 1 014",
      color: "#10b981",
      icon: "📢",
      dasarHukum: "Perbup Banyuwangi No. 8 Tahun 2016 Bab VIII Pasal 29",
      subUnitsId: [
        "Seksi Manajemen Event & Kalender B-Fest",
        "Seksi Promosi & Informasi Pariwisata Digital",
        "Seksi Kemitraan & Kerjasama Antar-Lembaga"
      ],
      subUnitsEn: [
        "Event Management & B-Fest Calendar Section",
        "Digital Tourism Marketing & Media Section",
        "Inter-Agency Partnerships Section"
      ],
      tupoksiId: [
        "Menyusun, mengkurasi, dan memproduksi agenda tahunan Banyuwangi Festival (B-Fest) dan Kharisma Event Nusantara (KEN).",
        "Mengelola branding pariwisata 'Majestic Banyuwangi' melalui portal resmi, media sosial resmi, dan publikasi multimedia promosi.",
        "Menyelenggarakan pameran pariwisata, direct sales, dan buyer-meets-seller travel mart di kota-kota besar Indonesia maupun internasional.",
        "Membangun kolaborasi promosi dengan maskapai penerbangan, perhotelan, asosiasi biro perjalanan (ASITA, PHRI), dan media massa nasional.",
        "Mengelola pusat informasi pariwisata (Tourist Information Center / TIC) di bandara dan titik gerbang kedatangan wisatawan."
      ],
      tupoksiEn: [
        "Curating, coordinating, and staging the official Banyuwangi Festival (B-Fest) and national KEN event calendars.",
        "Administering the 'Majestic Banyuwangi' tourism brand identity across digital engines and official media.",
        "Organizing travel trade expos, domestic roadshows, and international tourism fair booths.",
        "Executing strategic joint promotions with commercial airlines, hotel chains, ASITA, and media conglomerates.",
        "Operating Tourist Information Centers (TIC) at Banyuwangi Airport and transit gateways."
      ],
      layananPublik: [
        "Publikasi & Promosi Event Wisata di Portal Resmi",
        "Fasilitasi Media Liputan & Jurnalistik Wisata (Famtrip)",
        "Pelayanan Informasi Wisata Terpadu di Tourist Information Center"
      ],
      route: "/pemasaran"
    },
    {
      id: "uptd",
      badge: "UNIT PELAKSANA TEKNIS DAERAH",
      titleId: "UPTD Museum Blambangan & UPTD Taman Budaya",
      titleEn: "Museum Blambangan & Cultural Park Units",
      leadId: "Kepala UPTD",
      leadEn: "Head of Regional Technical Units",
      nip: "19840510 201001 1 022",
      color: "#a855f7",
      icon: "🏺",
      dasarHukum: "Perbup Banyuwangi No. 8 Tahun 2016 Bab IX Pasal 34",
      subUnitsId: [
        "Sub Bagian Tata Usaha UPTD",
        "Seksi Koleksi & Konservasi Museum Blambangan",
        "Seksi Sarana Prasarana & Pementasan Taman Budaya"
      ],
      subUnitsEn: [
        "UPTD Administrative Office",
        "Museum Blambangan Artifact Conservation Section",
        "Cultural Park Amphitheater & Facilities Section"
      ],
      tupoksiId: [
        "Melakukan inventarisasi, restorasi, kurasi ilmiah, dan perawatan fisik 4.000+ koleksi artefak arkeologi, etnografi, dan numismatik Museum Blambangan.",
        "Menyediakan pelayanan pemanduan edukatif bagi rombongan pelajar, akademisi, peneliti sejarah, dan wisatawan umum.",
        "Mengelola pemanfaatan gedung pementasan seni, amfiteater terbuka, dan ruang latihan tari di Taman Budaya Banyuwangi.",
        "Menyelenggarakan pameran keliling museum (Museum Goes to School) dan workshop seni rupa/tari bagi generasi muda.",
        "Memfasilitasi komunitas seniman lokal untuk menggelar gladi resik, pameran lukisan, pertunjukan teater, dan sarasehan budaya."
      ],
      tupoksiEn: [
        "Conserving, cataloguing, and restoring 4,000+ archaeological, ethnographic, and numismatic artefacts at Blambangan Museum.",
        "Delivering guided educational tours for school excursions, university researchers, and general visitors.",
        "Managing the booking and operations of amphitheaters, rehearsal studios, and exhibition halls at Banyuwangi Cultural Park.",
        "Organizing traveling museum outreach workshops for regional schools and youth artists.",
        "Providing accessible staging facilities for local painter guilds, theatre troupes, and cultural discussions."
      ],
      layananPublik: [
        "Kunjungan Edukasi Terpandu Museum Blambangan",
        "Peminjaman & Penggunaan Gedung Kesenian Taman Budaya",
        "Layanan Konservasi & Identifikasi Benda Cagar Budaya"
      ]
    }
  ];

  const currentUnit = units.find((u) => u.id === activeUnitId) || units[0];

  // Search filter across tupoksi and titles
  const searchResults = units.filter((u) => {
    if (!searchQuery.trim()) return false;
    const q = searchQuery.toLowerCase();
    return (
      u.titleId.toLowerCase().includes(q) ||
      u.titleEn.toLowerCase().includes(q) ||
      u.tupoksiId.some((t) => t.toLowerCase().includes(q)) ||
      u.tupoksiEn.some((t) => t.toLowerCase().includes(q)) ||
      u.layananPublik.some((l) => l.toLowerCase().includes(q)) ||
      u.subUnitsId.some((s) => s.toLowerCase().includes(q))
    );
  });

  return (
    <div className="space-y-10">
      {/* 1. TITLE & REGULATION HEADER */}
      <section className="border-b border-white/[0.08] pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c9a24a]/10 border border-[#c9a24a]/30 text-[#c9a24a] font-mono text-xs font-semibold uppercase tracking-[0.2em] mb-2 shadow-sm">
              <Layers className="w-3.5 h-3.5" />
              {isEn ? "GOVERNANCE BLUEPRINT & DUTIES" : "STRUKTUR ORGANISASI & TATA KERJA (SOTK)"}
            </div>
            <h1 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#f0f5f1] font-normal tracking-tight">
              {isEn
                ? "Organizational Structure & Function Duties (Tupoksi)"
                : "Struktur Organisasi & Rincian Tupoksi"}
            </h1>
            <p className="text-xs sm:text-sm text-[#9aa5a0] mt-2 max-w-3xl leading-relaxed font-light">
              {isEn
                ? "Established in accordance with Banyuwangi Regency Regulation No. 8 of 2016 concerning the Formation and Structure of Regional Apparatus, governing hierarchical duties and service deliveries."
                : "Ditetapkan berdasarkan Peraturan Daerah Kabupaten Banyuwangi Nomor 8 Tahun 2016 tentang Pembentukan dan Susunan Perangkat Daerah Kabupaten Banyuwangi, mengatur hierarki komando, pembagian tugas pokok, dan fungsi pelayanan masyarakat."}
            </p>
          </div>

          {/* View Switcher Pill */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.03] border border-white/[0.1] self-start md:self-auto backdrop-blur-md">
            <button
              onClick={() => setActiveView("chart")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeView === "chart"
                  ? "bg-[#c9a24a] text-[#05070a] shadow-sm"
                  : "text-[#78837c] hover:text-[#dfe7e0]"
              }`}
            >
              {isEn ? "Hierarchical Tree Chart" : "Bagan Bagan Interaktif"}
            </button>
            <button
              onClick={() => setActiveView("search")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 ${
                activeView === "search"
                  ? "bg-[#c9a24a] text-[#05070a] shadow-sm"
                  : "text-[#78837c] hover:text-[#dfe7e0]"
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span>{isEn ? "Search Duties" : "Cari Tupoksi & Layanan"}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. SEARCH MODE */}
      {activeView === "search" && (
        <section className="p-6 sm:p-8 rounded-3xl bg-[rgba(12,19,27,0.78)] border border-white/[0.1] space-y-5 backdrop-blur-xl shadow-xl animate-fadeIn">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#c9a24a] font-semibold uppercase tracking-[0.2em]">
              PENCARIAN CEPAT TUPOKSI &amp; LAYANAN BIROKRASI
            </span>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#78837c]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isEn
                    ? "Type duty, permit name, or topic (e.g., cagar budaya, festival, izin, homestay, batik)..."
                    : "Ketik kata kunci tugas (contoh: cagar budaya, izin seni, festival, batik, homestay, keuangan)..."
                }
                className="w-full bg-white/[0.03] border border-white/[0.1] rounded-2xl pl-11 pr-4 py-3.5 text-sm text-[#dfe7e0] placeholder-[#78837c] focus:outline-none focus:border-[#c9a24a] shadow-inner"
              />
            </div>
          </div>

          {searchQuery.trim() && (
            <div className="space-y-4 pt-2">
              <div className="text-xs text-[#9aa5a0]">
                Ditemukan <strong className="text-[#f0f5f1]">{searchResults.length}</strong> unit kerja penanggung jawab:
              </div>

              {searchResults.length === 0 ? (
                <div className="p-8 text-center rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs text-[#78837c] font-light">
                  Tidak ada unit atau tupoksi yang cocok dengan kata kunci "{searchQuery}". Silakan coba kata kunci lain seperti "izin", "festival", "cagar budaya", atau "ekraf".
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {searchResults.map((res) => (
                    <div
                      key={res.id}
                      onClick={() => {
                        setActiveUnitId(res.id);
                        setActiveView("chart");
                      }}
                      className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#c9a24a]/60 hover:bg-white/[0.04] transition-all cursor-pointer space-y-2 group shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#c9a24a] bg-[#c9a24a]/15 px-2.5 py-0.5 rounded-full border border-[#c9a24a]/30">
                          {res.badge}
                        </span>
                        <span className="text-xl">{res.icon}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-[#dfe7e0] group-hover:text-white transition-colors">
                        {isEn ? res.titleEn : res.titleId}
                      </h4>
                      <p className="text-xs text-[#9aa5a0] line-clamp-2 font-light">
                        Pimpinan: <span className="text-[#dfe7e0] font-medium">{isEn ? res.leadEn : res.leadId}</span>
                      </p>
                      <div className="text-[11px] text-[#38bdf8] flex items-center gap-1 font-medium pt-1">
                        <span>Buka Rincian Tupoksi</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </section>
      )}

      {/* 3. INTERACTIVE TREE HIERARCHY MAP */}
      <section className="rounded-3xl border border-white/[0.12] bg-gradient-to-b from-[rgba(14,23,34,0.85)] to-[rgba(7,11,16,0.95)] backdrop-blur-xl p-6 lg:p-8 space-y-6 shadow-[0_24px_64px_rgba(0,0,0,0.6)] relative overflow-hidden">
        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#c9a24a] to-transparent opacity-60" />

        <div className="text-center space-y-1 relative z-10">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#c9a24a] font-semibold">
            {isEn ? "HIERARCHICAL STRUCTURE DIAGRAM" : "BAGAN HIERARKI KOMANDO KELEMBAGAAN"}
          </span>
          <h2 className="font-editorial text-xl sm:text-2xl text-[#dfe7e0] font-normal">
            {isEn ? "Select any unit card to inspect its Tupoksi & Public Services" : "Klik pada kartu unit untuk melihat rincian Tupoksi & Layanan Publik"}
          </h2>
        </div>

        {/* Level 1: KEPALA DINAS */}
        <div className="flex justify-center relative z-10">
          <button
            onClick={() => setActiveUnitId("kadis")}
            className={`w-full max-w-lg p-5 rounded-3xl text-center border transition-all group backdrop-blur-md ${
              activeUnitId === "kadis"
                ? "bg-white/[0.08] border-[#c9a24a] shadow-[0_0_24px_rgba(201,162,74,0.2)] scale-[1.02] ring-1 ring-[#c9a24a]"
                : "bg-white/[0.03] border-white/[0.1] hover:border-[#c9a24a]/60 hover:bg-white/[0.05]"
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl">👑</span>
              <span className="text-[10px] font-mono font-bold px-3 py-0.5 rounded-full bg-[#c9a24a]/15 text-[#c9a24a] border border-[#c9a24a]/30">
                KEPALA DINAS (ESELON II.B)
              </span>
            </div>
            <h3 className="font-editorial text-lg sm:text-xl text-[#f0f5f1] font-normal mt-2 group-hover:text-[#c9a24a] transition-colors">
              M. Taufik Kurniawan, S.Sos, M.Si
            </h3>
            <p className="text-xs text-[#9aa5a0] font-light mt-0.5">Kepala Dinas Kebudayaan dan Pariwisata</p>
          </button>
        </div>

        {/* Connector */}
        <div className="w-0.5 h-6 bg-white/[0.12] mx-auto" />

        {/* Level 2: SEKRETARIAT & KELOMPOK FUNGSIONAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto relative z-10">
          <button
            onClick={() => setActiveUnitId("sekretariat")}
            className={`p-5 rounded-2xl text-left border transition-all backdrop-blur-md ${
              activeUnitId === "sekretariat"
                ? "bg-white/[0.08] border-[#38bdf8] shadow-lg scale-[1.02] ring-1 ring-[#38bdf8]/40"
                : "bg-white/[0.03] border-white/[0.1] hover:border-[#38bdf8]/60 hover:bg-white/[0.05]"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#38bdf8]/15 text-[#38bdf8] border border-[#38bdf8]/30">
                SEKRETARIAT (ESELON III.A)
              </span>
              <span className="text-base">🏢</span>
            </div>
            <h4 className="text-sm font-semibold text-[#dfe7e0] mt-2">Sekretariat Dinas</h4>
            <p className="text-[11px] text-[#9aa5a0] font-light mt-0.5">Subbag Program &amp; Keuangan • Subbag Umum &amp; Kepegawaian</p>
          </button>

          <div className="p-5 rounded-2xl text-left border border-white/[0.08] bg-white/[0.02] backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-white/[0.08] text-[#aab4ad] border border-white/[0.1]">
                AHLI KEBIJAKAN
              </span>
              <span className="text-base">⚖️</span>
            </div>
            <h4 className="text-sm font-semibold text-[#dfe7e0] mt-2">Kelompok Jabatan Fungsional</h4>
            <p className="text-[11px] text-[#9aa5a0] font-light mt-0.5">Analis Kebijakan • Pamong Budaya • Adyatama Kepariwisataan</p>
          </div>
        </div>

        {/* Connector */}
        <div className="w-0.5 h-6 bg-white/[0.12] mx-auto" />

        {/* Level 3: 4 BIDANG TEKNIS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 relative z-10">
          {[
            { id: "pariwisata", title: "Bidang Pariwisata & Destinasi", icon: "🏝️", color: "#38bdf8", role: "Pilar 01" },
            { id: "ekraf", title: "Bidang Ekonomi Kreatif", icon: "🎨", color: "#ec4899", role: "Pilar 02" },
            { id: "kebudayaan", title: "Bidang Kebudayaan & Adat", icon: "🏛️", color: "#c9a24a", role: "Pilar 03" },
            { id: "pemasaran", title: "Bidang Pemasaran Wisata", icon: "📢", color: "#10b981", role: "Pilar 04" },
          ].map((b) => (
            <button
              key={b.id}
              onClick={() => setActiveUnitId(b.id)}
              className={`p-4 sm:p-5 rounded-2xl text-left border transition-all backdrop-blur-md ${
                activeUnitId === b.id
                  ? "bg-white/[0.08] shadow-xl scale-[1.02] ring-1"
                  : "bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.05]"
              }`}
              style={{
                borderColor: activeUnitId === b.id ? b.color : undefined,
                color: activeUnitId === b.id ? b.color : undefined
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xl">{b.icon}</span>
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase">{b.role}</span>
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-[#dfe7e0] mt-2.5 leading-tight">{b.title}</h4>
              <p className="text-[10px] text-[#78837c] font-mono mt-1">Eselon III.b (Teknis)</p>
            </button>
          ))}
        </div>

        {/* Connector */}
        <div className="w-0.5 h-6 bg-white/[0.12] mx-auto" />

        {/* Level 4: UPTD */}
        <div className="flex justify-center relative z-10">
          <button
            onClick={() => setActiveUnitId("uptd")}
            className={`w-full max-w-xl p-5 rounded-3xl text-center border transition-all backdrop-blur-md ${
              activeUnitId === "uptd"
                ? "bg-white/[0.08] border-[#a855f7] shadow-lg scale-[1.02] ring-1 ring-[#a855f7]/40"
                : "bg-white/[0.03] border-white/[0.1] hover:border-[#a855f7]/60 hover:bg-white/[0.05]"
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-base">🏺</span>
              <span className="text-[10px] font-mono font-bold px-3 py-0.5 rounded-full bg-[#a855f7]/15 text-[#a855f7] border border-[#a855f7]/30">
                UNIT PELAKSANA TEKNIS DAERAH (UPTD)
              </span>
            </div>
            <h4 className="text-sm sm:text-base font-semibold text-[#dfe7e0] mt-1.5">UPTD Museum Blambangan &amp; UPTD Taman Budaya</h4>
            <p className="text-[11px] text-[#9aa5a0] font-light mt-0.5">Konservasi 4.000+ Koleksi Arkeologi &amp; Panggung Teater Kesenian</p>
          </button>
        </div>
      </section>

      {/* 4. DETAILED UNIT INSPECTION DRAWER */}
      <section className="rounded-3xl border border-white/[0.12] bg-[rgba(12,19,27,0.8)] backdrop-blur-xl p-6 lg:p-8 space-y-6 shadow-2xl animate-fadeIn">
        {/* Unit Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
          <div className="flex items-start gap-4">
            <div
              className="w-13 h-13 rounded-2xl flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-inner"
              style={{ backgroundColor: `${currentUnit.color}20`, color: currentUnit.color, border: `1px solid ${currentUnit.color}35` }}
            >
              {currentUnit.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#78837c]">
                  {currentUnit.badge}
                </span>
                <span className="text-[10px] text-[#c9a24a] font-mono">
                  {currentUnit.dasarHukum}
                </span>
              </div>
              <h3 className="font-editorial text-xl sm:text-2xl text-[#f0f5f1] font-normal mt-0.5">
                {isEn ? currentUnit.titleEn : currentUnit.titleId}
              </h3>
              <p className="text-xs text-[#9aa5a0] mt-0.5 font-light">
                Pejabat: <strong className="text-[#dfe7e0] font-medium">{isEn ? currentUnit.leadEn : currentUnit.leadId}</strong>
                {currentUnit.nip && <span className="font-mono text-[#78837c] ml-2">NIP. {currentUnit.nip}</span>}
              </p>
            </div>
          </div>

          {currentUnit.route && (
            <Link
              to={currentUnit.route}
              className="px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 self-start sm:self-auto border shadow-sm"
              style={{
                backgroundColor: `${currentUnit.color}20`,
                borderColor: `${currentUnit.color}50`,
                color: currentUnit.color
              }}
            >
              <span>{isEn ? "Explore Official Page →" : "Halaman Khusus →"}</span>
            </Link>
          )}
        </div>

        {/* Sub-Units List */}
        <div className="space-y-2">
          <span className="text-[10px] font-mono text-[#78837c] uppercase tracking-wider block font-semibold">
            UNIT KERJA / SEKSI TEKNIS DI BAWAHNYA:
          </span>
          <div className="flex flex-wrap gap-2">
            {(isEn ? currentUnit.subUnitsEn : currentUnit.subUnitsId).map((sub, sIdx) => (
              <span
                key={sIdx}
                className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs text-[#dfe7e0] font-light"
              >
                • {sub}
              </span>
            ))}
          </div>
        </div>

        {/* Tupoksi Grid */}
        <div className="space-y-3">
          <span className="text-xs font-mono font-semibold text-[#c9a24a] uppercase tracking-[0.18em] block">
            {isEn ? "PRINCIPAL FUNCTIONS & STATUTORY DUTIES (TUPOKSI):" : "RINCIAN TUGAS POKOK DAN FUNGSI (TUPOKSI RESMI):"}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {(isEn ? currentUnit.tupoksiEn : currentUnit.tupoksiId).map((duty, dIdx) => (
              <div
                key={dIdx}
                className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.12] transition-colors"
              >
                <span
                  className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-mono font-bold mt-0.5"
                  style={{ backgroundColor: `${currentUnit.color}20`, color: currentUnit.color }}
                >
                  {dIdx + 1}
                </span>
                <p className="text-xs text-[#aab4ad] leading-relaxed font-light">{duty}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Public Services Handled */}
        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] space-y-2.5">
          <span className="text-[10px] font-mono text-[#10b981] uppercase tracking-[0.18em] block font-semibold">
            LAYANAN PUBLIK &amp; PERIZINAN YANG DIKELOLA:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {currentUnit.layananPublik.map((layanan, lIdx) => (
              <div key={lIdx} className="flex items-center gap-2 text-xs text-[#dfe7e0] font-light">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] flex-shrink-0" />
                <span className="truncate">{layanan}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
