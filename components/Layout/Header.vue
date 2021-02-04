<template>
  <header class="header">
    <nav class="header__nav">
      <img class="header__logo" src="~/assets/images/logo.svg" alt="Logo">

      <ul class="header__navigation">
        <li class="header__link"><nuxt-link class="header__anchor link-anchor" to="/">home</nuxt-link></li>
        <li class="header__link"><nuxt-link class="header__anchor link-anchor" to="/about">about</nuxt-link></li>
      </ul>

      <nuxt-link class="header__btn" to="/contact">contact us</nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
  background-color: $midnight-green;
  height: 194px;
  @extend %main-grid;

  &__nav {
    grid-column: center-start / center-end;
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    align-items: center;
    column-gap: 8rem;

    @media only screen and (max-width: $bp-medium) {
      column-gap: 4rem;
    }
  }

  &__logo {
    width: 16rem;
  }

  &__navigation {
    list-style: none;
    display: flex;
  }

  &__link {
    margin-right: 4rem;

    &:last-child {
      margin-right: 0;
    }
  }

  &__btn {
    color: $white;
    text-decoration: none;
    width: 153px;
    height: 48px;
    border: 2px solid $white;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 0;
    transition: background-color .3s, color .5s, transform 1s;

    &:hover {
      background-color: $white;
      color: $dark-green;
      transform: scale(1.1);
    }
  }
}
</style>
