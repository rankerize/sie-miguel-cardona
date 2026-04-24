export const i18n = {
  defaultLocale: 'es',
  locales: ['es', 'en', 'fr', 'de', 'zh', 'ja'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

const dictionaries: Record<Locale, () => Promise<unknown>> = {
  es: () => import('./dictionaries/es.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  fr: () => import('./dictionaries/fr.json').then((module) => module.default),
  de: () => import('./dictionaries/de.json').then((module) => module.default),
  zh: () => import('./dictionaries/zh.json').then((module) => module.default),
  ja: () => import('./dictionaries/ja.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) =>
  (dictionaries[locale as Locale]?.() ?? dictionaries.es()) as Promise<typeof import('./dictionaries/es.json')>;
