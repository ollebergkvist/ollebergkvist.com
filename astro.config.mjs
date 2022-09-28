import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'
import astroI18next from 'astro-i18next'

export default defineConfig({
  site: 'https://ollebergkvist.com', // Use to generate your sitemap and canonical URLs in your final build
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
        },
      },
    }),
    tailwind(),
    image(),
    astroI18next(),
  ],
})
