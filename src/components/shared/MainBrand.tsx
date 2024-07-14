import Image from 'next/image'
import pancake from '@/../public/cta-pancake.webp'

export default function MainBrand() {
  return (
    <div className="relative">
      <p className="text-2xl font-extrabold text-primary lg:text-4xl">
        WAFFLE<span className="text-gray-300">FINANCE</span>
      </p>
      <Image src={pancake} alt="pancake" className="absolute -left-3 -top-2 size-8 -rotate-[20deg]" />
    </div>
  )
}
