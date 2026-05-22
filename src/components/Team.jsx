const teamMembers = [
  {
    name: "Dr. Ahmad Fadhil, S.H., M.H.",
    role: "Ketua / Direktur",
    phone: "0812-3456-7890",
    email: "ahmad.fadhil@lbhkeadilannusantara.or.id",
    initials: "AF",
  },
  {
    name: "Siti Nurhaliza, S.H., LL.M.",
    role: "Kepala Divisi Litigasi",
    phone: "0813-4567-8901",
    email: "siti.nurhaliza@lbhkeadilannusantara.or.id",
    initials: "SN",
  },
  {
    name: "Rizky Pratama, S.H., M.Kn.",
    role: "Kepala Divisi Non-Litigasi",
    phone: "0814-5678-9012",
    email: "rizky.pratama@lbhkeadilannusantara.or.id",
    initials: "RP",
  },
  {
    name: "Maya Sari Dewi, S.H.",
    role: "Koordinator Bantuan Hukum Cuma-Cuma",
    phone: "0815-6789-0123",
    email: "maya.sari@lbhkeadilannusantara.or.id",
    initials: "MS",
  },
];

export default function Team() {
  return (
    <section className="section" id="tim">
      <div className="container">
        <span className="section-label">Tim Kami</span>
        <h2 className="section-title">Person in Charge (PIC)</h2>
        <p className="section-desc">
          Tim profesional kami siap memberikan layanan bantuan hukum terbaik
          untuk Anda.
        </p>
        <div className="team-grid">
          {teamMembers.map((m, i) => (
            <div className="team-card" key={i}>
              <div className="team-avatar">{m.initials}</div>
              <h3>{m.name}</h3>
              <div className="team-role">{m.role}</div>
              <div className="team-contact">
                <a href={`tel:${m.phone.replace(/-/g, "")}`}>
                  📞 {m.phone}
                </a>
                <a href={`mailto:${m.email}`}>
                  ✉️ {m.email.split("@")[0]}@...
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
