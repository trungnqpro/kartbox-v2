import { acceptHMRUpdate } from 'pinia'

const delay = (t: number) => new Promise((r) => setTimeout(r, t))

export interface ICounterState {
  count: number
  n: number
  numbers: number[]
}

export const useCounter = definePiniaStore('counter', {
  state: (): ICounterState => ({
    count: 0,
    n: 2,
    numbers: [] as number[],
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
