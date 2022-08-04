const path = require('path');
const fs = require('fs');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development", // "production" | "development" | "none"
    entry: {
        "subpages": "./src/subpages/index.js",
        "sendToAnyoneLogic": "./src/sendToAnyoneLogic.js",
        "sendToAnyoneUtils": "./src/sendToAnyoneUtils.js",
        "sendToAnyoneStyle": "!!css-loader!sass-loader!./src/sendToAnyoneStyle.scss",
        "index": "./src/index.js",
        "getWeb3Provider": "./src/getWeb3Provider.js",
    },
    devtool: "inline-source-map",

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.mpts$/,
                use: [
                    "mpts-loader"
                ]
            },
            {parser:{import: false}}
        ]
    },
    output: {
        library: {type: 'module'}
    },
    experiments:{outputModule:true},
    externals: [
        'web3/dist/web3.min.js',
        '@walletconnect/web3-provider/dist/umd/index.min.js',
        'fast-creator',
        'idriss-crypto/browser',
        '@depay/coinbase-wallet-sdk',
       // 'web3modal'
]
}
