<template>
	<div class="room-messages">
		<mainUserMessage :textMessage="message"  class="mb-1"/>
		<currentUserMessage :textMessage="message" class="mb-1" />
	</div>
</template>

<script>
import mainUserMessage from '@/components/pageComponents/chat/mainUserMessage.vue';
import currentUserMessage from '@/components/pageComponents/chat/currentUserMessage.vue';
export default {
	components: {
		mainUserMessage,
		currentUserMessage,
	},
	data() {
		return {
			message:
				'sldsdjksajfkjsakljdflksjaklsakldhsakhdkjsakjdsa',
		};
	},
};
</script>

<style lang="scss" scoped>
.room-messages {
	width: 100%;
	padding: 16px 16px;
}
.current-user-messages {
	width: 80%;
}
.main-user-messages {
	width: 80%;
}
</style>
