<template>
  <section class="we">
    <div class="we__content">
      <h1 class="we__title heading-1-small">About</h1>

      <p class="we__description paragraph-1">
        We help companies build dynamic teams made up of top global talent.
        Using our network of passionate professionals we drive innovation and
        deliver incredible outcomes. Talented, diverse teams shape the best
        products and experiences. We’ll bring those teams to you.
      </p>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.we {
  background-color: $midnight-green;
  @extend %main-grid;

  background-image: url(/images/bg-pattern-about-1-mobile-nav-1.svg);
  background-repeat: no-repeat;
  background-position: right -100px bottom;

  @media only screen and (max-width: $bp-small) {
    background-position: right -100px bottom -100px;
  }

  &__content {
    grid-column: center-start / center-end;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 3rem;
    grid-template-rows: 47px auto 120px;

    @media only screen and (max-width: $bp-medium) {
      column-gap: 1rem;
      grid-template-rows: 46px repeat(2, auto) 112px;
    }

    @media only screen and (max-width: $bp-small) {
      grid-template-columns: 1fr;
      grid-template-rows: 32px repeat(2, auto) 108px;
      column-gap: 0;
    }
  }

  &__title {
    grid-column: 1 / 5;
    grid-row: 2 / 3;

    &--coral {
      color: $light-coral;
    }

    @media only screen and (max-width: $bp-medium) {
      grid-column: 3 / 11;
      grid-row: 2 / 3;
      margin-bottom: 24px;
      max-width: 395px;
      width: 100%;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }

    @media only screen and (max-width: $bp-small) {
      grid-column: 1 / 2;
      margin-bottom: 16px;
    }
  }

  &__description {
    grid-column: 5 / -1;
    grid-row: 2 / 3;
    align-self: end;
    justify-self: end;
    height: 100%;
    display: flex;
    align-items: flex-end;
    position: relative;
    margin-top: 44px;

    @media only screen and (max-width: $bp-medium) {
      margin-top: 0;
    }

    &::before {
      content: '';
      width: 50px;
      height: 4px;
      background-color: $light-coral;
      position: absolute;
      top: 0;
      left: 0;

      @media only screen and (max-width: $bp-medium) {
        display: none;
      }
    }

    @media only screen and (max-width: $bp-medium) {
      grid-column: 3 / 11;
      grid-row: 3 / 4;
      text-align: center;
      margin-bottom: 0;
    }

    @media only screen and (max-width: $bp-small) {
      grid-column: 1 / 2;
    }
  }
}
</style>
