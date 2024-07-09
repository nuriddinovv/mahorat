import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  eng: {
    translation: {
      "Home": "Home",
      "About": "About",
      "Services": "Services",
      "Projects": "Projects",
      "Experts": "Experts",
      "Raled": "Raled",
      "Contact": "Contact",
      "Apply": "Apply",
      "Our Partners": "Our Partners",
      "Location": "Location",
      "Direction": "Direction",
      "Opening Hours": "Opening Hours",
      "Monday - Friday": "Monday - Friday",
      "Social": "Social",
      "All rights reserved.": "All rights reserved."
    },
  },
  rus: {
    translation: {
      "Home": "Главная",
      "About": "О нас",
      "Services": "Услуги",
      "Projects": "Проекты",
      "Experts": "Эксперты",
      "Raled": "Raled",
      "Contact": "Контакты",
      "Apply": "Подать заявку",
      "Our Partners": "Наши Партнеры",
      "Location": "Адрес",
      "Direction": "Направление",
      "Opening Hours": "Часы работы",
      "Monday - Friday": "Понедельник - Пятница",
      "Social": "Социальные сети",
      "All rights reserved.": "Все права защищены."
    },
  },
  uzb: {
    translation: {
      "Home": "Bosh sahifa",
      "About": "Biz haqimizda",
      "Services": "Xizmatlar",
      "Projects": "Loyihalar",
      "Experts": "Mutaxassislar",
      "Raled": "Raled",
      "Contact": "Bog'lanish",
      "Apply": "Ariza berish",
      "Our Partners": "Hamkorlarimiz",
      "Location": "Manzil",
      "Direction": "Yo'nalish",
      "Opening Hours": "Ish vaqti",
      "Monday - Friday": "Dushanba - Juma",
      "Social": "Ijtimoiy tarmoqlar",
      "All rights reserved.": "Barcha huquqlar himoyalangan."
    },
  },
  Узб: {
    translation: {
      "Home": "Бош сахифа",
      "About": "Биз хакимизда",
      "Services": "Хизматлар",
      "Projects": "Лойихалар",
      "Experts": "Мутахасислар",
      "Raled": "Raled",
      "Contact": "Богланиш",
      "Apply": "Ариза бериш",
      "Our Partners": "Хамкорларимиз",
      "Location": "Манзил",
      "Direction": "Йуналиш",
      "Opening Hours": "Иш вакти",
      "Monday - Friday": "Душанба - Жума",
      "Social": "Ижтимоий тармоклар",
      "All rights reserved.": "Барча хукуклар химояланган."
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "uzb",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
