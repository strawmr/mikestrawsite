// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  alias: {
    '@': resolve(__dirname, "/"),
  },
   // Defaults options
   tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },
  dir: {
    static: 'static'
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
        // Add more sizes/types if necessary, like this:
        // { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
        // { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' }
      ]
    }
  },
})