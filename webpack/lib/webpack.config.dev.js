const path = require('path');
const merge = require('webpack-merge')
const common = require('./webpack.config')

const rootResolve = file => path.resolve(process.cwd(), file)

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: rootResolve('dist'),
        publicPath: '/',
        port: 9000
    }
})