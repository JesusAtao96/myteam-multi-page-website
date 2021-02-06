<template>
  <div class="quote">
    <p class="quote__description paragraph-2">{{ description }}</p>
    <h3 class="quote__person heading-3">{{ person }}</h3>
    <p class="quote__position">{{ position }}</p>
    <nuxt-img class="quote__avatar" :src="image" loading="lazy" width="62" />
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: true
    },
    person: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
  }
}
</script>

<style lang="scss" scoped>
.quote {
  padding-top: 36px;
  padding-bottom: 11px;
  background-image: url(/images/icon-quotes.svg);
  background-repeat: no-repeat;
  background-position: left 50% top;

  @media only screen and (max-width: $bp-medium) {
    padding-top: 36px;
    padding-bottom: 0;
  }

  &__description {
    text-align: center;
    margin-bottom: 24px;
    padding: 0 5px;
    font-weight: 600;

    @media only screen and (max-width: $bp-medium) {
      margin-bottom: 16px;
      padding: 0 65px;
    }

    @media only screen and (max-width: $bp-small) {
      margin-bottom: 16px;
      padding: 0;
    }
  }

  &__person {
    color: $rapture-blue;
    text-align: center;
    margin-bottom: 2px;
  }

  &__position {
    text-align: center;
    font-style: italic;
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.8rem;
  }

  &__avatar {
    @include avatar(62px);

    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 32px;

    @media only screen and (max-width: $bp-medium) {
      margin-top: 16px;
    }
  }

}
</style>
