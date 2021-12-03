module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				use: [
				  'style-loader',
				  'css-loader'
				]
			},
			{
				test: /\.png$/, 
				exclude: /node_modules/,
				loader: 'file-loader',
				options: {
				name: '[path][name].[ext]',
				},
			}
			
		],
	},
}
