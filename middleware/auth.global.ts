import { useStorage } from '@vueuse/core'
import { ErrorCode } from "~/utils/error";

export default defineNuxtRouteMiddleware((to) => {
  // skip middleware on server
  if (process.server) {
    console.log('in ssr')
  }
  // skip middleware on client side entirely
  if (process.client) {
    if (to.path !== '/login' && useStorage('accessToken', '').value === '') {
      return navigateTo('/login', { redirectCode: ErrorCode.redirect })
    }
  }
  // or only skip middleware on initial client load
  const nuxtApp = useNuxtApp()
  if (process.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered)
    return
})
