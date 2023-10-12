import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'

export default async function useCustomFetch<T>(
  url: string,
  options: UseFetchOptions<T> = {}
) {
  // const userAuth = useCookie('token')
  const config = useRuntimeConfig()

  const defaults: UseFetchOptions<T> = {
    baseURL: config.baseUrl ?? 'https://api.nuxtjs.dev',
    // cache request
    key: url,

    // set user token if connected
    // headers: userAuth.value
    //   ? { Authorization: `Bearer ${userAuth.value}` }
    //   : {},

    onRequest({ request, options }) {
      console.log('[onRequest]')
    },

    onRequestError({ request, options, error }) {
      console.log('[onRequestError]')
    },

    onResponse({ request, response, options }) {
      // _ctx.response._data = new myBusinessResponse(_ctx.response._data)
      console.log('[onResponse]')
    },

    onResponseError({ request, response, options }) {
      console.log('[onResponseError]')
      // throw new myBusinessError()
    },
  }

  // for nice deep defaults, please use unjs/defu
  const params = defu(options, defaults)

  return useFetch(url, params)
}
