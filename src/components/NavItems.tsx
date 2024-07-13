'use client'
import Link from 'next/link'
import HomeIcon from './icons/HomeIcon'
import ArrowIncrease from './icons/ArrowIncrease'
import clsx from 'clsx'
import CoinsIcon from './icons/CoinsIcon'
import { usePathname } from 'next/navigation'

export default function NavItems() {
  const navItems = [
    {
      href: '/',
      label: 'Home',
      icon: <HomeIcon />,
    },
    {
      href: '/trade',
      label: 'Trade',
      icon: <ArrowIncrease />,
    },
    {
      href: '/earn',
      label: 'Earn',
      icon: <CoinsIcon />,
    },
  ]
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-4">
      {navItems.map((item) => (
        <Link
          href={item.href}
          key={item.href}
          className={clsx('flex items-center gap-2 text-sm text-gray-300 lg:text-base', {
            'text-primary': pathname === item.href,
          })}
        >
          {item.icon}
          {item.label}
        </Link>
      ))}
    </div>
  )
}
