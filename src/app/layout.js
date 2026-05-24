import "./globals.css";

export const metadata = {
  title: "LBH Nubis Jaya Justitie - Lembaga Bantuan Hukum",
  description:
    "Lembaga Bantuan Hukum Nubis Jaya Justitie menyediakan layanan bantuan hukum profesional, konsultasi hukum gratis, dan pendampingan litigasi untuk masyarakat yang membutuhkan keadilan.",
  keywords: "bantuan hukum, LBH, konsultasi hukum, pengacara, advokat, hukum Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
