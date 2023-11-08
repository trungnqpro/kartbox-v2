import { defu } from 'defu'
import type { UseFetchOptions } from 'nuxt/app'
import { oauthUrl } from '~/utils/endPoint'
import { useUser } from '~/stores/authUser'

export default async function useCustomFetch<T>(
  url: string,
  options: UseFetchOptions<T> = {}
) {
  // const userAuth = useCookie('token')

  const { getAccessToken } = useUser()
  const config = useRuntimeConfig()
  let accessToken = useLocalStorage('accessToken', '').value
  console.log(accessToken, 'accessToken', 'first')
  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.baseUrl ?? 'https://api.nuxtjs.dev',
    // cache request
    key: url,

    headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
    // server: false,

    onRequest({ request, options }) {

    },

    onRequestError({ request, options, error }) {

    },

    onResponse: async ({ request, response, options }) => {
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
      // console.log('[onResponse]', response)
    },

    onResponseError: async ({ request, response, options }) => {
      if (response.status === ErrorCode.serverError && response._data.error.code === ErrorCode.tokenExpired) {
        if (useLocalStorage('refreshToken', '').value !== '') {
          await getAccessToken(useLocalStorage('refreshToken', '').value)
          options.headers.Authorization = `Bearer ${useLocalStorage('accessToken', '').value}`
        }
      }
      console.log('[onResponseError]')
      // throw new myBusinessError()
    },
  }

  // for nice deep defaults, please use unjs/defu
  const params = defu(options, defaults)

  return await useFetch(url, params)
}
