// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  output: "export",
  webpack(config, { dev, ...other }) {
    if (!dev) {
      config.resolve.alias["@formatjs/icu-messageformat-parser"] =
        "@formatjs/icu-messageformat-parser/no-parser";
    }
    return config;
  },
};
