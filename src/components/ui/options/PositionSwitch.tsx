'use client'
import ArrowIncrease from '@/components/icons/ArrowIncrease'
import Button from '@/components/shared/Button'
import { usePurchaseOptionActions, usePurchaseOptionPositionType } from '@/stores/option.store'

const PositionSwitch: React.FC = () => {
  const positionType = usePurchaseOptionPositionType()
  const { changePositionType } = usePurchaseOptionActions()

  return (
    <div className="flex w-full items-center rounded-2xl bg-gray-500 px-1 py-2">
      <Button
        label={
          <div className={'flex items-center justify-center gap-3 text-lg font-medium'}>
            <ArrowIncrease color={positionType === 'long' ? 'black' : 'gray'} />
            Long
          </div>
        }
        onClick={() => changePositionType('long')}
        className={`w-full ${positionType === 'long' ? 'shadow-greenShadow bg-primary text-gray-900' : 'bg-gray-500 text-gray-300'}`}
      />
      <Button
        label={
          <div className={'flex items-center justify-center gap-3 text-lg font-medium'}>
            <ArrowIncrease color={positionType === 'short' ? 'black' : 'gray'} isOpposite />
            Short
          </div>
        }
        onClick={() => changePositionType('short')}
        className={`w-full ${positionType === 'short' ? 'shadow-greenShadow bg-primary text-gray-900' : 'bg-gray-500 text-gray-300'}`}
      />
    </div>
  )
}
export default PositionSwitch
