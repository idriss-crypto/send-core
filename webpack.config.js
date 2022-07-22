const path = require('path');
const fs = require('fs');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development", // "production" | "development" | "none"
    entry: {
        "tippingError": "./src/subpages/tippingError.js",
        "tippingLogic": "./src/tippingLogic.js",
        "tippingMain": "./src/subpages/tippingMain.js",
        "tippingSuccess": "./src/subpages/tippingSuccess.js",
        "tippingUtils": "./src/tippingUtils.js",
        "tippingWaitingApproval": "./src/subpages/tippingWaitingApproval.js",
        "tippingWaitingConfirmation": "./src/subpages/tippingWaitingConfirmation.js",
        "tippingStyle": "!!css-loader!sass-loader!./src/tippingStyle.scss",
        "tippingAddress": "./src/subpages/tippingAddress.js",
        "index": "./src/index.js",
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
    experiments:{outputModule:true}
}
