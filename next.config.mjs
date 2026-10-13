/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  compiler: {
    styledComponents: true,
  },
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
