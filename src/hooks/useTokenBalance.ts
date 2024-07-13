import { TCHAINS } from '@/configs/wagmi.config'
import { SUPPORTED_TOKENS, TOKENS } from '@/utils/constants'
import { erc20Abi, zeroAddress } from 'viem'
import { useAccount, useChainId, useReadContract } from 'wagmi'

export default function useTokenBalance(id: SUPPORTED_TOKENS) {
  const { address } = useAccount()
  const chainId = useChainId()

  const { data } = useReadContract({
    address: TOKENS.get(id)?.address[chainId as TCHAINS],
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: [address ?? zeroAddress],
    query: { enabled: !!address },
  })

  return data
}
