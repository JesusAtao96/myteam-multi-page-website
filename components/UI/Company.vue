<template>
  <div class="company">
    <nuxt-img class="company__logo" :src="image" loading="lazy" />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.company {
  display: flex;
  align-items: center;

  &__logo {
    width: 100%;
  }
}
</style>
