import { TCHAINS } from '@/configs/wagmi.config'
import { zeroAddress } from 'viem'
import { bscTestnet, sepolia } from 'viem/chains'

export type PositionType = 'long' | 'short'
export type LiquidityPoolMode = 'deposit' | 'withdraw'

export type Token = {
  id: SUPPORTED_TOKENS
  label: string
}
export type TokenPair = { id: string; label: string; first: SUPPORTED_TOKENS; second: SUPPORTED_TOKENS }

export type TokenWithQuantity = Token & { quantity: number }

export type PurchaseOption = {
  positionType: PositionType
  payToken: TokenWithQuantity
  positionToken: TokenWithQuantity
  leverage: number
}

type TokenType = {
  id: SUPPORTED_TOKENS
  label: string
  address: { [x in TCHAINS]: `0x${string}` }
}
export type SUPPORTED_TOKENS = 'BTC' | 'ETH' | 'USDC'
export const TOKENS: Map<SUPPORTED_TOKENS, TokenType> = new Map([
  [
    'BTC',
    {
      id: 'BTC',
      label: 'BTC',
      address: { [sepolia.id]: '0x1e45f105146d7499fe056d646e55f93dc0dc751f', [bscTestnet.id]: zeroAddress },
    },
  ],
  [
    'ETH',
    {
      id: 'ETH',
      label: 'ETH',
      address: { [sepolia.id]: '0xA2bFA4Cd0171f124Df6ed94a41D79A81B5Ffb42d', [bscTestnet.id]: zeroAddress },
    },
  ],
  [
    'USDC',
    {
      id: 'USDC',
      label: 'USDC',
      address: { [sepolia.id]: '0x481366775cf607f9fad7d99fa84465ac06f7f2bc', [bscTestnet.id]: zeroAddress },
    },
  ],
])

export const TOKEN_PAIRS: TokenPair[] = [
  { id: 'BTCUSDC', label: 'BTC-USDC', first: 'BTC', second: 'USDC' },
  { id: 'ETHUSDC', label: 'ETH-USDC', first: 'ETH', second: 'USDC' },
]
