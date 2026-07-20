"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Accueil", href: "#home" },
  { name: "À propos", href: "#about" },
  { name: "Compétences", href: "#skills" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-zinc-950/80 backdrop-blur-xl shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <a
          href="#home"
          className="text-3xl font-black text-white"
        >
          Ian<span className="text-green-500">.</span>
        </a>

        {/* Desktop */}

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-300 transition hover:text-green-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Bouton */}

        <a
          href="#contact"
          className="hidden rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-green-400 md:block"
        >
          Me contacter
        </a>

        {/* Mobile */}

        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menu Mobile */}

      {menuOpen && (
        <div className="border-t border-zinc-800 bg-zinc-950 md:hidden">
          <div className="flex flex-col p-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-4 text-lg text-gray-300 transition hover:text-green-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}