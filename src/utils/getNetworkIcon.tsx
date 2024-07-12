import { TCHAINS } from '@/configs/wagmi.config'
import Image from 'next/image'
import { ReactNode } from 'react'
import { bscTestnet, sepolia } from 'viem/chains'
import bscLogo from '../../public/logos/bsc.png'
import ethLogo from '../../public/logos/ethereum.svg'

export default function getNetworkIcon(chainId: TCHAINS): ReactNode {
  switch (chainId) {
    case sepolia.id:
      return <Image src={ethLogo} alt="Ethereum Logo" width={19} height={32} />
    case bscTestnet.id:
      return <Image src={bscLogo} alt="BSC Logo" width={19} height={32} />
    default:
      return undefined
  }
}
