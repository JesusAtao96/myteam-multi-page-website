<template>
  <div class="sidebar">
    <div class="sidebar__overlay"></div>
    <div class="sidebar__content">
      <div class="sidebar__header">
        <button class="sidebar__close" title="Toggle Menu" @click="onToggle">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17"><path fill="#FFF" fill-rule="evenodd" d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"/></svg>
        </button>
      </div>

      <ul class="sidebar__navigation">
        <li class="sidebar__link"><a class="sidebar__anchor link-anchor" @click="navigateTo('/')">home</a></li>
        <li class="sidebar__link"><a class="sidebar__anchor link-anchor" @click="navigateTo('/about')">about</a></li>
      </ul>

      <a class="sidebar__btn" @click="navigateTo('/contact')">contact us</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onToggle() {
      this.$emit('onToggle', false)
    },
    navigateTo(path) {
      this.$router.push(path);
      this.onToggle();
    }
  },
}
</script>

<style lang="scss" scoped>
  .sidebar {
    display: grid;
    grid-template-columns: 1fr min-content;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 100;
    transition: all 1s ease;

    &__overlay {
      grid-column: 1 / -1;
      grid-row: 1 / 2;
      background-color: rgba($black, .5);
      transition: background-color .4s ease;
    }

    &__content {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      background-color: $police-blue;
      width: 255px;
      display: grid;
      grid-template-rows: 128px repeat(2, min-content);
      grid-template-columns: 48px 1fr 25px;
      background-image: url(/images/bg-pattern-about-1-mobile-nav-1.svg);
      background-repeat: no-repeat;
      background-position: right -100px bottom;
      transition: width .4s ease;
    }

    &__header {
      grid-column: 2 / 3;
      justify-self: end;
      align-self: center;
    }

    &__close {
      background-color: transparent;
      width: 24px;
      border: 0;
      outline: 0;
    }

    &__navigation {
      grid-column: 2 / 3;
      list-style: none;
    }

    &__link {
      margin-bottom: 2.4rem;

      &:last-child {
        margin-bottom: 8.8rem;
      }
    }

    &__anchor {
      font-size: 1.8rem;
      color: $white;
    }

    &__btn {
      grid-column: 2 / 3;
      @include button($white, transparent, $white, $dark-green, $white);

      width: 159px;
    }
  }

  .fade-enter-active, .fade-leave-active {
    .sidebar {
      &__overlay {
        background-color: rgba($black, .5);
      }

      &__content {
        width: 255px;
      }
    }
  }

  .fade-enter, .fade-leave-to {
    .sidebar {
      &__overlay {
        background-color: transparent;
      }

      &__content {
        width: 0;
      }
    }
  }
</style>
