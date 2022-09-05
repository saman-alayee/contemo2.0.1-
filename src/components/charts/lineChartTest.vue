<template>
	<div class="chart-container">
		<LineChartGenerator
			:chart-options="chartOptions"
			:chart-data="chartData"
			:chart-id="chartId"
			:dataset-id-key="datasetIdKey"
			:plugins="plugins"
			:css-classes="cssClasses"
			:styles="styles"
			:width="width"
			:height="height"
		/>
	</div>
</template>

<script>
import { Line as LineChartGenerator } from 'vue-chartjs/legacy';

import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	LineElement,
	LinearScale,
	CategoryScale,
	PointElement,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, CategoryScale, PointElement);

export default {
	name: 'LineChart',
	components: {
		LineChartGenerator,
	},
	props: {
		chartId: {
			type: String,
			default: 'line-chart',
		},
		datasetIdKey: {
			type: String,
			default: 'label',
		},
		width: {
			type: Number,
			default: 400,
		},
		height: {
			type: Number,
			default: 400,
		},
		cssClasses: {
			default: '',
			type: String,
		},
		styles: {
			type: Object,
			default: () => {},
		},
		plugins: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			chartData: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [
					{
						label: 'Data One',
						pointRadius: '0',
						data: [40, 39, 10, 40, 39, 80, 40],
						borderColor: '#4461F2',
						tension: 0.5,
					},
					{
						label: 'Data One',
						pointRadius: '0',
						data: [23, 45, 65, 66, 33, 7, 2],
						borderColor: '#FCBF00',
						tension: 0.5,
						display: false,
					},
				],
			},
			chartOptions: {
				responsive: true,
				maintainAspectRatio: false,
				// cubicInterpolationMode: 'monotone',
				scales: {
					y: {
						grid: {
							drawBorder: false,
							color: '#fff',
						},
					},
					x: {
						grid: {
							drawBorder: false,
							color: '#fff',
						},
					},
				},
			},
		};
	},
};
</script>

<style lang="scss" scoped>
.chart-container {
	background-color: #fff;
}
</style>
