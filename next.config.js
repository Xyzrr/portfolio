const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["storage.googleapis.com"],
  },
  pageExtensions: ["js", "tsx", "mdx"],
};

module.exports = withMDX(nextConfig);
