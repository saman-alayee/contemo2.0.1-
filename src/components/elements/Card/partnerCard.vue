<template>
	<div class="partner-card-container">
		<BaseCard>
			<template slot="content">
				<div class="partner-item-container">
					<div class="img-container">
						<img :src="$PATH.GET_IMAGE_PATH(avatar)" alt="" />
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
</style>
