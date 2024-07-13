export type PositionType = 'long' | 'short'

export type Token = {
  id: string
  label: string
}

export type TokenWithQuantity = Token & { quantity: number }

export type PurchaseOption = {
  positionType: PositionType
  payToken: TokenWithQuantity
  positionToken: TokenWithQuantity
  leverage: number
}

export const STABLE_TOKENS = [
  { id: 'USDC', label: 'USDC' },
  { id: 'USDT', label: 'USDT' },
]

export const TOKENS = [
  { id: 'BTC', label: 'BTC' },
  { id: 'ETH', label: 'ETH' },
]
