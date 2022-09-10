<template>
	<div class="chat-room-header">
		<div class="group-info">
			<img src="@/assets/img/vectors/avatar.svg" alt="error" />
			<span class="group-name"> تست </span>
		</div>
		<img class="search-icon" src="@/assets/img/icon/search-icon.svg" alt="" />
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
		},
	},
};
</script>

<style lang="scss" scoped>
.chat-room-header {
	margin-top: 10px;
	width: 700px;
	height: 60px;
	background: #fff;
	border-radius: 10px;
    display: flex;
    justify-content: space-between;
}
.group-info {
	padding: 4px 24px;
	img {
		width: 50px;
		height: 50px;
	}
	.group-name {
		font-style: normal;
		font-weight: 600;
		font-size: 20px;
		line-height: 20px;
		color: #000000;
		margin-right: 16px;
	}
}
.search-icon {
    width: 26px;
    height: 26px;
    margin: 16px;
}
</style>
