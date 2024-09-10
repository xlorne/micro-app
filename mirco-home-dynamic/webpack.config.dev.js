const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        port: 8000,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "MircoHome",
        }),
    ],
});
