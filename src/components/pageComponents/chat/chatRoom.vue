<template>
	<div class="chat-room">
		<div class="chat-room-header-container">
			<chatRoomHeader />
		</div>
		<div class="chat-room-messages-container">
			ssssss
		</div>
		<div class="chat-room-footer-container">
			<chatRoomFooter />
		</div>
	</div>
</template>

<script>
import chatRoomHeader from '@/components/pageComponents/chat/chatRoomHeader.vue';
import chatRoomFooter from '@/components/pageComponents/chat/chatRoomFooter.vue';
export default {
	components: { chatRoomHeader, chatRoomFooter },
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
	.chat-room-messages-container{
		height: 70vh;
	}
}
</style>
