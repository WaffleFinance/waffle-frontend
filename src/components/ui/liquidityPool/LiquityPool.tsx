'use client'

import bgLiquidityPools from '@/../public/bg-option.png'
import Select from '@/components/shared/Select'
import TokenInput from '@/components/shared/TokenInput'
import useTokenBalance from '@/hooks/useTokenBalance'
import {
  useLiquidityPoolActions,
  useLiquidityPoolFirst,
  useLiquidityPoolMode,
  useLiquidityPoolPair,
  useLiquidityPoolSecond,
} from '@/stores/liquiditypool.store'
import { TOKEN_PAIRS } from '@/utils/constants'
import Image from 'next/image'
import { formatEther } from 'viem'

const LiquidityPool: React.FC = () => {
  const pair = useLiquidityPoolPair()
  const mode = useLiquidityPoolMode()
  const firstToken = useLiquidityPoolFirst()
  const secondToken = useLiquidityPoolSecond()
  const { changePair, changeFirstTokenQuantity, changeSecondTokenQuantity } = useLiquidityPoolActions()

  const firstTokenBalance = useTokenBalance(firstToken.id)
  const secondTokenBalance = useTokenBalance(secondToken.id)

  return (
    <div className="relative flex flex-col gap-5 rounded-3xl bg-gray-500 p-12 pb-5">
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <Image src={bgLiquidityPools} alt="background" fill className="pointer-events-none" />
      </div>
      <div className="z-20 flex flex-col gap-2">
        <p className="font-medium text-white">Choose Token Pair</p>
        <div className="w-min">
          <Select items={TOKEN_PAIRS} selected={pair} setSelected={changePair} className="rounded-xl bg-gray-500 p-4" />
        </div>
      </div>
      <div className="z-10 flex flex-col gap-2">
        <p className="font-medium capitalize text-white">{mode} Amount</p>
        <TokenInput
          amount={firstToken.quantity}
          setAmount={changeFirstTokenQuantity}
          token={firstToken}
          overTextRight={`Balance ${firstTokenBalance ? Number(formatEther(firstTokenBalance)).toFixed(3) : '-'}`}
        />
        <TokenInput
          amount={secondToken.quantity}
          setAmount={changeSecondTokenQuantity}
          token={secondToken}
          overTextRight={`Balance ${secondTokenBalance ? Number(formatEther(secondTokenBalance)).toFixed(3) : '-'}`}
        />
      </div>
    </div>
  )
}
export default LiquidityPool
