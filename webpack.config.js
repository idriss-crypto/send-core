const path = require('path');
const fs = require('fs');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');

const setup = (mode) => {
    if (mode === 'production') {
        return {
            POLYGON_RPC_ENDPOINT: `'https://polygon-rpc.com/'`,
            POLYGON_CHAIN_ID: `'137'`,
            POLYGON_BLOCK_EXPLORER_ADDRESS: `'https://polygonscan.com'`,
            SEND_TO_ANYONE_CONTRACT_ADDRESS: `'sent to anyone prod'`,
            IDRISS_REGISTRY_CONTRACT_ADDRESS: `'0x2eccb53ca2d4ef91a79213fddf3f8c2332c2a814'`,
            REVERSE_IDRISS_MAPPING_CONTRACT_ADDRESS: `'0x561f1b5145897A52A6E94E4dDD4a29Ea5dFF6f64'`,
            PRICE_ORACLE_CONTRACT_ADDRESS: `'0xAB594600376Ec9fD91F8e885dADF0CE036862dE0'`,
            IDRISS_HOMEPAGE: `'https://idriss.xyz'`,
        }
    } else if (mode === 'none') {
        return {
            POLYGON_RPC_ENDPOINT: `'http://localhost:8545'`,
            POLYGON_CHAIN_ID: `'1337'`,
            POLYGON_BLOCK_EXPLORER_ADDRESS: `'https://mumbai.polygonscan.com'`,
            SEND_TO_ANYONE_CONTRACT_ADDRESS: `'0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9'`,
            IDRISS_REGISTRY_CONTRACT_ADDRESS: `'0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9'`,
            REVERSE_IDRISS_MAPPING_CONTRACT_ADDRESS: `'0x6489A077e9D1382E87a493985C531bee2d484640'`,
            PRICE_ORACLE_CONTRACT_ADDRESS: `'0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'`,
            IDRISS_HOMEPAGE: `'http://localhost:8000/templates'`,
        }
    } else {
        return {
            // Mumbai - Polygon testnet
            POLYGON_RPC_ENDPOINT: `'https://rpc-mumbai.matic.today'`,
            POLYGON_CHAIN_ID: `'80001'`,
            POLYGON_BLOCK_EXPLORER_ADDRESS: `'https://mumbai.polygonscan.com'`,
            SEND_TO_ANYONE_CONTRACT_ADDRESS: `'sent to anyone dev'`,
            IDRISS_REGISTRY_CONTRACT_ADDRESS: `'0x6489A077e9D1382E87a493985C531bee2d484640'`,
            REVERSE_IDRISS_MAPPING_CONTRACT_ADDRESS: `'0x7d1516f493743ce846e12ea2c9b70a008d8097fe'`,
            PRICE_ORACLE_CONTRACT_ADDRESS: `'0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada'`,
            IDRISS_HOMEPAGE: `'https://idriss.xyz'`,
        }
    }
}

module.exports = (env, argv) => {
    return {
        // "production" | "development" | "none"
        mode: argv.mode,
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
