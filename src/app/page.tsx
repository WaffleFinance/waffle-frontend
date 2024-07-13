import Image from 'next/image'
import kvBrand from '@/../public/kv-brand.png'
import iphone from '@/../public/iphone.png'

export default function HomePage() {
  return (
    <main className="flex h-full w-full flex-col items-start justify-center bg-cover bg-no-repeat">
      <div className="relative flex h-full w-full max-w-desktop items-center justify-start">
        <Image src={kvBrand} alt="Brand image" className="px-16" />
        <Image
          src={iphone}
          alt="phone image"
          className="absolute bottom-0 right-0 h-auto w-[20rem] md:w-[35rem] lg:w-[50rem]"
          width={800}
          height={0}
        />
      </div>
    </main>
  )
}
