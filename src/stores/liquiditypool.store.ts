import { LiquidityPoolMode, Token, TOKEN_PAIRS, TokenPair, TOKENS, TokenWithQuantity } from '@/utils/constants'
import { create } from 'zustand'

type LiquidityPoolStore = {
  mode: LiquidityPoolMode
  pair: TokenPair
  firstToken: TokenWithQuantity
  secondToken: TokenWithQuantity
  actions: {
    changeMode: (mode: LiquidityPoolMode) => void
    changePair: (pair: TokenPair) => void
    changeFirstTokenQuantity: (quantity: number) => void
    changeSecondTokenQuantity: (quantity: number) => void
    changeFirstToken: (token: Token) => void
    changeSecondToken: (token: Token) => void
  }
}

const useLiquidityPoolStore = create<LiquidityPoolStore>((set) => ({
  mode: 'deposit',
  pair: TOKEN_PAIRS[0],
  firstToken: { ...(TOKENS.get('BTC') as Token), quantity: 0 },
  secondToken: { ...(TOKENS.get('USDC') as Token), quantity: 0 },
  actions: {
    changeMode: (mode: LiquidityPoolMode) => set(() => ({ mode })),
    changePair: (pair: TokenPair) =>
      set(() => ({
        pair,
        firstToken: { ...(TOKENS.get(pair.first) as Token), quantity: 0 },
        secondToken: { ...(TOKENS.get(pair.second) as Token), quantity: 0 },
      })),
    changeFirstTokenQuantity: (quantity: number) =>
      set((state) => ({ firstToken: { ...state.firstToken, quantity: quantity } })),
    changeSecondTokenQuantity: (quantity: number) =>
      set((state) => ({ secondToken: { ...state.secondToken, quantity: quantity } })),
    changeFirstToken: (token: Token) => set(() => ({ firstToken: { ...token, quantity: 0 } })),
    changeSecondToken: (token: Token) => set(() => ({ secondToken: { ...token, quantity: 0 } })),
  },
}))

export const useLiquidityPoolMode = () => useLiquidityPoolStore((state) => state.mode)
export const useLiquidityPoolPair = () => useLiquidityPoolStore((state) => state.pair)
export const useLiquidityPoolFirst = () => useLiquidityPoolStore((state) => state.firstToken)
export const useLiquidityPoolSecond = () => useLiquidityPoolStore((state) => state.secondToken)
export const useLiquidityPoolActions = () => useLiquidityPoolStore((state) => state.actions)
