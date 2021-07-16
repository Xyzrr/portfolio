const withMDX = require("@next/mdx")();

module.exports = withMDX({
  images: {
    domains: ["storage.googleapis.com"],
  },
  pageExtensions: ["js", "tsx", "mdx"],
});
