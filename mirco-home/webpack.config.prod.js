const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const {dependencies} = require("./package.json");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = merge(common, {
    mode: 'production',
    devServer: {
        port: 18000,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "MircoHome",
            // This application named 'HeaderApp'
            // output a js file
            remotes: {
                "MircoApp": "MircoApp@http://192.168.3.200:13000/remoteEntry.js",
            },
            shared: {
                // some other dependencies
                react: { // react
                    singleton: true,
                    requiredVersion: dependencies["react"],
                    eager: true,
                },
                "react-dom": { // react-dom
                    singleton: true,
                    requiredVersion: dependencies["react-dom"],
                    eager: true,
                },
            },
        }),
    ],
});
