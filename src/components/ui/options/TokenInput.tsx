import Select from '@/components/shared/Select'
import { Token } from '@/utils/constants'
import { debounce } from 'lodash'

type TokenInputProps = {
  amount: number
  setAmount: (quantity: number) => void
  token: Token
  setToken: (token: Token) => void
  tokenList: Token[]
  overTextLeft?: string
  overTextRight?: string
}
const normalizeNumber = (input: string): number => {
  const normalizedNumber = parseFloat(input.replace(',', '.'))
  if (isNaN(normalizedNumber)) return 0.0

  return normalizedNumber
}

const TokenInput: React.FC<TokenInputProps> = ({
  amount,
  setAmount,
  token,
  setToken,
  tokenList,
  overTextLeft,
  overTextRight,
}) => {
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
          className="bg-transparent text-white w-full text-2xl font-medium outline-0"
        />
        <Select items={tokenList} selected={token} setSelected={setToken} />
      </div>
    </div>
  )
}
export default TokenInput
