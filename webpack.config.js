const path = require("path");
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack')

module.exports = {
    target: 'web',
    plugins: [
        new Dotenv(),
      ],
      resolve: {
        fallback: {
          "fs": false,
          "os": false,
          "path": false
        },
      },
    mode: "development",
    devtool: "eval-source-map",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    devServer: {
        static: {
            directory:  path.resolve(__dirname, 'dist')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/react"]
                        }
                    }
                ]
            }
        ]
    }
}