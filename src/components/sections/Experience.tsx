"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const experiences = [
  {
    year: "2025 - Aujourd'hui",
    title: "Bachelor Informatique & Intelligence Artificielle",
    company: "ESEO Angers",
    description:
      "Formation en développement logiciel, intelligence artificielle, bases de données, architecture logicielle et développement web.",
    icon: GraduationCap,
  },
  {
    year: "2026",
    title: "Recherche d'une alternance",
    company: "Développeur Full Stack",
    description:
      "À la recherche d'une alternance de 24 mois afin de contribuer à des projets innovants.",
    icon: Briefcase,
  },
];
export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-center font-semibold uppercase tracking-[0.4em] text-green-400">
          PARCOURS
        </p>

        <h2 className="mt-5 text-center text-5xl font-black text-white">
          Mon parcours
        </h2>
      </motion.div>

      <div className="relative mt-20">

        {/* Ligne verticale */}

        <div className="absolute left-5 top-0 h-full w-1 rounded bg-green-500"></div>

        <div className="space-y-12">

          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex gap-8"
              >

                <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
                  <Icon className="text-white" size={22} />
                </div>

                <div className="flex-1 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

                  <span className="text-green-400">
                    {item.year}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 font-semibold text-zinc-400">
                    {item.company}
                  </p>

                  <p className="mt-4 leading-7 text-gray-400">
                    {item.description}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}