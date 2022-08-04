const path = require('path');
const fs = require('fs');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');

const setup = (mode) => {
    if (mode === 'production') {
        return {
            POLYGON_RPC_ENDPOINT: `'https://polygon-rpc.com/'`,
            SEND_TO_ANYONE_CONTRACT_ADDRESS: `'sent to anyone prod'`,
            IDRISS_REGISTRY_CONTRACT_ADDRESS: `'idris registry prod'`,
            REVERSE_IDRISS_MAPPING_CONTRACT_ADDRESS: `'revert mapping  prod'`,
            PRICE_ORACLE_CONTRACT_ADDRESS: `'price oracle prod'`
        }
    } else {
        return {
            POLYGON_RPC_ENDPOINT: `'https://rpc-mumbai.matic.today'`,
            SEND_TO_ANYONE_CONTRACT_ADDRESS: `'sent to anyone dev'`,
            IDRISS_REGISTRY_CONTRACT_ADDRESS: `'idris registry dev'`,
            REVERSE_IDRISS_MAPPING_CONTRACT_ADDRESS: `'revert mapping dev '`,
            PRICE_ORACLE_CONTRACT_ADDRESS: `'price oracle dev'`
        }
    }
}

module.exports = (env, argv) => {
    return {
        mode: `{$argv.mode}`, // "production" | "development" | "none"
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
        plugins: [
            new webpack.DefinePlugin(setup(argv.mode))
        ],
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
}
