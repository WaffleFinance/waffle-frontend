'use client'

import { useWeb3Modal } from '@web3modal/wagmi/react'
import Button from './Button'
import { useAccount, useChainId } from 'wagmi'
import UserIcon from './UserIcon'
import UserAddress from './UserAddress'
import getNetworkIcon from '@/utils/getNetworkIcon'
import { TCHAINS } from '@/configs/wagmi.config'
import Arrow from '../icons/Arrow'

export default function ConnectWalletButton() {
  const { isConnected } = useAccount()
  const chaindId = useChainId() //TODO TS not working
  const { open } = useWeb3Modal()
  if (!isConnected)
    return (
      <Button
        label={
          <div className="flex items-center gap-2">
            <UserIcon />
            <p className="text-gray-300">Connect Wallet</p>
          </div>
        }
        onClick={open}
        className="bg-darkGreen"
      />
    )

  return (
    <div className="flex gap-3">
      <Button
        label={
          <div className="flex items-center gap-2 px-4">
            <UserIcon />
            <UserAddress className="text-gray-300" />
            <Arrow color="gray" />
          </div>
        }
        onClick={() => open({ view: 'Account' })}
        className="bg-darkGreen"
      />
      <Button
        label={
          <div className="flex items-center gap-5 px-4">
            {getNetworkIcon(chaindId as TCHAINS)}
            <div className="h-7 border border-gray-400" />
            <p className="rotate-90 text-xl text-gray-400">...</p>
          </div>
        }
        onClick={() => open({ view: 'Networks' })}
        className="border border-gray-400 bg-gray-500"
      />
    </div>
  )
}
