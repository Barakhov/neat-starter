const yaml = require('js-yaml')
const {DateTime} = require('luxon')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const htmlmin = require('html-minifier')

module.exports = function (eleventyConfig) {
  // Disable automatic use of your .gitignore
  eleventyConfig.setUseGitIgnore(false)

  // Merge data instead of overriding
  eleventyConfig.setDataDeepMerge(true)

  // human readable date
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('dd LLL yyyy')
  })

  // Syntax Highlighting for Code blocks
  eleventyConfig.addPlugin(syntaxHighlight)

  // To Support .yaml Extension in _data
  // You may remove this if you can use JSON
  eleventyConfig.addDataExtension('yaml', (contents) => yaml.load(contents))

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    './src/admin/config.yml': './admin/config.yml',
    './node_modules/alpinejs/dist/cdn.min.js': './static/js/alpine.js',
    './node_modules/@studio-freight/lenis/bundled/lenis.min.js':
      './static/js/lenis.js',
    './node_modules/gsap/dist/gsap.min.js': './static/js/gsap.js',
    './node_modules/prismjs/themes/prism-okaidia.css':
      './static/css/prism-okaidia.css',
    './src/static/js/partials/headings.js': './static/js/partials/headings.js',
    './src/static/js/theme.js': './static/js/theme.js',
    './src/static/js/main.js': './static/js/main.js'
  })

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy('./src/static/img')

  // Copy favicon to route of /_site
  eleventyConfig.addPassthroughCopy('./src/favicon.ico')

  // Minify HTML
  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
      return minified
    }

    return content
  })

  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    dir: {
      input: 'src'
    },
    htmlTemplateEngine: 'njk'
  }
}
