<template>
  <div class="item">
    <nuxt-img class="item__image" :src="image" loading="lazy" width="72" />
    <div class="item__text">
      <h3 class="item__title">{{ title }}</h3>
      <p class="item__description paragraph-2">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: grid;
  grid-template-columns: min-content 1fr;
  column-gap: 2.3rem;

  @media only screen and (max-width: $bp-small) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content);
    row-gap: 1.6rem;
    text-align: center;
  }

  &__image {
    width: 72px;
    height: 72px;
    object-fit: contain;

    @media only screen and (max-width: $bp-small) {
      margin: auto;
    }
  }

  &__text {
    display: grid;
    grid-template-rows: repeat(2, min-content);
    row-gap: 1.6rem;

    @media only screen and (max-width: $bp-small) {
      row-gap: .8rem;
    }
  }

  &__title {
    font-weight: bold;
    font-size: 1.8rem;
    line-height: 2.8rem;
    color: $light-coral;
  }

  &__description {
    height: auto;
    mix-blend-mode: normal;
    opacity: 0.8;
  }
}
</style>
