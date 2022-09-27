import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'

export default defineConfig({
  integrations: [sitemap(), tailwind(), image()],
})
