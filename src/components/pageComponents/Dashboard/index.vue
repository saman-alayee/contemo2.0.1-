<template>
  <div class="dashboard-component">
    <BaseCard class="w-50">
      <template slot="content">
        <h1>by</h1>
        <p>salam</p>
      </template>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from "../../../components/elements/Card/index.vue";
export default {
  components: {
    BaseCard,
  },
};
</script>
