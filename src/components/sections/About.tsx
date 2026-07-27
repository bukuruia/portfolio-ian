"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2, Play } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-6 py-32"
    >
      {/* Halo */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-green-500/10 blur-[140px]" />

      <div className="grid items-center gap-20 lg:grid-cols-2">

        {/* Texte */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <p className="font-semibold uppercase tracking-[.4em] text-green-400">
            À PROPOS
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Qui suis-je ?
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            Je m'appelle <span className="text-white font-semibold">Ian Kenny</span>,
            étudiant en Informatique & Intelligence Artificielle à l'ESEO.
            Je suis passionné par le développement Full Stack,
            l'Intelligence Artificielle et la Blockchain.

            Mon objectif est d'intégrer une entreprise en alternance afin
            de participer à des projets innovants et continuer à développer
            mes compétences.
          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
              <GraduationCap className="text-green-400" />
              <div>
                <h3 className="font-bold text-white">
                  Formation
                </h3>
                <p className="text-gray-400">
                  Bachelor Informatique & IA • ESEO Angers
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
              <Code2 className="text-green-400" />
              <div>
                <h3 className="font-bold text-white">
                  Développement
                </h3>
                <p className="text-gray-400">
                  React • Next.js • Java • Python • Spring Boot
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
              <Briefcase className="text-green-400" />
              <div>
                <h3 className="font-bold text-white">
                  Objectif
                </h3>
                <p className="text-gray-400">
                  Recherche d'une alternance Full Stack
                </p>
              </div>
            </div>

          </div>

        </motion.div>

        {/* Vidéo */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >

          <div className="relative overflow-hidden rounded-[35px] border border-zinc-800 bg-zinc-900 shadow-2xl">

            <video
              controls
              poster="/images/IMG_0724.PNG"
              className="w-full"
            >
              <source src="/videos/7E11D841-13C0-497B-8ACA-3B419FCBCABA (1) (2).mp4" type="video/mp4" />
            </video>

            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">

            </div>

          </div>

        </motion.div>
          <div className="flex flex-col lg:flex-row gap-20">
            <h3 className="mb-4 text-xl font-bold text-white">
              🎯 Recherche d'un contrat d'apprentissage
            </h3>
          
            <p className="mb-5 text-gray-400">
              Disponible à partir de <span className="font-semibold text-green-400">septembre 2026</span>
              pour une durée de <span className="font-semibold text-green-400">2 ans</span>.
            </p>
          
            <div className="flex flex-wrap gap-3">
              {[
                "Assistant développeur",
                "Technicien informatique applicatif",
                "Intégrateur web",
                "Testeur logiciel junior",
                "Assistant chef de projet numérique",
                "Développeur Low-Code / No-Code",
                "Support applicatif",
                "Automatisation",
                "Administration d'outils internes",
              ].map((job) => (
                <span
                  key={job}
                  className="rounded-full border border-green-500/40 bg-green-500/10 px-4 py-2 text-sm text-green-400"
                >
                  {job}
                </span>
              ))}
            </div>
          </div>

      </div>

    </section>
  );
}
