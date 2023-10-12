import type { LanguagesContent } from "@/locales/utils.ts";

interface Content {
  title: string;
  description: string;
  "explore-button": string;
}

export default {
  en: {
    title: "Hi! I'm Tiago Castro, Web Developer",
    description:
      "Specialized in HTML, CSS, JavaScript and their ecosystem. Explore my portfolio and discover how I transform ideas into captivating digital experiences.",
    "explore-button": "Comming Soon",
  },
  "pt-br": {
    title: "Olá! Sou Tiago Castro, Desenvolvedor Web",
    description:
      "Especializado em HTML, CSS, JavaScript e seu ecossistema. Explore meu portfólio e descubra como transformo ideias em experiências digitais cativantes.",
    "explore-button": "Em breve",
  },
} satisfies LanguagesContent<Content>;
