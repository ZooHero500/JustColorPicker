import React from 'react'
import { useTranslations } from 'next-intl'

export default function PrivacyPolicyPage() {
  const t = useTranslations('PrivacyPolicy')

  return (
    <main className="flex flex-col items-center min-h-screen py-10 px-4 sm:px-6 lg:px-8 mb-20">
      <div className="max-w-xl w-full space-y-8">
        <h1 className="text-3xl font-extrabold text-center">{t('title')}</h1>
        <div className="space-y-4 text-sm">
          <p>{t('introduction')}</p>
          <h2 className="text-xl font-medium mt-6">{t('dataCollection.title')}</h2>
          <p>{t('dataCollection.content')}</p>
          <h2 className="text-xl font-medium mt-6">{t('cookies.title')}</h2>
          <p>{t('cookies.content')}</p>
          <h2 className="text-xl font-medium mt-6">{t('changes.title')}</h2>
          <p>{t('changes.content')}</p>
          <h2 className="text-xl font-medium mt-6">{t('contact.title')}</h2>
          <p>{t('contact.content')}</p>
        </div>
      </div>
    </main>
  )
}
