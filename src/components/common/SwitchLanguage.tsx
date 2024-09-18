'use client'

import { useTransition } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { locales, localeByName, useRouter, usePathname } from '@/i18n/routing'

import { Languages } from 'lucide-react'

export function SwitchLanguage() {
  const router = useRouter()
  const pathname = usePathname()
  // const currentLocale = useLocale()

  const [isPending, startTransition] = useTransition()

  const handleSwitchLanguage = (value: locales) => {
    startTransition(() => {
      router.replace(pathname, { locale: value })
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" disabled={isPending}>
          <Languages size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-20">
        {localeByName.map(item => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => handleSwitchLanguage(item.value as locales)}
            className="cursor-pointer hover:bg-gray-100"
          >
            {item.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
