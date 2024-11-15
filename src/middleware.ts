import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  matcher: [
    // 匹配根路径
    '/',

    // 匹配语言路径
    '/(en|zh)/:path*',

    // 匹配其他路径，但排除静态资源和特定路径
    '/((?!api|studio|_next|_vercel|.*\\..*).*)'
  ]
}
