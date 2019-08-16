const uglify = require("rollup-plugin-uglify").uglify;
const babel = require("rollup-plugin-babel");

module.exports = {
  input: "src/index.js",
  output: {
    file: "bundle.js",
    format: "cjs",
    exports: "auto",
    compact: true
  },
  plugins: [babel(), uglify()]
};
