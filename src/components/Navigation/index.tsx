'use client'

import React from 'react'
import Image from 'next/image'
import siteConfig from '@/config/site'

import { Link } from '@/i18n/routing'

import dynamic from 'next/dynamic'

import { SwitchLanguage } from '@/components/common/SwitchLanguage'
import { cn } from '@/lib/utils'
const ThemedButton = dynamic(() => import('@/components/common/ThemedButton'), { ssr: false })

const Navigation = () => {
  return (
    <header className="sticky top-0 left-0 w-full z-10 flex justify-center">
      <nav
        className={cn(
          'bg-card flex flex-wrap items-center justify-between w-full box-border',
          'p-2 border-b',
          'md:max-w-2xl md:mt-6 md:border md:shadow-xs md:p-1 md:rounded-xl',
          'transition-all duration-300'
        )}
      >
        <Link href="/" className="flex items-center">
          <div className="relative w-12 h-12">
            <Image
              className="opacity-100 dark:opacity-0 transition-opacity duration-300 absolute top-0 left-0"
              src={siteConfig.logo}
              alt={siteConfig.title}
              width={48}
              height={48}
            />
            <Image
              className="opacity-0 dark:opacity-100 transition-opacity duration-300 absolute top-0 left-0"
              src={siteConfig.logoDark}
              alt={siteConfig.title}
              width={48}
              height={48}
            />
          </div>
          <span className="text-sm text-gray-950 font-extralight dark:text-gray-50">
            {siteConfig.title}
          </span>
        </Link>

        <div className="flex items-center space-x-2">
          <ThemedButton />
          <SwitchLanguage />
        </div>
      </nav>
    </header>
  )
}

export default Navigation
