import Footer from '@/components/Footer'
import NavBar from '@/components/ui/NavBar'
import { GENERAL_CONFIG } from '@/configs/app.config'
import { config } from '@/configs/wagmi.config'
import WalletProvider from '@/providers/WalletProvider'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { headers } from 'next/headers'
import { cookieToInitialState } from 'wagmi'
import './globals.css'
import { Toaster } from 'sonner'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'Next.',
  description: GENERAL_CONFIG.appDescription,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))

  return (
    <html lang="en">
      <body
        className={`${poppins.className} flex h-screen min-h-screen flex-col justify-between gap-16 bg-gray-900 md:gap-8`}
      >
        <WalletProvider initialState={initialState}>
          <NavBar />
          {children}
          <Toaster richColors />
          <Footer />
        </WalletProvider>
      </body>
    </html>
  )
}
