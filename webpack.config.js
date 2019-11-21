module.exports = {
	entry: "./index.js",
	output: {
		path: __dirname,
		filename: "bundle.js",
		publicPath: "/static/"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: "babel-loader",
					query: {
						presets: ["es2015", "react"]
					}
				}
			}
		]
	}
};