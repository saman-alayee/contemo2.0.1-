<template>
	<div class="tab-container">
		<div class="tab-item-container" v-if="tabItems && tabItems.length">
			<div
				class="tab-items"
				v-for="item in tabItems"
				:key="item.id"
				@click="setActiveTab(item)"
			>
				{{ item.tabName }}
			</div>
		</div>
		<div class="tab-content">
			<template v-for="item in tabItems">
				<slot v-if="item.id === activeTab.id" :name="item.id"></slot>
			</template>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		tabItems: {
			type: Array,
		},
	},
	data() {
		return {
			activeTab: {},
		};
	},
	created() {
		if (this.tabItems && this.tabItems[0]) {
			this.activeTab = this.tabItems[0];
		}
	},
	methods: {
		setActiveTab(item) {
			this.activeTab = item;
		},
	},
};
</script>

<style lang="scss" scoped>
.tab-container {
	width: 100%;
	.tab-item-container {
		display: flex;
	}
	.tab-items {
		padding: 8px 16px;
		border: 1px solid red;
	}
}
.tab-content {
	width: 100%;
	padding: 8px;
}
</style>
