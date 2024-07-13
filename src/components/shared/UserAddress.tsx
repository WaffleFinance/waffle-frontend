import { twMerge } from 'tailwind-merge'
import { useAccount, useEnsName } from 'wagmi'

type UserAddressProps = {
  className?: string
  isFullAddress?: boolean
}
const UserAddress: React.FC<UserAddressProps> = ({ className, isFullAddress }) => {
  const { address } = useAccount()
  const { data: ensName } = useEnsName({
    address,
  })

  console.log({ address, ensName })

  const getDisplayAddress = () => {
    if (ensName) return ensName
    if (!address) return ''
    return isFullAddress ? address : `${address?.substring(0, 4)}...${address?.substring(address.length - 6)}`
  }

  return <p className={twMerge('text-base', className)}>{getDisplayAddress()}</p>
}
export default UserAddress
