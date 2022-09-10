<template>
	<div class="partner-card-container">
		<BaseCard padding="16px">
			<template slot="content">
				<div class="partner-item-container">
					<div v-if="hasIcon == true" class="delete-container">
						<img src="@/assets/img/icon/deleteIcon.svg" alt="" />
					</div>
					<div class="img-container">
						<img src="https://picsum.photos/200/300" alt="" />
					</div>
					<div class="name-container">
						<p>{{ name }}</p>
					</div>
					<div class="role-container">
						<p>{{ role }}</p>
					</div>
				</div>
			</template>
		</BaseCard>
	</div>
</template>

<script>
import BaseCard from '@/components/elements/Card/index.vue';
export default {
	components: {
		BaseCard,
	},
	props: {
		role: {
			type: String,
			// required: true,
		},
		hasIcon: {
			type: Boolean,
			default: false,
		},
		name: {
			type: String,
			// required: true,
		},
		avatar: {
			type: String,
			// required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.partner-card-container {
	width: 150px;
}
.partner-item-container {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 20px;
	position: relative;
}
.name-container {
	p {
		font-weight: 600;
		font-size: 15px;
		line-height: 20px;
		color: #000000;
		margin-top: 8px;
		margin-bottom: 0;
		white-space: nowrap;
	}
}
.role-container {
	p {
		font-weight: 300;
		font-size: 15px;
		line-height: 20px;
		color: #000000;
		margin-top: 8px;
		margin-bottom: 0;
	}
}
.delete-container {
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
}
.img-container {
	width: 60px;
	height: 60px;

	img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
}
</style>
