const path = require('path');
const webpack = require('webpack');

const vendorBundleContents = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/forms',
    '@angular/http',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    'core-js/shim',
    'zone.js',
];

module.exports = (env) => {
    return [{
        stats: { modules: false },
        resolve: { extensions: ['.js'] },
        entry: { vendor: vendorBundleContents },
        output: {
            path: path.join(__dirname, 'wwwroot', 'dist'),
            filename: '[name].js',
            library: '[name]_[hash]',
            publicPath: '/dist/'
        },
        plugins: [
            new webpack.DllPlugin({
                path: path.join(__dirname, 'wwwroot/dist/[name]-manifest.json'),
                name: '[name]_[hash]'
            }),
            new webpack.ContextReplacementPlugin(/\@angular\b.*\b(bundles|linker)/, path.join(__dirname, './ClientApp')), // Workaround for https://github.com/angular/angular/issues/11580
            new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, path.resolve(__dirname, './ClientApp')) // Similar to above, for similar reasons
        ]
    }];
}
