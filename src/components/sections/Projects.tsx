"use client";

import { motion } from "framer-motion";
import {  ExternalLink, GitBranch } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Portfolio",
    image: "/images/projects/portfolio.jpg",
    description:
      "Portfolio moderne développé avec Next.js, Tailwind CSS et Framer Motion.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/bukuruia/portfolio-ian",
    demo: "#"
  },
  {
    title: "Letterix",
    image: "/images/projects/letterix.png",
    description:
      "Application Full Stack de gestion de lettres avec authentification.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/LoanKma/projet-web-v2",
  },
  {
    title: "BIBLIOSKI",
    image: "/images/projects/biblioski.png",
    description:
      "Application JavaFX permettant la gestion d'une bibliothèque.",
    tech: ["Java", "JavaFX", "MySQL"],
    github: "https://github.com/max13003/Biblio-ski",
  },
  {
    title: "VISIT EAST AFRICA",
    image: "/images/projects/visiteastafrica.png",
    description:
      "Application pour la promotion du tourisme en Afrique de l'Est.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/butoyi2k/visit_east-Africa",
    demo: "https://butoyi2k.github.io/visit_east-Africa/",
  },
  {
    title: "Memomaker",
    image: "/images/projects/MemoMaker.png",
    description:
      "Application de bureau interactive conçue pour les voyageurs souhaitant conserver une trace visuelle et émotionnelle de leurs aventures.",
    tech: ["Java 21", "JavaFX", "MySQL", "Maven", "Git"],
    github: "https://github.com/max13003/MemoMakerr.git",
  },
  {
    title: "TaskManager DApp",
    image: "/images/projects/Projet-Blockchain.png",
    description:
      "Application décentralisée de gestion de tâches développée sur la blockchain Ethereum, utilisant Solidity, Hardhat et MetaMask.",
    tech: ["Solidity", "Hardhat", "MetaMask"],
    github: "https://github.com/hannielyao86-hue/Projet-Block.git ",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-center font-semibold uppercase tracking-[0.4em] text-green-400">
          PROJETS
        </p>

        <h2 className="mt-5 text-center text-5xl font-black text-white">
          Mes réalisations
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-400">
          Voici quelques projets réalisés durant ma formation et mes projets
          personnels.
        </p>
      </motion.div>

      <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition hover:-translate-y-2 hover:border-green-500"
          >
            <div className="relative h-56">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-green-400"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {/* Bouton GitHub */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:border-green-500 hover:bg-green-500/10 hover:text-green-400"
                  >
                    GitHub
                  </a>
                )}

                {/* Bouton Demo : affiché uniquement si project.demo existe */}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-green-500 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:scale-105 hover:bg-green-400"
                  >
                    Demo
                  </a>
                )}
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}