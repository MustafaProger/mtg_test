import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
	en: {
		translation: {
			homePage: "Home",
			aboutPage: "About",
			servicesPage: "Services",
		},
	},
	ru: {
		translation: {
			homePage: "Главная",
			aboutPage: "О нас",
			servicesPage: "Услуги",
		},
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: "en",
	fallbackLng: "en",
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
