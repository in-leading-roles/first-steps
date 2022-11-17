const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const {
    NODE_ENV
} = process.env;

module.exports = {
    mode: NODE_ENV || "development",
    entry: './src/client/App.tsx',
    devtool: NODE_ENV !== 'production' ? 'inline-source-map' : '',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },

    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
    },

    watchOptions: {
        ignored: '**/server',
        ignored: '**/node_modules',
        ignored: '**/public',
        ignored: '**/dist',
        ignored: '**/common',
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', ".json", '.module.css', '.css']
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            compilerOptions: { noEmit: false },
                        }
                    }
                ],
                exclude: [/node_modules/, /dist/, /server/, /public/, /common/],
            },
            {
                test: /\.(css|s[ac]ss)$/i,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: "css-loader", options: {
                            
                            importLoaders: 1,
                            modules: true,
                        }
                    },
                    { loader: "css-modules-typescript-loader"},
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg$)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/favicon.ico",
            filename: "index.html",
            inject: "body",
            hash: true
        })
    ]
};