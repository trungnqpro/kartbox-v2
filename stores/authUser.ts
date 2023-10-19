import { replaceNullWithEmptyString } from '@/utils/index'
import { oauthUrl } from '~/utils/endPoint'
import useCustomFetch from '../composables/api/base/useCustomFetch'

export interface UserState {
  profile: Profile | undefined
  accessToken: string | null
  refreshToken: string | null
  htmlRedirect: null
}

export interface Profile {
  id: string
  username: string
  email: string
}

export const useUser = definePiniaStore('user', {
  state: (): UserState => ({
    profile: {
      id: '',
      username: '',
      email: '',
    },
    accessToken: null,
    refreshToken: null,
    htmlRedirect: null,
  }),
  getters: {
    getProfileUser: (state) => state.profile,
  },
  actions: {
    login: async function (payload: any) {
      try {
        const { data } = await useCustomFetch<object>('account/auth/login', {
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
        const { data } = await useCustomFetch<{ data: Profile }>(
          'account/user/profile',
          {
            method: 'GET',
          }
        )

        console.log('[getProfile] data:', data.value)
        if (data.value) {
          console.log('[data.value] setValue')
          this.$patch((state) => {
            state.profile = data.value?.data
          })
        }
      } catch (error) {
        console.log(error, ['getProfile Error'])
      }
    },
    updateProfile: async function (payload: any) {
      try {
        const { data } = await useCustomFetch<object>('account/user/profile', {
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
        const { data } = await useCustomFetch<object>('account/user/wallet')
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
