const path = require('path');
const webpack = require('webpack');
const AotPlugin = require('@ngtools/webpack').AotPlugin;

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    const clientBundleOutputDir = './wwwroot/dist';

    return [{
        stats: { modules: false },
        context: __dirname,
        resolve: { extensions: ['.js', '.ts'] },
        entry: { 'main': './ClientApp/boot.ts' },
        module: {
            rules: [{
                test: /\.ts$/,
                use: isDevBuild
                    ? ['awesome-typescript-loader?silent=true', 'angular2-template-loader']
                    : ['@ngtools/webpack']
            }, {
                test: /\.html$/,
                use: 'html-loader?minimize=false'
            }, {
                test: /\.css$/,
                use: ['to-string-loader', 'css-loader']
            }, {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: 'url-loader?limit=25000'
            }]
        },
        output: {
            path: path.join(__dirname, clientBundleOutputDir),
            filename: '[name].js',
            publicPath: '/dist/' // Webpack dev middleware, if enabled, handles requests for this URL prefix
        },
        plugins: [
            // Plugins that apply in both development and production builds
        ].concat(isDevBuild ? [
            // Plugins that apply in development builds only
            new webpack.SourceMapDevToolPlugin(),
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./wwwroot/dist/vendor-manifest.json')
            })
        ] : [
            // Plugins that apply in production builds only
            new webpack.optimize.UglifyJsPlugin(),
            new AotPlugin({
                tsConfigPath: './tsconfig.json',
                entryModule: path.join(__dirname, 'ClientApp/app/app.module#AppModule')
            })
        ])
    }];
};
