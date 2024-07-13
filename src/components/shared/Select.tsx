'use client'

import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { Dispatch, Fragment, SetStateAction } from 'react'
import { twMerge } from 'tailwind-merge'
import Arrow from '../icons/Arrow'

type SelectType = {
  id: number | string
  label: string
}

type SelectProps<T extends SelectType> = {
  items: T[]
  className?: string
  selected: T
  setSelected: Dispatch<SetStateAction<T>> | ((newVal: T) => void)
}

export default function Select<T extends SelectType>({ items, selected, setSelected, className }: SelectProps<T>) {
  return (
    <Listbox value={selected} onChange={(e) => e && setSelected(e)} disabled={items.length <= 1}>
      {({ open }) => (
        <div className="relative">
          <ListboxButton className={twMerge('flex items-center gap-2 disabled:opacity-80', className)}>
            <span className="block truncate text-lg font-medium text-white md:text-xl">{selected?.label}</span>
            <Arrow color="white" rotate={open} />
          </ListboxButton>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <ListboxOptions className="teal-scrollbar absolute top-10 z-50 max-h-60 w-full overflow-auto rounded-xl bg-gray-500 bg-opacity-75 py-1 shadow-2xl focus:outline-none">
              {items
                .filter((x) => x.id !== selected?.id)
                .map((item) => (
                  <ListboxOption
                    key={item.id}
                    className={`group relative cursor-pointer select-none py-2 transition-opacity duration-150 hover:opacity-80`}
                    value={item}
                  >
                    <span className={`block truncate ps-4 text-start text-lg uppercase text-white md:text-xl`}>
                      {item.label}
                    </span>
                  </ListboxOption>
                ))}
            </ListboxOptions>
          </Transition>
        </div>
      )}
    </Listbox>
  )
}
