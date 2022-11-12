const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const {
    NODE_ENV
} = process.env;

module.exports = {
    mode: NODE_ENV || "production",
    entry: './src/client/App.tsx',
    devtool: NODE_ENV !== 'production' ? 'inline-source-map' : '',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },

    watchOptions: {
        ignored: '**/node_modules',
      },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', ".json"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            compilerOptions: { noEmit: false },
                        }
                    }
                ],
                exclude: [/node_modules/, /dist/],
            },
            {
                test: /\.(css|s[ac]ss)$/i,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: "css-loader", options: {
                            importLoaders: 1,
                            // modules: true
                        }
                    },
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
    // , devServer: {
    //     allowedHosts: [
    //         SERVER_HOST,
    //         'localhost',
    //     ],
    //     historyApiFallback: true,
    //     open: true,
    //     hot: true,
    //     host: SERVER_WEB_HOST,
    //     port: SERVER_WEB_PORT,
    //     proxy: {
    //         '/api': proxy,
    //         '/acc': proxy,
    //         '/auth': proxy,
    //         '/socket.io': {
    //             target: proxy,
    //             ws: true
    //         },
    //         '/images': proxy
    //     }
    // }
};