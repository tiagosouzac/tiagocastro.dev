export const languages = {
  en: "English",
  "pt-br": "Português",
};

export const defaultLanguage = "en";

export function getLangFromUrl(pathname: string) {
  const [, lang] = pathname.split("/");
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLanguage;
}

export type Languages = keyof typeof languages;
export type LanguagesContent<T> = Record<Languages, T>;
