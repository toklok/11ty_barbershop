const ampPlugin = require('@ampproject/eleventy-plugin-amp');
const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const i18n = require('eleventy-plugin-i18n');

module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(i18n, {
    translations: {
      description: {
        'en-US': 'Dave has been cutting hair for a long time since he was young kid and professionally since 2001.',
        'en-ES': 'Dave se ha estado cortando el pelo durante mucho tiempo desde que era un niño y profesionalmente desde 2001.'
      },
      business_hours: {
        'en-US': 'Business Hours',
        'en-ES': 'Horas de trabajo'
      }
    },
    fallbackLocales: {
      '*': 'en-US'
    }
  });

  const hostnames = {
    en: "https://stylebarbershop.info",
    es: "https://stylebarbershop.info",
  };

  eleventyConfig.addPlugin(sitemap);

  eleventyConfig.addCollection("sitemap", (collectionApi) =>
    collectionApi.getAll().map((item, index, all) => ({
      url: hostnames[item.data.lang] + item.url,
      date: item.date,

      data: {
        ...item.data,

        sitemap: {
          ...item.data.sitemap,

          links: all

            // Find all the translations of the current item.
            // This assumes that all translated items that belong together
            // have the same `translationKey` value in the front matter.
            .filter(
              (other) => other.data.translationKey === item.data.translationKey
            )

            // Map each translation into an alternate link. See https://github.com/ekalinin/sitemap.js/blob/master/api.md#ILinkItem
            // Here we assume each item has a `lang` value in the front
            // matter. See https://support.google.com/webmasters/answer/189077#language-codes
            .map((translation) => ({
              url: hostnames[translation.data.lang] + translation.url,
              lang: translation.data.lang,
            })),
        },
      },
    }))
  );

  eleventyConfig.addPlugin(ampPlugin, {
    ampCache: false,
    downloadAmpRuntime: true,
    ampRuntimeHost:
      process.env.ENV === 'prod' ? 'https://stylebarbershop.info' : 'http://localhost:8080',
    experimentEsm: true,
    experimentImg: true,
    validation: false,
    imageOptimization: {
      formats: ["webp", "jpeg"]
    },
    imageBasePath: `${__dirname}/src`
  });

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware('*', (req, res) => {
          if (req.url === '/') {
            res.writeHead(302, {
              location: '/en-US/'
            });
            res.end();
          }
        });
      }
    }
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
