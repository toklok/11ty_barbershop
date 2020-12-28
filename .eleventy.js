const ampPlugin = require('@ampproject/eleventy-plugin-amp');

module.exports = function (eleventyConfig) {
  // eleventyConfig.addPassthroughCopy('./src/favicon-32x32.png');
  // eleventyConfig.addPassthroughCopy('./src/robots.txt');
  eleventyConfig.addPlugin(ampPlugin, {
    ampCache: false,
    ampRuntimeHost: 'http://localhost:8080',
    downloadAmpRuntime: false,
    imageOptimization: true,
    imageBasePath: `${__dirname}/src`
  });
  

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
  };
};
