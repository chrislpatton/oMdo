var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('../webpack.config');
var compiler = webpack(config);

var devConfig = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
});

var hotConfig = webpackHotMiddleware(compiler, {
    log: console.log
});

module.exports = {
  devConfig: devConfig
  hotConfig: hotConfig
};
