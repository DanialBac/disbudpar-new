// src/pages/bidang/data.ts
// Single source of truth for Bidang page content (AGENTS.md section 6: page data lives with the page).
// Ported 1:1 from the retired static pages (bidang-*.html) — TypeScript instead of hardcoded HTML.
import type { LucideIcon } from "lucide-react";
import {
  Map,
  Building,
  Users,
  Lightbulb,
  Scale,
  Handshake,
  ScrollText,
  Landmark,
  Theater,
  BarChart3,
  Calendar,
  Globe,
} from "lucide-react";

export type BidangType = "pariwisata" | "ekraf" | "kebudayaan" | "pemasaran";

/** Public assets that actually exist under public/ (verified). */
const GALLERY = {
  ijen: "gallery/ijen-geopark.jpg",
  alasPurwo: "gallery/barong-kemiren.jpg",
  bangsring: "gallery/penari-gandrung.jpg",
  kemiren: "gallery/barong-kemiren.jpg",
  pulauMerah: "gallery/gandrung-sewu-festival.jpg",
  deDjawatan: "gallery/ijen-geopark.jpg",
  gandrungSewu: "gallery/gandrung-sewu.jpg",
  pelinggihan: "gallery/pelinggihan.jpg",
} as const;

export interface BidangStat {
  value: string;
  suffix?: string;
  labelId: string;
  labelEn: string;
}

export interface BidangTupoksi {
  icon: LucideIcon;
  titleId: string;
  titleEn: string;
  descId: string;
  descEn: string;
}

export interface BidangShowcase {
  image: string;
  imageAltId: string;
  imageAltEn: string;
  tagId: string;
  tagEn: string;
  titleId: string;
  titleEn: string;
  descId: string;
  descEn: string;
  locId: string;
  locEn: string;
  noteId: string;
  noteEn: string;
}

export interface BidangContent {
  meta: {
    /** Legacy route aliases kept for backward compatibility. */
    legacyAlias: string;
    seoTitleId: string;
    seoTitleEn: string;
    seoDescId: string;
    seoDescEn: string;
    /** Pillar label: ID/EN + number. */
    pillar: { num: string; labelId: string; labelEn: string };
    /** Visual accent per division (same palette as the previous static pages). */
    accent: string;
    switcherLabelId: string;
    switcherLabelEn: string;
  };
  hero: {
    titleId: string;
    titleEn: string;
    descId: string;
    descEn: string;
    stats: BidangStat[];
  };
  tupoksi: {
    tagId: string;
    tagEn: string;
    titleId: string;
    titleEn: string;
    items: BidangTupoksi[];
  };
  showcase: {
    tagId: string;
    tagEn: string;
    titleId: string;
    titleEn: string;
    items: BidangShowcase[];
  };
  contact: {
    titleId: string;
    titleEn: string;
    descId: string;
    descEn: string;
    ctaId: string;
    ctaEn: string;
    mailto: string;
    subject: string;
  };
}

export const BIDANG_ORDER: readonly BidangType[] = ["pariwisata", "ekraf", "kebudayaan", "pemasaran"];

