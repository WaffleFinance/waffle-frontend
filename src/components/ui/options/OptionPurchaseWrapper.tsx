'use client'

import OptionPurchase from './OptionPurchase'
import PositionSwitch from './PositionSwitch'
import PurchaseOptionBtn from './PurchaseOptionBtn'

export default function OptionPurchaseWrapper() {
  return (
    <section className="flex w-full max-w-[42rem] flex-col gap-5 pt-20 md:pt-0">
      <PositionSwitch />
      <OptionPurchase />
      <PurchaseOptionBtn />
    </section>
  )
}
