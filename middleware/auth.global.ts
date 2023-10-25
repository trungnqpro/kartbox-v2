import { useStorage } from '@vueuse/core'
export default defineNuxtRouteMiddleware((to) => {
  // skip middleware on server
  if (process.server) {
    console.log('in ssr')
  }
  // skip middleware on client side entirely
  if (process.client) {
    if (to.path !== '/login' && useStorage('accessToken', '').value === '') {
      return navigateTo('/login', { redirectCode: 301 })
    }
  }
  // or only skip middleware on initial client load
  const nuxtApp = useNuxtApp()
  if (process.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered)
  return
})
