import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GENERAL_CONFIG } from '@/configs/app.config'
import { cookieToInitialState } from 'wagmi'
import { wagmiConfig } from '@/configs/wagmi.config'
import { headers } from 'next/headers'
import WalletProvider from '@/providers/WalletProvider'
import NavBar from '@/components/ui/NavBar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ITZ A TITLE',
  description: GENERAL_CONFIG.appDescription,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const initialState = cookieToInitialState(wagmiConfig, headers().get('cookie'))

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 flex h-screen min-h-screen flex-col justify-between`}>
        <WalletProvider initialState={initialState}>
          <NavBar />
          {children}
          <Footer />
        </WalletProvider>
      </body>
    </html>
  )
}
