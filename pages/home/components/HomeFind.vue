<template>
  <section class="find">
    <div class="find__content">
      <h1 class="find__title heading-1-large">
        Find the best <span class="find__title--coral">talent</span>
      </h1>

      <p class="find__description paragraph-1">
        Finding the right people and building high performing teams can be hard.
        Most companies aren’t tapping into the abundance of global talent. We’re
        about to change that.
      </p>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.find {
  background-color: $midnight-green;
  @extend %main-grid;

  background-image: url(/images/bg-pattern-home-1.svg);
  background-repeat: no-repeat;
  background-position: left -100px top 56px;

  @media only screen and (max-width: $bp-medium) {
    background-image: none;
  }

  &__content {
    background-image: url(/images/bg-pattern-home-2.svg);
    background-repeat: no-repeat;
    background-position: right bottom;
    grid-column: center-start / center-end;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 3rem;
    grid-template-rows: 56px auto 56px 194px;

    @media only screen and (max-width: $bp-medium) {
      background-position: left 50% bottom;
      grid-template-rows: 46px repeat(2, auto) 256px;
    }

    @media only screen and (max-width: $bp-small) {
      background-position: left 50% bottom;
      grid-template-columns: 1fr;
      grid-template-rows: 32px repeat(2, auto) 197px;
      column-gap: 0;
    }
  }

  &__title {
    grid-column: 1 / 7;
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
      margin-bottom: 18px;
    }
  }

  &__description {
    grid-column: 8 / -1;
    grid-row: 2 / 3;
    align-self: end;
    justify-self: end;
    height: 100%;
    display: flex;
    align-items: flex-end;
    position: relative;
    margin-bottom: 5px;

    &::before {
      content: '';
      width: 50px;
      height: 4px;
      background-color: $rapture-blue;
      position: absolute;
      top: 5px;
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
