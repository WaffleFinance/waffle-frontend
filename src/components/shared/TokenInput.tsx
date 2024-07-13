import { Token } from '@/utils/constants'
import getTokenIcon from '@/utils/getTokenIcon'
import Image from 'next/image'

type TokenInputProps = {
  amount: number
  setAmount: (quantity: number) => void
  token: Token
  overTextLeft?: string
  overTextRight?: string
}

const TokenInput: React.FC<TokenInputProps> = ({ amount, setAmount, token, overTextLeft, overTextRight }) => {
  return (
    <div className="rounded-xl bg-gray-500 p-3 px-2 md:px-8">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium capitalize text-gray-300 md:text-sm">{overTextLeft}</p>
        <p className="text-xs font-medium capitalize text-gray-300 md:text-sm">{overTextRight}</p>
      </div>
      <div className="flex max-w-full items-center justify-between gap-2 md:gap-10">
        <input
          value={amount}
          type="number"
          onChange={(e) => setAmount(+e.target.value)}
          className="w-full bg-transparent text-lg font-medium text-white outline-0 md:text-2xl"
        />
        <div className="flex flex-shrink-0 items-center gap-2">
          <Image src={getTokenIcon(token.id)} alt="token icon" width={24} height={24} />
          <p className="text-md font-bold text-white md:text-xl">{token.label}</p>
        </div>
      </div>
    </div>
  )
}
export default TokenInput
