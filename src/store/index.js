import Vue from "vue";
import Vuex from "vuex";
import localStoragePlugin from "@/plugins/localStorage.js";
Vue.use(Vuex);

export default new Vuex.Store({
	plugins: [localStoragePlugin],
	state: {
		items: {
			todo: [],
			inProgress: [],
			done: []
		},
		nextId: 1
	},
	mutations: {
		initializeStore() {
			const data = localStorage.getItem("boardState");
			if (data) {
				this.replaceState(Object.assign(this.state, JSON.parse(data)));
			}
		},
		addItem(state, item) {
			state.items.todo.push(Object.assign(item, { id: state.nextId }));
			state.nextId += 1;
		},
		updateItems(state, { items, id }) {
			state.items[id] = items;
		},
		removeItem(state, item) {
			[state.items.todo, state.items.inProgress, state.items.done].forEach(
				(arr) => {
					const indexInArray = arr.findIndex((i) => i.id === item.id);
					if (indexInArray > -1) {
						arr.splice(indexInArray, 1);
					}
				}
			);
		}
	},
	actions: {},
	modules: {}
});
