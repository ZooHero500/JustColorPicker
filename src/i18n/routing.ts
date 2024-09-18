import { defineRouting } from 'next-intl/routing'
import { createSharedPathnamesNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'zh'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Prefix locale to path when needed
  localePrefix: 'as-needed'
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation(routing)

export type locales = 'en' | 'zh'

export const localeByName = [
  {
    name: 'English',
    value: 'en'
  },
  {
    name: '中文简体',
    value: 'zh'
  }
]
