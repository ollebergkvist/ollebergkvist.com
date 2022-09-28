/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'es'],
  i18next: {
    debug: process.env.NODE_ENV === 'development', // convenient during development to check for missing keys
    initImmediate: false,
    ns: ['common', 'home', 'about', 'contact', 'project'],
    defaultNS: 'common',
    backend: {
      loadPath: './src/locales/{{lng}}/{{ns}}.json',
    },
    i18nextPlugins: { fsBackend: 'i18next-fs-backend' },
  },
}
