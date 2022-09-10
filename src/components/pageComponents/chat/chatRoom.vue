<template>
	<div class="chat-room">
		<div class="chat-room-header-container">
			<chatRoomHeader v-for="item in groupInfo" :key="item.id" :title="item.title" />
		</div>
		<div class="chat-room-messages-container">
			<roomMessages />
		</div>
		<div class="chat-room-footer-container">
			<chatRoomFooter />
		</div>
	</div>
</template>

<script>
import chatRoomHeader from '@/components/pageComponents/chat/chatRoomHeader.vue';
import chatRoomFooter from '@/components/pageComponents/chat/chatRoomFooter.vue';
import roomMessages from '@/components/pageComponents/chat/roomMessages.vue';
export default {
	data() {
		return {
			groupInfo: [{ title: 'تست' }],
		};
	},
	components: { chatRoomHeader, chatRoomFooter, roomMessages },
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_shared.scss';
.chat-room {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 750px;
	height: 85vh;
	background-color: rgba(166, 166, 166, 0.1);
	border-radius: 15px 0 0 15px;
	.chat-room-messages-container {
		width: 100%;
		height: 70vh;
	}
}
</style>
