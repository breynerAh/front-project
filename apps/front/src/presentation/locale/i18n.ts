import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import esJson from "./es.json";

const lang = localStorage.getItem("i18nextLng") || "es";

i18n.use(initReactI18next).init({
  resources: {
    es: { ...esJson },
  }, // Where we're gonna put translations' files
  lng: lang, // Set the initial language of the App
});
