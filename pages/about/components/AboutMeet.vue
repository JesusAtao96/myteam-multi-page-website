<template>
  <section class="meet">
    <div class="meet__content">
      <div class="meet__title heading-2">Meet the directors</div>

      <div class="meet__directors">
        <director
          v-for="director of directors"
          v-bind:key="director.id"
          :id="director.id"
          :image="director.image"
          :person="director.person"
          :position="director.position"
          :quote="director.quote"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      directors: [
        {
          id: 1,
          image: '/images/avatar-nikita.jpg',
          person: 'Nikita Marks',
          position: 'Founder & CEO',
          quote: `
            “It always amazes me how much talent there is in every corner of
              the globe.”
          `,
        },
        {
          id: 2,
          image: '/images/avatar-christian.jpg',
          person: 'Cristian Duncan',
          position: 'Co-founder & COO',
          quote: `
            “Distributed teams required unique processes. You need to approach
              work in a new way.”
          `,
        },
        {
          id: 3,
          image: '/images/avatar-cruz.jpg',
          person: 'Cruz Hamer',
          position: 'Co-founder & CTO',
          quote: `
            “Technology is at the forefront of enabling distributed teams.
              That's where we come in.”
          `,
        },
        {
          id: 4,
          image: '/images/avatar-drake.jpg',
          person: 'Drake Heaton',
          position: 'Business Development Lead',
          quote: `
            “Hiring similar people from similar backgrounds is a surefire way
              to stunt innovation.”
          `,
        },
        {
          id: 5,
          image: '/images/avatar-griffin.jpg',
          person: 'Griffin Wise',
          position: 'Lead Marketing',
          quote: `
            “Unique perspectives shape unique products, which is what you need
              to survive these days.”
          `,
        },
        {
          id: 6,
          image: '/images/avatar-aden.jpg',
          person: 'Aden Allan',
          position: 'Head of Talent',
          quote: `
            “Empowered teams create truly amazing products. Set the north star
              and let them follow it.”
          `,
        }
      ]
    };
  }
}
</script>

<style lang="scss" scoped>
.meet {
  background-color: $deep-jungle-green;
  @extend %main-grid;

  background-image: url(/images/bg-pattern-about-2-contact-1.svg),
    url(/images/bg-pattern-home-4-about-3.svg);
  background-repeat: no-repeat;
  background-position: left -100px top, right bottom;

  @media only screen and (max-width: $bp-small) {
    background-position: left -100px top -100px, right bottom;
  }

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
  }

  &__directors {
    grid-column: 1 / -1;
    grid-row: 3 / 4;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    column-gap: 3rem;
    row-gap: 4.8rem;

    @media only screen and (max-width: $bp-large) {
      grid-template-columns: repeat(auto-fit, minmax(281px, 1fr));
      column-gap: 1.1rem;
      row-gap: 4.8rem;
    }

    @media only screen and (max-width: $bp-medium) {
      row-gap: 2.4rem;
    }
  }
}
</style>
