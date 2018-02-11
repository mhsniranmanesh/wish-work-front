const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.public.js');
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
        new CleanWebpackPlugin(['dev']),
        new HtmlWebpackPlugin({
            template: 'index.public.template.ejs',
            inject: 'body',
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //   name: 'common' // Specify the common bundle's name.
        // })
    ],
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].[chunkhash].bundle.js',
        path: path.resolve(__dirname, 'dev'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: './dev',
        //port : 8050
    }
});
