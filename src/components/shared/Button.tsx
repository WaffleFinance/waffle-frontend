import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = {
  label: string | ReactNode
  onClick?: () => void
  className?: string
}

export default function Button({ label, onClick, className }: ButtonProps) {
  return (
    <button className={twMerge('cursor-pointer rounded-2xl bg-primary p-3', className)} onClick={onClick}>
      {label}
    </button>
  )
}
