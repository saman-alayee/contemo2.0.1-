<template>
	<div class="dashboard-component">
		<div class="row">
			<div class="col-lg-4">
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
				<LineChart :width="900" :height="400" :chart-data="chartData" class="mt-4" />
				<h4 class="pt-1">همکاران</h4>
				<div class="d-flex">
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
		</div>
	</div>
</template>

<script>
import PartnerCard from '@/components/elements/Card/partnerCard.vue';
import taskCard from '@/components/elements/Card/taskCard.vue';
import LineChart from '@/components/charts/lineChart.vue';
import BlueCard from '../../elements/Card/blueCard.vue';
export default {
	components: {
		PartnerCard,
		taskCard,
		LineChart,
		BlueCard,
	},
	data() {
		return {
			partnerData: [
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
			],
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
							40, 39, 70, 40, 39, 80, 70, 49, 10, 55, 49, 43, 39, 20, 40, 39, 80, 39,
							10, 40, 39, 40, 39, 10, 40, 39, 80,
						],
					},
					{
						label: 'تعداد فالور',
						backgroundColor: '#b4c412',
						data: [
							10, 29, 40, 44, 39, 80, 75, 42, 10, 33, 49, 22, 39, 30, 88, 39, 80, 39,
							10, 40, 29, 20, 19, 10, 40, 39, 80,
						],
					},
				],
			},
		};
	},
};
</script>

<style lang="scss" scoped></style>
