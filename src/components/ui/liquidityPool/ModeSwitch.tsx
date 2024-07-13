'use client'
import Button from '@/components/shared/Button'
import { useLiquidityPoolActions, useLiquidityPoolMode } from '@/stores/liquiditypool.store'

const ModeSwitch: React.FC = () => {
  const mode = useLiquidityPoolMode()
  const { changeMode } = useLiquidityPoolActions()

  return (
    <div className="flex w-full items-center rounded-2xl bg-gray-500 px-1 py-2">
      <Button
        label={'Deposit'}
        onClick={() => changeMode('deposit')}
        className={`w-full ${mode === 'deposit' ? 'bg-primary text-gray-900 shadow-greenShadow' : 'bg-gray-500 text-gray-300'}`}
      />
      <Button
        label={'Withdraw'}
        onClick={() => changeMode('withdraw')}
        className={`w-full ${mode === 'withdraw' ? 'bg-primary text-gray-900 shadow-greenShadow' : 'bg-gray-500 text-gray-300'}`}
      />
    </div>
  )
}
export default ModeSwitch
