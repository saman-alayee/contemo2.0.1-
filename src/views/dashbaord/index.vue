<template>
	<div class="dashboard-component-contai">
		<Dashboard />
		<LineChart />
	</div>
</template>

<script>
import Dashboard from '@/components/pageComponents/Dashboard/index.vue';
import LineChart from '@/components/charts/lineChart.vue';
export default {
	components: {
		Dashboard,
		LineChart,
	},
};
</script>

<style></style>
