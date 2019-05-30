const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
	entry: './client/src/index.js',
	output: {
		path: path.join(__dirname, './client/dist'),
		filename: 'app.bundle.js',
	},
	module: {
		rules: [
			{
				//Eslint rules
				enforce: 'pre',
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'eslint-loader',
			},
			{
				//Babel-ES6 rules
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
					plugins: [
						'react-hot-loader/babel',
						'@babel/plugin-proposal-class-properties',
					],
				},
			},
			{
				test: /\.(sass|scss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'style-loader',
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
		],
	},
	plugins: [
		new htmlWebpackPlugin({
			template: './client/src/index.html',
		}),
		new MiniCssExtractPlugin({ filename: './client/dist/app-main.css' }),
	],
};

module.exports = config;
