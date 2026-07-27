"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Brain,
  GitBranch,
  Server,
} from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: Globe,
    color: "text-green-400",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-blue-400",
    technologies: [
      "Java",
      "Spring Boot",
      "Node.js",
      "PHP",
      "REST API",
    ],
  },
  {
    title: "Base de données",
    icon: Database,
    color: "text-yellow-400",
    technologies: [
      "MySQL",
      "PostgreSQL",
      "SQLite",
    ],
  },
  {
    title: "Intelligence Artificielle",
    icon: Brain,
    color: "text-purple-400",
    technologies: [
      "Python",
      "Pandas",
      "Machine Learning",
    ],
  },
  {
    title: "Outils",
    icon: GitBranch,
    color: "text-red-400",
    technologies: [
      "Git",
      "GitHub",
      "VS Code",
      "IntelliJ IDEA",
      "Figma",
      "Vercel",
    ],
  },
  {
    title: "Développement",
    icon: Code2,
    color: "text-cyan-400",
    technologies: [
      "JavaFX",
      "Responsive Design",
      "UI/UX",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-center font-semibold uppercase tracking-[.4em] text-green-400">
          COMPÉTENCES
        </p>

        <h2 className="mt-5 text-center text-5xl font-black text-white">
          Technologies que j'utilise
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-gray-400">
          J'aime construire des applications modernes avec des technologies
          performantes, maintenables et adaptées aux besoins des utilisateurs.
        </p>
      </motion.div>

      <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-green-500"
            >
              <Icon className={`mb-6 h-10 w-10 ${skill.color}`} />

              <h3 className="text-2xl font-bold text-white">
                {skill.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
