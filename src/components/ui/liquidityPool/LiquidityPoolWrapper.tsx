'use client'

import LiquidityPool from './LiquityPool'
import ModeSwitch from './ModeSwitch'

export default function LiquidityPoolWrapper() {
  return (
    <section className="flex w-full max-w-[42rem] flex-col gap-5">
      <ModeSwitch />
      <LiquidityPool />
    </section>
  )
}
