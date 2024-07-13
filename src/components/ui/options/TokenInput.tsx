import { Token } from '@/utils/constants'
import getTokenIcon from '@/utils/getTokenIcon'
import { debounce } from 'lodash'
import Image from 'next/image'

type TokenInputProps = {
  amount: number
  setAmount: (quantity: number) => void
  token: Token
  overTextLeft?: string
  overTextRight?: string
}
const normalizeNumber = (input: string): number => {
  const normalizedNumber = parseFloat(input.replace(',', '.'))
  if (isNaN(normalizedNumber)) return 0.0

  return normalizedNumber
}

const TokenInput: React.FC<TokenInputProps> = ({ amount, setAmount, token, overTextLeft, overTextRight }) => {
  const debouncedOnChange = debounce((e) => setAmount(normalizeNumber(e.target.value)), 1000)

  return (
    <div className="rounded-xl bg-gray-500 p-3 px-8">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium capitalize text-gray-300">{overTextLeft}</p>
        <p className="text-sm font-medium capitalize text-gray-300">{overTextRight}</p>
      </div>
      <div className="flex items-center justify-between gap-10">
        <input
          value={amount}
          type="number"
          onChange={debouncedOnChange}
          className="w-full bg-transparent text-2xl font-medium text-white outline-0"
        />
        <div className="flex items-center gap-2">
          <Image src={getTokenIcon(token.id)} alt="token icon" width={24} height={24} />
          <p className="text-xl font-bold text-white">{token.label}</p>
        </div>
      </div>
    </div>
  )
}
export default TokenInput
