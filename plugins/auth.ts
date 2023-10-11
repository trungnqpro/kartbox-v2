import { createAuth0 } from '@auth0/auth0-vue'
export default defineNuxtPlugin((nuxtApp) => {
  const auth0 = createAuth0({
    domain: 'dev-iflffbveru6u55u7.us.auth0.com',
    clientId: 'MVq4WqOxk5McH8WrmOhHra2U3x7FNtAr',
    redirect_uri: 'http://localhost:3000',
  })
  if (process.client) {
    nuxtApp.vueApp.use(auth0)
  }

  addRouteMiddleware('auth', () => {
    if (process.client) {
      auth0.checkSession()
      if (!auth0.isAuthenticated.value) {
        auth0.loginWithRedirect({
          appState: {
            target: useRoute().path,
          },
        })
      }
    }
  })
})
