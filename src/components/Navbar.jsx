"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#beranda", label: "Beranda" },
    { href: "#profil", label: "Profil" },
    { href: "#layanan", label: "Layanan" },
    { href: "#tim", label: "Tim Kami" },
    { href: "#kontak", label: "Kontak" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="container">
        <a href="#beranda" className="navbar-logo">
          <Image
            src="/logo-njj.jpg"
            alt="Logo LBH Nubis Jaya Justitie"
            width={42}
            height={42}
            className="navbar-logo-img"
          />
          <span className="navbar-logo-text">Nubis Jaya Justitie</span>
        </a>
        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
