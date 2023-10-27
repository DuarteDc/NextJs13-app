/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
             {
                 protocol: 'https',
                 hostname: 'api.api-ninjas.com',
                 port: '',
             }
        ]
    }
}

module.exports = nextConfig
