export default function Hero() {
  return (
    <section className="hero" id="beranda">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">⚖️ Lembaga Bantuan Hukum Terpercaya</div>
            <h1>
              Menegakkan <span className="gold">Keadilan</span> untuk Semua
            </h1>
            <p className="hero-desc">
              Lembaga Bantuan Hukum Keadilan Nusantara hadir untuk memberikan
              akses keadilan bagi seluruh lapisan masyarakat. Kami menyediakan
              layanan bantuan hukum profesional dan berkualitas.
            </p>
            <div className="hero-buttons">
              <a href="#kontak" className="btn btn-primary">
                📞 Hubungi Kami
              </a>
              <a href="#profil" className="btn btn-outline">
                Pelajari Lebih Lanjut →
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-header">
                <span className="hero-card-icon">⚖️</span>
                <span className="hero-card-title">LBH Keadilan Nusantara</span>
              </div>
              <p className="hero-card-desc">
                Berdedikasi melindungi hak-hak hukum masyarakat sejak 2005
              </p>
              <div className="hero-stats">
                <div className="hero-stat-item">
                  <div className="hero-stat-number">2,500+</div>
                  <div className="hero-stat-label">Kasus Ditangani</div>
                </div>
                <div className="hero-stat-item">
                  <div className="hero-stat-number">19+</div>
                  <div className="hero-stat-label">Tahun Pengalaman</div>
                </div>
                <div className="hero-stat-item">
                  <div className="hero-stat-number">95%</div>
                  <div className="hero-stat-label">Tingkat Keberhasilan</div>
                </div>
                <div className="hero-stat-item">
                  <div className="hero-stat-number">15+</div>
                  <div className="hero-stat-label">Advokat Profesional</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
