import { defu } from 'defu'
import type { UseFetchOptions } from 'nuxt/app'
import { oauthUrl } from '~/utils/endPoint'

export default async function useCustomFetch<T>(
  url: string,
  options: UseFetchOptions<T> = {}
) {
  // const userAuth = useCookie('token')
  const config = useRuntimeConfig()
  const accessToken = useLocalStorage('accessToken', '').value
  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.baseUrl ?? 'https://api.nuxtjs.dev',
    // cache request
    key: new Date().getTime().toString(),

    headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
    // server: false,

    onRequest({ request, options }) {
      console.log('[onRequest]', request)
    },

    onRequestError({ request, options, error }) {
      console.log('[onRequestError]', request)
    },

    onResponse({ request, response, options }) {
      if (request.toString().includes(`${oauthUrl.authorizeRedirect}`)) {
        navigateTo(`${response.url}`, {
          external: true,
          open: {
            target: '_blank',
            windowFeatures: {
              // width: 500,
              // height: 500,
              // screenX: 500,
              // screenY: 500,
              top: 250,
              left: 250,
              innerWidth: 850,
              innerHeight: 850,
            },
          },
        })
      }
      console.log('[onResponse]', response._data.data)
      // response = response._data.data
      // return response._data
    },

    onResponseError({ request, response, options }) {
      console.log('[onResponseError]')
      // throw new myBusinessError()
    },
  }

  // for nice deep defaults, please use unjs/defu
  const params = defu(options, defaults)

  return await useFetch(url, params)
}
