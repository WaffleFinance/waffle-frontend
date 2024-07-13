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

const OptionPurchase: React.FC = () => {
  const payToken = usePurchaseOptionPayToken()
  const positionToken = usePurchaseOptionPositionToken()
  const positionType = usePurchaseOptionPositionType()
  const leverage = usePurchaseOptionLeverage()
  const { changePayToken, changePositionToken, changePayTokenQuantity, changePositionTokenQuantity } =
    usePurchaseOptionActions()

  const { quantity: payTokenQuantity, ...payTokenWithoutQuantity } = payToken
  const { quantity: positionTokenQuantity, ...positionTokenWithoutQuantity } = positionToken

  return (
    <div className="relative flex flex-col gap-5 rounded-3xl bg-gray-500 p-12 pb-5">
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <Image src={bgOptions} alt="background" fill />
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
