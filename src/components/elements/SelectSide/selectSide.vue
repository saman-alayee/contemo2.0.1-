<template>
	<div class="select-side-card">
		<h1>{{title}}</h1>
		<img :src="image" alt="" />
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
		},
		image: {
			type: String,
		},
	},
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_shared.scss';
.select-side-card {
	margin-top: 10rem;
	box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.05);
	border-radius: 20px;
	width: 300px;
	height: 150px;
	margin-right: 100px;
	h1 {
		font-weight: 900;
		font-size: 30px;
		padding-top: 3.5rem;
		padding-right: 3rem;
		color: #000000;
	}
	img {
		width: 270px;
		height: 220px;
		position: relative;
		right: 131px;
		top: -150px;
	}
}
.select-side-card:hover {
	color: #fff;
	cursor: pointer;
}
</style>
