<template>
	<div class="chat-rooms">
		<chatRoomList />
		<chatRoom />
	</div>
</template>

<script>
import chatRoomList from '@/components/pageComponents/chat/chatRoomList.vue';
import chatRoom from '../../../components/pageComponents/chat/chatRoom.vue';
export default {
	components: { chatRoomList, chatRoom },
};
</script>

<style lang="scss" scoped>
.chat-rooms {
	display: flex;
	flex-direction: row;
}
</style>
