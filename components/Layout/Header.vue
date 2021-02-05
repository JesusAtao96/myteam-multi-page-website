<template>
  <header class="header">
    <nav class="header__nav">
      <img class="header__logo" src="~/assets/images/logo.svg" alt="Logo">

      <ul class="header__navigation">
        <li class="header__link"><nuxt-link class="header__anchor link-anchor" to="/">home</nuxt-link></li>
        <li class="header__link"><nuxt-link class="header__anchor link-anchor" to="/about">about</nuxt-link></li>
      </ul>

      <nuxt-link class="header__btn" to="/contact">contact us</nuxt-link>

      <button class="header__menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z"/></g></svg>
      </button>
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

  @media only screen and (max-width: $bp-medium) {
    height: 178px;
  }

  @media only screen and (max-width: $bp-small) {
    height: 178px;
  }

  &__nav {
    grid-column: center-start / center-end;
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    align-items: center;
    column-gap: 8rem;

    @media only screen and (max-width: $bp-medium) {
      column-gap: 4rem;
    }

    @media only screen and (max-width: $bp-small) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 0;
    }
  }

  &__logo {
    width: 16rem;

    @media only screen and (max-width: $bp-medium) {
      width: 12.8rem;
    }
  }

  &__navigation {
    list-style: none;
    display: flex;

    @media only screen and (max-width: $bp-small) {
      display: none;
    }
  }

  &__link {
    margin-right: 4rem;

    &:last-child {
      margin-right: 0;
    }
  }

  &__btn {
    @include button($white, transparent, $white, $dark-green, $white);

    @media only screen and (max-width: $bp-small) {
      display: none;
    }
  }

  &__menu {
    display: none;

    @media only screen and (max-width: $bp-small) {
      display: block;
      background-color: transparent;
      width: 24px;
      border: 0;
      outline: 0;
      justify-self: end;
    }
  }
}
</style>
