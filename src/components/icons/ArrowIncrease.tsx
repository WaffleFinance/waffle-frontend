export default function ArrowIncrease({ color, isOpposite }: { color: 'black' | 'gray'; isOpposite?: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={isOpposite ? 'rotateX-180' : undefined}
    >
      <path
        d="M15.9785 6.42871H22.3459V12.7961"
        stroke={color === 'black' ? '#111111' : '#A5A5A5'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.3462 6.42871L13.3523 15.4226C13.2036 15.5684 13.0035 15.6501 12.7952 15.6501C12.5869 15.6501 12.3868 15.5684 12.2381 15.4226L8.57683 11.7614C8.42806 11.6155 8.22803 11.5338 8.01969 11.5338C7.81135 11.5338 7.61132 11.6155 7.46255 11.7614L1.65234 17.5716"
        stroke={color === 'black' ? '#111111' : '#A5A5A5'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}