const ampPlugin = require('@ampproject/eleventy-plugin-amp');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/favicon-32x32.png');
  eleventyConfig.addPassthroughCopy('./src/robots.txt');
  eleventyConfig.addPlugin(ampPlugin);

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
