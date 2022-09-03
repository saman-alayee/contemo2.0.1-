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
				labels: [
					'00',
					'01',
					'02',
					'03',
					'04',
					'05',
					'06',
					'07',
					'08',
					'09',
					'10',
					'11',
					'12',
					'13',
					'14',
					'15',
					'16',
					'17',
					'18',
					'19',
					'20',
					'21',
					'22',
					'23',
					'24',
					'25',
					'26',
					'27',
					'28',
					'29',
					'30',
				],
				datasets: [
					{
						label: 'تعداد لایک',
						backgroundColor: '#1212c4',
						color: '#1212c4',
						data: [
							40, 39, 70, 40, 39, 80, 70, 49, 10, 55, 49, 43, 39, 20, 40, 39, 80,
							39, 10, 40, 39, 40, 39, 10, 40, 39, 80,
						],
					},
					{
						label: 'تعداد فالور',
						backgroundColor: '#b4c412',
						data: [
							10, 29, 40, 44, 39, 80, 75, 42, 10, 33, 49, 22, 39, 30, 88, 39, 80,
							39, 10, 40, 29, 20, 19, 10, 40, 39, 80,
						],
					},
				],
			},
		};
	},
};
</script>

<style lang="scss" scoped></style>
