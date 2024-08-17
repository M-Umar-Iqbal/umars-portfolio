const { withContentlayer } = require("next-contentlayer");
const config = require("config");
const appConfig = config.get("appConfig");
const nextConfig = {
  swcMinify: true,
  strictMode: true,
  publicRuntimeConfig: {
    appConfig
  }
}
module.exports = withContentlayer(nextConfig);