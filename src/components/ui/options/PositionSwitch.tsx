import Button from '@/components/shared/Button'
import { PositionType } from '@/utils/constants'
import { Dispatch, SetStateAction } from 'react'
import clsx from 'clsx'
import ArrowIncrease from '@/components/icons/ArrowIncrease'

type PositionSwitchProps = {
  positionType: PositionType
  setPositionType: Dispatch<SetStateAction<PositionType>>
}
const PositionSwitch: React.FC<PositionSwitchProps> = ({ positionType, setPositionType }) => {
  return (
    <div className="flex w-full items-center rounded-xl bg-gray-500 p-3">
      <Button
        label={
          <div className={'flex items-center justify-center gap-3'}>
            <ArrowIncrease color={positionType === 'long' ? 'black' : 'gray'} />
            Long
          </div>
        }
        onClick={() => setPositionType('long')}
        className={`w-full ${positionType === 'long' ? 'shadow-greenShadow bg-primary text-gray-900' : 'bg-gray-500 text-gray-300'}`}
      />
      <Button
        label={
          <div className={'flex items-center justify-center gap-3'}>
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
