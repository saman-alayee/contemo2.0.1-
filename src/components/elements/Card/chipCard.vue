<template>
  <div class="base-card-container" :style="{ background: background }">
    <div class="row">
      <div class="col-md-7" :style="{ color: color }">
        <p>{{ title }}</p>
      </div>
      <div class="col-md-5">
        <div class="img-container" v-if="icon">
          <img :src="$PATH.GET_IMAGE_PATH(icon)" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
    },
    color: {
      type: String,
    },
    background: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_shared.scss";

.base-card-container {
  padding: 8px;
  height: 42px;
  border: 1px solid $color-primary;
  filter: drop-shadow(-2px 4px 10px rgba(0, 0, 0, 0.05));
  border-radius: 10px;
  white-space: nowrap;
  text-align: center;
}
.base-card-container {
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 20px;
    margin-top: 3px;
  }
}
</style>
