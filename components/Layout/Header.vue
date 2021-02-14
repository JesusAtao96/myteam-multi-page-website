<template>
  <header class="header">
    <nav class="header__nav">
      <nuxt-link class="header__brand" to="/">
        <nuxt-img class="header__logo" src="/images/logo.svg" loading="eager" width="160" />
      </nuxt-link>

      <ul class="header__navigation">
        <li class="header__link"><nuxt-link class="header__anchor link-anchor" to="/">home</nuxt-link></li>
        <li class="header__link"><nuxt-link class="header__anchor link-anchor" to="/about">about</nuxt-link></li>
      </ul>

      <nuxt-link class="header__btn" to="/contact">contact us</nuxt-link>

      <button class="header__menu" title="Toggle Menu" @click="onToggle">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z"/></g></svg>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    onToggle() {
      this.isSidebarToggled = true
      this.$emit('onToggle', true)
    },
  },
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
    height: 128px;
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

  &__brand {
    display: inherit;
  }

  &__logo {
    width: 160px;

    @media only screen and (max-width: $bp-medium) {
      width: 128px;
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

  &__anchor {
    font-size: 1.8rem;
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
