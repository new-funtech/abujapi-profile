export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  publishedAt: string;
  category: string;
  tags: string[];
  readTime: string;
  location: string;
  views: number;
  featured?: boolean;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Pelantikan Pengurus ABUJAPI Jawa Barat Periode 2024-2029",
    slug: "pelantikan-pengurus-abujapi-jabar-2024-2029",
    excerpt: "Acara pelantikan pengurus ABUJAPI Jawa Barat periode 2024-2029 telah dilaksanakan dengan khidmat di Gedung Sate, Bandung.",
    content: `Bandung, 15 Januari 2024 - Asosiasi Badan Usaha Jasa Pengamanan Indonesia (ABUJAPI) Jawa Barat menggelar acara pelantikan pengurus periode 2024-2029 di Gedung Sate, Bandung. Acara yang dihadiri oleh ratusan anggota ini menandai dimulainya era baru dalam pengembangan industri jasa pengamanan di Jawa Barat.

Ketua Umum terpilih, Bapak Ahmad Santoso, menyampaikan visi dan misinya untuk periode kepemimpinan mendatang. "Kami berkomitmen untuk meningkatkan profesionalisme dan kualitas layanan jasa pengamanan di Jawa Barat," ujarnya dalam pidato pelantikan.

Program Kerja Prioritas:
Beberapa program kerja prioritas yang akan dilaksanakan meliputi peningkatan kualitas sumber daya manusia melalui pelatihan berkala, standardisasi layanan jasa pengamanan, kerjasama dengan instansi terkait untuk meningkatkan keamanan wilayah, dan digitalisasi sistem manajemen anggota.

Acara pelantikan ini juga dihadiri oleh perwakilan dari Kepolisian Daerah Jawa Barat, Kodam III/Siliwangi, dan berbagai instansi terkait lainnya sebagai bentuk dukungan terhadap pengembangan industri jasa pengamanan yang profesional.`,
    image: "/images/newsImage2.jpeg",
    author: "Tim Redaksi ABUJAPI",
    date: "15 Januari 2024",
    publishedAt: "2024-01-15T10:00:00Z",
    category: "Organisasi",
    tags: ["pelantikan", "pengurus", "periode-baru"],
    readTime: "5 menit",
    location: "Bandung",
    views: 1250,
    featured: true
  },
  {
    id: "2",
    title: "Pelatihan Keamanan Cyber untuk Anggota ABUJAPI Jabar",
    slug: "pelatihan-keamanan-cyber-abujapi-jabar",
    excerpt: "ABUJAPI Jawa Barat menyelenggarakan pelatihan khusus tentang keamanan cyber untuk meningkatkan kompetensi anggota di era digital.",
    content: `Jakarta, 10 Februari 2024 - Dalam menghadapi tantangan keamanan di era digital, ABUJAPI Jawa Barat menyelenggarakan pelatihan keamanan cyber yang diikuti oleh 150 anggota dari berbagai perusahaan jasa pengamanan.

Pelatihan yang berlangsung selama dua hari ini menghadirkan narasumber ahli dari Badan Siber dan Sandi Negara (BSSN) serta praktisi keamanan cyber berpengalaman. Materi yang disampaikan mencakup pengenalan ancaman cyber, teknik deteksi dini, dan strategi mitigasi risiko keamanan digital.

"Industri jasa pengamanan tidak bisa lagi hanya fokus pada keamanan fisik. Ancaman cyber menjadi bagian integral yang harus kita pahami dan tangani," ujar Ketua Bidang Pendidikan dan Pelatihan ABUJAPI Jabar.

Peserta pelatihan mendapat sertifikat kompetensi keamanan cyber yang diakui secara nasional, serta modul pembelajaran yang dapat diterapkan di lingkungan kerja masing-masing.`,
    image: "/images/newsImage3.jpeg",
    author: "Humas ABUJAPI Jabar",
    date: "10 Februari 2024",
    publishedAt: "2024-02-10T14:30:00Z",
    category: "Pelatihan",
    tags: ["pelatihan", "cyber-security", "digital"],
    readTime: "4 menit",
    location: "Jakarta",
    views: 890,
    featured: false
  },
  {
    id: "3",
    title: "Kerjasama ABUJAPI Jabar dengan Polda dalam Program Kamtibmas",
    slug: "kerjasama-abujapi-jabar-polda-kamtibmas",
    excerpt: "ABUJAPI Jawa Barat menandatangani MoU dengan Polda Jabar untuk memperkuat program keamanan dan ketertiban masyarakat.",
    content: `Bandung, 25 Februari 2024 - Asosiasi Badan Usaha Jasa Pengamanan Indonesia (ABUJAPI) Jawa Barat resmi menandatangani Memorandum of Understanding (MoU) dengan Kepolisian Daerah Jawa Barat dalam rangka memperkuat program keamanan dan ketertiban masyarakat (Kamtibmas).

Penandatanganan MoU ini dilakukan langsung oleh Ketua Umum ABUJAPI Jabar dan Kapolda Jawa Barat di Mapolda Jabar. Kerjasama ini meliputi koordinasi pengamanan kegiatan besar, pertukaran informasi keamanan, dan pelatihan bersama untuk meningkatkan kapasitas personel pengamanan.

"Sinergi antara kepolisian dan industri jasa pengamanan swasta sangat penting untuk menciptakan lingkungan yang aman dan kondusif bagi masyarakat," ungkap Kapolda Jabar dalam sambutannya.

Program kerjasama ini akan dimulai dengan pilot project di wilayah Bandung Raya, kemudian akan diperluas ke seluruh kabupaten dan kota di Jawa Barat. Diharapkan kerjasama ini dapat meningkatkan efektivitas pengamanan dan mengurangi tingkat kriminalitas di wilayah Jawa Barat.`,
    image: "/images/newsImage4.jpeg",
    author: "Divisi Humas",
    date: "25 Februari 2024",
    publishedAt: "2024-02-25T09:15:00Z",
    category: "Kerjasama",
    tags: ["kerjasama", "polri", "kamtibmas"],
    readTime: "6 menit",
    location: "Bandung",
    views: 2100,
    featured: true
  },
  {
    id: "4",
    title: "Sertifikasi ISO 45001 untuk Perusahaan Anggota ABUJAPI",
    slug: "sertifikasi-iso-45001-anggota-abujapi",
    excerpt: "Program sertifikasi ISO 45001 tentang Sistem Manajemen Keselamatan dan Kesehatan Kerja diluncurkan untuk anggota ABUJAPI Jabar.",
    content: `Cirebon, 5 Maret 2024 - ABUJAPI Jawa Barat meluncurkan program sertifikasi ISO 45001 tentang Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3) untuk seluruh perusahaan anggota. Program ini merupakan bagian dari komitmen organisasi untuk meningkatkan standar keselamatan kerja di industri jasa pengamanan.

Sertifikasi ISO 45001 menjadi semakin penting mengingat risiko kerja yang dihadapi personel pengamanan di lapangan. Dengan menerapkan standar internasional ini, perusahaan jasa pengamanan dapat meminimalkan risiko kecelakaan kerja dan meningkatkan produktivitas karyawan.

"Keselamatan dan kesehatan kerja adalah prioritas utama kami. Melalui sertifikasi ISO 45001, kami memastikan bahwa setiap personel pengamanan bekerja dalam lingkungan yang aman dan sehat," jelaskan Ketua Bidang K3 ABUJAPI Jabar.

Program ini akan dilaksanakan dalam tiga tahap, dimulai dari sosialisasi, implementasi sistem, hingga audit sertifikasi. Diperkirakan 80% anggota ABUJAPI Jabar akan memperoleh sertifikasi ISO 45001 pada akhir tahun 2024.`,
    image: "/images/galleryImage2.jpeg",
    author: "Tim K3 ABUJAPI",
    date: "5 Maret 2024",
    publishedAt: "2024-03-05T11:20:00Z",
    category: "Sertifikasi",
    tags: ["ISO-45001", "K3", "sertifikasi"],
    readTime: "5 menit",
    location: "Cirebon",
    views: 1450,
    featured: false
  },
  {
    id: "5",
    title: "Workshop Teknologi Keamanan Modern di Era Industry 4.0",
    slug: "workshop-teknologi-keamanan-modern-industry-4-0",
    excerpt: "ABUJAPI Jabar mengadakan workshop tentang implementasi teknologi keamanan modern untuk menghadapi tantangan Industry 4.0.",
    content: `Depok, 18 Maret 2024 - Mengantisipasi perkembangan teknologi Industry 4.0, ABUJAPI Jawa Barat menggelar workshop tentang implementasi teknologi keamanan modern. Workshop ini diikuti oleh 200 peserta dari kalangan pimpinan perusahaan jasa pengamanan dan supervisor lapangan.

Materi workshop mencakup penggunaan Artificial Intelligence (AI) untuk sistem pengawasan, Internet of Things (IoT) untuk monitoring keamanan real-time, dan blockchain untuk sistem identifikasi yang aman. Para peserta juga diperkenalkan dengan drone technology untuk pengawasan area luas dan sistem biometrik canggih.

Narasumber workshop adalah para ahli teknologi dari berbagai universitas terkemuka dan praktisi dari perusahaan teknologi keamanan internasional. "Transformasi digital dalam industri keamanan bukan lagi pilihan, melainkan keharusan untuk tetap kompetitif," kata salah satu narasumber.

Hasil workshop ini akan menjadi acuan untuk roadmap digitalisasi industri jasa pengamanan di Jawa Barat, termasuk rencana investasi teknologi dan program pelatihan berkelanjutan untuk personel.`,
    image: "/images/galleryImage3.jpeg",
    author: "Divisi Teknologi",
    date: "18 Maret 2024",
    publishedAt: "2024-03-18T13:45:00Z",
    category: "Teknologi",
    tags: ["workshop", "industry-4.0", "teknologi"],
    readTime: "3 menit",
    location: "Depok",
    views: 975,
    featured: false
  },
  {
    id: "6",
    title: "Rapat Koordinasi Regional Se-Jawa Barat Tahun 2024",
    slug: "rapat-koordinasi-regional-jabar-2024",
    excerpt: "Rapat koordinasi tahunan ABUJAPI se-Jawa Barat membahas strategi pengembangan industri jasa pengamanan dan evaluasi program kerja.",
    content: `Tasikmalaya, 2 April 2024 - ABUJAPI Jawa Barat menggelar Rapat Koordinasi Regional tahunan yang dihadiri oleh perwakilan dari 27 kabupaten/kota se-Jawa Barat. Rapat ini membahas evaluasi program kerja tahun 2023 dan strategi pengembangan untuk tahun 2024.

Dalam rapat tersebut, disampaikan bahwa anggota ABUJAPI Jabar mengalami pertumbuhan 15% dibandingkan tahun sebelumnya, dengan total 450 perusahaan jasa pengamanan yang terdaftar. Peningkatan ini menunjukkan kepercayaan industri terhadap peran ABUJAPI dalam memfasilitasi pengembangan bisnis jasa pengamanan.

Beberapa agenda strategis yang dibahas meliputi harmonisasi tarif jasa pengamanan, peningkatan kualitas layanan anggota, dan ekspansi ke sektor-sektor baru seperti cyber security dan event security.

"Kami optimis bahwa dengan koordinasi yang solid antar wilayah, ABUJAPI Jabar dapat terus berkontribusi positif bagi pembangunan keamanan di Jawa Barat," tutup Ketua Umum ABUJAPI Jabar dalam penutupan rapat.`,
    image: "/images/galleryImage7.jpeg",
    author: "Sekretariat ABUJAPI",
    date: "2 April 2024",
    publishedAt: "2024-04-02T16:00:00Z",
    category: "Organisasi",
    tags: ["rapat-koordinasi", "regional", "evaluasi"],
    readTime: "4 menit",
    location: "Tasikmalaya",
    views: 1180,
    featured: true
  }
];

export const categories = [
  "Semua",
  "Organisasi", 
  "Pelatihan",
  "Kerjasama",
  "Sertifikasi",
  "Teknologi"
];