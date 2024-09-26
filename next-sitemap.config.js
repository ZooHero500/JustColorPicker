module.exports = {
  siteUrl: 'https://justcolorpicker.com',
  generateRobotsTxt: true,
  exclude: ['/api*'],
  alternateRefs: [
    {
      href: 'https://justcolorpicker.com',
      hreflang: 'en'
    },
    {
      href: 'https://justcolorpicker.com/zh',
      hreflang: 'zh'
    }
  ],
  transform: async (config, path) => {
    if (path.includes('/[...rest]')) {
      return null
    }

    // 为静态路由设置更高的优先级
    const staticRoutes = ['/', '/use-raycast-extension', '/privacy-policy', '/usage-policy']
    const priority = staticRoutes.includes(path) ? 0.8 : 0.7

    // 为每个语言版本生成 URL
    const locales = ['en', 'zh']
    const urls = locales.map(locale => {
      const localePath = locale === 'en' ? path : `/${locale}${path}`
      return {
        loc: localePath,
        changefreq: staticRoutes.includes(path) ? 'weekly' : 'monthly',
        priority: priority,
        lastmod: new Date().toISOString(),
        alternateRefs: locales.map(l => ({
          href: `${config.siteUrl}${l === 'en' ? path : `/${l}${path}`}`,
          hreflang: l
        }))
      }
    })

    return urls
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  }
}
