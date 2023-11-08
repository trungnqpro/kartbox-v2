// import { acceptHMRUpdate } from 'pinia'
import useCustomFetch from '../composables/api/base/useCustomFetch'

const delay = (t: number) => new Promise((r) => setTimeout(r, t))

export interface IPingState {
  count: number
  n: number
  numbers: number[]
  list: object | null
}

export const usePingStore = definePiniaStore('ping', {
  state: (): IPingState => ({
    count: 0,
    n: 2,
    numbers: [] as number[],
    list: null as object | null,
  }),
  getters: {
    // getters receive the state as first parameter
    doubleCounter: (state) => state.count * 2,
    // use getters in other getters
    doubleCounterPlusOne(): number {
      return this.doubleCounter + 1
    },
  },
  actions: {
    async fetchList() {
      const { data } = await useCustomFetch<object>('/beers')
      console.log('121212', await useCustomFetch<object>('/beers'));
      
      console.log('[fetchList]')
      this.$patch((state) => {
        state.list = data.value[0]
      })
    },
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
    },
    increment2x() {
      this.count *= 2
    },
    changeMe() {
      console.log('change me to test HMR')
    },

    async fail() {
      const n = this.n
      await delay(1000)
      this.numbers.push(n)
      await delay(1000)
      if (this.n !== n) {
        throw new Error('Someone changed n!')
      }

      return n
    },

    async decrementToZero(interval: number = 300) {
      if (this.n <= 0) return

      while (this.n > 0) {
        this.$patch((state) => {
          state.n--
        })
        await delay(interval)
      }
    },
  },
})

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta.hot))
// }
