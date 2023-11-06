import { useStorage } from '@vueuse/core'
import useCustomFetch from '../composables/api/base/useCustomFetch'
import { oauthUrl, userEndpoint } from '~/utils/endPoint'
import { replaceNullWithEmptyString } from '@/utils/index'
import { Account } from '~/types/user'
import { useToast } from '~/composables/ui/useToast'

const toast = useToast()
export interface UserState {
  profile: Profile | undefined
  accessToken: string | null
  refreshToken: string | null
  htmlRedirect: null
  wallet: null
}

export interface Profile {
  id: string
  username: string
  email: string
}

export interface wallet {
  address: string
  chain: string
  createdAt: string
  id: string
  isDeleted: null
  ownerId: string
  publisher: string
  updatedAt: null
}

export const useUser = definePiniaStore('user', {
  state: (): UserState => ({
    profile: {
      id: '',
      username: '',
      email: '',
      avatarUrl: null,
      role: null,
      status: null,
      isDeleted: null,
      createdAt: null,
      updatedAt: null,
    },
    accessToken: null,
    refreshToken: null,
    wallet: null,
  }),
  getters: {
    getProfileUser: (state) => state.profile,
  },
  actions: {
    login: async function (payload: Account) {
      try {
        const { data } = await useCustomFetch<object>(userEndpoint.login, {
          method: 'POST',
          body: payload,
        })
        if (data.value) {
          const response = (data.value as any).data
          this.$patch((state) => {
            ;(state.profile as any) = replaceNullWithEmptyString(
              response.profile
            )
          })
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
      try {
        const { data, error } = await useCustomFetch<object>(
          userEndpoint.profile
        )
        if (data.value) {
          this.$patch((state) => {
            state.profile = (data.value as any).data
          })
        }
        if (error.value) {
          // throw new Error('There was an error get the profile');
          toast.add({ title: 'There was an error get the profile' })
        }
      } catch (error) {
        console.log(error, ['getProfile Error'])
      }
    },
    updateProfile: async function (payload: any) {
      try {
        const { data, error } = await useCustomFetch<object>(
          userEndpoint.profile,
          {
            method: 'PUT',
            body: payload,
          }
        )
        if (data) {
          console.log('updateSuccess', data)
        }
        if (error.value) {
          throw new Error('There was an error updating the profile')
        }
      } catch (error) {
        throw error
      }
    },
    getWallet: async function () {
      try {
        const { data } = await useCustomFetch<object>(userEndpoint.getWallet)
        if (data) {
          this.$patch((state) => {
            ;(state.wallet as any) = data.value
          })
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
    getAccessToken: async function (refreshToken: string) {
      try {
        const { data } = await useCustomFetch<object>(
          `${oauthUrl.getAccessToken}`,
          {
            method: 'GET',
            params: {
              refreshToken,
            },
          }
        )
        if (data) {
          await this.$patch((state) => {
            state.accessToken = (data.value as any).data.accessToken
            useStorage('accessToken').value = state.accessToken
          })
        }
      } catch (error) {
        console.log(error, ['getAccessToken Error'])
      }
    },
  },
})
