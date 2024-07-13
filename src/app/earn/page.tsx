import LiquidityPoolWrapper from '@/components/ui/liquidityPool/LiquidityPoolWrapper'
import Image from 'next/image'
import coinsImg from '@/../public/coins.webp'

export default function LiquidityPage() {
  return (
    <main className="relative flex h-full w-full flex-col items-center justify-center gap-16 px-12 pb-10 pt-36 md:gap-8">
      <LiquidityPoolWrapper />
      <Image src={coinsImg} alt="coins image" className="absolute bottom-0 left-0 hidden lg:block" />
    </main>
  )
}
