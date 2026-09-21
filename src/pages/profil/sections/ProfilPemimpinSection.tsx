import { useState } from "react";
import {
  Users,
  Award,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  ExternalLink,
  Eye,
  ShieldCheck
} from "lucide-react";
import { Link } from "react-router-dom";

interface ProfilPemimpinProps {
  isEn: boolean;
}

interface PejabatItem {
  id: string;
  name: string;
  titleId: string;
  titleEn: string;
  roleId: string;
  roleEn: string;
  nip: string;
  pangkat: string;
  color: string;
  icon: string;
  pendidikan: string;
  pengabdian: string;
  fokusKerja: string[];
  route?: string;
}

export function ProfilPemimpin({ isEn }: ProfilPemimpinProps) {
  const [kadisTab, setKadisTab] = useState<"sambutan" | "riwayat" | "program">("sambutan");
  const [selectedOfficial, setSelectedOfficial] = useState<PejabatItem | null>(null);

  const officials: PejabatItem[] = [
    {
      id: "sekdin",
      name: "Sekretaris Dinas",
      titleId: "Sekretariat Dinas Kebudayaan dan Pariwisata",
      titleEn: "Agency Secretariat",
      roleId: "Koordinator Perencanaan, Keuangan & Administrasi ASN",
      roleEn: "Coordinator of Planning, Budgeting & HR Affairs",
      nip: "19780415 200212 1 003",
      pangkat: "Pembina Tingkat I (IV/b)",
      color: "#38bdf8",
      icon: "🏢",
      pendidikan: "Magister Administrasi Publik (M.AP) Universitas Brawijaya",
      pengabdian: "22 Tahun Pengabdian di Pemkab Banyuwangi",
      fokusKerja: [
        "Penyusunan Rencana Kerja (Renja) & Renstra 2021–2026",
        "Pencapaian Akuntabilitas Kinerja Instansi SAKIP Nilai A",
        "Manajemen Tata Kelola Barang Milik Daerah (BMD)",
        "Pengembangan Kompetensi & Kesejahteraan Aparatur Dinas"
      ],
      route: "/profil/dokumen"
    },
    {
      id: "kabid-pariwisata",
      name: "Kepala Bidang Pariwisata",
      titleId: "Bidang Pariwisata & Destinasi",
      titleEn: "Tourism & Destinations Division",
      roleId: "Pengembangan Destinasi, Standarisasi CHSE & Pokdarwis",
      roleEn: "Destinations Development, CHSE Audits & Rural Homestays",
      nip: "19800620 200604 1 011",
      pangkat: "Pembina (IV/a)",
      color: "#38bdf8",
      icon: "🏝️",
      pendidikan: "Magister Manajemen Pariwisata Berkelanjutan",
      pengabdian: "18 Tahun Pengabdian Bidang Kepariwisataan",
      fokusKerja: [
        "Sertifikasi CHSE Usaha Wisata Alam & Bahari",
        "Penguatan Jaringan 25+ Desa Wisata Mandiri",
        "Audit Daya Dukung (Carrying Capacity) Gunung Ijen",
        "Pendampingan Standardisasi Homestay Skala ASEAN"
      ],
      route: "/pariwisata"
    },
    {
      id: "kabid-ekraf",
      name: "Kepala Bidang Ekonomi Kreatif",
      titleId: "Bidang Ekonomi Kreatif (E-Kraf)",
      titleEn: "Creative Economy Division",
      roleId: "Inkubasi 17 Subsektor, Paten HKI & Kriya Batik",
      roleEn: "17 Subsectors Incubation, IP Patents & Craft Scaling",
      nip: "19830214 200903 2 004",
      pangkat: "Penata Tingkat I (III/d)",
      color: "#ec4899",
      icon: "🎨",
      pendidikan: "Magister Desain & Inovasi Kreatif",
      pengabdian: "15 Tahun Pengabdian di Industri Kreatif Daerah",
      fokusKerja: [
        "Fasilitasi Gratis Hak Kekayaan Intelektual (HKI)",
        "Operasional Klinik Inovasi Kreatif (KIK) Banyuwangi",
        "Kurasi Suvenir Khas Daerah Menembus Pasar Ekspor",
        "Inkubasi Kopi Rakyat Robusta Ijen & Kriya Bambu"
      ],
      route: "/ekraf"
    },
    {
      id: "kabid-budaya",
      name: "Kepala Bidang Kebudayaan",
      titleId: "Bidang Kebudayaan & Adat",
      titleEn: "Culture & Heritage Division",
      roleId: "Pelestarian Cagar Budaya, Adat Using & Sanggar Seni",
      roleEn: "Heritage Monuments, Using Custom & Art Studios",
      nip: "19790918 200501 1 008",
      pangkat: "Pembina (IV/a)",
      color: "#e2b168",
      icon: "🏛️",
      pendidikan: "Magister Arkeologi & Kajian Tradisi Nusantara",
      pengabdian: "19 Tahun Pengabdian Pelestarian Budaya Using",
      fokusKerja: [
        "Ekskavasi & Registrasi Cagar Budaya Blambangan",
        "Pembinaan 200+ Sanggar Tari Gandrung & Paguyuban Adat",
        "Revitalisasi Bahasa Using & Muatan Lokal Pendidikan",
        "Pencatatan Warisan Budaya Takbenda (WBTb) UNESCO"
      ],
      route: "/kebudayaan"
    },
    {
      id: "kabid-pemasaran",
      name: "Kepala Bidang Pemasaran",
      titleId: "Bidang Pemasaran Pariwisata",
      titleEn: "Tourism Marketing Division",
      roleId: "Manajemen Kalender B-Fest & Promosi Digital Global",
      roleEn: "B-Fest Calendar Execution & International Media Campaigns",
      nip: "19821105 200801 1 014",
      pangkat: "Penata Tingkat I (III/d)",
      color: "#10b981",
      icon: "📢",
      pendidikan: "Magister Ilmu Komunikasi & Pemasaran Digital",
      pengabdian: "16 Tahun Pengabdian di Pemasaran Publik",
      fokusKerja: [
        "Kurasi Kalender Kharisma Event Nusantara (KEN)",
        "Kampanye Branding Digital 'Majestic Banyuwangi'",
        "Kemitraan Maskapai Penerbangan & Agen Wisata Mancanegara",
        "Penyelenggaraan Pameran Travel Mart Nasional & Internasional"
      ],
      route: "/pemasaran"
    },
    {
      id: "ka-uptd",
      name: "Kepala UPTD Pelaksana Teknis",
      titleId: "UPTD Museum Blambangan & Taman Budaya",
      titleEn: "Museum & Cultural Park Units",
      roleId: "Konservasi Koleksi Sejarah & Operasional Venue Kesenian",
      roleEn: "Artefact Conservation & Performing Arts Venues",
      nip: "19840510 201001 1 022",
      pangkat: "Penata Tingkat I (III/d)",
      color: "#a855f7",
      icon: "🏺",
      pendidikan: "Sarjana Sejarah & Museologi",
      pengabdian: "14 Tahun Pengabdian di Permuseuman Daerah",
      fokusKerja: [
        "Konservasi Ilmiah 4.000+ Koleksi Etnografi & Numismatik",
        "Pemanduan Edukasi Sejarah Blambangan untuk Pelajar",
        "Fasilitasi Ruang Amfiteater & Sarasehan Seniman Lokal",
        "Program Museum Keliling (Museum Goes to School)"
      ],
      route: "/profil/struktur-organisasi"
    }
  ];

  return (
    <div className="space-y-10">
      {/* 1. TITLE & BADGE HEADER */}
      <section className="border-b border-white/[0.08] pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c9a24a]/10 border border-[#c9a24a]/30 text-[#c9a24a] font-mono text-xs font-semibold uppercase tracking-[0.2em] mb-2 shadow-sm">
              <Users className="w-3.5 h-3.5" />
              {isEn ? "LEADERSHIP DIRECTORY" : "DIREKTORI KEPEMIMPINAN INSTANSI"}
            </div>
            <h1 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#f0f5f1] font-normal tracking-tight">
              {isEn
                ? "Leadership Profile & Structural Officials"
                : "Profil Pemimpin & Jajaran Pejabat Struktural"}
            </h1>
            <p className="text-xs sm:text-sm text-[#9aa5a0] mt-2 max-w-3xl leading-relaxed font-light">
              {isEn
                ? "Dedicated civil leaders steering Banyuwangi's visionary cultural preservation, inclusive creative economy, and world-class sustainable ecotourism."
                : "Aparatur sipil negara berintegritas tinggi yang mengawal arah pembangunan kebudayaan, pemberdayaan ekonomi kreatif, serta pariwisata berkelanjutan kelas dunia di Kabupaten Banyuwangi."}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#dfe7e0] bg-white/[0.03] px-4 py-2 rounded-full border border-white/[0.1] backdrop-blur-md self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-[#10b981]" />
            <span className="font-light">Pejabat Resmi Berdasarkan SK Bupati Banyuwangi</span>
          </div>
        </div>
      </section>

      {/* 2. FEATURED KEPALA DINAS (INCUMBENT) */}
      <section className="rounded-3xl border-2 border-[#c9a24a]/60 bg-gradient-to-b from-[rgba(14,23,34,0.9)] to-[rgba(7,11,16,0.95)] backdrop-blur-xl p-6 lg:p-10 shadow-[0_24px_64px_rgba(0,0,0,0.6)] relative overflow-hidden">
        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#c9a24a] to-transparent opacity-80" />
        <div className="absolute -top-32 left-1/3 w-80 h-80 rounded-full bg-[#c9a24a]/[0.08] blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          
          {/* Left: Avatar & Personal Info */}
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
            <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-3xl overflow-hidden border-2 border-[#c9a24a]/70 shadow-2xl bg-[#060b12] group">
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-t from-[#060b12] via-[rgba(12,19,27,0.9)] to-[rgba(20,44,80,0.5)] text-white p-4">
                <div className="w-24 h-24 rounded-full bg-[#c9a24a]/20 border border-[#c9a24a]/50 flex items-center justify-center text-[#c9a24a] mb-3 shadow-inner">
                  <Users className="w-12 h-12" />
                </div>
                <span className="text-[10px] font-mono text-[#c9a24a] font-bold tracking-widest uppercase">
                  PEMIMPIN INSTANSI
                </span>
                <span className="text-xs font-semibold text-[#dfe7e0] mt-1">
                  Kepala Dinas Disbudpar
                </span>
              </div>

              {/* Status Ribbon */}
              <div className="absolute bottom-0 inset-x-0 bg-[#c9a24a] py-1 text-center shadow-md">
                <span className="text-[10px] font-mono font-bold text-[#05070a] uppercase tracking-wider">
                  PETAHANA AKTIF
                </span>
              </div>
            </div>

            <div className="space-y-1.5">
              <h2 className="font-editorial text-xl sm:text-2xl font-normal text-[#f0f5f1]">
                M. Taufik Kurniawan, S.Sos, M.Si
              </h2>
              <p className="text-xs text-[#c9a24a] font-medium">
                Kepala Dinas Kebudayaan dan Pariwisata
              </p>
              <div className="text-[11px] font-mono text-[#78837c] space-y-0.5">
                <div>NIP. 19750812 199803 1 005</div>
                <div>Pembina Utama Muda (IV/c)</div>
              </div>
            </div>

            <div className="pt-1 flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-[#38bdf8] text-[10px] font-mono font-medium">
                Alumni S2 Administrasi Publik
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-[#10b981] text-[10px] font-mono font-medium">
                26+ Th Pengabdian
              </span>
            </div>
          </div>

          {/* Right: Tabbed Details */}
          <div className="lg:col-span-8 space-y-5">
            {/* Tabs Header */}
            <div className="flex items-center gap-2 border-b border-white/[0.08] pb-3">
              <button
                onClick={() => setKadisTab("sambutan")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  kadisTab === "sambutan"
                    ? "bg-[#c9a24a] text-[#05070a] shadow-sm"
                    : "text-[#78837c] hover:text-[#dfe7e0]"
                }`}
              >
                {isEn ? "Vision & Address" : "Sambutan & Komitmen"}
              </button>
              <button
                onClick={() => setKadisTab("riwayat")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  kadisTab === "riwayat"
                    ? "bg-[#c9a24a] text-[#05070a] shadow-sm"
                    : "text-[#78837c] hover:text-[#dfe7e0]"
                }`}
              >
                {isEn ? "Career & Education" : "Pendidikan & Karier"}
              </button>
              <button
                onClick={() => setKadisTab("program")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  kadisTab === "program"
                    ? "bg-[#c9a24a] text-[#05070a] shadow-sm"
                    : "text-[#78837c] hover:text-[#dfe7e0]"
                }`}
              >
                {isEn ? "Priority Agendas" : "5 Program Prioritas 2026"}
              </button>
            </div>

            {/* Tab 1: Sambutan */}
            {kadisTab === "sambutan" && (
              <div className="space-y-4 animate-fadeIn">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-semibold text-[#c9a24a] uppercase tracking-[0.18em]">
                    SAMBUTAN RESMI KEPALA DINAS:
                  </span>
                  <h3 className="font-editorial text-xl sm:text-2xl text-[#f0f5f1] font-normal leading-snug">
                    {isEn
                      ? '"Guarding Cultural Roots while Scaling Global Eco-Tourism Innovation"'
                      : '"Merawat Akar Keluhuran Budaya Using, Melipatgandakan Nilai Tambah Pariwisata Berkelanjutan"'}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#9aa5a0] leading-relaxed font-light">
                  {isEn
                    ? "Banyuwangi's tourism resurgence is anchored in community solidarity (gotong royong), deep veneration of indigenous traditions, and conservation of pristine natural marvels from Mount Ijen to southern coastal sanctuaries. Our mandate is ensuring tourism generates tangible prosperity for village homestays, empowers young creative innovators, and safeguards cultural dignity."
                    : "Pariwisata Banyuwangi bukan sekadar industri kunjungan angka, melainkan gerakan kebudayaan yang berakar pada gotong royong masyarakat, pemuliaan adat Using, dan komitmen konservasi alam. Melalui penguatan Ijen UNESCO Global Geopark dan kalender Kharisma Event Nusantara, kami berkomitmen menghadirkan tata kelola pariwisata yang menyejahterakan warga, memberdayakan UMKM kreatif, dan menjaga marwah budaya leluhur."}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                    <span className="text-[10px] text-[#78837c] block font-mono uppercase tracking-wider">FOKUS UTAMA</span>
                    <span className="text-xs font-semibold text-[#dfe7e0] mt-0.5 block">Ijen UNESCO Geopark</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                    <span className="text-[10px] text-[#78837c] block font-mono uppercase tracking-wider">PEMBERDAYAAN</span>
                    <span className="text-xs font-semibold text-[#dfe7e0] mt-0.5 block">25+ Desa Wisata &amp; Ekraf</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                    <span className="text-[10px] text-[#78837c] block font-mono uppercase tracking-wider">PELAYANAN</span>
                    <span className="text-xs font-semibold text-[#dfe7e0] mt-0.5 block">Transparan &amp; BerAKHLAK</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Riwayat Pendidikan & Karier */}
            {kadisTab === "riwayat" && (
              <div className="space-y-4 animate-fadeIn">
                <div>
                  <span className="text-xs font-mono font-semibold text-[#c9a24a] uppercase tracking-[0.18em] block mb-2">
                    RIWAYAT PENDIDIKAN FORMAL:
                  </span>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-xs">
                      <GraduationCap className="w-4 h-4 text-[#c9a24a] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#dfe7e0] font-medium">Magister Sains (M.Si)</strong> — Program Pascasarjana Ilmu Administrasi Publik
                        <div className="text-[11px] text-[#9aa5a0] font-light mt-0.5">Konsentrasi Kebijakan Publik &amp; Tata Kelola Pemerintahan Daerah</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-xs">
                      <GraduationCap className="w-4 h-4 text-[#38bdf8] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#dfe7e0] font-medium">Sarjana Sosial (S.Sos)</strong> — Ilmu Administrasi Negara / Publik
                        <div className="text-[11px] text-[#9aa5a0] font-light mt-0.5">Spesialisasi Manajemen Pelayanan Publik &amp; Kebijakan Sektor Strategis</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono font-semibold text-[#38bdf8] uppercase tracking-[0.18em] block mb-2">
                    RIWAYAT JABATAN STRATEGIS SEBELUMNYA:
                  </span>
                  <div className="space-y-2">
                    {[
                      "Kepala Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi (2023 – Sekarang)",
                      "Sekretaris Dinas pada Perangkat Daerah Kabupaten Banyuwangi",
                      "Kepala Bagian Organisasi & Tata Laksana Setda Kabupaten Banyuwangi",
                      "Camat di Wilayah Strategis Destinasi Wisata Kabupaten Banyuwangi"
                    ].map((jabatan, jIdx) => (
                      <div key={jIdx} className="flex items-center gap-2.5 text-xs text-[#aab4ad] p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] font-light">
                        <Briefcase className="w-3.5 h-3.5 text-[#38bdf8] flex-shrink-0" />
                        <span>{jabatan}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Program Prioritas */}
            {kadisTab === "program" && (
              <div className="space-y-3 animate-fadeIn">
                <span className="text-xs font-mono font-semibold text-[#10b981] uppercase tracking-[0.18em] block">
                  5 PROGRAM KERJA PRIORITAS DINAS TAHUN 2026:
                </span>
                <div className="space-y-2">
                  {[
                    "1. Re-validasi Status Ijen UNESCO Global Geopark & Penguatan Ekowisata Berkelanjutan",
                    "2. Penyelenggaraan Kharisma Event Nusantara (Gandrung Sewu, Banyuwangi Ethno Carnival)",
                    "3. Fasilitasi Pendaftaran Hak Cipta (HKI) Gratis bagi 500+ Pelaku Seni & Pengrajin Batik",
                    "4. Standarisasi Layanan Homestay Pedesaan Berstandar ASEAN Tourism Standard",
                    "5. Penguatan Akses Terbuka Portal Layanan Perizinan Budaya & Informasi Satu Pintu"
                  ].map((prog, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.07] text-xs text-[#dfe7e0] font-light">
                      <CheckCircle2 className="w-4 h-4 text-[#10b981] flex-shrink-0" />
                      <span>{prog}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* 3. JAJARAN PEJABAT STRUKTURAL (GRID) */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.08] pb-4">
          <div>
            <span className="text-[#c9a24a] font-mono text-xs font-semibold uppercase tracking-[0.2em]">
              {isEn ? "STRUCTURAL CABINET" : "JAJARAN PEJABAT STRUKTURAL DINAS"}
            </span>
            <h2 className="font-editorial text-2xl md:text-3xl text-[#dfe7e0] mt-1">
              {isEn ? "Secretariat & Division Heads" : "Sekretaris Dinas, Kepala Bidang & Kepala UPTD"}
            </h2>
          </div>
          <p className="text-xs text-[#78837c] max-w-md font-light">
            {isEn
              ? "Click any official card to view comprehensive CV, focus programs, and administrative portfolio."
              : "Klik kartu pejabat untuk melihat profil pengabdian, fokus kerja, dan portofolio layanan bidang."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {officials.map((official) => (
            <div
              key={official.id}
              className="p-5 rounded-3xl bg-[rgba(12,19,27,0.78)] border border-white/[0.1] hover:border-[#c9a24a]/50 transition-all flex flex-col justify-between space-y-4 group shadow-lg backdrop-blur-md relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{official.icon}</span>
                    <span
                      className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full"
                      style={{ backgroundColor: `${official.color}20`, color: official.color, border: `1px solid ${official.color}35` }}
                    >
                      {official.name}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#78837c]">{official.pangkat.split("(")[1]?.replace(")", "")}</span>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#dfe7e0] group-hover:text-white transition-colors leading-tight">
                    {isEn ? official.titleEn : official.titleId}
                  </h3>
                  <p className="text-xs text-[#c9a24a] font-medium mt-1">
                    {isEn ? official.roleEn : official.roleId}
                  </p>
                  <p className="text-[11px] font-mono text-[#78837c] mt-0.5">
                    NIP. {official.nip}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/[0.06] space-y-1.5">
                  <span className="text-[10px] font-mono text-[#78837c] uppercase tracking-wider block font-semibold">
                    FOKUS KERJA STRATEGIS:
                  </span>
                  {official.fokusKerja.slice(0, 3).map((fokus, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-1.5 text-[11px] text-[#aab4ad] font-light">
                      <CheckCircle2
                        className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                        style={{ color: official.color }}
                      />
                      <span className="line-clamp-1">{fokus}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2">
                <button
                  onClick={() => setSelectedOfficial(official)}
                  className="flex-1 py-2.5 px-4 rounded-full bg-white/[0.03] hover:bg-white/[0.07] text-[#dfe7e0] text-xs font-medium transition-all flex items-center justify-center gap-1.5 border border-white/[0.08] hover:border-[#c9a24a]/40"
                >
                  <Eye className="w-3.5 h-3.5 text-[#c9a24a]" />
                  <span>{isEn ? "View Profile" : "Rincian Profil"}</span>
                </button>

                {official.route && (
                  <Link
                    to={official.route}
                    className="p-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.07] text-[#c9a24a] border border-white/[0.08] hover:border-[#c9a24a]/40 transition-all"
                    title={isEn ? "Go to Division Page" : "Buka Halaman Bidang"}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MODAL DETAIL PEJABAT */}
      {selectedOfficial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl rounded-3xl bg-[rgba(12,19,27,0.95)] border border-white/[0.15] p-6 sm:p-8 space-y-5 shadow-2xl backdrop-blur-2xl">
            <div className="flex items-start justify-between border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-3.5">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-inner"
                  style={{ backgroundColor: `${selectedOfficial.color}20`, color: selectedOfficial.color, border: `1px solid ${selectedOfficial.color}35` }}
                >
                  {selectedOfficial.icon}
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#78837c]">
                    {selectedOfficial.name}
                  </span>
                  <h3 className="font-editorial text-lg sm:text-xl font-normal text-[#f0f5f1]">
                    {isEn ? selectedOfficial.titleEn : selectedOfficial.titleId}
                  </h3>
                  <p className="text-xs text-[#c9a24a] font-medium">
                    {isEn ? selectedOfficial.roleEn : selectedOfficial.roleId}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedOfficial(null)}
                className="w-8 h-8 rounded-full bg-white/[0.05] text-[#78837c] hover:text-white flex items-center justify-center text-sm font-bold transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                <span className="text-[10px] text-[#78837c] block font-mono uppercase tracking-wider">NOMOR INDUK PEGAWAI</span>
                <span className="font-mono text-[#dfe7e0] font-medium">{selectedOfficial.nip}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                <span className="text-[10px] text-[#78837c] block font-mono uppercase tracking-wider">PANGKAT &amp; GOLONGAN</span>
                <span className="text-[#dfe7e0] font-medium">{selectedOfficial.pangkat}</span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2.5 text-[#aab4ad] font-light">
                <GraduationCap className="w-4 h-4 text-[#c9a24a] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#dfe7e0] font-medium">Pendidikan:</strong> {selectedOfficial.pendidikan}
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-[#aab4ad] font-light">
                <Award className="w-4 h-4 text-[#10b981] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#dfe7e0] font-medium">Pengabdian:</strong> {selectedOfficial.pengabdian}
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-white/[0.08]">
              <span className="text-[10px] font-mono text-[#c9a24a] uppercase tracking-[0.18em] block font-semibold">
                AGENDA KERJA UTAMA:
              </span>
              <div className="space-y-1.5">
                {selectedOfficial.fokusKerja.map((fokus, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#aab4ad] font-light">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c9a24a] flex-shrink-0 mt-0.5" />
                    <span>{fokus}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                onClick={() => setSelectedOfficial(null)}
                className="px-5 py-2 rounded-full bg-white/[0.08] text-[#dfe7e0] text-xs font-semibold hover:bg-white/[0.14] transition-all"
              >
                {isEn ? "Close" : "Tutup"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
