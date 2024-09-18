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
    return {
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString()
    }
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
