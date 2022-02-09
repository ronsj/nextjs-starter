/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    /**
     *  Only run ESLint on the 'src' directory during production builds (next build)
     *  By default, Next.js will run ESLint for all files in the pages/, components/, and lib/ directories.
     *  https://nextjs.org/docs/basic-features/eslint#linting-custom-directories-and-files
     *
     */
    dirs: ['src'],
  },
}

module.exports = nextConfig
