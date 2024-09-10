const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    entry: './src/index.tsx',
    devServer: {
        port: 3000,
    },
});
