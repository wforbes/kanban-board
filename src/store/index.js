import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		//note: Not sure of the purpose of creating an encapsulating
		//	object for items, then a singular tense 'todo' array
		//	actual structure should just be "todos: []", or "items: []"
		items: {
			todo: []
		},
		nextId: 1
	},
	mutations: {
		addItem(state, item) {
			state.items.todo.push(Object.assign(item, { id: state.nextId }));
			state.nextId += 1;
		}
	},
	actions: {},
	modules: {}
});
