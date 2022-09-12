<template>
	<div class="chat-room-list-header">
		<img src="@/assets/img/vectors/avatar.svg" alt="error" />
		<input type="text" v-model="searchChatRoom" placeholder="جست و جو" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			searchChatRoom: '',
		};
	},
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_shared.scss';
.chat-room-list-header {
	width: 100%;
	padding: 15px 15px;
	display: flex;
	flex-direction: row;
	img {
		width: 50px;
		height: 50px;
	}
	input {
		width: 270px;
		height: 48px;
		outline: none;
		border: none;
		background: rgb(241, 238, 238);
		border-radius: 8px;
		margin: 0px 10px;
		padding: 0 5px;
	}
}
</style>
