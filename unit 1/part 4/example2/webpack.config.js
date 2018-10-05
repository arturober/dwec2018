const path = require('path');

module.exports = {
    devServer: {
        contentBase: __dirname, // Default (project's root directory)
        publicPath: '/dist/', // Path where bundles are
        compress: true, // Enable gzip compresion when serving content
        port: 8080 // Default
    },
    context: path.join(__dirname, './js'),
    entry: {
        index: './index.js',
        'add-product': './add-product.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '/dist')
    }
}