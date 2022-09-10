<template>
	<div class="current-user-card">
		<div class="text-wrapper">
			<span class="text-message">{{textMessage}}</span>
		</div>
		<img src="@/assets/img/vectors/avatar.svg" alt="error" />
	</div>
</template>

<script>
export default {
	props: {
		textMessage: {
			type: String,
		},
	},
};
</script>

<style lang="scss" scoped>
.current-user-card {
    width: 100%;
    height: 50px;
	display: flex;
	flex-direction: row;
    justify-content: end;
	img {
		width: 50px;
		height: 50px;
	}
}
.text-wrapper {
	background: #ffffff;
	box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.05);
	border-radius: 10px;
	padding: 13px;
	margin: 0 16px;
	.text-message {
		font-style: normal;
		font-weight: 300;
		font-size: 16px;
		color: #000000;
	}
}
</style>
