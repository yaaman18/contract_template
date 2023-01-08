import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { mainnet, polygon } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import SEO from '../../next-seo.config'
import { Layout } from '../components/layout'

import '../styles/globals.css'

if (!process.env.NEXT_PUBLIC_ALCHEMY_KEY) {
  throw new Error('Please set your Alchemy ID in your .env file')
}

const { chains, provider } = configureChains(
  [polygon, mainnet],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY }), publicProvider()],
)

const { connectors } = getDefaultWallets({
  appName: 'Contract template',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <Head>children={undefined}</Head>
      <DefaultSeo {...SEO} />
      <Layout>
        <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </Layout>
    </WagmiConfig>
  )
}
