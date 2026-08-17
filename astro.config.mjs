// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Cambiá `site` por el dominio donde publiques (afecta canonical, OG y sitemap).
  site: process.env.SITE_URL ?? 'https://valbsolutions.site',
  // Sólo hace falta si servís el sitio desde un subdirectorio (ej. GitHub Pages: '/Portafolio').
  base: process.env.BASE_PATH ?? '/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
