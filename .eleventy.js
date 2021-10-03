const { DateTime } = require('luxon');
const pluginSEO = require('eleventy-plugin-seo');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('CNAME');
  eleventyConfig.addPassthroughCopy('.nojekyll');
  eleventyConfig.setTemplateFormats([
    // Templates:
    'html',
    'njk',
    'md',
    // Static Assets:
    'css',
    'jpeg',
    'jpg',
    'png',
    'svg',
    'woff',
    'woff2',
  ]);
  eleventyConfig.addPassthroughCopy('public');

  /*
  From: https://github.com/artstorm/eleventy-plugin-seo

  */
  const seo = require('./src/seo.json');
  eleventyConfig.addPlugin(pluginSEO, seo);

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
  });

  eleventyConfig.setBrowserSyncConfig({ ghostMode: false });

  /*
  From: https://github.com/11ty/eleventy/issues/529#issuecomment-568257426

  Adds {{ prevPost.url }} {{ prevPost.data.title }}, etc, to our njks templates
  */
  eleventyConfig.addCollection('pagesAscending', (collection) =>
    collection.getFilteredByTag('pages').sort((a, b) => {
      if (a.data.title < b.data.title) return -1;
      else if (a.data.title > b.data.title) return 1;
      else return 0;
    }),
  );

  eleventyConfig.addCollection('posts', function (collection) {
    const coll = collection.getFilteredByTag('posts');

    for (let i = 0; i < coll.length; i++) {
      const prevPost = coll[i - 1];
      const nextPost = coll[i + 1];

      coll[i].data['prevPost'] = prevPost;
      coll[i].data['nextPost'] = nextPost;
    }

    return coll;
  });

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: 'build',
    },
  };
};
