const webpack = require('webpack')
const config = require('./webpack.config.base.js')
const WebpackDevServer = require('webpack-dev-server')
const PORT = process.env.PORT || 8000

config.entry.main = (config.entry.main || []).concat([
    `webpack-dev-server/client?http://localhost:${PORT}/`,
    'webpack/hot/dev-server'
])

config.plugins = (config.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin()
])

config.mode = 'development'

const compiler = webpack(config)

const server = new WebpackDevServer(compiler, {
    hot: true, // 开启wbepack HMR
    quiet: true,
    historyApiFallback: true,
    filename: config.output.filename,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
})

server.listen(PORT, 'localhost', () => {
    console.log(`server started at localhost:${PORT}`)
})