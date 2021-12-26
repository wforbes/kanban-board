const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");
const path = require("path");
module.exports = {
	chainWebpack: (config) => {
		// In lieu of using the tutorial's pure webpack config,
		//	this registers the serviceworker plugin and provides it
		// the required "entry" option
		// See: https://cli.vuejs.org/guide/webpack.html#chaining-advanced
		// See: https://github.com/neutrinojs/webpack-chain#getting-started (Config plugins: adding)
		config.plugin("sw").use(ServiceWorkerWebpackPlugin, [
			{
				entry: path.resolve(__dirname, "src/sw.js")
			}
		]);
	}
};
