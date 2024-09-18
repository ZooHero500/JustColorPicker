import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',

    // 匹配除了特定情况外的所有路径
    '/(de|en)/:path*',

    // 不匹配 api、_next、_vercel 路径，以及包含文件扩展名的路径
    '/((?!api|studio|_next|_vercel|.*\\..*).*)'
  ]
}
