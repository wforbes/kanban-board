import Vue from "vue";
import VueRouter from "vue-router";
import Backlog from "@/components/Backlog";
import KanbanBoard from "@/components/KanbanBoard";

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: "*",
			redirect: "/backlog"
		},
		{
			path: "/board",
			component: KanbanBoard
		},
		{
			path: "/backlog",
			component: Backlog
		}
	]
});
