'use client'

import { PositionType } from '@/utils/constants'
import { useState } from 'react'
import PositionSwitch from './PositionSwitch'
import OptionPurchase from './OptionPurchase'
import PurchaseOptionBtn from './PurchaseOptionBtn'

export default function OptionPurchaseWrapper() {
  return (
    <section className="flex w-full max-w-[42rem] flex-col gap-5">
      <PositionSwitch />
      <OptionPurchase />
      <PurchaseOptionBtn />
    </section>
  )
}
