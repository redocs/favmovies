/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              hostname: "*.tmdb.org",
            },
        ],
    }
};

export default nextConfig;
