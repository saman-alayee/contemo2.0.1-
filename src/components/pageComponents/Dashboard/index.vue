<template>
	<div class="dashboard-component">
		<BaseTab :tabItems="tabItems">
			<template slot="1">salam</template>
			<template slot="2">ddd</template>
			<template slot="3">fer</template>
			<template slot="4">d</template>
		</BaseTab>
		<div class="row">
			<div class="col-lg-4 scroll-y-container">
				<taskCard
					:title="item.title"
					:description="item.description"
					:avatar="item.avatars"
					v-for="item in taskDatas"
					:key="item.id"
					class="mt-1"
				/>
			</div>

			<div class="col-lg-8">
				<div class="d-flex justify-content-end">
					<BlueCard class="mt-1" offline="154" online="54" projects="253" />
				</div>
				<LineChart
					:width="900"
					:height="400"
					:chart-data="chartData"
					:chart-options="chartOptions"
					class="mt-4"
				/>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-10">
				<h4 class="pt-1">همکاران</h4>
				<div class="d-flex scroll-x-container">
					<PartnerCard
						v-for="item in partnerData"
						:key="item.id"
						:role="item.role"
						:name="item.name"
						:avatar="item.avatar"
						class="mx-1 mt-1"
					/>
				</div>
			</div>
			<div class="col-lg-2 d-flex justify-content-center align-items-center">
				<AddItem class="mt-2" />
			</div>
		</div>
	</div>
</template>

<script>
import PartnerCard from '@/components/elements/Card/partnerCard.vue';
import taskCard from '@/components/elements/Card/taskCard.vue';
import LineChart from '@/components/elements/charts/lineChart.vue';
import BlueCard from '@/components/elements/Card/blueCard.vue';
import AddItem from '@/components/elements/AddItem/index.vue';
import BaseTab from '@/components/elements/BaseTab/index.vue';
export default {
	components: {
		PartnerCard,
		taskCard,
		LineChart,
		BlueCard,
		AddItem,
		BaseTab,
	},
	data() {
		return {
			tabItems: [
				{
					id: 1,
					tabName: 'salam',
				},
				{ id: 2, tabName: 'khodahafez' },
				{ id: 3, tabName: 'dwefewfer' },
				{ id: 4, tabName: 'erfgregregrtr' },
			],

			partnerData: [
				{ name: 'سامان علایی', role: 'گرافیست', avatar: '' },
				{ name: 'سامان علایی', role: 'گرافیست', avatar: '' },
				{ name: 'سامان علایی', role: 'گرافیست', avatar: '' },
				{ name: 'سامان علایی', role: 'گرافیست', avatar: '' },
				{ name: 'سامان علایی', role: 'گرافیست', avatar: '' },
				{ name: 'سامان علایی', role: 'گرافیست', avatar: '' },
				{ name: 'سامان علایی', role: 'گرافیست', avatar: '' },
				{ name: 'سامان علایی', role: 'گرافیست', avatar: '' },
				{ name: 'سامان علایی', role: 'گرافیست', avatar: '' },
				{ name: 'سامان علایی', role: 'گرافیست', avatar: '' },
				{ name: 'سامان علایی', role: 'گرافیست', avatar: '' },
				{ name: 'سامان علایی', role: 'گرافیست', avatar: '' },
			],
			taskDatas: [
				{
					title: 'عنوان تسک',
					description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با',
					avatars: 'vectors/avatar.svg',
				},
				{
					title: 'عنوان تسک',
					description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با',
					avatars: 'vectors/avatar.svg',
				},
				{
					title: 'عنوان تسک',
					description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با',
					avatars: 'vectors/avatar.svg',
				},
				{
					title: 'عنوان تسک',
					description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با',
					avatars: 'vectors/avatar.svg',
				},
				{
					title: 'عنوان تسک',
					description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با',
					avatars: 'vectors/avatar.svg',
				},
				{
					title: 'عنوان تسک',
					description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با',
					avatars: 'vectors/avatar.svg',
				},
			],
			chartData: {
				labels: [
					'00',
					'01',
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
				],
				datasets: [
					{
						label: 'لایک',
						pointRadius: '0',
						data: [40, 39, 10, 40, 39, 80, 40, 21, 33, 45, 76, 88, 21, 43],
						borderColor: '#4461F2',
						tension: 0.5,
					},
					{
						label: 'فالور',
						pointRadius: '0',
						data: [23, 45, 65, 66, 33, 7, 2, 21, 43, 15, 21, 90, 21, 23],
						borderColor: '#FCBF00',
						tension: 0.5,
						display: false,
					},
				],
			},
			chartOptions: {
				responsive: true,
				maintainAspectRatio: false,
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
.scroll-y-container {
	height: 85vh;
	overflow-y: scroll;
	overflow-x: hidden;
	padding: 10px 12px;
}
.scroll-x-container {
	overflow-y: hidden;
	overflow-x: scroll;
	padding: 10px 5px;
}
</style>
