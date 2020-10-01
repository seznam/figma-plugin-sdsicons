/* eslint-env amd, node */
const InlineChunkHtmlPlugin = require('inline-chunk-html-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (_env, argv) => ({
	mode: argv.mode === 'production' ? 'production' : 'development',
	devtool: argv.mode === 'production' ? false : 'inline-source-map',

	entry: {
		// JS UI pluginu
		ui: './src/ui/index.tsx',
		// JS workeru pluginu
		worker: './src/worker/index.ts',
	},

	module: {
		rules: [
			{ test: /\.tsx?$/u, use: 'ts-loader', exclude: /node_modules/u },
			{ test: /\.css$/u, loader: [{ loader: 'style-loader' }, { loader: 'css-loader' }] },
			{ test: /\.(png|jpg|gif|webp|svg|zip)$/u, loader: [{ loader: 'url-loader' }] },
		],
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js'],
		alias: {
			'~': path.resolve(__dirname, 'src/'),
		},
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/ui/index.html',
			filename: 'ui.html',
			inlineSource: '.(js)$',
			chunks: ['ui'],
		}),
		new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/.*/u]),
	],
});
