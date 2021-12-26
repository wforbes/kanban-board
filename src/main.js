import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import runtime from "serviceworker-webpack-plugin/lib/runtime";

Vue.config.productionTip = false;

if ("serviceWorker" in navigator) {
	runtime.register();
}

new Vue({
	router,
	store,
	render: (h) => h(App),
	created() {
		store.commit("initializeStore");
	}
}).$mount("#app");
