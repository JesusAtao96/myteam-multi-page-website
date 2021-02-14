<template>
  <section class="build">
    <div class="build__content">
      <h2 class="build__title heading-2">Build & manage distributed teams like no one else.</h2>

      <div class="build__items">
        <build-item
          v-for="item of items"
          v-bind:key="item.id"
          :image="item.image"
          :title="item.title"
          :description="item.description"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          image: '/images/icon-person.svg',
          title: 'Experienced Individuals',
          description: 'Our network is made up of highly experienced professionals who are passionate about what they do.'
        },
        {
          id: 2,
          image: '/images/icon-cog.svg',
          title: 'Easy to Implement',
          description: 'Our processes have been refined over years of implementation meaning our teams always deliver.'
        },
        {
          id: 3,
          image: '/images/icon-chart.svg',
          title: 'Enhanced Productivity',
          description: 'Our customized platform with in-built analytics helps you manage your distributed teams.'
        }
      ]
    };
  }
}
</script>

<style lang="scss" scoped>
.build {
  background-color: $sacramento-state-green;
  @extend %main-grid;

  background-image: url(/images/bg-pattern-home-3.svg);
  background-repeat: no-repeat;
  background-position: right -100px bottom;

  @media only screen and (max-width: $bp-medium) {
    background-position: right -100px top;
  }

  &__content {
    grid-column: center-start / center-end;
    grid-row: 2 / 3;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 140px auto 140px;
    column-gap: 3rem;

    @media only screen and (max-width: $bp-medium) {
      grid-template-rows: 100px auto auto 100px;
    }

    @media only screen and (max-width: $bp-small) {
      grid-template-columns: 1fr;
      grid-template-rows: 64px auto auto 64px;
      column-gap: 0;
    }
  }

  &__title {
    grid-column: 1 / 6;
    grid-row: 2 / 3;
    padding-top: 58px;
    position: relative;

    @media only screen and (max-width: $bp-medium) {
      grid-column: 2 / 12;
      grid-row: 2 / 3;
      padding-top: 36px;
      max-width: 530px;
      width: 100%;
    }

    @media only screen and (max-width: $bp-small) {
      max-width: 245px;
    }

    &::before {
      content: '';
      width: 50px;
      height: 4px;
      background-color: $light-coral;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  &__items {
    grid-column: 7 / -1;
    grid-row: 2 / 3;
    display: grid;
    row-gap: 3.2rem;
    padding-top: 58px;

    @media only screen and (max-width: $bp-medium) {
      grid-column: 2 / 12;
      grid-row: 3 / 4;
      padding-top: 64px;
    }

    @media only screen and (max-width: $bp-small) {
      padding-top: 56px;
      row-gap: 4.8rem;
    }
  }
}
</style>
