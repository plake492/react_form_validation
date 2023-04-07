const fs = require('fs')
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const postcssNested = require('postcss-nested')
const postcssCombineMediaQuery = require('postcss-combine-media-query')
const postcssCombineDuplicatedSelectors = require('postcss-combine-duplicated-selectors')
const postcssSortMediaQueries = require('postcss-sort-media-queries')

const pathToCss = './dist/assets/css/index.css'

fs.readFile(pathToCss, (err, css) => {
  if (err) {
    throw new Error(err)
  }
  postcss([
    autoprefixer,
    postcssNested,
    postcssCombineMediaQuery,
    postcssCombineDuplicatedSelectors,
    postcssSortMediaQueries({ sort: 'mobile-first' }),
  ])
    .process(css, { from: pathToCss, to: pathToCss })
    .then((result) => {
      fs.writeFile(pathToCss, result.css, () => true)
      if (result.map) {
        fs.writeFile(`${pathToCss}.map`, result.map.toString(), () => true)
      }
    })
})
