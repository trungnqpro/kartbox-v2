import useCustomFetch from '../composables/api/base/useCustomFetch'
export interface UserInfo {
  profile: {} | null
  accessToken: string | null
  refreshToken: string | null
}

export const useUser = definePiniaStore('user', {
  state: (): UserInfo => ({
    profile: null,
    accessToken: null,
    refreshToken: null,
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
          console.log(data.value.data.profile, 'check')
          const response = data.value.data
          this.profile = response.profile
          this.accessToken = response.accessToken
          this.refreshToken = response.refreshToken
        }
      } catch (error) {
        console.log(error, ['login Error'])
      }
    },
    getProfile: async function () {
      console.log('getProfile calll')
      try {
        const { data } = await useCustomFetch<object>('account/user/profile')
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
  },
})
