import useCustomFetch from '../composables/api/base/useCustomFetch'
import { oauthUrl, userEndpoint } from '~/utils/endPoint'
import { replaceNullWithEmptyString } from '@/utils/index'
import { UserInfo } from '~/types/user'

export const useUser = definePiniaStore('user', {
  state: (): UserInfo => ({
    profile: {
      username: '',
      email: '',
    },
    accessToken: null,
    refreshToken: null,
  }),
  getters: {
    getProfileUser: (state) => state.profile,
  },
  actions: {
    login: async function (payload: any) {
      try {
        const { data } = await useCustomFetch<object>(userEndpoint.login, {
          method: 'POST',
          body: payload,
        })
        if (data) {
          const response = data.value.data
          this.profile = replaceNullWithEmptyString(response.profile)
          this.accessToken = response.accessToken
          this.refreshToken = response.refreshToken
          localStorage.setItem('User', JSON.stringify(this.profile))
          localStorage.setItem('accessToken', response.accessToken)
          localStorage.setItem('refreshToken', response.refreshToken)
          return response
        }
      } catch (error) {
        console.log(error, ['login Error'])
      }
    },
    getProfile: async function () {
      console.log('getProfile calll')
      try {
        const { data } = await useCustomFetch<object>(userEndpoint.profile)
        if (data) {
          const response = data.value.data
          this.profile = response
        }
      } catch (error) {
        console.log(error, ['getProfile Error'])
      }
    },
    updateProfile: async function (payload: any) {
      try {
        const { data } = await useCustomFetch<object>(userEndpoint.profile, {
          method: 'PUT',
          body: payload,
        })
        if (data) {
          console.log('updateSuccess')
        }
      } catch (error) {
        console.log(error, ['updateProfile Error'])
      }
    },
    getWallet: async function () {
      try {
        const { data } = await useCustomFetch<object>(userEndpoint.getWallet)
        if (data) {
          console.log(['getWallet Succes'])
        }
      } catch (error) {
        console.log(error, ['getWallet Error'])
      }
    },
    authorizeRedirect: async function (params: any) {
      try {
        const { data } = await useCustomFetch<object>(
          `${oauthUrl.authorizeRedirect}`,
          {
            method: 'GET',
            params,
          }
        )
        if (data) {
          console.log(['authorizeRedirect Succes'], data)
        }
      } catch (error) {
        console.log(error, ['authorizeRedirect Error'])
      }
    },
  },
})
