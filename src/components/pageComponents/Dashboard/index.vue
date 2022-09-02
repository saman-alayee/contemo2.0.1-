<template>
	<div class="dashboard-component">
		<LineChart :width="900" :height="400" :chart-data="chartData" class="mt-2" />
	</div>
</template>

<script>
import LineChart from '@/components/charts/lineChart.vue';
export default {
	components: {
		LineChart,
	},
	data() {
		return {
			chartData: {
				labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
				datasets: [
					{
						label: 'تعداد لایک',
						backgroundColor: '#1212c4',
						color: '#1212c4',
						data: [40, 39, 10, 40, 39, 80],
					},
					{
						label: 'تعداد فالور',
						backgroundColor: '#b4c412',
						data: [0, 40, 80, 90, 89, 10],
					},
				],
			},
		};
	},
};
</script>

<style lang="scss" scoped></style>
