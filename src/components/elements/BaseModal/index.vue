<template>
	<div class="base-modal-wrapper" :class="{ show: show }">
		<div class="container">
			<slot name="base-content" @click="close"></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		size: {
			// size of modal
			default: null,
			type: String,
			// Sample ====>>>> 'full' OR null (should be enhanced)
		},
		closeBtn: {
			// close button show condition
			default: false,
			type: Boolean,
		},
	},
	data() {
		return {
			show: false,
		};
	},
	methods: {
		open() {
			this.show = true;
			document.getElementsByTagName('body')[0].style.overflow = 'hidden';
			this.$emit('onOpened');
		},
		close() {
			this.show = false;
			document.getElementsByTagName('body')[0].style.overflow = 'auto';
			this.$emit('onClosed');
		},
	},
};
</script>

<style scoped lang="scss">
.base-modal-wrapper {
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 100000;
	top: 0;
	overflow: hidden;
	opacity: 0;
	left: 0;
	visibility: hidden;
	transition: 0.5s;
	background: rgba(217, 217, 217, 0.6);
	backdrop-filter: blur(10px);

	&.show {
		opacity: 1;
		visibility: visible;
	}
}
.container {
	height: 100%;
}
</style>
