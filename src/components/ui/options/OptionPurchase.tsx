'use client'

import bgOptions from '@/../public/bg-option.png'
import Image from 'next/image'
import TokenInput from './TokenInput'
import { STABLE_TOKENS, Token, TOKENS } from '@/utils/constants'
import { SetStateAction } from 'react'
import {
  usePurchaseOptionActions,
  usePurchaseOptionLeverage,
  usePurchaseOptionPayToken,
  usePurchaseOptionPositionToken,
  usePurchaseOptionPositionType,
} from '@/stores/option.store'
import InfoItem from './InfoItem'
import CustomSlider from '@/components/shared/CustomSlider'
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
  const { changePayToken, changePositionToken, changePayTokenQuantity, changePositionTokenQuantity, changeLeverage } =
    usePurchaseOptionActions()

  const { quantity: payTokenQuantity, ...payTokenWithoutQuantity } = payToken
  const { quantity: positionTokenQuantity, ...positionTokenWithoutQuantity } = positionToken

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
          setToken={changePayToken}
          tokenList={STABLE_TOKENS}
          overTextLeft={'Pay'}
          overTextRight={'Balance'}
        />
        <TokenInput
          amount={positionTokenQuantity}
          setAmount={changePositionTokenQuantity}
          token={positionTokenWithoutQuantity}
          setToken={changePositionToken}
          tokenList={TOKENS}
          overTextLeft={positionType}
          overTextRight={`Leverage ${leverage}`}
        />
      </div>
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
