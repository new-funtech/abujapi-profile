function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') 
    .replace(/\s+/g, '-')     
    .replace(/--+/g, '-')     
    .trim();
}

export default function newsData() {
  const data = [
    {
      title:
        "Pelantikan Pengurus BPD ABUJAPI Jawa Barat Periode 2025–2030: Komjen Purn Sofyan Yacoub Tekankan Pentingnya Budaya Senyum, Sapa, dan Salam bagi Satpam",
      date: "14-07-2025",
      location: "HARRIS Hotel Ciumbuleuit, Bandung",
      author: "Jabar Pikiran Rakyat",
      source_url:
        "https://jabar.pikiran-rakyat.com/nasional/pr-3659495460/lantik-pengurus-bpd-abujapi-jabar-komjen-purn-sofyan-yacoub-satpam-harus-budayakan-senyum-sapa-salam",
      main_image:
        "https://storage.ganipedia.xyz/abujapi/news/news1.jpeg",
      figures: {
        keynote: "Komjen Pol (Purn) Sofyan Yacoub",
        bpd_chairman: "Rudi Nursoleh",
        guests: [
          "Dirbinpotmas Korbinmas Baharkam Polri Brigjen Badia Wijaya",
          "Dirbinmas Polda Jabar Kombes Pol Gunarso",
          "BPJS",
          "Kadin",
          "Disnakertrans Jabar",
          "Tamu undangan lainnya",
        ],
      },
      highlights: [
        "Sofyan Yacoub menekankan pentingnya budaya Senyum, Sapa, dan Salam bagi Satpam.",
        "Pelantikan bertujuan memperkuat organisasi ABUJAPI Jabar dan meningkatkan kompetensi Satpam.",
        "Penghargaan diberikan kepada Satpam berprestasi oleh Ketua BPD ABUJAPI Jabar, Rudi Nursoleh.",
        "Rencana program: penambahan kurikulum pelatihan dan keterlibatan Satpam dalam seminar serta diskusi.",
      ],
      tags: ["Pelantikan", "Satpam", "BPD ABUJAPI"],
    },
    {
      title:
        "Komjen Purn Sofyan Yacoub: Satpam Harus Budayakan Senyum, Sapa, Salam Saat Pelantikan Pengurus BPD ABUJAPI Jabar",
      date: "14-07-2025",
      location: "Bandung",
      author: "Herald Jabar",
      source_url:
        "https://jabar.herald.id/2025/07/14/komjen-purn-sofyan-yacoub-satpam-harus-budayakan-senyum-sapa-salamsaat-lantik-pengurus-bpd-abujapi-jabar/",
      main_image:
        "https://storage.ganipedia.xyz/abujapi/news/news2.jpeg",
      figures: {
        keynote: "Komjen Pol (Purn) Sofyan Yacoub",
        bpd_chairman: "Rudi Nursoleh",
        guests: ["Tamu undangan lainnya"],
      },
      highlights: [
        "Komjen Purn Sofyan Yacoub menekankan budaya Senyum, Sapa, dan Salam bagi Satpam.",
        "Pelantikan pengurus BPD ABUJAPI Jabar berlangsung dengan protokol ketat.",
      ],
      tags: ["ABUJAPI", "Satpam", "Pelantikan", "Jawa Barat"],
    },
    {
      title:
        "Jadi Ketua Umum ABUJAPI Jabar, Rudi Nursoleh Ajak Pengusaha Sejahterakan Satpam",
      date: "14-07-2025",
      location: "Bandung",
      author: "Pikiran Rakyat KBB",
      source_url:
        "https://beritakbb.pikiran-rakyat.com/ekonomi/pr-969308251/jadi-ketua-umum-abujapi-jabar-rudi-nursoleh-ajak-pengusaha-sejahterakan-satpam",
      main_image:
        "https://storage.ganipedia.xyz/abujapi/news/news3.jpeg",
      figures: {
        keynote: "Rudi Nursoleh",
        bpd_chairman: "Rudi Nursoleh",
        guests: ["Pengusaha lokal", "Tamu undangan lainnya"],
      },
      highlights: [
        "Rudi Nursoleh mengajak pengusaha mendukung kesejahteraan Satpam.",
        "Program kerja ABUJAPI Jabar fokus pada peningkatan kompetensi dan kesejahteraan Satpam.",
      ],
      tags: ["ABUJAPI", "Satpam", "Ketua Umum", "Jawa Barat"],
    },
    {
      title:
        "ABUJAPI Kukuhkan Pengurus Baru BPD Jawa Barat Masa Bakti 2025–2030, Fokus Tingkatkan Profesionalisme Satpam",
      date: "22-07-2025",
      location: "Bandung",
      author: "Pikiran Rakyat KBB",
      source_url:
        "https://beritakbb.pikiran-rakyat.com/bandung-barat/pr-969495382/abujapi-kukuhkan-pengurus-baru-bpd-jawa-barat-masa-bakti-20252030-fokus-tingkatkan-profesionalisme-satpam",
      main_image:
        "https://storage.ganipedia.xyz/abujapi/news/news4.jpeg",
      figures: {
        keynote: "Rudi Nursoleh",
        bpd_chairman: "Rudi Nursoleh",
        guests: ["Tamu undangan", "Instruktur Satpam"],
      },
      highlights: [
        "ABUJAPI kukuhkan pengurus baru BPD Jawa Barat untuk masa bakti 2025–2030.",
        "Fokus program: meningkatkan profesionalisme dan kompetensi Satpam di Jawa Barat.",
      ],
      tags: ["ABUJAPI", "Satpam", "Pengurus Baru"],
    },
  ];

  return data.map((item) => ({ ...item, slug: generateSlug(item.title) }));
}
