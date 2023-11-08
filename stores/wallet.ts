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
  isConnected: boolean
}

export const useWalletStore = definePiniaStore('wallet', {
  state: (): Wallet => ({
    address: 0,
    chain: 0,
    isConnected: false,
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
    },
    setConnectWallet(status: boolean) {
      this.isConnected = status
    },
  },
})
