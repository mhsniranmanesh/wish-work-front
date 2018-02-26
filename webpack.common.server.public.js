const path = require('path');

module.exports={
    entry: './public/indexServer.js',
    target: 'node',
    output: {
        path:_dirname,
        filename: "serverPublic.js",
        libraryTarget: "commonjs2"
    },
    devtool:"cheap-module-source-map",
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader/locals',
                'css-loader/locals'
            ]
        },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'es2015',
                        'react'
                    ],
                    plugins: []
                },
                // include: [
                //     path.resolve(__dirname, 'src'),
                // ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ],
                options: {
                    name:"public/media/[name].[ext]",
                    emit: false
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
};