const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const config = merge(baseConfig, {
	mode: 'development',
	devServer: {
		port: 9000,
	},
	devtool: 'source-map',
});

module.exports = config;
