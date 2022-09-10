<template>
	<div class="chat-room-list">
		<chatRoomListHeader class="mt-1" />
		<div class="chat-room-list-container">
			<h5 class="px-2 pt-2">معاشرت های شما</h5>
		</div>
	</div>
</template>

<script>
import chatRoomListHeader from '../../../components/pageComponents/chat/chatRoomListHeader.vue';
export default {
	components: { chatRoomListHeader },
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
		height: 70vh;
		overflow-x: scroll;
		h5 {
			color: $color-primary;
		}
	}
}
</style>
