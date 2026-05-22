export default function Footer() {
  const year = new Date().getFullYear();
  const links = [
    { href: "#beranda", label: "Beranda" },
    { href: "#profil", label: "Profil" },
    { href: "#layanan", label: "Layanan" },
    { href: "#tim", label: "Tim" },
    { href: "#kontak", label: "Kontak" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="navbar-logo-icon" style={{ width: 36, height: 36, fontSize: "0.9rem" }}>LBH</div>
            <span className="navbar-logo-text" style={{ fontSize: "1.1rem" }}>Keadilan Nusantara</span>
          </div>
          <ul className="footer-links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-bottom">
          © {year} Lembaga Bantuan Hukum Keadilan Nusantara. Seluruh hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
