/** @type {import('next').NextConfig} */
const nextConfig = {
     
     reactStrictMode: true,

    images: { unoptimized: true },
  output: "standalone",
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://electricsign.in/public/api/*',  // Your API server's URL
      },
    ]
  },
    
};

export default nextConfig;
