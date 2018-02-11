const CompressionPlugin = require('compression-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.public.js');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
            // In case you imported plugins individually, you must also require them here:
            Util: "exports-loader?Util!bootstrap/js/dist/util",
            Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
        }),
        new CleanWebpackPlugin(['dist/public']),
        new HtmlWebpackPlugin({
            template: 'index.template.ejs',
            inject: 'body',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // Specify the common bundle's name.
        }),
        new UglifyJSPlugin({
            output: {
                comments: false
            },
            mangle: true,
            sourcemap: false,
            debug: true,
            minimize: true,
            compress: {
                // set what to include and what to exclude
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true
            }
        }),
        // new webpack.optimize.DedupePlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        // new webpack.optimize.OccurrenceOrderPlugin('app'),

        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new CompressionPlugin(),
    ],
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].bundle.js',
        path: path.resolve(__dirname, 'dist/public'),
        publicPath: '/public/'
    },
});