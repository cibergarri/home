/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // The dev server can be opened from other devices at home (a tablet, a phone) by the computer's
  // LAN address, e.g. http://192.168.0.17:3000. Only for `next dev`.
  allowedDevOrigins: ['192.168.*.*'],
  compiler: {
    styledComponents: true,
  },
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
