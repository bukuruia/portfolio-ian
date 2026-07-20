import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body;

    // Vérification des champs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Veuillez remplir tous les champs.",
        },
        { status: 400 }
      );
    }

    // Vérification simple de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Veuillez entrer une adresse email valide.",
        },
        { status: 400 }
      );
    }

    // Envoi de l'email avec Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Ian Kenny <onboarding@resend.dev>",
      to: ["bukuruiankenny8@gmail.com"],
      replyTo: email,
      subject: `Nouveau message depuis ton portfolio : ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px;">
          
          <h1 style="color: #22c55e;">
            Nouveau message depuis ton portfolio
          </h1>

          <hr />

          <h2>Informations du contact</h2>

          <p>
            <strong>Nom :</strong> ${name}
          </p>

          <p>
            <strong>Email :</strong> ${email}
          </p>

          <p>
            <strong>Sujet :</strong> ${subject}
          </p>

          <h2>Message</h2>

          <div style="
            background-color: #f4f4f4;
            padding: 15px;
            border-radius: 8px;
            white-space: pre-line;
          ">
            ${message}
          </div>

          <hr />

          <p style="color: #666; font-size: 12px;">
            Ce message a été envoyé depuis le formulaire de contact
            de ton portfolio.
          </p>

        </div>
      `,
    });

    if (error) {
      console.error("Erreur Resend :", error);

      return NextResponse.json(
        {
          success: false,
          message: "Une erreur est survenue lors de l'envoi du message.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Votre message a bien été envoyé !",
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur serveur :", error);

    return NextResponse.json(
      {
        success: false,
        message: "Une erreur serveur est survenue.",
      },
      { status: 500 }
    );
  }
}