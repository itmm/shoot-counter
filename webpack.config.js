const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/shoot-counter.js',
	output: {
		filename: 'shoot-counter.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
				use: [ 'file-loader' ]
			}
		],
	},
	plugins: [
		new CopyWebpackPlugin([{ from: './src/index.html', to: 'index.html' }])
	]	
};


module: {
}

