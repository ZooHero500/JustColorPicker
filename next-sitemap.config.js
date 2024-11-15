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
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  }
}
