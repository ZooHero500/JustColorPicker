import React from 'react'
import { useTranslations } from 'next-intl'

export default function UsagePolicyPage() {
  const t = useTranslations('UsagePolicy')

  return (
    <main className="flex flex-col items-center  min-h-screen py-10 px-4 sm:px-6 lg:px-8 mb-20">
      <div className="max-w-xl w-full space-y-8">
        <h1 className="text-3xl font-extrabold text-center">{t('title')}</h1>
        <div className="space-y-4 text-sm">
          <p>{t('introduction')}</p>
          <h2 className="text-xl font-medium mt-6">{t('acceptance.title')}</h2>
          <p>{t('acceptance.content')}</p>
          <h2 className="text-xl font-medium mt-6">{t('usage.title')}</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t('usage.personal')}</li>
            <li>{t('usage.commercial')}</li>
            <li>{t('usage.modification')}</li>
          </ul>
          <h2 className="text-xl font-medium mt-6">{t('restrictions.title')}</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t('restrictions.redistribution')}</li>
            <li>{t('restrictions.harmful')}</li>
            <li>{t('restrictions.illegal')}</li>
          </ul>
          <h2 className="text-xl font-medium mt-6">{t('disclaimer.title')}</h2>
          <p>{t('disclaimer.content')}</p>
          <h2 className="text-xl font-medium mt-6">{t('changes.title')}</h2>
          <p>{t('changes.content')}</p>
          <h2 className="text-xl font-medium mt-6">{t('contact.title')}</h2>
          <p>{t('contact.content')}</p>
        </div>
      </div>
    </main>
  )
}
