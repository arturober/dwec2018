const path = require('path');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    devServer: {
        contentBase: __dirname, // Default (project's root directory)
        publicPath: '/dist/', // Path where bundles are
        compress: true, // Enable gzip compresion when serving content
        port: 8080, // Default
    },
    context: path.join(__dirname, './js'),
    entry: {
        index: './index.js',
        'add-product': './add-product.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['@babel/env'] },
                }],
            },
            { 
                test: /\.handlebars$/, 
                loader: "handlebars-loader" 
            },
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: "initial", // Optimize chunks generation
                    name: "commons", // chunk name
                    minChunks: 2, // How many files import this chunk
                    minSize: 0 // Minimum size of the separated chunk
                }
            }
        }
    }
}