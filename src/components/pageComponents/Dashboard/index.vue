<template>
	<div class="dashboard-component">
		<BaseCard
			title="say hello baby"
			description="its a description"
			background="white"
			width="100%"
			footer="this is a footer text "
		>
		</BaseCard>
	</div>
</template>

<script>
import BaseCard from '../../../components/elements/Card/index.vue';
export default {
	components: {
		BaseCard,
	},
};
</script>
