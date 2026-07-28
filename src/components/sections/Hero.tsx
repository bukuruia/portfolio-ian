"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Halo lumineux */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-green-500/20 blur-[140px]" />
      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 pt-28 md:grid-cols-2">

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="rounded-full border border-green-500 px-4 py-2 text-sm text-green-400">
            🚀 Disponible pour une alternance • 2026
          </span>

          <p className="mt-8 uppercase tracking-[0.4em] text-green-400 font-semibold">
            Full Stack Developer • ESEO
          </p>

          <h1 className="mt-8 text-6xl font-black leading-tight text-white lg:text-7xl">
            Je transforme
            <br />
            <span className="text-green-500">
              des idées en applications.
            </span>
          </h1>

          <h2 className="mt-6 text-3xl font-bold text-white">
            Ian Kenny
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            Étudiant en Informatique & Intelligence Artificielle à l'ESEO.
            Passionné par le numérique et surtout 
            l'Intelligence Artificielle.
          </p>

          {/* Boutons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full bg-green-500 px-7 py-4 font-semibold text-white transition hover:scale-105 hover:bg-green-400"
            >
              Me contacter
              <ArrowRight size={18} />
            </a>

            <a
              href="/cv/CV_2026-07-27_Ian Kenny_BUKURU.pdf"
              className="flex items-center gap-2 rounded-full border border-zinc-700 px-7 py-4 text-white transition hover:border-green-500"
            >
              Télécharger CV
              <Download size={18} />
            </a>
          </div>

          {/* Statistiques */}
          <div className="mt-16 grid grid-cols-3 gap-4">

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 text-center backdrop-blur">
              <h3 className="text-3xl font-bold text-green-500">6</h3>
              <p className="mt-2 text-gray-400">Projets</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 text-center backdrop-blur">
              <h3 className="text-3xl font-bold text-green-500">10+</h3>
              <p className="mt-2 text-gray-400">Technologies</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 text-center backdrop-blur">
              <h3 className="text-3xl font-bold text-green-500">2026</h3>
              <p className="mt-2 text-gray-400">Alternance</p>
            </div>

          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-green-500 via-emerald-500 to-blue-500 opacity-30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[40px] border border-zinc-700 bg-zinc-900">

              <Image
                src="/images/IMG_20250915_111743_134.webp"
                alt="Ian Kenny"
                width={420}
                height={520}
                className="object-cover"
                priority
              />

              <div className="absolute left-5 top-5 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white">
                🟢 Disponible
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
