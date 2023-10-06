/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
             {
                 protocol: 'https',
                 hostname: 'nextui.org',
                 port: '',
                 pathname: '/images/**',
             }
        ]
    }
}

module.exports = nextConfig
