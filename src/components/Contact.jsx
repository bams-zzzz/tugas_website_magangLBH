export default function Contact() {
  return (
    <section className="section contact" id="kontak">
      <div className="container">
        <span className="section-label">Kontak</span>
        <h2 className="section-title">Hubungi Kami</h2>
        <p className="section-desc">
          Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda.
        </p>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Alamat Kantor</h4>
                <p>
                  Jl. Wr. Supratman No.39, Ngemplak Simongan,
                  <br />
                  Kec. Semarang Barat, Kota Semarang,
                  <br />
                  Jawa Tengah 50148
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Telepon</h4>
                <p>0812-2678-9676</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>Lbh.Nubis.Jaya.Justitie@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🕐</div>
              <div>
                <h4>Jam Operasional</h4>
                <p>
                  Senin – Jumat: 08.00 – 17.00 WIB
                  <br />
                  Sabtu: 09.00 – 13.00 WIB
                  <br />
                  Minggu &amp; Hari Libur: Tutup
                </p>
              </div>
            </div>
          </div>
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2!2d110.4!3d-6.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJl.+Wr.+Supratman+No.39%2C+Ngemplak+Simongan%2C+Semarang!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi LBH Nubis Jaya Justitie"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
