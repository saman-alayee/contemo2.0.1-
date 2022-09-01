<template>
	<div
		class="custom-control custom-switch"
		:class="[`custom-switch-${switchColor}`, `switch-${size}`]"
	>
		<input
			type="checkbox"
			class="custom-control-input"
			:id="id"
			:checked="value"
			v-on="inputListeners"
			v-bind="$attrs"
		/>
		<span class="switch-text-left" v-if="leftText">{{ leftText }}</span>
		<label class="custom-control-label" :for="id">
			<span class="switch-icon-left" v-if="leftImageUrl && value">
				<img :src="leftImageUrl" alt />
			</span>
			<span class="switch-icon-right" v-if="rightImageUrl && !value">
				<img :src="rightImageUrl" alt />
			</span>
		</label>
		<span class="switch-text-right" v-if="rightText">{{ rightText }}</span>
	</div>
</template>

<script>
export default {
	props: {
		value: { type: [Boolean, String] },
		switchColor: {
			type: String,
			default: 'primary',
		},
		id: {
			type: String,
			default: 'customSwitch',
		},
		leftText: {
			type: String,
		},
		rightText: {
			type: String,
		},
		leftImageUrl: {
			type: String,
		},
		rightImageUrl: {
			type: String,
		},
		size: {
			type: String,
			default: 'sm',
		},
	},
	computed: {
		inputListeners: function () {
			var vm = this;
			// `Object.assign` merges objects together to form a new object
			return Object.assign(
				{},
				// We add all the listeners from the parent
				this.$listeners,
				// Then we can add custom listeners or override the
				// behavior of some listeners.
				{
					// This ensures that the component works with v-model
					input: function (event) {
						vm.$emit('input', event.target.checked);
					},
				},
			);
		},
	},
};
</script>

<style lang="scss" scoped>
img {
	max-width: 10px;
	max-height: 10px;
	margin-bottom: 2px;
}
.custom-control-label {
	&::before {
		background-color: #4461f2 !important;
	}
}
.switch-text-left {
	margin-left: 4px;
}
.switch-text-right {
	margin-right: 4px;
}
</style>
