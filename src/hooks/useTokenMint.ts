import { TokensABI } from '@/abi/tokens.abi'
import { TCHAINS } from '@/configs/wagmi.config'
import { Token } from '@/utils/constants'
import { useEffect } from 'react'
import { toast } from 'sonner'
import { parseEther } from 'viem'
import { useChainId, useWaitForTransactionReceipt, useWriteContract } from 'wagmi'

export default function useTokenMint() {
  const chainId = useChainId() as TCHAINS
  const { writeContract, data } = useWriteContract()
  const {
    isLoading: isMintLoading,
    isSuccess: isMintSuccess,
    isError: isMintError,
  } = useWaitForTransactionReceipt({
    hash: data,
    query: {
      enabled: !!data,
    },
  })

  const mint = (user: `0x${string}`, token: Token, quantity: number) => {
    return writeContract(
      {
        address: token.address[chainId],
        abi: TokensABI,
        functionName: 'mint',
        args: [user, parseEther(quantity.toString())],
      },
      {
        onError(error) {
          console.error({ error })
          if (
            error.message.includes('Not enough funds') ||
            error.message.includes('exceeds the balance of the account')
          ) {
            toast.error(`Not enough funds`)
          } else if (error.message.includes('User rejected the request')) {
            toast.error('User rejected the request')
          } else {
            toast.error(error.message.split('reverted with the following reason:')[1].split('Contract Call:')[0])
          }
        },
        onSuccess() {
          toast.loading('Confirming minting...', { id: 'minting_loading' })
        },
      }
    )
  }

  useEffect(() => {
    if (isMintSuccess) {
      toast.dismiss('minting_loading')
      toast.success('Mint success', { id: 'mint_success' })
    }
  }, [isMintSuccess])
  useEffect(() => {
    if (isMintError) {
      toast.error('Mint error', { id: 'mint_error' })
    }
  }, [isMintError])

  return { mint, isMintLoading }
}
