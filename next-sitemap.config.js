/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://justcolorpicker.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  additionalPaths: async () => {
    const result = []

    // 定义所有语言
    // const languages = ['en', 'zh', 'ja', 'ko', 'zh-Hant', 'de', 'ru']
    const languages = ['en', 'zh']

    const paths = [
      '',  // 首页
      '/privacy-policy',  // 隐私政策
      '/usage-policy',
      '/use-raycast-extension'
    ]

    // 为每个路径生成多语言版本
    for (const lang of languages) {
      for (const path of paths) {
        result.push({
          loc: lang === 'en' ? `/${path}` : `/${lang}${path}`,
          changefreq: path === '' ? 'daily' : 'monthly', // 首页更新频率更高
          priority: path === '' ? 0.7 : 0.5, // 首页优先级更高
          lastmod: new Date().toISOString()
        })
      }
    }

    return result
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'] // 禁止爬虫访问 API 和内部路由
      }
    ]
  }
}
