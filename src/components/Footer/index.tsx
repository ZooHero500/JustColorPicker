import React from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { Github } from 'lucide-react'
import siteConfig from '@/config/site'

const Footer: React.FC = () => {
  const tPrivacyPolicy = useTranslations('PrivacyPolicy')
  const tUsagePolicy = useTranslations('UsagePolicy')

  return (
    <footer className="flex flex-col items-center space-y-6 md:space-y-10 justify-center w-full">
      <p className="border-t border-t-slate-600/10 dark:border-t-slate-400/10 w-full"></p>

      <div className="flex flex-col items-center justify-center w-10 h-10 md:w-12 md:h-12 relative rounded-md bg-black dark:bg-white">
        <Image
          className="absolute top-0 left-0 opacity-100 dark:opacity-0"
          src="/logo-dark.svg"
          alt="logo"
          width={144}
          height={144}
        />
        <Image
          className="absolute top-0 right-0 opacity-0 dark:opacity-100"
          src="/logo.svg"
          alt="logo"
          width={144}
          height={144}
        />
      </div>

      <ul className="flex flex-wrap items-center justify-center space-x-2 md:space-x-4 text-xs md:text-sm font-light">
        <li className="hover:opacity-50">
          <Link href="/privacy-policy">{tPrivacyPolicy('title')}</Link>
        </li>
        <li className="hover:opacity-50">
          <Link href="/usage-policy">{tUsagePolicy('title')}</Link>
        </li>
      </ul>

      <div className="flex items-center justify-center space-x-2">
        <Button asChild variant="ghost" className="hover:opacity-50">
          <Link href={siteConfig.socialMedia.twitter} target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z"
              />
            </svg>
          </Link>
        </Button>
        <Button asChild variant="ghost" className="hover:opacity-50">
          <Link href={siteConfig.socialMedia.github} target="_blank">
            <Github size={20} strokeWidth={1.8} />
          </Link>
        </Button>
      </div>

      <div className="flex items-center justify-center font-extralight text-xs md:text-sm text-[#0A0A0A]/45 dark:text-gray-400 bg-[#f0efef] dark:bg-[#444444] w-full p-3 md:p-4">
        <p>© 2024 JustColorPicker. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
