import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)
import { dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: true,
  // routeRules: {
  //   // Homepage pre-rendered at build time
  //   '/': { prerender: true, ssr: false },
  //   // Product page generated on-demand, revalidates in background
  //   '/account': { ssr: false },
  //   '/login': { ssr: false },
  // },
  ssr: false,
  // exp
  experimental: {
    localLayerAliases: true,
  },
  telemetry: false,
  alias: {
    'micromark/lib/preprocess.js': 'micromark',
    'micromark/lib/postprocess.js': 'micromark',
  },

  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecretKey: 'xxxx',
    // Keys within public are also exposed client-side
    public: {
      baseUrl: 'https://stg-api-kartid.famtechvn.com',
      clientId: '4504f2b7-4389-4eae-837c-b697aa9c7fe7',
      redirect_uri: 'http://localhost:3000/login',
    },
  },

  // app config
  app: {
    // global transition
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  // modules
  modules: [
    // chore
    // '@nuxtjs/eslint-module',
    // styling & ui
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    'nuxt-purgecss',
    // management
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-swiper',
    // todo: feat/localization
    // '@nuxtjs/i18n',
    '@use-wagmi/nuxt',
  ],

  css: [
    resolve('./assets/scss/_variables.scss'),
    resolve('./assets/scss/app.scss'),
  ],

  components: [
    {
      prefix: 'Common',
      path: resolve('./components/common'),
      global: true,
    },
    {
      prefix: 'Layout',
      path: resolve('./components/layout'),
      global: true,
    },
    {
      prefix: 'Page',
      path: resolve('./components/page'),
      global: true,
    },
    {
      prefix: 'Awesome',
      path: resolve('./components/awesome'),
      global: true,
    },
  ],

  imports: {
    dirs: [resolve('./stores'), '~/stores'],
  },

  router: {
    options: {
      strict: true,
    },
  },

  // module::pinia
  pinia: {
    autoImports: [['defineStore', 'definePiniaStore']],
  },

  // module::headlessui
  headlessui: {
    prefix: 'Headless',
  },

  // module::color-mode
  colorMode: {
    classSuffix: '',
  },

  build: {
    transpile: ['vue-i18n'],
  },
  vite: {
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(
            dirname(fileURLToPath(import.meta.url)),
            './configs/locales/*.json'
          ),
        ],
      }),
      svgLoader(),
    ],
  },
})
