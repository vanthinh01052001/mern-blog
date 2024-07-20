import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  uk: {
    translation: {
      home: "Home",
    },
  },
  vi: {
    translation: {
      home: "Trang chủ",
    },
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: "vi",
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false,
  },
});
