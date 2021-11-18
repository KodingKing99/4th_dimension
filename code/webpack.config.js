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
			  }
		]
	},
	presets: ['@babel/preset-env', '@babel/preset-react'],
	setupFilesAfterEnv: ['/home/nicksorenson/School/cs3450_assignments/group_project/4th_dimension/code/djangoApp/frontend/src/tests/setUpTests.js'],
}
