/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'images.unsplash.com', 'via.placeholder.com'],
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
}

module.exports = nextConfig