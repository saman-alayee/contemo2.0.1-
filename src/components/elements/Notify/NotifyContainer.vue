<template>
	<!-- container for notifications -->
	<div>
		<notifications
			animation-type="velocity"
			group="tc"
			width="33%"
			position="top center"
			class="my-style"
		>
			<template slot="body" slot-scope="props">
				<div class="notify-container" :class="[`bg-${props.item.type}`]">
					<font-awesome-icon class="bell-icon" icon="bell" />
					<div class="notify-body">
						<div class="notify-title">{{ props.item.title }}</div>
						<div class="notify-text" v-html="props.item.text"></div>
					</div>
					<font-awesome-icon class="close-icon" icon="times" @click="props.close" />
				</div>
			</template>
		</notifications>

		<notifications
			animation-type="velocity"
			group="tr"
			width="33%"
			position="top right"
			class="my-style"
		>
			<template slot="body" slot-scope="props">
				<div class="notify-container" :class="[`bg-${props.item.type}`]">
					<font-awesome-icon class="bell-icon" icon="bell" />
					<div class="notify-body">
						<div class="notify-title">{{ props.item.title }}</div>
						<div class="notify-text" v-html="props.item.text"></div>
					</div>
					<font-awesome-icon class="close-icon" icon="times" @click="props.close" />
				</div> </template
		></notifications>
		<notifications
			animation-type="velocity"
			group="tl"
			width="33%"
			position="top left"
			class="my-style"
		>
			<template slot="body" slot-scope="props">
				<div class="notify-container" :class="[`bg-${props.item.type}`]">
					<font-awesome-icon class="bell-icon" icon="bell" />
					<div class="notify-body">
						<div class="notify-title">{{ props.item.title }}</div>
						<div class="notify-text" v-html="props.item.text"></div>
					</div>
					<font-awesome-icon class="close-icon" icon="times" @click="props.close" />
				</div> </template
		></notifications>
		<notifications
			animation-type="velocity"
			group="bc"
			width="33%"
			position="bottom center"
			class="my-style"
		>
			<template slot="body" slot-scope="props">
				<div class="notify-container" :class="[`bg-${props.item.type}`]">
					<font-awesome-icon class="bell-icon" icon="bell" />
					<div class="notify-body">
						<div class="notify-title">{{ props.item.title }}</div>
						<div class="notify-text" v-html="props.item.text"></div>
					</div>
					<font-awesome-icon class="close-icon" icon="times" @click="props.close" />
				</div> </template
		></notifications>
		<notifications
			animation-type="velocity"
			group="br"
			width="33%"
			position="bottom right"
			class="my-style"
		>
			<template slot="body" slot-scope="props">
				<div class="notify-container" :class="[`bg-${props.item.type}`]">
					<font-awesome-icon class="bell-icon" icon="bell" />
					<div class="notify-body">
						<div class="notify-title">{{ props.item.title }}</div>
						<div class="notify-text" v-html="props.item.text"></div>
					</div>
					<font-awesome-icon class="close-icon" icon="times" @click="props.close" />
				</div> </template
		></notifications>
		<notifications
			animation-type="velocity"
			group="bl"
			width="33%"
			position="bottom left"
			class="my-style"
		>
			<template slot="body" slot-scope="props">
				<div class="notify-container" :class="[`bg-${props.item.type}`]">
					<font-awesome-icon class="bell-icon" icon="bell" />
					<div class="notify-body">
						<div class="notify-title">{{ props.item.title }}</div>
						<div class="notify-text" v-html="props.item.text"></div>
					</div>
					<font-awesome-icon class="close-icon" icon="times" @click="props.close" />
				</div> </template
		></notifications>
	</div>
</template>

<style lang="scss" scoped>
.my-style {
	min-width: 265px;
	position: fixed !important;
	z-index: 2000000 !important;
	.notify-container {
		padding: 8px 16px;
		border-radius: 8px;
		margin: 8px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #007bff;
		color: white;

		.notify-body {
			text-align: center;
			.notify-title {
				font-size: 18px;
				font-weight: bold;
				margin-bottom: 3px;
			}
			.notify-text {
				text-align: right;
				padding: 4px 8px;
			}
		}
		.bell-icon {
			font-size: 20px;
		}
		.close-icon {
			font-size: 20px;
			cursor: pointer;
		}
	}
}
</style>
