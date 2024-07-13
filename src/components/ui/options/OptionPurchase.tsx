'use client'

import bgOptions from '@/../public/bg-option.png'
import CustomSlider from '@/components/shared/CustomSlider'
import Select from '@/components/shared/Select'
import useTokenBalance from '@/hooks/useTokenBalance'
import {
  usePurchaseOptionActions,
  usePurchaseOptionLeverage,
  usePurchaseOptionPayToken,
  usePurchaseOptionPool,
  usePurchaseOptionPositionToken,
  usePurchaseOptionPositionType,
} from '@/stores/purchaseOption.store'
import { Token, TOKEN_PAIRS } from '@/utils/constants'
import Image from 'next/image'
import { formatEther } from 'viem'
import TokenInput from '../../shared/TokenInput'
import InfoItem from './InfoItem'
const leverageMarks = {
  1.1: { label: '1.1x', style: { color: '#A3a3b1' } },
  2: { label: '2x', style: { color: '#A3a3b1' } },
  3: { label: '3x', style: { color: '#A3a3b1' } },
}

const OptionPurchase: React.FC = () => {
  const payToken = usePurchaseOptionPayToken()
  const positionToken = usePurchaseOptionPositionToken()
  const positionType = usePurchaseOptionPositionType()
  const leverage = usePurchaseOptionLeverage()
  const pool = usePurchaseOptionPool()
  const { changePayTokenQuantity, changePositionTokenQuantity, changeLeverage, changePool } = usePurchaseOptionActions()

  const { quantity: payTokenQuantity, ...payTokenWithoutQuantity } = payToken
  const { quantity: positionTokenQuantity, ...positionTokenWithoutQuantity } = positionToken

  const payTokenBalance = useTokenBalance(payToken.id)

  return (
    <div className="relative flex flex-col gap-5 rounded-3xl bg-gray-500 p-12 pb-5">
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <Image src={bgOptions} alt="background" fill className="pointer-events-none" />
      </div>
      <div className="z-10 flex flex-col gap-2">
        <TokenInput
          amount={payTokenQuantity}
          setAmount={changePayTokenQuantity}
          token={payTokenWithoutQuantity as Token}
          overTextLeft={'Pay'}
          overTextRight={`Balance ${payTokenBalance ? Number(formatEther(payTokenBalance)).toFixed(3) : '-'}`}
        />
        <TokenInput
          amount={positionTokenQuantity}
          setAmount={changePositionTokenQuantity}
          token={positionTokenWithoutQuantity}
          overTextLeft={positionType}
          overTextRight={`Leverage ${leverage}`}
        />
      </div>
      <InfoItem label="Pool" value={<Select items={TOKEN_PAIRS} selected={pool} setSelected={changePool} />} />
      <div className="flex flex-col gap-8 py-4">
        <p className="text-sm font-medium text-gray-300">Leverage slider</p>
        <CustomSlider marks={leverageMarks} max={3} min={1.1} step={0.1} option={leverage} setOption={changeLeverage} />
      </div>
      <InfoItem label={'Leverage'} value={`${leverage}x`} />
      <div className="flex flex-col gap-1">
        <InfoItem label={'Execution price'} value={undefined} />
        <InfoItem label={'Liq. price'} value={undefined} />
        <InfoItem label={'Fees (rebated)'} value={undefined} />
        <InfoItem label={'Network fee'} value={undefined} />
      </div>
    </div>
  )
}
export default OptionPurchase
