import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      findStore: "Find a Store",
      help: "Help",
      joinUs: "Join Us",
      signIn: "Sign In",
      yourAccount: "Your Account",
      language: "Language",
      welcome: "Welcome to my website",
      about: "About Us",
    },
  },
  ur: {
    translation: {
      findStore: "اسٹور تلاش کریں",
      help: "مدد",
      joinUs: "ہم سے جڑیں",
      signIn: "سائن ان کریں",
      yourAccount: "آپ کا اکاؤنٹ",
      language: "زبان",
      welcome: "میرے ویب سائٹ پر خوش آمدید",
      about: "ہمارے بارے میں",
    },
  },
};

// Initialize i18n
i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

