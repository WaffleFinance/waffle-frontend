import { PositionType, Token, TOKEN_PAIRS, TokenPair, TokenWithQuantity } from '@/utils/constants'
import { TOKENS } from '@/utils/tokens'
import { create } from 'zustand'

type PurchaseOptionStore = {
  positionType: PositionType
  leverage: number
  payToken: TokenWithQuantity
  positionToken: TokenWithQuantity
  pool: TokenPair
  actions: {
    changePositionType: (newPositionType: PositionType) => void
    changeLeverage: (newLeverage: number | number[]) => void
    changePayToken: (token: Token) => void
    changePayTokenQuantity: (quantity: number) => void
    changePositionToken: (token: Token) => void
    changePositionTokenQuantity: (quantity: number) => void
    changePool: (pair: TokenPair) => void
  }
}

const usePurchaseOptionStore = create<PurchaseOptionStore>((set) => ({
  positionType: 'long',
  leverage: 1.1,
  payToken: { ...(TOKENS.get('BTC') as Token), quantity: 0 },
  positionToken: { ...(TOKENS.get('USDC') as Token), quantity: 0 },
  pool: TOKEN_PAIRS[0],
  actions: {
    changePositionType: (positionType: PositionType) =>
      set((state) => ({
        positionType,
        positionToken: state.payToken,
        payToken: state.positionToken,
      })),
    changeLeverage: (leverage: number | number[]) => {
      set(() => ({
        leverage: leverage as number,
      }))
    },
    changePayToken: (payToken: Token) =>
      set((state) => ({
        payToken: { ...payToken, quantity: state.payToken.quantity },
      })),
    changePayTokenQuantity: (qty: number) =>
      set((state) => ({
        payToken: { ...state.payToken, quantity: qty },
      })),
    changePositionToken: (positionToken: Token) =>
      set((state) => ({
        positionToken: { ...positionToken, quantity: state.positionToken.quantity },
      })),
    changePositionTokenQuantity: (qty: number) =>
      set((state) => ({
        positionToken: { ...state.positionToken, quantity: qty },
      })),
    changePool: (pair: TokenPair) => {
      set((state) => {
        const newPositionToken = state.positionType === 'long' ? pair.second : pair.first
        const newPayToken = state.positionType === 'long' ? pair.first : pair.second

        return {
          pool: pair,
          positionToken: { ...(TOKENS.get(newPositionToken) as Token), quantity: 0 },
          payToken: { ...(TOKENS.get(newPayToken) as Token), quantity: 0 },
        }
      })
    },
  },
}))

export const usePurchaseOptionPositionType = () => usePurchaseOptionStore((state) => state.positionType)
export const usePurchaseOptionLeverage = () => usePurchaseOptionStore((state) => state.leverage)
export const usePurchaseOptionPayToken = () => usePurchaseOptionStore((state) => state.payToken)
export const usePurchaseOptionPositionToken = () => usePurchaseOptionStore((state) => state.positionToken)
export const usePurchaseOptionPool = () => usePurchaseOptionStore((state) => state.pool)
export const usePurchaseOptionActions = () => usePurchaseOptionStore((state) => state.actions)
