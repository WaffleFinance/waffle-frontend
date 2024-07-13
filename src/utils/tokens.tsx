import { zeroAddress } from 'viem'
import { sepolia, bscTestnet } from 'viem/chains'
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
      address: { [sepolia.id]: '0x1e45f105146d7499fe056d646e55f93dc0dc751f', [bscTestnet.id]: zeroAddress },
      icon: <Image src={btcLogo} alt="btc logo" />,
    },
  ],
  [
    'ETH',
    {
      id: 'ETH',
      label: 'ETH',
      address: { [sepolia.id]: '0xA2bFA4Cd0171f124Df6ed94a41D79A81B5Ffb42d', [bscTestnet.id]: zeroAddress },
      icon: <Image src={ethLogo} alt="eth logo" />,
    },
  ],
  [
    'USDC',
    {
      id: 'USDC',
      label: 'USDC',
      address: { [sepolia.id]: '0x481366775cf607f9fad7d99fa84465ac06f7f2bc', [bscTestnet.id]: zeroAddress },
      icon: <Image src={usdcLogo} alt="usdc logo" />,
    },
  ],
])
