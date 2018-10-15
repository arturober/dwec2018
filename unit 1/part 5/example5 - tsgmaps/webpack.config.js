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
    resolve: {
        extensions: ['.ts', '.js'] // We don’t need to include the extension when importing modules
    },
    context: path.join(__dirname, './src'),
    entry: {
        index: './index',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'ts-loader',
                }],
            }
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