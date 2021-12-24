import Vue from "vue";
import VueRouter from "vue-router";
import Backlog from "@/components/Backlog";

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: "*",
			redirect: "/backlog"
		},
		{
			path: "/backlog",
			component: Backlog
		}
	]
});
