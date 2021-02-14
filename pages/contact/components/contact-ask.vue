<template>
  <div class="contact__ask">
    <h2 class="contact__title heading-1-small">Contact</h2>
    <h2 class="contact__subtitle">Ask us about</h2>

    <div class="contact__items">
      <div class="contact__item">
        <nuxt-img class="contact__image" src="/images/icon-person.svg" loading="lazy" />
        <p class="contact__description paragraph-1">The quality of our talent network</p>
      </div>
      <div class="contact__item">
        <nuxt-img class="contact__image" src="/images/icon-cog.svg" loading="lazy" />
        <p class="contact__description paragraph-1">Usage & implementation of our software</p>
      </div>
      <div class="contact__item">
        <nuxt-img class="contact__image" src="/images/icon-chart.svg" loading="lazy" />
        <p class="contact__description paragraph-1">How we help drive innovation</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.contact {
  &__title {
    @media only screen and (max-width: $bp-medium) {
      font-size: 6.4rem;
      line-height: 5.6rem;
      text-align: center;
    }

    @media only screen and (max-width: $bp-small) {
      font-size: 4rem;
      line-height: 4rem;
    }
  }

  &__subtitle {
    font-weight: bold;
    font-size: 3.2rem;
    line-height: 4.8rem;
    color: $light-coral;
    margin-top: 1.6rem;
    margin-bottom: 3.2rem;

    @media only screen and (max-width: $bp-medium) {
      margin-top: 2.4rem;
      margin-bottom: 2.4rem;
      text-align: center;
    }

    @media only screen and (max-width: $bp-small) {
      margin-top: 1.6rem;
      margin-bottom: 4rem;
    }
  }

  &__items {
    display: grid;
    row-gap: .8rem;

    @media only screen and (max-width: $bp-medium) {
      margin: 0 30px;
    }

    @media only screen and (max-width: $bp-small) {
      margin: 0;
      justify-content: center;
    }
  }

  &__item {
    display: flex;
    align-items: center;
  }

  &__image {
    width: 72px;
    height: 72px;
    object-fit: contain;
    object-position: right;
    margin-right: 2.3rem;

    @media only screen and (max-width: $bp-small) {
      margin-right: 2.3rem;
    }
  }

  &__description {
    font-weight: bold;

    @media only screen and (max-width: $bp-medium) {
      font-size: 1.8rem;
      line-height: 2.8rem;
    }
  }
}
</style>
