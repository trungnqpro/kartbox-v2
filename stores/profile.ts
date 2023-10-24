// import { acceptHMRUpdate } from 'pinia'
export interface NavState {
  count: number
}

export const useProfile = definePiniaStore('ping', {
  state: (): NavState => ({
    count: 0,
  }),
  getters: {},
  actions: {
    async SlectedNav( data: any) {
        this.$patch((state) => {
            state.count = data
        })
    },
  },
})
