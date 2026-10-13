import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactMessageSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(1).max(5000),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator(contactMessageSchema)
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !from) {
      console.error(
        "Contact form email is not configured: RESEND_API_KEY or RESEND_FROM_EMAIL is missing.",
      );
      return {
        success: false as const,
        message:
          "L’envoi n’est pas encore configuré. Vous pouvez me contacter directement par e-mail.",
      };
    }

    let response: Response;
    try {
      response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: ["asmamasrafi.2004@gmail.com"],
          reply_to: data.email,
          subject: "Nouveau message depuis le portfolio",
          text: `Nom : ${data.name}\nE-mail : ${data.email}\n\nMessage :\n${data.message}`,
        }),
      });
    } catch (error) {
      console.error("Failed to reach Resend while sending a portfolio contact message.", error);
      return {
        success: false as const,
        message:
          "Le service d’envoi est momentanément indisponible. Réessayez ou contactez-moi par e-mail.",
      };
    }

    let payload: unknown;
    try {
      payload = await response.json();
    } catch (error) {
      console.error("Resend returned an unreadable response.", error);
      return {
        success: false as const,
        message:
          "La réponse du service d’envoi est invalide. Réessayez ou contactez-moi par e-mail.",
      };
    }

    if (!response.ok) {
      console.error("Resend rejected a portfolio contact message.", {
        status: response.status,
        payload,
      });
      return {
        success: false as const,
        message:
          "Le message n’a pas pu être envoyé. Réessayez ou contactez-moi directement par e-mail.",
      };
    }

    if (
      typeof payload !== "object" ||
      payload === null ||
      !("id" in payload) ||
      typeof payload.id !== "string"
    ) {
      console.error("Resend response did not include an email ID.", payload);
      return {
        success: false as const,
        message: "L’envoi n’a pas pu être confirmé. Réessayez ou contactez-moi par e-mail.",
      };
    }

    return {
      success: true as const,
      message: "Votre message a bien été envoyé.",
    };
  });
