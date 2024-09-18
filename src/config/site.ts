const siteConfig = {
  title: 'JustColorPicker',
  logo: '/logo.svg',
  logoDark: '/logo-dark.svg',
  url: 'https://justcolorpicker.com',

  author: 'ZooHero',
  socialMedia: {
    twitter: 'https://x.com/zooheroes',
    github: 'https://github.com/ZooHero500/JustColorPicker'
  },

  meta: {
    title: 'JustColorPicker',
    description: "It's just a color picker, no other complicated, messy stuff"
  },

  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],

  // next-theme option: system | dark | light
  nextThemeColor: 'light'
}

const openGraph = {
  type: 'website',
  locale: 'en_US',
  url: siteConfig.url,
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  siteName: siteConfig.meta.title,
  images: [`${siteConfig.url}/og.png`]
}

const twitter = {
  card: 'summary_large_image',
  site: siteConfig.url,
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  images: [`${siteConfig.url}/og.png`],
  creator: siteConfig.author
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...siteConfig,
  openGraph,
  twitter
}
