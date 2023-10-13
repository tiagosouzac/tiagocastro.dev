import type { LanguagesContent } from "@/locales/utils.ts";

interface Option {
  name: string;
  url: string;
}

interface Content {
  translate: {
    pageLanguage: string;
    options: Option[];
  };
}

export default {
  en: {
    translate: {
      pageLanguage: "English",
      options: [{ name: "Português", url: "/pt-br/" }],
    },
  },
  "pt-br": {
    translate: {
      pageLanguage: "Português",
      options: [{ name: "English", url: "/en/" }],
    },
  },
} satisfies LanguagesContent<Content>;
