import ArrowIncrease from '@/components/icons/ArrowIncrease'
import Button from '@/components/shared/Button'
import { PositionType } from '@/utils/constants'
import { Dispatch, SetStateAction } from 'react'

type PositionSwitchProps = {
  positionType: PositionType
  setPositionType: Dispatch<SetStateAction<PositionType>>
}
const PositionSwitch: React.FC<PositionSwitchProps> = ({ positionType, setPositionType }) => {
  return (
    <div className="flex w-full items-center rounded-2xl bg-gray-500 px-1 py-2">
      <Button
        label={
          <div className={'flex items-center justify-center gap-3 text-lg font-medium'}>
            <ArrowIncrease color={positionType === 'long' ? 'black' : 'gray'} />
            Long
          </div>
        }
        onClick={() => setPositionType('long')}
        className={`w-full ${positionType === 'long' ? 'shadow-greenShadow bg-primary text-gray-900' : 'bg-gray-500 text-gray-300'}`}
      />
      <Button
        label={
          <div className={'flex items-center justify-center gap-3 text-lg font-medium'}>
            <ArrowIncrease color={positionType === 'short' ? 'black' : 'gray'} isOpposite />
            Short
          </div>
        }
        onClick={() => setPositionType('short')}
        className={`w-full ${positionType === 'short' ? 'shadow-greenShadow bg-primary text-gray-900' : 'bg-gray-500 text-gray-300'}`}
      />
    </div>
  )
}
export default PositionSwitch
