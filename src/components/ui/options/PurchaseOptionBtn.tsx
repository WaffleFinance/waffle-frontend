'use client'

import Button from '@/components/shared/Button'
import { usePurchaseOptionPositionToken, usePurchaseOptionPositionType } from '@/stores/purchaseOption.store'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi'

const PurchaseOptionBtn: React.FC = () => {
  const positionToken = usePurchaseOptionPositionToken()
  const positionType = usePurchaseOptionPositionType()
  const { open } = useWeb3Modal()
  const { isDisconnected } = useAccount()
  if (isDisconnected) return <Button label="Connect wallet" onClick={open} />

  return <Button label={`${positionType} ${positionToken.id}`} className="text-xl font-medium capitalize" />
}
export default PurchaseOptionBtn
