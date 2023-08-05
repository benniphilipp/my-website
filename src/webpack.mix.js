
let mix = require('laravel-mix');
mix.options({
  autoprefixer: true
});


mix

    .js('assets/js/main.js', 'static/js/main.js')
    .sass('assets/scss/main.scss', 'static/styles/style.css').sourceMaps();


    

// mix.webpackConfig({devtool: 'inline-source-map'})
mix.webpackConfig({stats: {children: true},}); 
mix.options({processCssUrls: false});