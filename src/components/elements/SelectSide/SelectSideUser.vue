<template>
	<div class="select-side-user">
		<div class="container">
			<div class="col-12">
				<img class="mt-5" src="@/assets/vectors/Contemo-Logo.svg" />
			</div>
			<div class="heading-container col-12 mt-3">
				<h1>کارپذیر هستید یا کارفرما؟</h1>
			</div>
			<div class="sides">
				<selectSide
					class="employee"
					v-for="item in employee"
					:key="item.id"
					:title="item.title"
					:image="item.img"
				/>
				<selectSide
					class="employer"
					v-for="item in employeer"
					:key="item.id"
					:title="item.title"
					:image="item.img"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import selectSide from '@/components/elements/SelectSide/selectSide.vue';
export default {
	components: {
		selectSide,
	},
	data() {
		return {
			employee: [{ title: 'کارپذیر', img: '@/assets/vectors/employee-vector.svg' }],
			employeer: [{ title: 'کارفرما', img: '@/assets/vectors/employer-vector.svg' }],
		};
	},
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_shared.scss';
.select-side-user {
	width: 100%;
	height: 100vh;
	background: #f5f5f5;
	display: flex;
}
.heading-container {
	display: flex;
	justify-content: center;
	h1 {
		font-weight: 900;
		font-size: 32px;
	}
}
.sides {
	display: flex;
	flex-wrap: wrap;
	gap: 8rem;
	align-items: center;
	justify-content: center;
}
.employee:hover {
	background: #4461f2;
}
.employer:hover {
	background: #fcbf00;
}
</style>
