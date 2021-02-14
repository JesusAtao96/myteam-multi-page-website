<template>
  <section class="delivering">
    <div class="delivering__content">
      <h2 class="delivering__title heading-2">Delivering real results for top companies. Some of our <span class="delivering__title--rapture-blue">success stories.</span></h2>

      <div class="delivering__quotes">
        <quote
          v-for="quote of quotes"
          v-bind:key="quote.id"
          :description="quote.description"
          :person="quote.person"
          :position="quote.position"
          :image="quote.image"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      quotes: [
        {
          id: 1,
          description: `
            “The team perfectly fit the specialized skill set required. They focused
            on the most essential features helping us launch the platform eight months
            faster than planned.”
          `,
          person: 'Kady Baker',
          position: 'Product Manager at Bookmark',
          image: '/images/avatar-kady.jpg'
        },
        {
          id: 2,
          description: `
            “We needed to automate our entire onboarding process. The team came in and
            built out the whole journey. Since going live, user retention has gone
            through the roof!”
          `,
          person: 'Aiysha Reese',
          position: 'Founder of Manage',
          image: '/images/avatar-aiysha.jpg'
        },
        {
          id: 3,
          description: `
            “Amazing. Our team helped us build an app that delivered a new experience for
            hiring a physio. The launch was an instant success with 100k downloads in the
            first month.”
          `,
          person: 'Arthur Clarke',
          position: 'Co-founder of MyPhysio',
          image: '/images/avatar-arthur.jpg'
        }
      ]
    };
  }
}
</script>

<style lang="scss" scoped>
.delivering {
  background-color: $deep-jungle-green;
  @extend %main-grid;

  background-image: url(/images/bg-pattern-home-4-about-3.svg), url(/images/bg-pattern-home-5.svg);
  background-repeat: no-repeat;
  background-position: left top, right bottom;

  &__content {
    grid-column: center-start / center-end;
    grid-row: 2 / 3;
    display: grid;
    grid-template-rows: 140px repeat(2, auto) 140px;

    @media only screen and (max-width: $bp-medium) {
      grid-template-rows: 100px repeat(2, auto) 100px;
    }

    @media only screen and (max-width: $bp-small) {
      grid-template-rows: 140px repeat(2, auto) 164px;
    }
  }

  &__title {
    grid-row: 2 / 3;
    text-align: center;
    max-width: 945px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 56px;

    @media only screen and (max-width: $bp-medium) {
      display: block;
      max-width: 485px;
      margin-bottom: 48px;
    }

    &--rapture-blue {
      color: $rapture-blue;
    }
  }

  &__quotes {
    grid-row: 3 / 4;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;

    @media only screen and (max-width: $bp-medium) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, min-content);
      column-gap: 0;
      row-gap: 4.8rem;
    }
  }
}
</style>
