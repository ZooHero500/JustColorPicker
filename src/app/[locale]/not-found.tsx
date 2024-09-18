import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function LocaleNotFound() {
  const t = useTranslations('NotFound')

  return (
    <div className="min-h-screen flex flex-col items-center space-y-4 mb-20">
      <h1 className="text-4xl font-extrabold mt-60">404</h1>
      <p className="text-sm font-light">{t('not-found')}</p>
      <Button asChild>
        <Link href="/">{t('back-to-home')}</Link>
      </Button>
    </div>
  )
}
