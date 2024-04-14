/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
        // dev: false,
    // distDir: 'dist',
    output: 'export',
    images: {unoptimized: true},
    // poweredByHeader: false,
      // Use the CDN in production and localhost for development - https://www.jsdelivr.com/github
    assetPrefix: isProd ? 'https://cdn.jsdelivr.net/gh/suriyaprakhash/mockmanga@gh-pages' : undefined,
}

export default nextConfig;
