<template>
	<div class="add-item">
        <img src="@/assets/img/icon/add-item-icon.svg" alt="">
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';
.add-item {
	padding: 10px 10px;
    background: #fff;
    width: 60px;
    height: 60px;
    border-radius: 21px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-color: $color-primary;
    cursor: pointer;
}
</style>
