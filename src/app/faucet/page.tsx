'use client'
import bgLiquidityPools from '@/../public/bg-option.png'
import TokenInput from '@/components/shared/TokenInput'
import MintBtn from '@/components/ui/faucet/MintBtn'
import { Token } from '@/utils/constants'
import { TOKENS } from '@/utils/tokens'
import Image from 'next/image'
import { useState } from 'react'

export default function FaucetPage() {
  const [amount, setAmount] = useState(0)
  const [selectedToken, setSelectedToken] = useState<Token>(Array.from(TOKENS.values())[0])

  return (
    <main className="flex flex-col items-center justify-between px-12 pb-10 pt-36">
      <div className="relative flex flex-col gap-5 rounded-3xl bg-gray-500 p-12 pb-5">
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <Image src={bgLiquidityPools} alt="background" fill className="pointer-events-none" />
        </div>
        <div className="z-20 flex flex-col gap-2">
          <p className="font-medium text-white">Minting Faucet</p>
        </div>
        <div className="z-40 flex">
          <TokenInput amount={amount} setAmount={setAmount} token={selectedToken} setSelectToken={setSelectedToken} />
        </div>
        <MintBtn token={selectedToken} quantity={amount} />
      </div>
      )
    </main>
  )
}
