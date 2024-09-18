import siteConfig from '@/config/site'

import SingleColorPicker from '@/components/ColorPicker/SingleColorPicker'
import FAQ from '@/components/FAQ'

import { Link, locales } from '@/i18n/routing'
import { Info } from 'lucide-react'
import { useTranslations } from 'next-intl'

export const metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter
}

interface HomePageProps {
  params: {
    locale: locales
  }
}

export default function HomePage({ params: { locale } }: HomePageProps) {
  const t = useTranslations('Home')

  return (
    <main className="flex flex-col justify-center items-center min-h-screen mt-20">
      <SingleColorPicker />
      <Link
        className="text-xs mt-6 flex items-center text-center font-extralight transition-all opacity-80 hover:opacity-60 hover:underline"
        href="/use-raycast-extension"
      >
        <Info className="w-4 h-4 mr-2" strokeWidth={1} />
        {t('best-practices')}
      </Link>
      <FAQ locale={locale} />
    </main>
  )
}
