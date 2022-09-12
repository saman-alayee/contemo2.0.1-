<template>
	<div class="room">
		<img class="group-photo" src="@/assets/img/vectors/avatar.svg" alt="" />
		<div class="group-info">
			<span class="group-name">{{ title }}</span>
			<span class="last-message">{{ lastMessage }}</span>
		</div>
		<span class="message-date"> {{ date }}</span>
	</div>
</template>

<script>
export default {
	props: {
		image: {
			type: String,
		},
		title: {
			type: String,
		},
		date: {
			type: String,
		},
		lastMessage: {
			type: String,
		},
	},
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_shared.scss';
.room {
	padding: 16px;
	display: flex;
	flex-direction: row;
	cursor: pointer;
}
.group-photo {
	width: 50px;
	height: 50px;
}
.group-info {
	display: flex;
	flex-direction: column;
	width: 220px;
	.group-name {
		font-style: normal;
		font-weight: 600;
		font-size: 18px;
		color: #000000;
		margin-right: 16px;
		cursor: pointer;
	}
	.last-message {
		font-style: normal;
		font-weight: 300;
		font-size: 12px;
		color: #a5a5a5;
		padding: 8px 16px;
	}
}

.message-date {
	font-style: normal;
	font-weight: 300;
	font-size: 10px;
	color: #a5a5a5;
	position: relative;
	top: 8px;
}
</style>
