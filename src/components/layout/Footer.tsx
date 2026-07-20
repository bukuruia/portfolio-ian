"use client";

import { ChevronUp, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-black text-white">
            Ian<span className="text-green-500">.</span>
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Développeur Full Stack • ESEO
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-8 text-sm text-zinc-400">
          <a href="#about" className="hover:text-green-400 transition">
            À propos
          </a>

          <a href="#skills" className="hover:text-green-400 transition">
            Compétences
          </a>

          <a href="#projects" className="hover:text-green-400 transition">
            Projets
          </a>

          <a href="#contact" className="hover:text-green-400 transition">
            Contact
          </a>
        </div>

        {/* Réseaux */}
        <div className="flex gap-4">
          <a
            href="mailto:bukuruiankenny8@gmail.com"
            className="rounded-full border border-zinc-700 p-3 transition hover:border-green-500"
          >
            <Mail size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/ian-kenny-bukuru-27ab5b3a0"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-700 p-3 transition hover:border-green-500"
          >
            <FaLinkedin size={20} />
          </a>

          <button
            onClick={scrollToTop}
            className="rounded-full border border-zinc-700 p-3 transition hover:border-green-500"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>

      <div className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Ian Kenny — Tous droits réservés.
      </div>
    </footer>
  );
}