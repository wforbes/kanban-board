<template>
	<div class="backlog-view">
		<div class="backlog-view">
			<new-item></new-item>
			<div class="card" v-for="item in items" :key="item.id">
				<div class="card-block">
					<h5 class="card-title">
						<span class="text-muted">#{{ item.id }}</span> {{ item.text }}
						<span :class="badgeClass(item)">{{ badgeText(item) }}</span>
					</h5>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
import NewItemForm from "./NewItemForm";

export default {
	name: "Backlog",
	components: {
		"new-item": NewItemForm
	},
	data() {
		return {
			badgeDetail: {
				todo: {
					text: "to-do",
					class: "badge badge-light"
				},
				inProgress: {
					text: "in progress",
					class: "badge badge-info"
				},
				done: {
					text: "done",
					class: "badge badge-success"
				}
			}
		};
	},
	computed: mapState({
		// note: using a 'getters' property in vuex file
		//	and calling that with this.$store.getters.items
		//	would be preferred
		items: (s) => [...s.items.todo, ...s.items.inProgress, ...s.items.done]
	}),
	methods: {
		itemLane(item) {
			if (this.$store.state.items.todo.includes(item)) {
				return "todo";
			} else if (this.$store.state.items.inProgress.includes(item)) {
				return "inProgress";
			}
			return "done";
		},
		badgeText(item) {
			return this.badgeDetail[this.itemLane(item)].text;
		},
		badgeClass(item) {
			return this.badgeDetail[this.itemLane(item)].class;
		}
	}
};
</script>
