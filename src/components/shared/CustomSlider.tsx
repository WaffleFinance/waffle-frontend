import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

type LeverageSliderProps = {
  option: number | number[]
  setOption: (leverage: number | number[]) => void
  marks: MarkMap
  min: number
  max: number
  step: number | null
}

type MarkMap = {
  [key: number]: {
    label: string
    style: {
      color: string
    }
  }
}

const CustomSlider: React.FC<LeverageSliderProps> = ({ option, setOption, marks, min, max, step }) => {
  return (
    <Slider
      min={min}
      max={max}
      step={step}
      marks={marks}
      onChange={(value) => setOption(value)}
      defaultValue={option}
      trackStyle={{
        background: '#05DF85',
      }}
      handleStyle={{
        background: '#FFF',
        border: 'solid 1px',
        borderColor: '#4c4c4c1a',
      }}
      railStyle={{
        background: '#32a6f933',
      }}
      dotStyle={{
        visibility: 'hidden',
      }}
    />
  )
}
export default CustomSlider
