import Link from 'next/link'
import Button from './shared/Button'
import MainBrand from './shared/MainBrand'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-500 px-10 py-10">
      <div className="flex max-w-desktop items-center justify-between">
        <MainBrand />
        <Link href={'#'}>
          <Button
            label="Join Community"
            className="bg-darkGreen px-4 py-4 text-base text-primary lg:px-10 lg:text-lg"
          />
        </Link>
      </div>
    </footer>
  )
}
