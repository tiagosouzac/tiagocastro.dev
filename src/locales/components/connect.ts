import type { LanguagesContent } from "@/locales/utils.ts";

interface Content {
  label: string;
  socials: {
    github: {
      label: string;
    };
    linkedin: {
      label: string;
    };
    discord: {
      label: string;
    };
    email: {
      label: string;
      "copied-message": string;
    };
  };
}

export default {
  en: {
    label: "Let's connect!",
    socials: {
      github: {
        label: "Access Tiago's GitHub profile",
      },
      linkedin: {
        label: "Access Tiago's Linkedin profile",
      },
      discord: {
        label: "Access Tiago's Discord profile",
      },
      email: {
        label: "Copy email to clipboard",
        "copied-message": "Email copied!",
      },
    },
  },
  "pt-br": {
    label: "Bora conectar!",
    socials: {
      github: {
        label: "Visitar o perfil de Tiago no GitHub",
      },
      linkedin: {
        label: "Visitar o perfil de Tiago no Linkedin",
      },
      discord: {
        label: "Visitar o perfil de Tiago no Discord",
      },
      email: {
        label: "Copiar o e-mail para a área de transferência",
        "copied-message": "E-mail copiado!",
      },
    },
  },
} satisfies LanguagesContent<Content>;
