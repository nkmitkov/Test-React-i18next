import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      welcomeMsg: "Welcome to Vite + React and react-i18next",
      addNotificationBtnText: "Add notification",
      notificationMsg_one: "You have {{count}} notification",
      notificationMsg_other: "You have {{count}} notifications",
      editMsg: "Edit <1>src/App.jsx</1> and save to test HMR",
      detailsMsg: "Click on the <1>Vite</1> and <3>React</3> logos to <5>learn more</5>",
    }
  },
  fr: {
    translation: {
      welcomeMsg: "Bienvenue à Vite + React et react-i18next",
      addNotificationBtnText: "Ajouter notification",
      notificationMsg_one: "Vous avez {{count}} notification",
      notificationMsg_other: "Vous avez {{count}} notifications",
      editMsg: "Modifiez <1>src/App.jsx</1> et enregistrez-le pour tester HMR",
      detailsMsg: "Cliquez sur les logos <1>Vite</1> et <3>React</3> pour en <5>savoir plus</5>",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en",
    lng: "fr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;