const ampPlugin = require('@ampproject/eleventy-plugin-amp');
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/img/barber-pole.png");

  eleventyConfig.addPlugin(sitemap);

  eleventyConfig.addPlugin(ampPlugin, {
    ampCache: false,
    downloadAmpRuntime: true,
    ampRuntimeHost:
      process.env.ENV === 'prod' ? 'https://stylebarbershop.info' : 'http://localhost:8080',
    experimentEsm: true,
    experimentImg: true,
    validation: false,
    imageOptimization: {
      formats: ["avif", "webp", "jpeg"]
    },
    imageBasePath: `${__dirname}/src`
  });

  return {
    dir: {
      input: 'src'
    },
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    templateEngineOverride: 'njk'
  };
};
