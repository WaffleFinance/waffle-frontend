import ConnectWalletButton from '../shared/ConnectWalletButton'
import MainBrand from '../shared/MainBrand'

export default function NavBar() {
  return (
    <div className="flex w-full justify-center">
      <nav className="fixed top-0 mt-5 flex w-[80%] max-w-desktop items-center justify-between rounded-3xl bg-gray-500 p-4 ps-7">
        <MainBrand />
        <ConnectWalletButton />
      </nav>
    </div>
  )
}
