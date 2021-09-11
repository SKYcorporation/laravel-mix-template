/*
    Документация и плагины https://laravel-mix.com/
*/

const mix = require("laravel-mix");
const path = require("path");
mix.pug = require("laravel-mix-pug-recursive");
require("laravel-mix-clean");
require("laravel-mix-polyfill");
require("laravel-mix-purgecss");
require("laravel-mix-tailwind");

mix.setPublicPath("dist");
mix.js("src/scripts/app.js", "assets");
mix.sass("src/styles/app.sass", "assets");
mix.pug("src/pug/template/*.pug", "dist", { excludePath: "src/pug/template" });
mix.clean();
// Создание vendor.js с модулями
mix.extract(["jquery"]);

mix.browserSync({
  watch: true,
  files: "dist",
  proxy: "localhost:8080",
});

if (mix.inProduction()) {
  mix.polyfill({
    enabled: true,
    useBuiltIns: "usage",
    targets: "firefox 50, ie 11",
  });

  mix.purgeCss();
  mix.version();
}
