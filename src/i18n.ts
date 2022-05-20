import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fi from "./locales/fi.json";
import en from "./locales/en.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      fi: {
        translation: fi,
      },
      en: { translation: en },
    },
    lng: i18n.language,
    fallbackLng: "fi",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    backend: {
      loadPath: "/locales/{{lng}}.json",
    },
    react: {
      bindI18n: "loaded languageChanged",
      bindI18nStore: "added",
      useSuspense: true,
    },
  });

export default i18n;
