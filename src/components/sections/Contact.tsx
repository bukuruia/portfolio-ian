"use client";

import { FormEvent, useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Une erreur est survenue lors de l'envoi."
        );
      }

      setSuccess(
        data.message || "Votre message a bien été envoyé !"
      );

      // Réinitialiser le formulaire
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Erreur :", error);

      setError(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue. Veuillez réessayer."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-zinc-800 py-32"
    >
      {/* Halos lumineux */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-green-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Titre */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-semibold uppercase tracking-[0.4em] text-green-400">
            CONTACT
          </p>

          <h2 className="mt-5 text-5xl font-black text-white md:text-6xl">
            Travaillons ensemble
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Tu as un projet, une opportunité d'alternance ou simplement
            envie d'échanger ? N'hésite pas à m'envoyer un message.
          </p>
        </motion.div>

        {/* Contenu */}
        <div className="mx-auto mt-20 grid max-w-6xl gap-12 lg:grid-cols-2">
          {/* Informations */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-[30px] border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10">
                <Mail className="text-green-400" size={28} />
              </div>

              <h3 className="mt-8 text-3xl font-bold text-white">
                Une question ?
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Je suis actuellement à la recherche d'une alternance
                dans le développement Full Stack. Si mon profil vous
                intéresse, je serais ravi d'échanger avec vous.
              </p>

              <div className="mt-8">
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <a
                  href="mailto:bukuruiankenny8@gmail.com"
                  className="mt-2 inline-block text-lg font-semibold text-green-400 transition hover:text-green-300"
                >
                  bukuruiankenny8@gmail.com
                </a>
              </div>

              <div className="mt-8">
                <p className="text-sm text-gray-500">
                  Localisation
                </p>

                <p className="mt-2 text-lg font-semibold text-white">
                  Angers, France
                </p>
              </div>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-[30px] border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur"
            >
              {/* Nom + Email */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Nom
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                    disabled={loading}
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                    disabled={loading}
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Sujet */}
              <div className="mt-6">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Sujet
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Sujet de votre message"
                  required
                  disabled={loading}
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              {/* Message */}
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Écrivez votre message..."
                  required
                  disabled={loading}
                  rows={6}
                  className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              {/* Message de succès */}
              {success && (
                <div className="mt-6 flex items-center gap-3 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-400">
                  <CheckCircle size={20} />

                  <p className="text-sm">
                    {success}
                  </p>
                </div>
              )}

              {/* Message d'erreur */}
              {error && (
                <div className="mt-6 flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
                  <AlertCircle size={20} />

                  <p className="text-sm">
                    {error}
                  </p>
                </div>
              )}

              {/* Bouton */}
              <button
                type="submit"
                disabled={loading}
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-green-500 px-6 py-4 font-bold text-white transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}