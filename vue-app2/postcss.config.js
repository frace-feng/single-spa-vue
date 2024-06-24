const prefixer = require('postcss-prefix-selector');

module.exports = {
  plugins: {
    // autoprefixer: {},
    "postcss-prefix-selector": {
      prefix: '.my-prefix',
    }
  }
}
