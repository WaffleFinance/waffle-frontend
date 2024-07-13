import { sepolia } from 'viem/chains'
import { SUPPORTED_TOKENS, Token } from './constants'

import Image from 'next/image'
import ethLogo from '@/../public/logos/ethereum.svg'
import btcLogo from '@/../public/logos/btc.svg'
import usdcLogo from '@/../public/logos/usdc.svg'

export const TOKENS: Map<SUPPORTED_TOKENS, Token> = new Map([
  [
    'BTC',
    {
      id: 'BTC',
      label: 'BTC',
      address: { [sepolia.id]: '0x1e45f105146d7499fe056d646e55f93dc0dc751f' },
      icon: <Image src={btcLogo} alt="btc logo" />,
    },
  ],
  [
    'ETH',
    {
      id: 'ETH',
      label: 'ETH',
      address: { [sepolia.id]: '0xA2bFA4Cd0171f124Df6ed94a41D79A81B5Ffb42d' },
      icon: <Image src={ethLogo} alt="eth logo" />,
    },
  ],
  [
    'USDC',
    {
      id: 'USDC',
      label: 'USDC',
      address: { [sepolia.id]: '0x481366775cf607f9fad7d99fa84465ac06f7f2bc' },
      icon: <Image src={usdcLogo} alt="usdc logo" />,
    },
  ],
])
