<template>
  <section class="client">
    <div class="client__content">
      <div class="client__title heading-2">Some of our clients</div>

      <div class="client__companies">
        <company
          v-for="company of companies"
          v-bind:key="company.id"
          :image="company.image"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      companies: [
        {
          id: 1,
          image: '/images/logo-the-verge.png',
        },
        {
          id: 2,
          image: '/images/logo-jakarta-post.png',
        },
        {
          id: 3,
          image: '/images/logo-the-guardian.png',
        },
        {
          id: 4,
          image: '/images/logo-tech-radar.png',
        },
        {
          id: 5,
          image: '/images/logo-gadgets-now.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.client {
  background-color: $sacramento-state-green;
  @extend %main-grid;

  background-image: url(/images/bg-pattern-about-4.svg);
  background-repeat: no-repeat;
  background-position: left top;

  &__content {
    grid-column: center-start / center-end;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 140px repeat(2, auto) 140px;
    column-gap: 3rem;

    @media only screen and (max-width: $bp-medium) {
      grid-template-rows: 100px repeat(2, auto) 100px;
    }

    @media only screen and (max-width: $bp-small) {
      grid-template-columns: 1fr;
      grid-template-rows: 88px repeat(2, auto) 88px;
    }
  }

  &__title {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    text-align: center;
    margin-bottom: 6.4rem;

    @media only screen and (max-width: $bp-medium) {
      margin-bottom: 4.8rem;
    }

    @media only screen and (max-width: $bp-small) {
      margin-bottom: 6.4rem;
    }
  }

  &__companies {
    grid-column: 1 / -1;
    grid-row: 3 / 4;
    display: grid;
    grid-template-columns: 165px 184px 180px 165px 98px;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: $bp-large) {
      grid-template-columns: 123px 137px 134px 123px 73px;
    }

    @media only screen and (max-width: $bp-medium) {
      grid-template-columns: 103px 114px 112px 103px 61px;
    }

    @media only screen and (max-width: $bp-small) {
      width: 150px;
      margin: auto;
      grid-template-columns: 1fr;
      grid-auto-flow: row;
      row-gap: 6.2rem;
    }
  }
}
</style>
