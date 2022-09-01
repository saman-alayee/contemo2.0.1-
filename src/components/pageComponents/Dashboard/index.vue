<template>
	<div class="dashboard-component">
		<BaseCard
			title="say hello baby"
			description="its a description"
			background="black"
			width="50%"
			color="white"
			footer="this is a footer text "
		>
		</BaseCard>
    <BaseCard
			title="test"
			description="its a test"
			background="red"
			width="50%"
			color="white"
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
