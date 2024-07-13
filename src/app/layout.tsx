import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { GENERAL_CONFIG } from '@/configs/app.config'
import { cookieToInitialState } from 'wagmi'
import { wagmiConfig } from '@/configs/wagmi.config'
import { headers } from 'next/headers'
import WalletProvider from '@/providers/WalletProvider'
import NavBar from '@/components/ui/NavBar'
import Footer from '@/components/Footer'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

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
      <body className={`${poppins.className} flex h-screen min-h-screen flex-col justify-between bg-gray-900`}>
        <WalletProvider initialState={initialState}>
          <NavBar />
          {children}
          <Footer />
        </WalletProvider>
      </body>
    </html>
  )
}
