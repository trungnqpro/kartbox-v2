import {
  useAccount,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  useConnect,
  useSignMessage,
} from 'use-wagmi'
export interface Wallet {
  address: number
  chain: number
}

export const useWalletStore = definePiniaStore('wallet', {
  state: (): Wallet => ({
    address: 0,
    chain: 0,
  }),
  getters: {},
  actions: {
    async ConnectWallet(connectors: any) {
      const { connect } = useConnect()
      await connect({ connector: connectors })
    },
    async SignMessage(message: string) {
      const {
        data: signMessageData,
        signMessage,
        isError,
        isLoading,
        isSuccess,
      } = useSignMessage()
      signMessage({ message })
      // try {
      //   console.log('[SignMessage call]', signMessage)
      //   await signMessage({ message: 'kart' })
      //   if (isSuccess) {
      //     return signMessageData
      //   }
      // } catch (error) {
      //   // eslint-disable-next-line no-console
      //   console.log(error, ['SignMessage'])
      // }
    },
  },
})
