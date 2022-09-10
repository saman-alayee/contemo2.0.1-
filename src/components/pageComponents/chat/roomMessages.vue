<template>
	<div class="room-messages">
		<mainUserCard :textMessage="message"  class="mb-1"/>
		<currentUserCard :textMessage="message" class="mb-1" />
	</div>
</template>

<script>
import mainUserCard from '@/components/pageComponents/chat/mainUserCard.vue';
import currentUserCard from '@/components/pageComponents/chat/currentUserCard.vue';
export default {
	components: {
		mainUserCard,
		currentUserCard,
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
