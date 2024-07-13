import { PositionType, Token, TokenWithQuantity } from '@/utils/constants'
import { create } from 'zustand'

type PurchaseOptionStore = {
  positionType: PositionType
  leverage: number
  payToken: TokenWithQuantity
  positionToken: TokenWithQuantity
  actions: {
    changePositionType: (newPositionType: PositionType) => void
    changeLeverage: (newLeverage: number) => void
    changePayToken: (token: Token) => void
    changePayTokenQuantity: (quantity: number) => void
    changePositionToken: (token: Token) => void
    changePositionTokenQuantity: (quantity: number) => void
  }
}

const usePurchaseOptionStore = create<PurchaseOptionStore>((set) => ({
  positionType: 'long',
  leverage: 1.1,
  payToken: { id: 'UDSC', label: 'USDC', quantity: 0.0 },
  positionToken: { id: 'BTC', label: 'BTC', quantity: 0.0 },
  actions: {
    changePositionType: (positionType: PositionType) =>
      set((state) => ({
        positionType,
      })),
    changeLeverage: (leverage: number) =>
      set((state) => ({
        leverage,
      })),
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
  },
}))

export const usePurchaseOptionPositionType = () => usePurchaseOptionStore((state) => state.positionType)
export const usePurchaseOptionLeverage = () => usePurchaseOptionStore((state) => state.leverage)
export const usePurchaseOptionPayToken = () => usePurchaseOptionStore((state) => state.payToken)
export const usePurchaseOptionPositionToken = () => usePurchaseOptionStore((state) => state.positionToken)
export const usePurchaseOptionActions = () => usePurchaseOptionStore((state) => state.actions)
