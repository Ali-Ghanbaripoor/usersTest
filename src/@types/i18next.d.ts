import { resources, defaultLng } from "../i18n/i18n";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultLng;
    resources: typeof resources["en"];
  }
}
