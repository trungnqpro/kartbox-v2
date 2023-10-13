import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'
import { useUser } from '~/stores/authUser'

export default async function useCustomFetch<T>(
  url: string,
  options: UseFetchOptions<T> = {}
) {
  // const userAuth = useCookie('token')
  const config = useRuntimeConfig()
  const { accessToken } = useUser()
  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.baseUrl ?? 'https://api.nuxtjs.dev',
    // cache request
    key: url,

    headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},

    onRequest({ request, options }) {
      console.log('[onRequest]')
    },

    onRequestError({ request, options, error }) {
      console.log('[onRequestError]')
    },

    onResponse({ request, response, options }) {
      response = response._data.data
      console.log('[onResponse]', response)
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
