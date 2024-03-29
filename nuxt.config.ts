// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/styles/application.scss'],

  modules: [
    '@pinia/nuxt',
  ],
});
