'use client'

import { PositionType } from '@/utils/constants'
import { useState } from 'react'
import PositionSwitch from './PositionSwitch'

export default function OptionPurchase() {
  const [positionType, setPositionType] = useState<PositionType>('long')

  return (
    <section className="flex w-full max-w-[42rem] flex-col gap-5">
      <PositionSwitch positionType={positionType} setPositionType={setPositionType} />
    </section>
  )
}
