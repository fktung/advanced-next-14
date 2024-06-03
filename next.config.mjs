import withPWAInit from "@ducanh2912/next-pwa";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "magnercare-dev.s3.ap-southeast-1.amazonaws.com",
      },
    ],
  },
};

const withPWA = withPWAInit({
  dest: "public",
});

export default withPWA({
  ...nextConfig,
});
