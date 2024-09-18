import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export default function UseRaycastExtensionPage() {
  const t = useTranslations('UseRaycastExtension')

  return (
    <main className="w-full font-light py-10 min-h-screen  px-4 sm:px-6 lg:px-8 mb-20">
      <section className="max-w-2xl mx-auto flex flex-col space-y-8">
        <h1 className="text-2xl text-center font-extrabold">{t('title')}</h1>

        <h2 className="text-xl font-medium">{t('install-extension-title')}</h2>
        <p className="text-sm">
          {t('install-extension')}
          <Link
            className="text-blue-500 underline"
            href="https://www.raycast.com/raycast-extension/color-picker"
            target="_blank"
          >
            {t('extension-name')}
          </Link>
        </p>

        <h2 className="text-xl font-medium">{t('copy-color-value-title')}</h2>
        <p className="text-sm">{t('copy-color-value')}</p>
        <Image
          className="rounded-xl"
          src="/guide/guide-1.png"
          alt="Copy your color value"
          width={600}
          height={600}
        />

        <h2 className="text-xl font-medium">{t('paste-color-value-title')}</h2>
        <p className="text-sm">{t('paste-color-value-description')}</p>
        <Image
          className="rounded-xl"
          src="/guide/guide-2.png"
          alt="Paste the color value into the Just Color Picker Extension"
          width={600}
          height={600}
        />

        <h2 className="text-xl font-medium">{t('view-color-title')}</h2>
        <p className="text-sm">{t('paste-color-value-description2')}</p>
        <Image
          className="rounded-xl"
          src="/guide/guide-3.png"
          alt="Copy the color value"
          width={600}
          height={600}
        />
        <h2 className="text-xl font-medium">{t('use-it-to-your-heart-content')}</h2>
        <Image
          className="rounded-xl"
          src="/guide/guide-4.png"
          alt="Copy the color value"
          width={600}
          height={600}
        />
      </section>
    </main>
  )
}
