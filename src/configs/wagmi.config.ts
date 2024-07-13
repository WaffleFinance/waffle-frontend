import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage } from 'wagmi'
import { bscTestnet, sepolia } from 'wagmi/chains'
import { GENERAL_CONFIG } from './app.config'

// Get projectId from https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
  name: GENERAL_CONFIG.appName,
  description: GENERAL_CONFIG.appName,
  url: GENERAL_CONFIG.url, // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
}

// Create wagmiConfig
const chains = [sepolia] as const
const chainIds = chains.map((item) => item.id)
export type TCHAINS = (typeof chainIds)[number]

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}

export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  enableEIP6963: true,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  auth: {
    email: false,
    socials: ['google', 'x', 'github', 'discord', 'apple'],
  },
})
