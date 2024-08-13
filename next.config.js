const config = require("config");
const appConfig = config.get("appConfig")
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    appConfig
  }
}

module.exports = nextConfig
