const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
	playground: path.resolve(__dirname, './src'),
};

module.exports = {
	// output: {
	// 	path: paths.playground,
	// 	filename: '[name].js',
	// },
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'react-hot-loader/patch',
		'babel-polyfill',
		paths.playground,
	],
	devtool: 'eval',
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [
					paths.playground,
				],
				exclude: [
					path.resolve('./node_modules'),
				],
				use: [
					{
						loader: 'react-hot-loader/webpack',
					},
					{
						loader: 'babel-loader',
					},
				],
			},
		],
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
				BABEL_ENV: JSON.stringify('development'),
			},
		}),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'WM Front End Code Challenge',
			template: path.resolve('./playground.ejs'),
		}),
	],
	resolve: {
		extensions: ['.js', '.json'],
		modules: [
			paths.playground,
			path.resolve('./node_modules'),
		],
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		stats: {
			colors: true,
		},
		overlay: {
			errors: true,
			warnings: true,
		},
		inline: true,
	},
};
