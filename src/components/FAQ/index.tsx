'use client'

import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { locales } from '@/i18n/routing'

import FAQ_CONFIG, { FAQItem } from '@/config/faq'
import { useTranslations } from 'next-intl'

interface FAQProps {
  locale: locales
}
const FAQ: React.FC<FAQProps> = ({ locale }) => {
  const [items, setItems] = useState<FAQItem[]>([])
  const t = useTranslations('FAQ')

  useEffect(() => {
    console.log(locale)
    setItems(FAQ_CONFIG[locale as locales] || [])
  }, [locale])

  return (
    <section className="w-96 mx-auto flex flex-col items-center justify-center space-y-4 mt-20 md:mt-[16rem] pb-20 md:pb-40 px-4 md:px-0">
      <h3 className="text-sm md:text-md font-light dark:text-gray-300">{t('title')}</h3>
      <h1 className="text-2xl md:text-3xl font-light w-full text-center dark:text-white">
        {t('subtitle')}
      </h1>
      <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-[12px]">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border bg-card shadow-xs rounded-xl px-4 md:px-6"
          >
            <AccordionTrigger className="font-light dark:text-white text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-[#0A0A0A]/70 dark:text-white/50 font-extralight">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

export default FAQ
