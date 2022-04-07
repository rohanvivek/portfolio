// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("C:/Users/rohan/playground/rohanvivek.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("C:\\Users\\rohan\\playground\\rohanvivek.github.io\\src\\pages\\404.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\rohan\\playground\\rohanvivek.github.io\\src\\pages\\index.js"))
}

exports.json = {
  "layout-index.json": require("C:\\Users\\rohan\\playground\\rohanvivek.github.io\\.cache\\json\\layout-index.json"),
  "404.json": require("C:\\Users\\rohan\\playground\\rohanvivek.github.io\\.cache\\json\\404.json"),
  "index.json": require("C:\\Users\\rohan\\playground\\rohanvivek.github.io\\.cache\\json\\index.json"),
  "404-html.json": require("C:\\Users\\rohan\\playground\\rohanvivek.github.io\\.cache\\json\\404-html.json")
}