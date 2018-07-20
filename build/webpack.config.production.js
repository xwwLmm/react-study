const path = require('path')
const webpack = require('webpack')
const config = require('./webpack.base.config')
const CleanWebpackPlugin = require('clean-webpack-plugin')

config.mode = 'production'

config.plugins = (config.plugins || []).concat([
    new CleanWebpackPlugin(['dist'], {
        root: path.resolve(__dirname, '../')
    }),
    new webpack.HashedModuleIdsPlugin()
])

module.exports = config
