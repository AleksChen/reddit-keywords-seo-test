import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  siteUrl: 'https://reddit-keywords-seo-test.vercel.app',
  generateRobotsTxt: true, // 生成 robots.txt
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
};

export default nextConfig;
