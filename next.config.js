/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

const config = {
  experimental: { forceSwcTransforms: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**/**'
      }
    ]
  }
}

let finalConfig = config

if (isProd) {
  finalConfig = withPWA({
    ...config,
    pwa: {
      dest: 'public'
    }
  })
}

module.exports = finalConfig
