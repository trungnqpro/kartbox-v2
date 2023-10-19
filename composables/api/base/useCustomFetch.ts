import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'
import { useUser } from '~/stores/authUser'
import { oauthUrl } from '~/utils/endPoint'

export default async function useCustomFetch<T>(
  url: string,
  options: UseFetchOptions<T> = {}
) {
  // const userAuth = useCookie('token')
  const config = useRuntimeConfig()
  const accessToken = useLocalStorage('accessToken').value
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
      console.log('[onResponse]', response)
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
      response = response._data.data
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
