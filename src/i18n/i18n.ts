/**
 * Internationalization App configurations
 *
 * To config i18-next [read](https://react.i18next.com/latest/typescript).
 *
 * This module added to `./src/index.tsx` to apply all changes in entire of
 * application.
 *
 * To change locale you should `import i18next from "i18next" and use method
 * `i18next.changeLanguage(""))`
 *
 * Languages will define at {@link MomentHeader.tsx} in `supportedLanguage` list.
 * @module
 *
 * @example
 * import { useTranslation } from "react-i18next"
 *
 * const ViewComponent: React.Fc = () => {
 *  const { t } = useTranslation();
 *
 *  return <React.Fragment>
 *     <Typography>{t("greeting.first")}</Typography>
 * </React.Fragment>
 * }
 */

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import config from "../config/config";
import { Locales } from "../@types/global";
import en from "./locales/en/translation.json";
import fa from "./locales/fa/translation.json";
import ar from "./locales/ar/translation.json";

// Add and initialization supported locales from `config.i18.locales` list to
// resources as `react-i18next` **Locales** type.
const resources: { [locale in Locales]?: any } = {
  ar: {
    translation: ar,
  },
  en: {
    translation: en,
  },
  fa: {
    translation: fa,
  },
};

// Main `react-i18next` configurations
i18next.use(initReactI18next).init({
  supportedLngs: config.i18n.locales,
  interpolation: { escapeValue: false },
  resources: resources,
  fallbackLng: config.i18n.locales[0],
});
/* i18next.use(initReactI18next).init({
  lng: store.getState().changeLocale.locale,
  supportedLngs: config.i18n.locales,
  interpolation: { escapeValue: false },
  resources: resources,
  fallbackLng: config.i18n.locales[0],
}); */
