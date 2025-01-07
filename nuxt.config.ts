// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-07',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],

  routeRules: {
    '/': { prerender: true }
  },
  nitro: {
    azure: {
      config: {
        platform: {
          apiRuntime: 'node:23'
        }
      }
    }
  }
})