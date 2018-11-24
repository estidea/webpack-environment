// basic vars

// additional plugins
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module settings
module.exports = {
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
			    use: [
			        MiniCssExtractPlugin.loader,
			        {
			            loader: "css-loader",
			            options: {
			                minimize: {
			                    safe: true
			                }
			            }
			        },
			        {
			            loader: "sass-loader",
			            options: {}
			        }
			    ]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						options: { minimize:true }
					}
				]
			}
		],
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		}),
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		})
	],
}