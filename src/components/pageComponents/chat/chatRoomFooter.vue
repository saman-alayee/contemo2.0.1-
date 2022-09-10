<template>
	<div class="chat-room-footer">
		<input class="form-control" type="text" placeholder="پیام خود را بنویسید ..." />
		<BaseButton title="ارسال پیام" class="send-message" />
	</div>
</template>

<script>
import BaseButton from '../../elements/Button/Button.vue';
export default {
	components: {
		BaseButton,
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';
.chat-room-footer {
	margin-bottom: 10px;
	width: 700px;
	height: 60px;
	background: #fff;
	border-radius: 10px;
	input {
		width: 75%;
		height: 100%;
		border: none;
		outline: none;
		background: #fff;
		box-shadow: none;
		border-radius: 10px;
	}
	.send-message {
		width: 135px;
		height: 48px;
		color: #fff;
		position: relative;
		right: 550px;
		top: -55px;
	}
}
</style>
