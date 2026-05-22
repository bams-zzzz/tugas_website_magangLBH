const services = [
  {
    icon: "⚖️",
    title: "Litigasi",
    desc: "Pendampingan dan representasi hukum di pengadilan untuk perkara perdata, pidana, dan tata usaha negara.",
  },
  {
    icon: "📋",
    title: "Konsultasi Hukum",
    desc: "Layanan konsultasi hukum gratis bagi masyarakat yang membutuhkan panduan dalam permasalahan hukum.",
  },
  {
    icon: "📝",
    title: "Mediasi & Negosiasi",
    desc: "Penyelesaian sengketa di luar pengadilan melalui proses mediasi dan negosiasi yang efektif.",
  },
  {
    icon: "🛡️",
    title: "Perlindungan HAM",
    desc: "Advokasi dan perlindungan hak asasi manusia bagi korban pelanggaran dan kelompok rentan.",
  },
  {
    icon: "📚",
    title: "Edukasi Hukum",
    desc: "Program penyuluhan dan pendidikan hukum untuk meningkatkan kesadaran hukum masyarakat.",
  },
  {
    icon: "📄",
    title: "Drafting Dokumen",
    desc: "Penyusunan dokumen hukum seperti kontrak, perjanjian, surat kuasa, dan legal opinion.",
  },
];

export default function Services() {
  return (
    <section className="section services" id="layanan">
      <div className="container">
        <span className="section-label">Layanan Kami</span>
        <h2 className="section-title">Bidang Layanan Hukum</h2>
        <p className="section-desc">
          Kami menyediakan berbagai layanan bantuan hukum komprehensif untuk
          memenuhi kebutuhan hukum masyarakat.
        </p>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
