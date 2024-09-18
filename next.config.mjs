import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true
  pwa: {
    dest: 'public'
    // disable: process.env.NODE_ENV === 'development',
  },
  experimental: {
    serverComponentsExternalPackages: ['sharp']
  }
}

export default withNextIntl(nextConfig)
