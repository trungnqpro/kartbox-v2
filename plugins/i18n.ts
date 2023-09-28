import { createI18n } from 'vue-i18n'
import en from '../configs/locales/en.json'
import vi from '../configs/locales/vi.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en,
      vi,
    },
  })

  vueApp.use(i18n)
})
