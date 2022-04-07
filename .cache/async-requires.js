// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!C:\\Users\\rohan\\playground\\rohanvivek.github.io\\src\\pages\\404.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!C:\\Users\\rohan\\playground\\rohanvivek.github.io\\src\\pages\\index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!C:\\Users\\rohan\\playground\\rohanvivek.github.io\\.cache\\json\\layout-index.json"),
  "404.json": require("gatsby-module-loader?name=path---404!C:\\Users\\rohan\\playground\\rohanvivek.github.io\\.cache\\json\\404.json"),
  "index.json": require("gatsby-module-loader?name=path---index!C:\\Users\\rohan\\playground\\rohanvivek.github.io\\.cache\\json\\index.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!C:\\Users\\rohan\\playground\\rohanvivek.github.io\\.cache\\json\\404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!C:/Users/rohan/playground/rohanvivek.github.io/.cache/layouts/index.js")
}