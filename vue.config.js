const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");
const path = require("path");
module.exports = {
	chainWebpack: (config) => {
		// In lieu of using the tutorial's pure webpack config,
		//	this seems to be an improvised way to register the tutorials
		//	proposed serviceworker plugin and provide it the required
		//	"entry" option
		// See: https://cli.vuejs.org/guide/webpack.html#chaining-advanced
		// See: https://github.com/neutrinojs/webpack-chain#getting-started (Config plugins: adding)
		//console.log(path.resolve(__dirname, "src/sw.js"));
		config.plugin("sw").use(ServiceWorkerWebpackPlugin, [
			{
				entry: path.resolve(__dirname, "src/sw.js")
			}
		]);
	}
};
