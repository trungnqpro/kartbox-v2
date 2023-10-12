/** https://github.com/unicape/use-wagmi/blob/main/examples/nuxt/plugins/use-wagmi.ts **/
import { UseWagmiPlugin, configureChains, createConfig } from 'use-wagmi'
import { avalanche, goerli, mainnet, optimism } from 'use-wagmi/chains'

import { CoinbaseWalletConnector } from 'use-wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'use-wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'use-wagmi/connectors/walletConnect'


import { alchemyProvider } from 'use-wagmi/providers/alchemy'
import { infuraProvider } from 'use-wagmi/providers/infura'
import { publicProvider } from 'use-wagmi/providers/public'

export default defineNuxtPlugin((nuxtApp) => {
  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet, goerli, optimism, avalanche],
    [
      alchemyProvider({ apiKey: '' }), // TODO: your API Key
      infuraProvider({ apiKey: '' }), // TODO: your API Key
      publicProvider(),
    ]
  )

  // @ts-ignore
  const config = createConfig({
    autoConnect: true,
    connectors: [
      new MetaMaskConnector({
        chains,
        options: {
          icon: '/images/icons/metamask_icon.png',
          UNSTABLE_shimOnConnectSelectAccount: true,
        },
      }),
      new CoinbaseWalletConnector({
        chains,
        options: {
          icon: '/images/icons/CoinbaseWallet_icon.png',
          appName: 'use-wagmi',
        },
      }),
      new WalletConnectConnector({
        chains,
        options: {
          projectId: 'c4f79cc821944d9680842e34466bfb', // TODO: your project ID
          icon: '/images/icons/WalletConnect_icon.png',
        },
      }),
    ],
    publicClient,
    webSocketPublicClient,
  })

  nuxtApp.vueApp.use(UseWagmiPlugin, config)
})
