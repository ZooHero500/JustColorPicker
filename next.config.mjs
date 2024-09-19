import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true
  experimental: {
    serverComponentsExternalPackages: ['sharp']
  }
}

export default withNextIntl(nextConfig)
