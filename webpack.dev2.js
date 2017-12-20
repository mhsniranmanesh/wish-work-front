const merge = require('webpack-merge');
const common = require('./webpack.common2.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: './dist',
        //port : 8050
    }
});
