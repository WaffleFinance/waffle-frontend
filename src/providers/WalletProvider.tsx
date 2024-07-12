'use client'

import React, { ReactNode } from 'react'

import { createWeb3Modal } from '@web3modal/wagmi/react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { State, WagmiProvider } from 'wagmi'
import { projectId, wagmiConfig } from '@/configs/wagmi.config'

// Setup queryClient
const queryClient = new QueryClient()

// Create modal
if (!projectId) throw new Error('Project ID is not defined')
createWeb3Modal({
  wagmiConfig,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  // enableOnramp: true, // Optional - false as default
  themeMode: 'dark',
  themeVariables: {
    '--w3m-accent': '#05DF85',
  },
})

export default function WalletProvider({ children, initialState }: { children: ReactNode; initialState?: State }) {
  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}