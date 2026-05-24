import Image from "next/image";

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
            <Image
              src="/logo-njj.jpg"
              alt="Logo LBH NJJ"
              width={36}
              height={36}
              className="navbar-logo-img"
              style={{ borderRadius: "8px" }}
            />
            <span className="navbar-logo-text" style={{ fontSize: "1.1rem" }}>Nubis Jaya Justitie</span>
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
          © {year} Lembaga Bantuan Hukum Nubis Jaya Justitie. Seluruh hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
