import { TCHAINS } from '@/configs/wagmi.config'
import { ReactNode } from 'react'

export type PositionType = 'long' | 'short'
export type LiquidityPoolMode = 'deposit' | 'withdraw'

export type Token = {
  id: SUPPORTED_TOKENS
  label: string
  address: { [x in TCHAINS]: `0x${string}` }
  icon?: ReactNode
}
export type TokenPair = { id: string; label: string; first: SUPPORTED_TOKENS; second: SUPPORTED_TOKENS }

export type TokenWithQuantity = Token & { quantity: number }

export type PurchaseOption = {
  positionType: PositionType
  payToken: TokenWithQuantity
  positionToken: TokenWithQuantity
  leverage: number
}

export type SUPPORTED_TOKENS = 'BTC' | 'ETH' | 'USDC'

export const TOKEN_PAIRS: TokenPair[] = [
  { id: 'BTCUSDC', label: 'BTC-USDC', first: 'BTC', second: 'USDC' },
  { id: 'ETHUSDC', label: 'ETH-USDC', first: 'ETH', second: 'USDC' },
]
