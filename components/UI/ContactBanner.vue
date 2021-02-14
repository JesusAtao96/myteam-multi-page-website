<template>
  <div class="banner">
    <div class="banner__content">
      <h1 class="banner__title heading-2">Ready to get started?</h1>
      <nuxt-link class="banner__btn" to="/contact">contact us</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.banner {
  background-color: $light-coral;
  height: 200px;
  @extend %main-grid;

  align-items: center;
  align-content: center;
  background-image: url(/images/bg-pattern-home-6-about-5.svg);
  background-repeat: no-repeat;
  background-position: left bottom;

  @media only screen and (max-width: $bp-small) {
    height: 302px;
  }

  &__content {
    grid-column: center-start / center-end;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 3rem;
    align-items: center;

    @media only screen and (max-width: $bp-small) {
      grid-template-rows: repeat(2, min-content);
      grid-template-columns: 1fr;
      column-gap: 0;
      row-gap: 2.4rem;
      text-align: center;
    }
  }

  &__title {
    grid-column: 2 / 10;
    color: $sacramento-state-green;

    @media only screen and (max-width: $bp-medium) {
      grid-column: 2 / 9;
    }

    @media only screen and (max-width: $bp-small) {
      grid-column: 1 / 2;
    }
  }

  &__btn {
    grid-column: 10 / -1;
    @include button($sacramento-state-green, transparent, $sacramento-state-green, $white, $sacramento-state-green);

    @media only screen and (max-width: $bp-medium) {
      grid-column: 9 / -1;
    }

    @media only screen and (max-width: $bp-small) {
      grid-column: 1 / 2;
      margin: auto;
    }
  }
}
</style>
