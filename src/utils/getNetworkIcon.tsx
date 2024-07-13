import { TCHAINS } from '@/configs/wagmi.config'
import Image from 'next/image'
import { ReactNode } from 'react'
import { sepolia } from 'viem/chains'
import ethLogo from '../../public/logos/ethereum.svg'

export default function getNetworkIcon(chainId: TCHAINS): ReactNode {
  switch (chainId) {
    case sepolia.id:
      return <Image src={ethLogo} alt="Ethereum Logo" width={19} height={32} />
    default:
      return undefined
  }
}
