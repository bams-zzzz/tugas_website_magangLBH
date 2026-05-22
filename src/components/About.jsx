export default function About() {
  return (
    <section className="section" id="profil">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-placeholder">🏛️</div>
          </div>
          <div>
            <span className="section-label">Tentang Kami</span>
            <h2 className="section-title">Profil LBH Keadilan Nusantara</h2>
            <p className="section-desc">
              Lembaga Bantuan Hukum Keadilan Nusantara didirikan pada tahun 2005
              dengan visi mewujudkan akses keadilan yang merata bagi seluruh
              masyarakat Indonesia tanpa memandang status ekonomi dan sosial.
            </p>
            <div className="about-features">
              <div className="about-feature">
                <div className="about-feature-icon">🎯</div>
                <div>
                  <h4>Visi</h4>
                  <p>
                    Menjadi lembaga bantuan hukum terdepan yang memberikan akses
                    keadilan bagi seluruh lapisan masyarakat Indonesia.
                  </p>
                </div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">🔥</div>
                <div>
                  <h4>Misi</h4>
                  <p>
                    Memberikan bantuan hukum berkualitas, mendorong reformasi
                    hukum, serta meningkatkan kesadaran hukum masyarakat.
                  </p>
                </div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">🤝</div>
                <div>
                  <h4>Nilai-Nilai</h4>
                  <p>
                    Integritas, profesionalisme, keadilan, transparansi, dan
                    keberpihakan pada masyarakat marginal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
