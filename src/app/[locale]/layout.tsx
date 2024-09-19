export const runtime = 'edge'

import type { Metadata, Viewport } from 'next'
// import '@/styles/globals.css'

import { ThemeProvider } from '@/components/common/ThemeProvider'
import { NextIntlClientProvider } from 'next-intl'

import Navigation from '@/components/Navigation'
import { Toaster } from '@/components/ui/toaster'
import Footer from '@/components/Footer'

import { getMessages } from 'next-intl/server'

import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'
import siteConfig from '@/config/site'

// 配置字体
const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' })

// 设置视口主题颜色
export const viewport: Viewport = { themeColor: siteConfig.themeColors }

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.meta.description,
  manifest: '/manifest.json'
}

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning className="scroll-smooth">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme={siteConfig.nextThemeColor} enableSystem>
          <NextIntlClientProvider messages={messages}>
            <Navigation />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
