import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n.use(HttpBackend).use(initReactI18next).init({
    lng: localStorage.getItem("language") || "BR",
    fallbackLng: "BR",
    supportedLngs: ["BR", "EN", "ES"],
    ns: ["common", "login", "dashboard"],
    defaultNS: "common",
    backend: {
        loadPath:"/locales/{{lng}}/{{ns}}.json"
    },
    interpolation: {
        escapeValue: false
    },
    react: {
        useSuspense: true
    }
});

export default i18n;