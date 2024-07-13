type ArrowProps = {
  color: 'white' | 'gray'
  rotate?: boolean
}

export default function Arrow({ color, rotate }: ArrowProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${rotate && 'rotate-180'} transition-transform duration-150`}
    >
      <path
        d="M6 10L12 16L18 10"
        stroke={color === 'white' ? '#FFF' : '#A5A5A5'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
