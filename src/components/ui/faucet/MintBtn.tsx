'use client'
import Button from '@/components/shared/Button'
import ConnectWalletButton from '@/components/shared/ConnectWalletButton'
import useTokenMint from '@/hooks/useTokenMint'
import { Token } from '@/utils/constants'
import { useAccount } from 'wagmi'

type MintBtnProps = {
  token: Token
  quantity: number
}
const MintBtn: React.FC<MintBtnProps> = ({ token, quantity }) => {
  const { address } = useAccount()

  const { mint } = useTokenMint()

  if (!address) return <ConnectWalletButton />
  return <Button label="Mint" onClick={() => mint(address, token, quantity)} className="z-10" />
}
export default MintBtn
