export type PositionType = 'long' | 'short'
export type LiquidityPoolMode = 'deposit' | 'withdraw'

export type Token = {
  id: string
  label: string
}
export type TokenPair = { id: string; label: string; first: string; second: string }

export type TokenWithQuantity = Token & { quantity: number }

export type PurchaseOption = {
  positionType: PositionType
  payToken: TokenWithQuantity
  positionToken: TokenWithQuantity
  leverage: number
}

export const TOKENS = new Map([
  ['BTC', { id: 'BTC', label: 'BTC' }],
  ['ETH', { id: 'ETH', label: 'ETH' }],
  ['USDC', { id: 'USDC', label: 'USDC' }],
])

export const TOKEN_PAIRS: TokenPair[] = [
  { id: 'BTCUSDC', label: 'BTC-USDC', first: 'BTC', second: 'USDC' },
  { id: 'ETHUSDC', label: 'ETH-USDC', first: 'ETH', second: 'USDC' },
]
