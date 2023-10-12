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
      tooltip: string;
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
        tooltip: "Email copied to clipboard!",
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
        tooltip: "E-mail copiado para a área de transferência!",
      },
    },
  },
} satisfies LanguagesContent<Content>;
