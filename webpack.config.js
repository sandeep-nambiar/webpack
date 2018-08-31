module.exports = (env = {}) => {
	return {
		entry: ['./src/js/app.js', './src/scss/main.scss'],
		output: {
			filename: 'dist/js/app.js',
		},
		module: {
			rules: [
				{
					test: /\.scss$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].css',
								outputPath: 'dist/css/'
							}
						},
						{
							loader: 'extract-loader'
						},
						{
							loader: 'css-loader'
						},
						{
							loader: 'postcss-loader'
						},
						{
							loader: 'sass-loader'
						}
					]
				},
				{
				   test: /\.(jpe?g|png|gif|svg)$/i, 
				   loader: "file-loader?name=img/[name].[ext]"
				 }
			]
			
		}
	}
};