import ConnectWalletButton from '../shared/ConnectWalletButton'
import MainBrand from '../shared/MainBrand'

export default function NavBar() {
  return (
    <div className="flex w-full justify-center">
      <nav className="fixed top-0 z-50 mt-5 flex w-[80%] max-w-desktop flex-col items-center justify-between gap-4 rounded-3xl bg-gray-500 p-4 ps-7 md:flex-row">
        <MainBrand />
        <ConnectWalletButton />
      </nav>
    </div>
  )
}
