<template>
	<div class="chat-room-list">
		<chatRoomListHeader class="mt-1" />
		<div class="chat-room-list-container">
			<h5 class="px-2 pt-2">معاشرت های شما</h5>
			<room
				v-for="item in groups"
				:key="item.id"
				:title="item.title"
				:date="item.date"
				:lastMessage="item.lastMessage"
			/>
		</div>
	</div>
</template>

<script>
import chatRoomListHeader from '../../../components/pageComponents/chat/chatRoomListHeader.vue';
import room from '../../../components/pageComponents/chat/room.vue';
export default {
	data() {
		return {
			groups: [
				{
					//image: '@/',
					title: 'تست',
					date: '19 شهریور',
					lastMessage: 'salaaaaaaaaaaaaaaam khubi',
				},
				{
					//image: '@/',
					title: 'تست',
					date: '19 شهریور',
					lastMessage: 'salaaaaaaaaaaaaaaam khubi',
				},
				{
					//image: '@/',
					title: 'تست',
					date: '19 شهریور',
					lastMessage: 'salaaaaaaaaaaaaaaam khubi',
				},
				{
					//image: '@/',
					title: 'تست',
					date: '19 شهریور',
					lastMessage: 'salaaaaaaaaaaaaaaam khubi',
				},
				{
					//image: '@/',
					title: 'تست',
					date: '19 شهریور',
					lastMessage: 'salaaaaaaaaaaaaaaam khubi',
				},
				{
					//image: '@/',
					title: 'تست',
					date: '19 شهریور',
					lastMessage: 'salaaaaaaaaaaaaaaam khubi',
				},
				{
					//image: '@/',
					title: 'تست',
					date: '19 شهریور',
					lastMessage: 'salaaaaaaaaaaaaaaam khubi',
				},
				{
					//image: '@/',
					title: 'تست',
					date: '19 شهریور',
					lastMessage: 'salaaaaaaaaaaaaaaam khubi',
				},
				{
					//image: '@/',
					title: 'تست',
					date: '19 شهریور',
					lastMessage: 'salaaaaaaaaaaaaaaam khubi',
				},
				{
					//image: '@/',
					title: 'تست',
					date: '19 شهریور',
					lastMessage: 'salaaaaaaaaaaaaaaam khubi',
				},
				{
					//image: '@/',
					title: 'تست',
					date: '19 شهریور',
					lastMessage: 'salaaaaaaaaaaaaaaam khubi',
				},
				{
					//image: '@/',
					title: 'تست',
					date: '19 شهریور',
					lastMessage: 'salaaaaaaaaaaaaaaam khubi',
				},
				{
					//image: '@/',
					title: 'تست',
					date: '19 شهریور',
					lastMessage: 'salaaaaaaaaaaaaaaam khubi',
				},
				{
					//image: '@/',
					title: 'تست',
					date: '19 شهریور',
					lastMessage: 'salaaaaaaaaaaaaaaam khubi',
				},
				{
					//image: '@/',
					title: 'تست',
					date: '19 شهریور',
					lastMessage: 'salaaaaaaaaaaaaaaam khubi',
				},
				{
					//image: '@/',
					title: 'تست',
					date: '19 شهریور',
					lastMessage: 'salaaaaaaaaaaaaaaam khubi',
				},
				{
					//image: '@/',
					title: 'تست',
					date: '19 شهریور',
					lastMessage: 'salaaaaaaaaaaaaaaam khubi',
				},
				{
					//image: '@/',
					title: 'تست',
					date: '19 شهریور',
					lastMessage: 'salaaaaaaaaaaaaaaam khubi',
				},
			],
		};
	},
	components: { chatRoomListHeader, room },
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_shared.scss';
.chat-room-list {
	width: 350px;
	height: 85vh;
	background: #fff;
	display: flex;
	flex-direction: column;
	border-radius: 0px 15px 15px 0px;
	.chat-room-list-container {
		height: 75vh;
		overflow-x: hidden;
		h5 {
			color: $color-primary;
		}
	}
}
</style>
