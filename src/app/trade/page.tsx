import OptionPurchaseWrapper from '@/components/ui/options/OptionPurchaseWrapper'
import Image from 'next/image'
import bunny from '@/../public/earn-bunny.png'

export default function TradePage() {
  return (
    <main className="relative flex flex-col items-center justify-between gap-16 px-12 pb-10 pt-36 md:gap-8">
      <OptionPurchaseWrapper />
      <Image src={bunny} alt="bunny" className="bottom-0 right-0 xl:absolute" width={378} height={420} />
    </main>
  )
}
