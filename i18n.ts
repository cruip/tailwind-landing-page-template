import { getRequestConfig } from "next-intl/server";
import { routing } from "./i18n/routing";

export const locales = routing.locales;
export type Locale = (typeof locales)[number];
export const defaultLocale = routing.defaultLocale;

export default getRequestConfig(async ({ requestLocale }) => {
  // This function will be called for every request
  // Use the locale from the request (automatically resolved by next-intl)
  let locale = await requestLocale;

  // Ensure that the incoming `locale` parameter is valid
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
