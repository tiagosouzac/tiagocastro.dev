import type { LanguagesContent } from "@/locales/utils.ts";

interface Content {
  label: string;
}

export default {
  en: {
    label: "Under construction ⚠️",
  },
  "pt-br": {
    label: "Em construção ⚠️",
  },
} satisfies LanguagesContent<Content>;
