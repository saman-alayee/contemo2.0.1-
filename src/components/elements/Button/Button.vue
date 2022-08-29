<template>
	<button
		type="button"
		class="btn"
		:class="[
			btnColorClass,
			btnTextColorClass,
			btnBorderColorClass,
			btnIconClass,
			roundedCircleClass,
			btnSizeClass,
			blockBtnClass,
		]"
		:style="styleObj"
		v-bind="$attrs"
		v-on="$listeners"
		:disabled="disabled"
	>
		<div class="spinner-border spinner-border-sm" role="status" v-if="loading"></div>
		<div v-if="!loading" class="btn-text">
			<span v-if="title">{{ title }}</span>
			<span class="iconify" :data-icon="btnImageUrl" v-if="btnImageUrl"
				:class="{ 'has-margin': title }"></span>
			<slot></slot>
		</div>
	</button>
</template>

<script>
export default {
	inheritAttrs: false,
	props: {
		title: {
			type: String,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		btnImageUrl: {
			type: String,
		},
		btnType: {
			type: String,
			default: 'primary',
		},
		btnTextColor: {
			type: String,
		},
		btnBorderColor: {
			type: String,
		},
		btnSize: {
			type: String,
		},
		outline: {
			type: Boolean,
		},
		flat: {
			type: Boolean,
		},
		gradient: {
			type: Boolean,
		},
		relief: {
			type: Boolean,
		},
		square: {
			type: Boolean,
		},
		round: {
			type: Boolean,
		},
		block: {
			type: Boolean,
		},
		icon: {
			type: Boolean,
		},
		roundedCircle: {
			type: Boolean,
		},

		loading: {
			type: Boolean,
			default: false,
		},
		styleObj: {
			type: Object,
		},
	},
	computed: {
		btnSizeClass() {
			if (this.btnSize) {
				return `btn-${this.btnSize}`;
			}
			return false;
		},
		btnColorClass() {
			if (this.flat) {
				return `btn-flat-${this.btnType}`;
			}
			if (this.gradient) {
				return `bg-gradient-${this.btnType}`;
			}
			if (this.relief) {
				return `btn-relief-${this.btnType}`;
			}
			if (this.square) {
				if (this.outline) {
					return `btn-outline-${this.btnType} square`;
				}
				return `btn-${this.btnType} square`;
			}
			if (this.round) {
				if (this.outline) {
					return `btn-outline-${this.btnType} round`;
				}
				return `btn-${this.btnType} round`;
			}
			if (this.outline) {
				return `btn-outline-${this.btnType}`;
			}
			return `btn-${this.btnType}`;
		},
		btnTextColorClass() {
			if (this.btnTextColor) {
				return `text-${this.btnTextColor}`;
			}
			return false;
		},
		btnBorderColorClass() {
			if (this.btnBorderColor) {
				return `border-${this.btnBorderColor}`;
			}
			return false;
		},
		btnIconClass() {
			if (this.icon) {
				return `btn-icon`;
			}
			return false;
		},
		roundedCircleClass() {
			if (this.roundedCircle) {
				return `rounded-circle`;
			}
			return false;
		},
		blockBtnClass() {
			if (this.block) {
				return `btn-block`;
			}
			return false;
		},
	},
};
</script>

<style lang="scss" scoped>
button {
	&:disabled {
		box-shadow: unset !important;
		cursor: no-drop;
	}
}

.button-image {
	width: 14px;
	height: 14px;
	margin-top: 4px;
	&.has-margin {
		margin-right: 8px;
	}
}

.btn-text {
	display: flex;
	align-items: center;
	justify-content: center;
	span {
		font-size: 14px;
	}
	.iconify {
			margin-right: 10px;
			margin-top:3px ;
	}
	&:hover {
		color: #fff;
		span {
			color: #fff !important;
		}
		.iconify {
			color: #fff !important;
			margin-right: 10px;
			margin-top:3px ;
		}
	}
}
</style>
