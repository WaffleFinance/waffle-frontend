import NavItems from '../NavItems'
import ConnectWalletButton from '../shared/ConnectWalletButton'
import MainBrand from '../shared/MainBrand'

export default function NavBar() {
  return (
    <div className="flex w-full justify-center">
      <nav className="fixed top-0 z-50 mt-5 flex w-[90%] max-w-desktop flex-col items-center justify-between gap-4 rounded-3xl bg-gray-500 p-4 ps-7 md:flex-row lg:w-[80%]">
        <MainBrand />
        <div className="flex flex-col items-center gap-5 md:flex-row">
          <NavItems />
          <ConnectWalletButton />
        </div>
      </nav>
    </div>
  )
}
