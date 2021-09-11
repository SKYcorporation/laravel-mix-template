/*
    Документация и плагины https://laravel-mix.com/
*/

const mix = require("laravel-mix");
const path = require("path");
require("laravel-mix-clean");
require("laravel-mix-polyfill");
require("laravel-mix-purgecss");
require("laravel-mix-tailwind");

mix.pug = require("laravel-mix-pug-recursive");
const LiveReloadPlugin = require("webpack-livereload-plugin");

mix.setPublicPath("dist");
mix.js("src/scripts/app.js", "assets/app.js");
mix.sass("src/styles/app.sass", "assets/app.css");
mix.pug("src/pug/**/*.pug", "dist", { excludePath: "src/pug" });
mix.clean();
// Создание vendor.js с модулями
mix.extract(["jquery"]);

if (mix.inProduction()) {
  mix.polyfill({
    enabled: true,
    useBuiltIns: "usage",
    targets: "firefox 50, ie 11",
  });

  mix.purgeCss();
  mix.version();
}
