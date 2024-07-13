'use client'

import { PositionType } from '@/utils/constants'
import { useState } from 'react'
import PositionSwitch from './PositionSwitch'
import OptionPurchase from './OptionPurchase'

export default function OptionPurchaseWrapper() {
  const [positionType, setPositionType] = useState<PositionType>('long')

  return (
    <section className="flex w-full max-w-[42rem] flex-col gap-5">
      <PositionSwitch positionType={positionType} setPositionType={setPositionType} />
      <OptionPurchase />
    </section>
  )
}
