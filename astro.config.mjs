import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'

export default defineConfig({
  site: 'https://ollebergkvist.com', // Use to generate your sitemap and canonical URLs in your final build.
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-MX',
        },
      },
    }),
    tailwind(),
    image(),
  ],
})
