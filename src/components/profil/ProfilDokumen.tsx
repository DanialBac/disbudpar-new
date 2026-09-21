import { useState } from "react";
import {
  FolderArchive,
  Download,
  Search,
  Eye,
  ShieldCheck,
  BookOpen
} from "lucide-react";

interface ProfilDokumenProps {
  isEn: boolean;
}

interface DokumenItem {
  id: string;
  nomor: string;
  kategori: "Renstra" | "Renja" | "LKjIP" | "IKU" | "PK" | "SOP";
  tahun: string;
  judulId: string;
  judulEn: string;
  ringkasanId: string;
  ringkasanEn: string;
  ukuran: string;
  halaman: number;
  status: string;
  tanggalPenetapan: string;
  pejabatPengesah: string;
  babDaftar: string[];
}

export function ProfilDokumen({ isEn }: ProfilDokumenProps) {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState<string>("Semua");
  const [activeModalDoc, setActiveModalDoc] = useState<DokumenItem | null>(null);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const DOKUMEN_LIST: DokumenItem[] = [
    {
      id: "doc-1",
      nomor: "DISBUDPAR/RENSTRA/2021-2026/01",
      kategori: "Renstra",
      tahun: "2021–2026",
      judulId: "Rencana Strategis (Renstra) Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi Periode 2021–2026",
      judulEn: "Strategic Plan (Renstra) of Banyuwangi Culture and Tourism Office Period 2021–2026",
      ringkasanId: "Dokumen induk arah kebijakan makro, target indikator kinerja, sasaran strategis, serta proyeksi pembangunan sektor kebudayaan dan pariwisata 5 tahunan.",
      ringkasanEn: "Master blueprint containing macro policy goals, performance indicators, and 5-year strategic tourism projections.",
      ukuran: "4.8 MB",
      halaman: 142,
      status: "Resmi Ditetapkan",
      tanggalPenetapan: "18 Oktober 2021",
      pejabatPengesah: "Bupati Banyuwangi & Kepala Disbudpar",
      babDaftar: [
        "Bab I: Pendahuluan & Latar Belakang Makro",
        "Bab II: Gambaran Pelayanan DISBUDPAR",
        "Bab III: Permasalahan & Isu Strategis Daerah",
        "Bab IV: Tujuan & Sasaran Jangka Menengah",
        "Bab V: Strategi & Arah Kebijakan Pelaksanaan",
        "Bab VI: Rencana Program, Kegiatan & Kerangka Pendanaan"
      ]
    },
    {
      id: "doc-2",
      nomor: "DISBUDPAR/RENJA/2026/01",
      kategori: "Renja",
      tahun: "2026",
      judulId: "Rencana Kerja (Renja) Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi Tahun 2026",
      judulEn: "Annual Work Plan (Renja) of Banyuwangi Culture and Tourism Office Year 2026",
      ringkasanId: "Rencana operasional tahunan yang memuat rincian program kerja, pagu indikatif, kegiatan prioritas, dan target capaian fisik maupun keuangan tahun berjalan.",
      ringkasanEn: "Annual operational plan specifying targeted projects, indicative budgets, and key performance deliverables for the current fiscal year.",
      ukuran: "3.2 MB",
      halaman: 98,
      status: "Berjalan Aktif",
      tanggalPenetapan: "05 Januari 2026",
      pejabatPengesah: "Kepala Dinas Kebudayaan dan Pariwisata",
      babDaftar: [
        "Bab I: Pendahuluan & Evaluasi Pelaksanaan Renja Tahun Lalu",
        "Bab II: Evaluasi Kinerja Renja DISBUDPAR",
        "Bab III: Tujuan, Sasaran, Program & Pagu Indikatif 2026",
        "Bab IV: Matriks Rencana Kerja Operasional",
        "Bab V: Penutup & Lampiran DPA-SKPD"
      ]
    },
    {
      id: "doc-3",
      nomor: "DISBUDPAR/LKjIP/2025/FINAL",
      kategori: "LKjIP",
      tahun: "2025",
      judulId: "Laporan Kinerja Instansi Pemerintah (LKjIP / LAKIP) DISBUDPAR Banyuwangi Tahun 2025",
      judulEn: "Government Agency Performance Accountability Report (LKjIP / LAKIP) Year 2025",
      ringkasanId: "Pertanggungjawaban akuntabilitas keberhasilan pencapaian target kinerja sasaran strategis, realisasi kunjungan wisata, efisiensi anggaran, dan evaluasi program.",
      ringkasanEn: "Official performance accountability report detailing achievement rates, tourist arrival figures, budget efficiency, and program audits.",
      ukuran: "5.4 MB",
      halaman: 116,
      status: "Terverifikasi Inspektorat (Nilai A)",
      tanggalPenetapan: "15 Februari 2026",
      pejabatPengesah: "Inspektorat Daerah & Kepala Disbudpar",
      babDaftar: [
        "Bab I: Pendahuluan & Mandat Kelembagaan",
        "Bab II: Perencanaan Strategis & Penetapan Kinerja",
        "Bab III: Akuntabilitas Kinerja (Realisasi IKU & Sasaran)",
        "Bab IV: Akuntabilitas Keuangan (Realisasi Belanja APBD)",
        "Bab V: Penutup & Rekomendasi Peningkatan Mutu"
      ]
    },
    {
      id: "doc-4",
      nomor: "SK-BUPATI/IKU-DISBUDPAR/2025",
      kategori: "IKU",
      tahun: "2025–2026",
      judulId: "Penetapan Indikator Kinerja Utama (IKU) Dinas Kebudayaan dan Pariwisata Banyuwangi",
      judulEn: "Key Performance Indicators (KPI/IKU) of Banyuwangi Culture and Tourism Office",
      ringkasanId: "Indikator ukuran keberhasilan utama mencakup: Jumlah kunjungan wisatawan, Lama tinggal (length of stay), Indeks Kepuasan Masyarakat, dan persentase cagar budaya terlindungi.",
      ringkasanEn: "Primary success metrics: Total tourist arrivals, length of stay, Public Satisfaction Index, and protected heritage conservation quotas.",
      ukuran: "1.9 MB",
      halaman: 46,
      status: "Surat Keputusan Bupati",
      tanggalPenetapan: "12 Januari 2025",
      pejabatPengesah: "Bupati Banyuwangi",
      babDaftar: [
        "Lampiran I: Matriks Indikator Kinerja Utama DISBUDPAR",
        "Lampiran II: Definisi Operasional & Formula Perhitungan",
        "Lampiran III: Sumber Data & Penanggung Jawab Bidang"
      ]
    },
    {
      id: "doc-5",
      nomor: "PK-ESELON-II/DISBUDPAR/2026",
      kategori: "PK",
      tahun: "2026",
      judulId: "Perjanjian Kinerja (PK) Kepala Dinas dengan Bupati Banyuwangi Tahun 2026",
      judulEn: "Performance Agreement Contract of Head of Office with Banyuwangi Regent Year 2026",
      ringkasanId: "Komitmen tertulis penandatanganan target kerja pimpinan perangkat daerah dengan Kepala Daerah untuk mewujudkan tata kelola akuntabel dan berorientasi hasil.",
      ringkasanEn: "Formal signed performance covenant between agency head and regional regent guaranteeing transparent result-oriented execution.",
      ukuran: "2.1 MB",
      halaman: 38,
      status: "Ditandatangani Pakta Integritas",
      tanggalPenetapan: "08 Januari 2026",
      pejabatPengesah: "Bupati Banyuwangi & Kepala Disbudpar",
      babDaftar: [
        "Lembar Pernyataan Perjanjian Kinerja Tahun 2026",
        "Pakta Integritas Bebas Korupsi, Kolusi & Nepotisme (KKN)",
        "Matriks Target Capaian Sasaran Strategis Eselon II"
      ]
    },
    {
      id: "doc-6",
      nomor: "DISBUDPAR/SOP-LAYANAN/2025/12",
      kategori: "SOP",
      tahun: "2025–2026",
      judulId: "Standar Operasional Prosedur (SOP) Rekomendasi Izin Pentas Seni & Pemakaian Balai Budaya",
      judulEn: "Standard Operating Procedures (SOP) for Cultural Event Permits and Venue Booking",
      ringkasanId: "Panduan alur birokrasi baku, estimasi waktu penyelesaian (SLA 24 jam), persyaratan dokumen, dan hak kewajiban pemohon izin pentas seni di Banyuwangi.",
      ringkasanEn: "Standard operating procedure guidelines specifying turnaround times (24h SLA), requirements, and rights for cultural stage permits.",
      ukuran: "1.6 MB",
      halaman: 52,
      status: "Standar Pelayanan Prima",
      tanggalPenetapan: "01 Desember 2025",
      pejabatPengesah: "Kepala Dinas & Tim Reformasi Birokrasi",
      babDaftar: [
        "SOP 01: Prosedur Rekomendasi Izin Pentas Seni Tradisional",
        "SOP 02: Prosedur Peminjaman Amfiteater & Balai Budaya",
        "SOP 03: Prosedur Rekomendasi Pendaftaran HKI Seni Budaya",
        "SOP 04: Pengelolaan Pengaduan Masyarakat (SP4N-LAPOR!)"
      ]
    },
  ];

  const categories = ["Semua", "Renstra", "Renja", "LKjIP", "IKU", "PK", "SOP"];

  const filtered = DOKUMEN_LIST.filter((doc) => {
    const matchCat = selectedCat === "Semua" || doc.kategori === selectedCat;
    const q = search.toLowerCase();
    const matchQuery =
      !q ||
      doc.judulId.toLowerCase().includes(q) ||
      doc.judulEn.toLowerCase().includes(q) ||
      doc.nomor.toLowerCase().includes(q) ||
      doc.tahun.toLowerCase().includes(q);
    return matchCat && matchQuery;
  });

  const triggerSimulatedDownload = (doc: DokumenItem) => {
    setDownloadToast(`Mengunduh berkas resmi PDF: ${doc.nomor} (${doc.ukuran})`);
    setTimeout(() => {
      setDownloadToast(`Selesai! Berkas "${doc.nomor}.pdf" berhasil tersimpan.`);
      setTimeout(() => {
        setDownloadToast(null);
      }, 4000);
    }, 1500);
  };

  return (
    <div className="space-y-10">
      {/* 1. TITLE & OPEN ACCESSIBILITY HEADER */}
      <section className="border-b border-white/[0.08] pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c9a24a]/10 border border-[#c9a24a]/30 text-[#c9a24a] font-mono text-xs font-semibold uppercase tracking-[0.2em] mb-2 shadow-sm">
              <FolderArchive className="w-3.5 h-3.5" />
              {isEn ? "PUBLIC REPOSITORY & OPEN DATA" : "TRANSPARANSI KINERJA & ARSIP DOKUMEN PUBLIK"}
            </div>
            <h1 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#f0f5f1] font-normal tracking-tight">
              {isEn
                ? "Planning & Performance Accountability Documents"
                : "Dokumen Perencanaan, Renstra & Laporan Kinerja"}
            </h1>
            <p className="text-xs sm:text-sm text-[#9aa5a0] mt-2 max-w-3xl leading-relaxed font-light">
              {isEn
                ? "In compliance with Law No. 14 of 2008 on Public Information Openness, access verified official PDFs of five-year strategic plans, annual performance accountability (SAKIP), and standard operating procedures."
                : "Sebagai wujud kepatuhan terhadap UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik (KIP), masyarakat dan peneliti dapat mengunduh berkas resmi Renstra, Renja, LKjIP, IKU, Perjanjian Kinerja, dan SOP pelayanan Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi."}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#dfe7e0] bg-white/[0.03] px-4 py-2 rounded-full border border-white/[0.1] backdrop-blur-md self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-[#10b981]" />
            <span className="font-light">Keterbukaan Informasi Publik: 100% Bebas Akses</span>
          </div>
        </div>
      </section>

      {/* 2. STATS & TRANSPARENCY BAR */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-5 rounded-3xl bg-[rgba(12,19,27,0.78)] border border-white/[0.1] backdrop-blur-md space-y-1.5 shadow-sm">
          <span className="text-[10px] font-mono text-[#78837c] uppercase tracking-wider block">DOKUMEN RESMI</span>
          <span className="font-editorial text-xl sm:text-2xl text-[#f0f5f1] font-normal block">6 Berkas Kunci</span>
          <span className="text-[11px] text-[#38bdf8] font-light block">Renstra s/d SOP Layanan</span>
        </div>

        <div className="p-5 rounded-3xl bg-[rgba(12,19,27,0.78)] border border-white/[0.1] backdrop-blur-md space-y-1.5 shadow-sm">
          <span className="text-[10px] font-mono text-[#78837c] uppercase tracking-wider block">PREDIKAT SAKIP</span>
          <span className="font-editorial text-xl sm:text-2xl text-[#f0f5f1] font-normal block">Nilai A (Memuaskan)</span>
          <span className="text-[11px] text-[#10b981] font-light block">Terverifikasi Inspektorat</span>
        </div>

        <div className="p-5 rounded-3xl bg-[rgba(12,19,27,0.78)] border border-white/[0.1] backdrop-blur-md space-y-1.5 shadow-sm">
          <span className="text-[10px] font-mono text-[#78837c] uppercase tracking-wider block">FORMAT BERKAS</span>
          <span className="font-editorial text-xl sm:text-2xl text-[#f0f5f1] font-normal block">PDF Standar Digital</span>
          <span className="text-[11px] text-[#c9a24a] font-light block">OCR &amp; Searchable Text</span>
        </div>

        <div className="p-5 rounded-3xl bg-[rgba(12,19,27,0.78)] border border-white/[0.1] backdrop-blur-md space-y-1.5 shadow-sm">
          <span className="text-[10px] font-mono text-[#78837c] uppercase tracking-wider block">BIAYA AKSES</span>
          <span className="font-editorial text-xl sm:text-2xl text-[#f0f5f1] font-normal block">Rp 0 (Gratis)</span>
          <span className="text-[11px] text-[#ec4899] font-light block">Bebas Akses KIP Publik</span>
        </div>
      </section>

      {/* 3. SEARCH & CATEGORY FILTER BAR */}
      <section className="p-4 sm:p-5 rounded-3xl bg-[rgba(12,19,27,0.78)] border border-white/[0.1] backdrop-blur-md space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#78837c]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={
                isEn
                  ? "Search document title, SK number, or year (e.g., Renstra, LKjIP, SOP, 2026)..."
                  : "Cari judul dokumen, nomor registrasi SK, atau tahun (contoh: Renstra, LKjIP, SOP, 2026)..."
              }
              className="w-full bg-white/[0.03] border border-white/[0.1] rounded-full pl-11 pr-4 py-2.5 text-xs sm:text-sm text-[#dfe7e0] placeholder-[#78837c] focus:outline-none focus:border-[#c9a24a]/60 font-light"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all whitespace-nowrap ${
                  selectedCat === cat
                    ? "bg-[#c9a24a] text-[#05070a] shadow-sm"
                    : "bg-white/[0.02] text-[#78837c] hover:text-[#dfe7e0] border border-white/[0.06]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DOCUMENT CARDS GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((doc) => (
          <div
            key={doc.id}
            className="p-6 rounded-3xl bg-[rgba(12,19,27,0.78)] border border-white/[0.1] hover:border-[#c9a24a]/50 transition-all flex flex-col justify-between space-y-4 group shadow-lg backdrop-blur-md relative overflow-hidden"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full bg-[#c9a24a]/15 border border-[#c9a24a]/30 text-[#c9a24a] font-mono text-[11px] font-semibold">
                  {doc.kategori} • {doc.tahun}
                </span>
                <span className="text-[10px] font-mono text-[#10b981] bg-[#10b981]/15 px-3 py-1 rounded-full border border-[#10b981]/30 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  {doc.status}
                </span>
              </div>

              <h3 className="font-editorial text-base sm:text-lg font-normal text-[#dfe7e0] group-hover:text-white transition-colors leading-snug">
                {isEn ? doc.judulEn : doc.judulId}
              </h3>

              <div className="text-[11px] font-mono text-[#78837c]">
                {doc.nomor}
              </div>

              <p className="text-xs text-[#9aa5a0] leading-relaxed line-clamp-2 font-light">
                {isEn ? doc.ringkasanEn : doc.ringkasanId}
              </p>
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
              <span className="text-[#78837c] font-mono text-[11px]">
                PDF • {doc.ukuran} • {doc.halaman} Hal.
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveModalDoc(doc)}
                  className="px-4 py-2 rounded-full bg-white/[0.03] hover:bg-white/[0.07] text-[#dfe7e0] font-medium text-xs transition-colors flex items-center gap-1.5 border border-white/[0.08] hover:border-[#c9a24a]/40"
                >
                  <Eye className="w-3.5 h-3.5 text-[#c9a24a]" />
                  <span>{isEn ? "Preview" : "Pratinjau"}</span>
                </button>
                <button
                  onClick={() => triggerSimulatedDownload(doc)}
                  className="px-4 py-2 rounded-full bg-[#c9a24a] hover:bg-[#d8b056] text-[#05070a] font-semibold text-xs transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isEn ? "Download PDF" : "Unduh PDF"}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="text-center py-16 rounded-3xl bg-[rgba(12,19,27,0.78)] border border-white/[0.1] space-y-3 backdrop-blur-md">
          <FolderArchive className="w-12 h-12 text-[#78837c] mx-auto opacity-60" />
          <h4 className="font-editorial text-lg font-normal text-[#dfe7e0]">
            {isEn ? "No documents matched your filter" : "Dokumen tidak ditemukan"}
          </h4>
          <p className="text-xs text-[#78837c] font-light">
            {isEn
              ? "Try adjusting your search terms or select 'All' categories"
              : "Silakan ubah kata kunci pencarian atau pilih kategori 'Semua'"}
          </p>
        </div>
      )}

      {/* 5. DOCUMENT PREVIEW MODAL */}
      {activeModalDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[rgba(12,19,27,0.95)] border border-white/[0.15] p-6 sm:p-8 space-y-5 shadow-2xl max-h-[90vh] overflow-y-auto backdrop-blur-2xl">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/[0.08] pb-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full bg-[#c9a24a]/20 text-[#c9a24a] font-mono text-xs font-semibold border border-[#c9a24a]/30">
                    {activeModalDoc.kategori}
                  </span>
                  <span className="text-xs font-mono text-[#78837c]">{activeModalDoc.tahun}</span>
                </div>
                <h3 className="font-editorial text-lg sm:text-xl font-normal text-[#f0f5f1] leading-snug">
                  {isEn ? activeModalDoc.judulEn : activeModalDoc.judulId}
                </h3>
              </div>

              <button
                onClick={() => setActiveModalDoc(null)}
                className="w-8 h-8 rounded-full bg-white/[0.05] text-[#78837c] hover:text-white flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Document Metadata Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                <span className="text-[10px] text-[#78837c] block font-mono uppercase tracking-wider">NOMOR REGISTRASI SK</span>
                <span className="font-mono text-[#dfe7e0] font-medium">{activeModalDoc.nomor}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                <span className="text-[10px] text-[#78837c] block font-mono uppercase tracking-wider">PENGESAHAN / VERIFIKASI</span>
                <span className="text-[#10b981] font-medium">{activeModalDoc.pejabatPengesah}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                <span className="text-[10px] text-[#78837c] block font-mono uppercase tracking-wider">TANGGAL DITETAPKAN</span>
                <span className="text-[#dfe7e0] font-light">{activeModalDoc.tanggalPenetapan}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                <span className="text-[10px] text-[#78837c] block font-mono uppercase tracking-wider">UKURAN &amp; JUMLAH HALAMAN</span>
                <span className="text-[#dfe7e0] font-light">{activeModalDoc.ukuran} • {activeModalDoc.halaman} Halaman (PDF Digital)</span>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-[#c9a24a] uppercase tracking-[0.18em] block font-semibold">
                RINGKASAN EKSEKUTIF DOKUMEN:
              </span>
              <p className="text-xs text-[#9aa5a0] leading-relaxed p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] font-light">
                {isEn ? activeModalDoc.ringkasanEn : activeModalDoc.ringkasanId}
              </p>
            </div>

            {/* Table of Contents Preview */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-[0.18em] block font-semibold">
                DAFTAR BAB &amp; STRUKTUR MATRIKS:
              </span>
              <div className="space-y-1.5">
                {activeModalDoc.babDaftar.map((bab, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-[#dfe7e0] font-light">
                    <BookOpen className="w-3.5 h-3.5 text-[#c9a24a] flex-shrink-0" />
                    <span>{bab}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-[11px] text-[#78837c] font-mono">
                Arsip Resmi Disbudpar Kab. Banyuwangi
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveModalDoc(null)}
                  className="px-5 py-2 rounded-full bg-white/[0.08] text-[#dfe7e0] text-xs font-semibold hover:bg-white/[0.14] transition-all"
                >
                  {isEn ? "Close" : "Tutup"}
                </button>
                <button
                  onClick={() => {
                    triggerSimulatedDownload(activeModalDoc);
                    setActiveModalDoc(null);
                  }}
                  className="px-5 py-2 rounded-full bg-[#c9a24a] text-[#05070a] hover:bg-[#d8b056] text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>{isEn ? "Download PDF" : "Unduh Berkas PDF"}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 6. TOAST NOTIFICATION */}
      {downloadToast && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-[rgba(12,19,27,0.95)] border border-[#c9a24a]/80 shadow-2xl text-white text-xs flex items-center gap-3 backdrop-blur-xl animate-fadeIn">
          <div className="w-8 h-8 rounded-full bg-[#c9a24a] text-[#05070a] flex items-center justify-center flex-shrink-0 font-bold">
            <Download className="w-4 h-4" />
          </div>
          <div className="space-y-0.5">
            <span className="font-semibold block text-[#f0f5f1]">Status Unduhan Dokumen</span>
            <span className="text-[#9aa5a0] block font-light">{downloadToast}</span>
          </div>
          <button
            onClick={() => setDownloadToast(null)}
            className="text-[#78837c] hover:text-white font-bold ml-2 transition-colors"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
