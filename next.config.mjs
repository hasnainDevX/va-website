// next.config.mjs
export const nextConfig = {
 eslint: {
    // ✅ This disables ESLint blocking the build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
