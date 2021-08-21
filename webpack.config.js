const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './portfolio/frontend/src/index.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './portfolio/frontend/static/frontend')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}