export const BIDANG_CONTENT: Record<BidangType, BidangContent> = {
  pariwisata: {
    meta: {
      legacyAlias: "/bidang-pariwisata",
      seoTitleId: "Bidang Pariwisata & Destinasi — DISBUDPAR Kabupaten Banyuwangi",
      seoTitleEn: "Tourism & Destinations Division — DISBUDPAR Banyuwangi",
      seoDescId:
        "Data resmi Bidang Pariwisata Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi: Pengembangan Destinasi, Industri Pariwisata, Standarisasi Usaha, Homestay, dan Pemandu Wisata.",
      seoDescEn:
        "Official data of the Tourism Division of Banyuwangi Culture and Tourism Office: Destination Development, Tourism Industry, Business Standardization, Homestays, and Tour Guides.",
      pillar: { num: "01", labelId: "Sektor Pariwisata", labelEn: "Tourism Sector" },
      accent: "#38bdf8",
      switcherLabelId: "Pariwisata & Destinasi",
      switcherLabelEn: "Tourism & Destinations",
    },
    hero: {
      titleId: "Bidang Pariwisata & Pengembangan Destinasi",
      titleEn: "Tourism & Destination Development Division",
      descId:
        "Bertanggung jawab atas perencanaan, standardisasi, fasilitasi investasi, serta penguatan tata kelola destinasi pariwisata alam, bahari, dan buatan yang berkelanjutan di seluruh penjuru Kabupaten Banyuwangi.",
      descEn:
        "Responsible for planning, standardization, investment facilitation, and strengthening sustainable governance of nature, marine, and man-made tourism destinations across Banyuwangi Regency.",
      stats: [
        { value: "74", suffix: "+", labelId: "Destinasi Wisata Terkelola", labelEn: "Managed Destinations" },
        { value: "420", suffix: "+", labelId: "Homestay Standar CHSE", labelEn: "CHSE-Standard Homestays" },
        { value: "98", labelId: "Kelompok Sadar Wisata (Pokdarwis)", labelEn: "Tourism Awareness Groups" },
        { value: "1.4", suffix: "M", labelId: "Kunjungan Wisatawan / Tahun", labelEn: "Visitor Arrivals / Year" },
      ],
    },
    tupoksi: {
      tagId: "Struktur Kerja & Fungsi",
      tagEn: "Structure & Functions",
      titleId: "Tugas Pokok & Seksi Kerja Bidang",
      titleEn: "Core Duties & Working Sections",
      items: [
        {
          icon: Map,
          titleId: "Seksi Daya Tarik & Destinasi Wisata",
          titleEn: "Attractions & Destinations Section",
          descId:
            "Melakukan pembinaan tata kelola objek wisata alam, pantai, dan hutan pegunungan. Mengembangkan sarana prasarana wisata berwawasan lingkungan dan ramah disabilitas.",
          descEn:
            "Guides governance of nature, beach, and mountain-forest attractions; develops environmentally conscious, disability-friendly tourism infrastructure.",
        },
        {
          icon: Building,
          titleId: "Seksi Industri & Usaha Pariwisata",
          titleEn: "Industry & Tourism Business Section",
          descId:
            "Penerbitan rekomendasi teknis TDUP, verifikasi sertifikasi hotel bintang, homestay pedesaan, restoran, agen biro perjalanan wisata, dan pemandu wisata (HPI).",
          descEn:
            "Issues TDUP technical recommendations and verifies star-hotel, rural homestay, restaurant, travel agency, and tour guide (HPI) certifications.",
        },
        {
          icon: Users,
          titleId: "Seksi Pemberdayaan Masyarakat",
          titleEn: "Community Empowerment Section",
          descId:
            "Penguatan kapasitas Pokdarwis dan pengelola desa wisata melalui pelatihan hospitality, sapta pesona, penanganan keselamatan air (lifeguard), dan digital tourism.",
          descEn:
            "Strengthens Pokdarwis and village-tourism managers through hospitality, sapta pesona, water-safety (lifeguard), and digital tourism training.",
        },
      ],
    },
    showcase: {
      tagId: "Katalog Data Objek Unggulan",
      tagEn: "Featured Data Catalog",
      titleId: "Destinasi Wisata Prioritas Banyuwangi",
      titleEn: "Priority Destinations of Banyuwangi",
      items: [
        {
          image: GALLERY.ijen,
          imageAltId: "Kawah Ijen Blue Fire",
          imageAltEn: "Ijen Crater Blue Fire",
          tagId: "UNESCO Geopark",
          tagEn: "UNESCO Geopark",
          titleId: "Taman Wisata Alam Kawah Ijen",
          titleEn: "Ijen Crater Nature Recreation Park",
          descId:
            "Fenomena api biru abadi (Blue Fire) legendaris dan danau kawah kawah asam vulkanik terluas di dunia dengan ketinggian 2.386 mdpl.",
          descEn:
            "Legendary eternal blue fire and the world's widest volcanic acid crater lake at 2,386 meters above sea level.",
          locId: "Licin, Banyuwangi",
          locEn: "Licin, Banyuwangi",
          noteId: "Status: Aktif",
          noteEn: "Status: Active",
        },
        {
          image: GALLERY.alasPurwo,
          imageAltId: "Taman Nasional Alas Purwo",
          imageAltEn: "Alas Purwo National Park",
          tagId: "Taman Nasional",
          tagEn: "National Park",
          titleId: "TN Alas Purwo & Pantai G-Land",
          titleEn: "Alas Purwo NP & G-Land Beach",
          descId:
            "Hutan hujan tertua Jawa, padang savana Sadengan berfauna banteng liar, serta ombak kiri surfing terbaik dunia di Pantai Plengkung.",
          descEn:
            "Java's oldest rainforest, the Sadengan banteng savanna, and world-class left-hand surf at Plengkung Beach.",
          locId: "Tegaldlimo, Banyuwangi",
          locEn: "Tegaldlimo, Banyuwangi",
          noteId: "Status: Aktif",
          noteEn: "Status: Active",
        },
        {
          image: GALLERY.bangsring,
          imageAltId: "Bangsring Underwater",
          imageAltEn: "Bangsring Underwater",
          tagId: "Ekowisata Bahari",
          tagEn: "Marine Ecotourism",
          titleId: "Bangsring Underwater (Bunder)",
          titleEn: "Bangsring Underwater (Bunder)",
          descId:
            "Kawasan konservasi terumbu karang berbasis nelayan binaan, rumah apung di Selat Bali, serta pengalaman renang edukasi satwa laut.",
          descEn:
            "Fisherman-led coral conservation area with floating houses on the Bali Strait and educational marine-life swimming.",
          locId: "Wongsorejo, Banyuwangi",
          locEn: "Wongsorejo, Banyuwangi",
          noteId: "Status: Aktif",
          noteEn: "Status: Active",
        },
        {
          image: GALLERY.kemiren,
          imageAltId: "Desa Adat Kemiren",
          imageAltEn: "Kemiren Traditional Village",
          tagId: "Desa Wisata ADWI",
          tagEn: "ADWI Tourism Village",
          titleId: "Desa Wisata Adat Using Kemiren",
          titleEn: "Kemiren Using Traditional Tourism Village",
          descId:
            "Kampung adat pelestari warisan budaya Suku Using dengan rumah tradisional Tikel Balung, seni Gandrung, dan ritual Tumpeng Sewu.",
          descEn:
            "Customary village preserving Using heritage with Tikel Balung houses, Gandrung art, and the Tumpeng Sewu ritual.",
          locId: "Glagah, Banyuwangi",
          locEn: "Glagah, Banyuwangi",
          noteId: "Status: Mandiri",
          noteEn: "Status: Independent",
        },
        {
          image: GALLERY.pulauMerah,
          imageAltId: "Pantai Pulau Merah",
          imageAltEn: "Red Island Beach",
          tagId: "Wisata Pantai",
          tagEn: "Beach Tourism",
          titleId: "Pantai Pulau Merah (Red Island)",
          titleEn: "Pulau Merah Beach (Red Island)",
          descId:
            "Bukit merah khas di tepi pantai berpasir halus, panorama matahari terbenam emas, serta spot surfing ramah bagi pemula hingga profesional.",
          descEn:
            "Signature red hill beside fine white sand, golden sunsets, and surf spots friendly to beginners and professionals alike.",
          locId: "Pesanggaran, Banyuwangi",
          locEn: "Pesanggaran, Banyuwangi",
          noteId: "Status: Aktif",
          noteEn: "Status: Active",
        },
        {
          image: GALLERY.deDjawatan,
          imageAltId: "Hutan De Djawatan",
          imageAltEn: "De Djawatan Forest",
          tagId: "Wisata Alam",
          tagEn: "Nature Tourism",
          titleId: "De Djawatan Benculuk",
          titleEn: "De Djawatan Benculuk",
          descId:
            "Hutan kanopi pohon trembesi raksasa berusia ratusan tahun dengan lumut menjuntai layaknya latar film fantasi Lord of the Rings.",
          descEn:
            "Centuries-old giant trembesi canopy forest draped in moss, evoking a Lord of the Rings fantasy set.",
          locId: "Cluring, Banyuwangi",
          locEn: "Cluring, Banyuwangi",
          noteId: "Status: Aktif",
          noteEn: "Status: Active",
        },
      ],
    },
    contact: {
      titleId: "Konsultasi Usaha & Tata Kelola Destinasi Pariwisata",
      titleEn: "Business Consultation & Destination Governance",
      descId: "Layanan konsultasi TDUP, sertifikasi homestay, serta fasilitasi Pokdarwis Kabupaten Banyuwangi.",
      descEn: "TDUP consultation, homestay certification, and Pokdarwis facilitation services of Banyuwangi Regency.",
      ctaId: "Hubungi Bidang Pariwisata",
      ctaEn: "Contact the Tourism Division",
      mailto: "disbudpar@banyuwangikab.go.id",
      subject: "Konsultasi Bidang Pariwisata",
    },
  },

  ekraf: {
    meta: {
      legacyAlias: "/bidang-ekraf",
      seoTitleId: "Bidang Ekonomi Kreatif (E-Kraf) — DISBUDPAR Kabupaten Banyuwangi",
      seoTitleEn: "Creative Economy Division (E-Kraf) — DISBUDPAR Banyuwangi",
      seoDescId:
        "Akselerasi 17 subsektor ekonomi kreatif, inkubasi produk unggulan, perlindungan HKI, dan digitalisasi UMKM kreatif Banyuwangi.",
      seoDescEn:
        "Accelerating 17 creative-economy subsectors, product incubation, IP protection, and digitalization of Banyuwangi creative MSMEs.",
      pillar: { num: "02", labelId: "Ekonomi Kreatif", labelEn: "Creative Economy" },
      accent: "#ec4899",
      switcherLabelId: "Ekonomi Kreatif (E-Kraf)",
      switcherLabelEn: "Creative Economy (E-Kraf)",
    },
    hero: {
      titleId: "Bidang Ekonomi Kreatif (E-Kraf)",
      titleEn: "Creative Economy Division (E-Kraf)",
      descId:
        "Mengakselerasi ekosistem 17 subsektor ekonomi kreatif, inkubasi produk lokal unggulan kriya dan kuliner, perlindungan Hak Kekayaan Intelektual (HKI), serta digitalisasi pasar UMKM kreatif Banyuwangi.",
      descEn:
        "Accelerates the 17 creative-economy subsectors, incubates flagship local craft and culinary products, protects intellectual property rights, and digitalizes Banyuwangi's creative MSME market.",
      stats: [
        { value: "17", labelId: "Subsektor Ekraf Dibina", labelEn: "Creative Subsectors Fostered" },
        { value: "1.250", suffix: "+", labelId: "Pelaku Kreatif & UMKM", labelEn: "Creative Actors & MSMEs" },
        { value: "140", suffix: "+", labelId: "Fasilitasi HKI Terdaftar", labelEn: "Registered IP Facilitations" },
        { value: "8", labelId: "Sentra Kriya & Komoditas Ekspor", labelEn: "Craft & Export Commodity Hubs" },
      ],
    },
    tupoksi: {
      tagId: "Struktur Kerja & Tupoksi",
      tagEn: "Structure & Functions",
      titleId: "Tugas Pokok & Seksi Kerja Bidang E-Kraf",
      titleEn: "Core Duties & Working Sections of E-Kraf",
      items: [
        {
          icon: Lightbulb,
          titleId: "Seksi Fasilitasi & Pengembangan Usaha",
          titleEn: "Business Facilitation & Development Section",
          descId:
            "Inkubasi bisnis rintisan kreatif, kurasi produk ekspor, pendampingan packaging modern ramah lingkungan, dan program sertifikasi halal UMKM.",
          descEn:
            "Incubates creative startups, curates export products, coaches eco-friendly modern packaging, and runs MSME halal certification programs.",
        },
        {
          icon: Scale,
          titleId: "Seksi Hak Kekayaan Intelektual (HKI)",
          titleEn: "Intellectual Property Rights Section",
          descId:
            "Klinik konsultasi dan pembiayaan pendaftaran merek, hak cipta karya seni, desain industri, dan indikasi geografis komoditas Banyuwangi.",
          descEn:
            "Consultation clinic and funding for trademark registration, artwork copyright, industrial design, and Banyuwangi commodity geographical indications.",
        },
        {
          icon: Handshake,
          titleId: "Seksi Akselerasi Pasar & Kemitraan",
          titleEn: "Market Acceleration & Partnership Section",
          descId:
            "Menghubungkan perajin lokal dengan industri perhotelan, ritel modern, marketplace e-commerce, serta pameran kriya nasional dan internasional.",
          descEn:
            "Connects local artisans with hospitality, modern retail, and e-commerce marketplaces, plus national and international craft expos.",
        },
      ],
    },
    showcase: {
      tagId: "Katalog Data Produk Unggulan",
      tagEn: "Featured Products Catalog",
      titleId: "Komoditas & Karya Kreatif Unggulan Banyuwangi",
      titleEn: "Banyuwangi's Finest Commodities & Creative Works",
      items: [
        {
          image: GALLERY.kemiren,
          imageAltId: "Batik Motif Gajah Oling",
          imageAltEn: "Gajah Oling Motif Batik",
          tagId: "Wastra Tradisional",
          tagEn: "Traditional Textile",
          titleId: "Batik Tulis Motif Gajah Oling",
          titleEn: "Gajah Oling Hand-Drawn Batik",
          descId:
            "Motif tertua suku Using melambangkan kepasrahan kepada Tuhan Yang Maha Esa, menggunakan pewarna alami getah mangrove dan daun tarum.",
          descEn:
            "The oldest Using motif symbolizing devotion to God, dyed naturally with mangrove sap and tarum leaves.",
          locId: "Sentra Batik Cluring & Glagah",
          locEn: "Batik Hubs of Cluring & Glagah",
          noteId: "Sertifikat HKI: Terdaftar",
          noteEn: "IP Certificate: Registered",
        },
        {
          image: GALLERY.alasPurwo,
          imageAltId: "Anyaman Bambu Gintangan",
          imageAltEn: "Gintangan Bamboo Weaving",
          tagId: "Kriya Bambu",
          tagEn: "Bamboo Craft",
          titleId: "Kerajinan Anyaman Bambu Gintangan",
          titleEn: "Gintangan Bamboo Weaving Craft",
          descId:
            "Karya anyaman bambu bernilai seni tinggi, mulai dari lampion interior, perabot meja kursi etnik, hingga souvenir ekspor mancanegara.",
          descEn:
            "High-art bamboo weaving — interior lanterns, ethnic furniture, and export-grade souvenirs.",
          locId: "Desa Gintangan, Rogojampi",
          locEn: "Gintangan Village, Rogojampi",
          noteId: "Komoditas Ekspor",
          noteEn: "Export Commodity",
        },
        {
          image: GALLERY.ijen,
          imageAltId: "Kopi Arabika Ijen",
          imageAltEn: "Ijen Arabica Coffee",
          tagId: "Kuliner & Kopi",
          tagEn: "Culinary & Coffee",
          titleId: "Kopi Arabika & Robusta Ijen-Raung",
          titleEn: "Ijen-Raung Arabica & Robusta Coffee",
          descId:
            "Kopi lereng vulkanik bersertifikasi Indikasi Geografis (IG), cita rasa khas floral chocolaty dan keasaman seimbang yang diekspor ke Eropa.",
          descEn:
            "GI-certified volcanic-slope coffee with floral-chocolaty notes and balanced acidity, exported to Europe.",
          locId: "Kawasan Ijen, Songgon & Kalipuro",
          locEn: "Ijen Area, Songgon & Kalipuro",
          noteId: "Indikasi Geografis",
          noteEn: "Geographical Indication",
        },
        {
          image: GALLERY.pulauMerah,
          imageAltId: "Kuliner Khas Banyuwangi",
          imageAltEn: "Banyuwangi Signature Cuisine",
          tagId: "Kuliner Warisan",
          tagEn: "Heritage Cuisine",
          titleId: "Paket Kuliner: Sego Tempong & Bagiak",
          titleEn: "Culinary Set: Sego Tempong & Bagiak",
          descId:
            "Makanan khas pedas sambal tomat ranti segar, rujak soto kuah gurih, dan kue kering legendaris bagiak rasa jahe pandan rempah.",
          descEn:
            "Signature spicy tomato-sambal rice, savory rujak soto broth, and the legendary ginger-pandan bagiak pastry.",
          locId: "Sentra Kuliner Banyuwangi Kota",
          locEn: "Banyuwangi Town Culinary Hub",
          noteId: "Sertifikasi Halal",
          noteEn: "Halal Certified",
        },
        {
          image: GALLERY.gandrungSewu,
          imageAltId: "Kriya Kayu & Alat Musik",
          imageAltEn: "Wood Craft & Traditional Instruments",
          tagId: "Kriya & Musik",
          tagEn: "Craft & Music",
          titleId: "Alat Musik Tradisi & Ukir Kayu Kelapa",
          titleEn: "Traditional Instruments & Coconut-Wood Carving",
          descId:
            "Pembuatan gamelan pelog slendro Using, angklung paglak dari bambu wulung, serta replika cenderamata mahkota penari Gandrung Omprok.",
          descEn:
            "Using pelog-slendro gamelan, black-bamboo angklung paglak, and souvenir replicas of the Gandrung Omprok crown.",
          locId: "Giri & Singojuruh",
          locEn: "Giri & Singojuruh",
          noteId: "Karya Maestro",
          noteEn: "Maestro Works",
        },
        {
          image: GALLERY.deDjawatan,
          imageAltId: "Digital Media Kreatif",
          imageAltEn: "Digital Creative Media",
          tagId: "Digital & Desain",
          tagEn: "Digital & Design",
          titleId: "Rumah Kreatif Digital Juang 45",
          titleEn: "Juang 45 Digital Creative House",
          descId:
            "Hub kolaboratif kreator konten visual, videografi lanskap pariwisata, desain grafis kemasan produk, dan inkubasi startup lokal.",
          descEn:
            "Collaborative hub for visual creators — tourism videography, product packaging design, and local startup incubation.",
          locId: "Gedung Juang 45 Banyuwangi",
          locEn: "Juang 45 Building, Banyuwangi",
          noteId: "Coworking Space",
          noteEn: "Coworking Space",
        },
      ],
    },
    contact: {
      titleId: "Fasilitasi HKI Gratis & Kurasi Produk Ekraf",
      titleEn: "Free IP Facilitation & Creative Product Curation",
      descId:
        "Daftarkan karya cipta merek dagang Anda atau ikuti program kurasi produk ekraf Banyuwangi ke kancah nasional.",
      descEn: "Register your trademarked works or join Banyuwangi's creative-product curation program to the national stage.",
      ctaId: "Daftar Kurasi Ekraf",
      ctaEn: "Register for Curation",
      mailto: "ekraf@banyuwangikab.go.id",
      subject: "Pendaftaran Fasilitasi Ekraf",
    },
  },

  kebudayaan: {
    meta: {
      legacyAlias: "/bidang-kebudayaan",
      seoTitleId: "Bidang Kebudayaan & Tradisi — DISBUDPAR Kabupaten Banyuwangi",
      seoTitleEn: "Culture & Traditions Division — DISBUDPAR Banyuwangi",
      seoDescId:
        "Pelestarian adat Suku Using, seni Gandrung dan Seblang, cagar budaya Blambangan, serta pembinaan sanggar kesenian rakyat.",
      seoDescEn:
        "Preserving Using customs, Gandrung and Seblang arts, Blambangan heritage sites, and folk art-studio development.",
      pillar: { num: "03", labelId: "Warisan Budaya", labelEn: "Cultural Heritage" },
      accent: "#e2b168",
      switcherLabelId: "Kebudayaan & Tradisi",
      switcherLabelEn: "Culture & Traditions",
    },
    hero: {
      titleId: "Bidang Kebudayaan & Tradisi",
      titleEn: "Culture & Traditions Division",
      descId:
        "Menjaga marwah keluhuran adat istiadat Suku Using, pelestarian seni tradisi Gandrung dan Seblang, perlindungan situs cagar budaya bersejarah Kerajaan Blambangan, serta pembinaan sanggar kesenian rakyat.",
      descEn:
        "Safeguards the noble customs of the Using people, preserves the Gandrung and Seblang traditional arts, protects Blambangan Kingdom heritage sites, and nurtures folk art studios.",
      stats: [
        { value: "12", labelId: "Warisan Budaya Takbenda (WBTb)", labelEn: "Intangible Cultural Heritage Items" },
        { value: "840", suffix: "+", labelId: "Seniman & Budayawan Ber-KTA", labelEn: "Registered Artists & Culturalists" },
        { value: "38", labelId: "Situs & Bangunan Cagar Budaya", labelEn: "Heritage Sites & Buildings" },
        { value: "160", suffix: "+", labelId: "Sanggar Seni Tradisi Aktif", labelEn: "Active Traditional Art Studios" },
      ],
    },
    tupoksi: {
      tagId: "Struktur Kerja & Tupoksi",
      tagEn: "Structure & Functions",
      titleId: "Tugas Pokok & Seksi Kerja Bidang Kebudayaan",
      titleEn: "Core Duties & Working Sections of Culture",
      items: [
        {
          icon: ScrollText,
          titleId: "Seksi Nilai Budaya & Tradisi",
          titleEn: "Cultural Values & Traditions Section",
          descId:
            "Inventarisasi dan riset tradisi lisan, adat istiadat Using, manuskrip lontar kuno Yusuf, ritus upacara desa, serta pengusulan penetapan Warisan Budaya Takbenda (WBTb) Indonesia.",
          descEn:
            "Inventories and researches oral traditions, Using customs, the ancient Yusuf lontar manuscripts, village rites, and proposes Indonesian WBTb designations.",
        },
        {
          icon: Landmark,
          titleId: "Seksi Cagar Budaya & Permuseuman",
          titleEn: "Heritage Conservation & Museums Section",
          descId:
            "Kajian zonasi perlindungan cagar budaya, pemugaran situs bersejarah Blambangan, ekskavasi arkeologi, serta pengelolaan edukatif Museum Blambangan.",
          descEn:
            "Studies heritage-protection zoning, restores Blambangan historical sites, conducts archaeology, and manages the educational Blambangan Museum.",
        },
        {
          icon: Theater,
          titleId: "Seksi Kesenian & Tenaga Kebudayaan",
          titleEn: "Arts & Cultural Human Resources Section",
          descId:
            "Pemberdayaan empu tari, maestro gamelan, seniman tradisi, penerbitan Kartu Tanda Anggota (KTA) Seniman, serta kurasi izin rekomendasi pentas kesenian.",
          descEn:
            "Empowers dance masters, gamelan maestros, and traditional artists; issues artist ID cards and curates performance recommendation permits.",
        },
      ],
    },
    showcase: {
      tagId: "Katalog Warisan Budaya & Situs",
      tagEn: "Heritage & Sites Catalog",
      titleId: "Warisan Budaya Unggulan Kabupaten Banyuwangi",
      titleEn: "Banyuwangi's Finest Cultural Heritage",
      items: [
        {
          image: GALLERY.gandrungSewu,
          imageAltId: "Tari Gandrung Banyuwangi",
          imageAltEn: "Banyuwangi Gandrung Dance",
          tagId: "WBTb Nasional",
          tagEn: "National ICH",
          titleId: "Seni Pertunjukan Gandrung Banyuwangi",
          titleEn: "Banyuwangi Gandrung Performing Art",
          descId:
            "Tarian sakral perwujudan syukur Dewi Sri dan simbol heroisme perjuangan rakyat Blambangan dengan iringan gamelan, kluncing, dan biola Using.",
          descEn:
            "Sacred dance of gratitude to Dewi Sri and symbol of Blambangan resistance, accompanied by gamelan, kluncing, and Using violin.",
          locId: "Seluruh Wilayah Adat Using",
          locEn: "Across the Using Customary Area",
          noteId: "Status: Terdaftar UNESCO/Kemdikbud",
          noteEn: "Status: UNESCO/Kemdikbud Registered",
        },
        {
          image: GALLERY.pelinggihan,
          imageAltId: "Rumah Adat Tikel Balung Kemiren",
          imageAltEn: "Kemiren Tikel Balung Traditional House",
          tagId: "Arsitektur Adat",
          tagEn: "Customary Architecture",
          titleId: "Rumah Adat Using Tikel Balung",
          titleEn: "Using Tikel Balung Traditional House",
          descId:
            "Struktur hunian vernacular kayu jati bersistem pasak soko guru tanpa paku besi, tahan gempa, dan berfilosofi keseimbangan manusia dengan alam.",
          descEn:
            "Teak vernacular housing with soko guru peg system — no iron nails, earthquake resistant, embodying human-nature balance.",
          locId: "Desa Adat Kemiren, Glagah",
          locEn: "Kemiren Customary Village, Glagah",
          noteId: "Status: Cagar Budaya",
          noteEn: "Status: Heritage Listed",
        },
        {
          image: GALLERY.kemiren,
          imageAltId: "Ritual Adat Seblang",
          imageAltEn: "Seblang Ritual",
          tagId: "WBTb Ritual Sakral",
          tagEn: "Sacred-Ritual ICH",
          titleId: "Ritual Adat Seblang (Olehsari & Bakungan)",
          titleEn: "Seblang Ritual (Olehsari & Bakungan)",
          descId:
            "Upacara bersih desa tolak bala kuno berusia ratusan tahun; penari wanita dalam kondisi trance menari dengan mahkota omprok bunga segar selama 7 hari.",
          descEn:
            "Centuries-old village-cleansing rite; a trance dancer wearing a fresh omprok flower crown performs for seven days.",
          locId: "Desa Olehsari & Kel. Bakungan",
          locEn: "Olehsari Village & Bakungan Ward",
          noteId: "Status: WBTb Indonesia",
          noteEn: "Status: Indonesian ICH",
        },
        {
          image: GALLERY.alasPurwo,
          imageAltId: "Tradisi Kebo-Keboan",
          imageAltEn: "Kebo-Keboan Tradition",
          tagId: "WBTb Agraris",
          tagEn: "Agrarian ICH",
          titleId: "Upacara Adat Kebo-Keboan",
          titleEn: "Kebo-Keboan Customary Ceremony",
          descId:
            "Ritual agraris permohonan berkah kesuburan sawah; warga dirasuki roh leluhur bertingkah laku layaknya kerbau membajak kubangan lumpur desa.",
          descEn:
            "Agrarian rite praying for paddy fertility; villagers channel ancestral spirits and act as buffalo ploughing the village mud.",
          locId: "Alasmalang & Aliyan",
          locEn: "Alasmalang & Aliyan",
          noteId: "Status: WBTb Indonesia",
          noteEn: "Status: Indonesian ICH",
        },
        {
          image: GALLERY.deDjawatan,
          imageAltId: "Gedung Cagar Budaya Inggrisan",
          imageAltEn: "Inggrisan Heritage Building",
          tagId: "Cagar Budaya Nasional",
          tagEn: "National Heritage",
          titleId: "Kompleks Gedung Kolonial Inggrisan",
          titleEn: "Inggrisan Colonial Building Complex",
          descId:
            "Bangunan perniagaan Inggris abad ke-18 dan stasiun kabel telegraf bawah laut tertua rute Banyuwangi-Broome (Australia) era kolonial.",
          descEn:
            "18th-century British trading buildings and the oldest undersea telegraph cable station on the colonial Banyuwangi–Broome route.",
          locId: "Taman Blambangan, Banyuwangi",
          locEn: "Blambangan Park, Banyuwangi",
          noteId: "Status: Cagar Budaya Peringkat Nasional",
          noteEn: "Status: Nationally Ranked Heritage",
        },
        {
          image: GALLERY.ijen,
          imageAltId: "Museum Daerah Blambangan",
          imageAltEn: "Blambangan Regional Museum",
          tagId: "Permuseuman",
          tagEn: "Museums",
          titleId: "Museum Daerah Blambangan",
          titleEn: "Blambangan Regional Museum",
          descId:
            "Menyimpan ribuan koleksi artefak purbakala, nekara perunggu, keramik dinasti Tiongkok kuno, tombak pusaka, dan naskah lontar Using Yusuf.",
          descEn:
            "Holds thousands of ancient artifacts, bronze nekara, ancient Chinese ceramics, heirloom daggers, and the Using Yusuf lontar manuscripts.",
          locId: "Jl. A. Yani No. 78 Banyuwangi",
          locEn: "Jl. A. Yani No. 78, Banyuwangi",
          noteId: "Koleksi: 4.200+ Artefak",
          noteEn: "Collection: 4,200+ Artifacts",
        },
      ],
    },
    contact: {
      titleId: "Pendaftaran KTA Seniman & Rekomendasi Cagar Budaya",
      titleEn: "Artist ID Registration & Heritage Recommendations",
      descId: "Layanan verifikasi sanggar seni tradisi, permohonan KTA Seniman, dan konsultasi pelestarian cagar budaya daerah.",
      descEn: "Traditional art-studio verification, artist ID applications, and regional heritage-preservation consultation.",
      ctaId: "Hubungi Bidang Kebudayaan",
      ctaEn: "Contact the Culture Division",
      mailto: "budaya@banyuwangikab.go.id",
      subject: "Layanan Bidang Kebudayaan",
    },
  },

  pemasaran: {
    meta: {
      legacyAlias: "/bidang-pemasaran",
      seoTitleId: "Bidang Pemasaran Pariwisata — DISBUDPAR Kabupaten Banyuwangi",
      seoTitleEn: "Tourism Marketing Division — DISBUDPAR Banyuwangi",
      seoDescId:
        "Data resmi Bidang Pemasaran Pariwisata: Kalender Event Banyuwangi Festival (B-Fest), Gandrung Sewu, BEC, Branding Majestic Banyuwangi, dan Kemitraan Wisata.",
      seoDescEn:
        "Official data of the Tourism Marketing Division: Banyuwangi Festival (B-Fest) calendar, Gandrung Sewu, BEC, Majestic Banyuwangi branding, and tourism partnerships.",
      pillar: { num: "04", labelId: "Promosi & Branding", labelEn: "Promotion & Branding" },
      accent: "#22c55e",
      switcherLabelId: "Pemasaran & Promosi",
      switcherLabelEn: "Marketing & Promotion",
    },
    hero: {
      titleId: "Bidang Pemasaran Pariwisata",
      titleEn: "Tourism Marketing Division",
      descId:
        "Mengorkestrasi branding global \"Majestic Banyuwangi\", penyelenggaraan rangkaian Banyuwangi Festival (B-Fest), kemitraan strategis biro perjalanan wisata (ASITA & PHRI), serta promosi digital terpadu ke pasar nusantara dan mancanegara.",
      descEn:
        "Orchestrates the global \"Majestic Banyuwangi\" brand, runs the Banyuwangi Festival (B-Fest) series, builds strategic travel-industry partnerships (ASITA & PHRI), and runs integrated digital promotion to domestic and international markets.",
      stats: [
        { value: "70", suffix: "+", labelId: "Event Banyuwangi Festival", labelEn: "Banyuwangi Festival Events" },
        { value: "2", labelId: "Event Terbaik Nasional (KEN)", labelEn: "Best National Events (KEN)" },
        { value: "340", suffix: "+", labelId: "Kemitraan Biro Wisata & Hotel", labelEn: "Travel & Hotel Partners" },
        { value: "28", suffix: "M+", labelId: "Jangkauan Kampanye Digital", labelEn: "Digital Campaign Reach" },
      ],
    },
    tupoksi: {
      tagId: "Struktur Kerja & Tupoksi",
      tagEn: "Structure & Functions",
      titleId: "Tugas Pokok & Seksi Kerja Bidang Pemasaran",
      titleEn: "Core Duties & Working Sections of Marketing",
      items: [
        {
          icon: BarChart3,
          titleId: "Seksi Riset & Analisa Pasar",
          titleEn: "Market Research & Analysis Section",
          descId:
            "Kajian demografi wisatawan, pola pergerakan pelancong mancanegara, segmentasi MICE, serta pengukuran efektivitas promosi pariwisata daerah.",
          descEn:
            "Studies tourist demographics, international traveler flows, MICE segmentation, and measures regional tourism promotion effectiveness.",
        },
        {
          icon: Calendar,
          titleId: "Seksi Penyelenggaraan Event (B-Fest)",
          titleEn: "Event Management Section (B-Fest)",
          descId:
            "Manajemen kurasi dan jadwal tahunan Banyuwangi Festival, pendampingan event komunitas, serta sertifikasi protokol kenyamanan event skala besar.",
          descEn:
            "Curates and schedules the annual Banyuwangi Festival, supports community events, and certifies comfort protocols for large-scale events.",
        },
        {
          icon: Globe,
          titleId: "Seksi Promosi Digital & Kemitraan",
          titleEn: "Digital Promotion & Partnership Section",
          descId:
            "Pengelolaan portal pariwisata banyuwangitourism.com, media sosial resmi, fasilitasi famtrip travel influencer, dan keikutsertaan travel fair global (ITB Berlin, WTM London).",
          descEn:
            "Manages banyuwangitourism.com, official social media, influencer famtrips, and participation in global travel fairs (ITB Berlin, WTM London).",
        },
      ],
    },
    showcase: {
      tagId: "Kalender Event & Produk Promosi",
      tagEn: "Event Calendar & Promotion Products",
      titleId: "Program Event Unggulan Banyuwangi Festival",
      titleEn: "Flagship Banyuwangi Festival Programs",
      items: [
        {
          image: GALLERY.gandrungSewu,
          imageAltId: "Festival Gandrung Sewu",
          imageAltEn: "Gandrung Sewu Festival",
          tagId: "Karisma Event Nusantara",
          tagEn: "Karisma Event Nusantara",
          titleId: "Festival Kolosal Gandrung Sewu",
          titleEn: "Colossal Gandrung Sewu Festival",
          descId:
            "Pentas spektakuler ribuan penari Gandrung serentak di bibir Pantai Marina Boom dengan latar gemerlap matahari terbenam Selat Bali.",
          descEn:
            "Spectacular synchronized performance of thousands of Gandrung dancers on Marina Boom Beach against the Bali Strait sunset.",
          locId: "Pantai Marina Boom",
          locEn: "Marina Boom Beach",
          noteId: "Jadwal: Oktober Tahunan",
          noteEn: "Schedule: Every October",
        },
        {
          image: GALLERY.kemiren,
          imageAltId: "Banyuwangi Ethno Carnival",
          imageAltEn: "Banyuwangi Ethno Carnival",
          tagId: "KEN Kemenparekraf",
          tagEn: "KEN Kemenparekraf",
          titleId: "Banyuwangi Ethno Carnival (BEC)",
          titleEn: "Banyuwangi Ethno Carnival (BEC)",
          descId:
            "Karnaval busana tema tradisi Using berestetika adi busana modern yang melintasi catwalk jalanan terpanjang di pusat kota Banyuwangi.",
          descEn:
            "A Using-tradition costume carnival fusing haute couture across the longest street catwalk in downtown Banyuwangi.",
          locId: "Rute Kota Banyuwangi",
          locEn: "Banyuwangi City Route",
          noteId: "Jadwal: Juli Tahunan",
          noteEn: "Schedule: Every July",
        },
        {
          image: GALLERY.ijen,
          imageAltId: "International Tour de Ijen",
          imageAltEn: "International Tour de Ijen",
          tagId: "Balap Sepeda UCI 2.2",
          tagEn: "UCI 2.2 Road Race",
          titleId: "International Tour de Ijen (ITdBI)",
          titleEn: "International Tour de Ijen (ITdBI)",
          descId:
            "Kejuaraan balap sepeda jalan raya resmi Federasi Balap Sepeda Dunia (UCI) menaklukkan tanjakan ekstrem Tanjakan Erek-Erek Ijen.",
          descEn:
            "Official UCI road-cycling race conquering the extreme Erek-Erek climb of Ijen.",
          locId: "Rute Keliling Banyuwangi",
          locEn: "Around Banyuwangi Route",
          noteId: "Event Sport Tourism",
          noteEn: "Sport Tourism Event",
        },
        {
          image: GALLERY.alasPurwo,
          imageAltId: "Aplikasi Bwi Tourism",
          imageAltEn: "Bwi Tourism App",
          tagId: "Platform Digital",
          tagEn: "Digital Platform",
          titleId: "Banyuwangi Tourism Hub & Smart App",
          titleEn: "Banyuwangi Tourism Hub & Smart App",
          descId:
            "Platform one-stop integrasi panduan rute wisata, tiket online objek wisata resmi, peta interaktif, dan kalender real-time B-Fest.",
          descEn:
            "One-stop platform integrating route guides, official online attraction tickets, interactive maps, and a real-time B-Fest calendar.",
          locId: "banyuwangitourism.com",
          locEn: "banyuwangitourism.com",
          noteId: "Status: Aktif 24/7",
          noteEn: "Status: Active 24/7",
        },
        {
          image: GALLERY.pulauMerah,
          imageAltId: "Festival Ngopi Sepuluh Ewu",
          imageAltEn: "Ngopi Sepuluh Ewu Festival",
          tagId: "Festival Budaya",
          tagEn: "Cultural Festival",
          titleId: "Festival Ngopi Sepuluh Ewu",
          titleEn: "Ngopi Sepuluh Ewu Festival",
          descId:
            "Tradisi kebersamaan warga menyuguhkan puluhan ribu cangkir kopi khas di pelataran rumah adat Kemiren dengan cangkir seragam bermotif.",
          descEn:
            "Community tradition serving tens of thousands of coffee cups at the Kemiren customary-house courtyard in matching motif cups.",
          locId: "Desa Kemiren, Glagah",
          locEn: "Kemiren Village, Glagah",
          noteId: "Jadwal: B-Fest Tahunan",
          noteEn: "Schedule: Annual B-Fest",
        },
        {
          image: GALLERY.deDjawatan,
          imageAltId: "Media Press Kit Pariwisata",
          imageAltEn: "Tourism Media Press Kit",
          tagId: "Aset Promosi",
          tagEn: "Promotional Assets",
          titleId: "Travel Guide & Media Press Kit",
          titleEn: "Travel Guide & Media Press Kit",
          descId:
            "Paket materi e-brochure resolusi tinggi, aset foto & video 4K Majestic Banyuwangi, serta panduan kerjasama famtrip media dan agen wisata.",
          descEn:
            "High-resolution e-brochure pack, 4K Majestic Banyuwangi photo & video assets, and media/agency famtrip cooperation guides.",
          locId: "Layanan Promosi Disbudpar",
          locEn: "Disbudpar Promotion Services",
          noteId: "Download Tersedia",
          noteEn: "Download Available",
        },
      ],
    },
    contact: {
      titleId: "Kemitraan Promosi, Event & Liputan Media",
      titleEn: "Promotion, Event & Media Partnership",
      descId:
        "Ajukan kerjasama sponsorship, liputan media festival, atau permohonan kemitraan biro perjalanan wisata dengan Disbudpar Banyuwangi.",
      descEn: "Propose sponsorship, festival media coverage, or travel-industry partnership with Banyuwangi's Culture & Tourism Office.",
      ctaId: "Ajukan Kemitraan Promosi",
      ctaEn: "Propose a Partnership",
      mailto: "pemasaran@banyuwangikab.go.id",
      subject: "Kemitraan Pariwisata Banyuwangi",
    },
  },
};

/** Shared static copy (footer). */
export const BIDANG_FOOTER = {
  id: "© 2026 Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi • Pemerintah Kabupaten Banyuwangi",
  en: "© 2026 Culture and Tourism Office of Banyuwangi Regency • Government of Banyuwangi Regency",
} as const;
