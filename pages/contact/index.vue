<template>
  <main class="contact">
    <div class="contact__content">
      <contact-ask />
      <div class="contact__form">
        <contact-form />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  head: {
    title: 'Frontend Mentor | myteam website challenge - Contact'
  }
}
</script>

<style lang="scss" scoped>
.contact {
  background-color: $midnight-green;
  @extend %main-grid;

  background-image: url(/images/bg-pattern-about-2-contact-1.svg), url(/images/bg-pattern-contact-2.svg);
  background-repeat: no-repeat;
  background-position: left -100px top 51px, right -100px bottom;

  @media only screen and (max-width: $bp-medium) {
    background-position: left -100px top 38px, right -100px bottom;
  }

  @media only screen and (max-width: $bp-small) {
    background-image: url(/images/bg-pattern-contact-2.svg);
    background-position: right -100px bottom -100px;
  }

  &__content {
    grid-column: center-start / center-end;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 47px auto 120px;
    column-gap: 3rem;

    @media only screen and (max-width: $bp-medium) {
      grid-template-rows: 46px repeat(2, auto) 112px;
      column-gap: 1rem;
    }

    @media only screen and (max-width: $bp-small) {
      grid-template-columns: 1fr;
      grid-template-rows: 32px repeat(2, auto) 88px;
      column-gap: 0;
    }
  }

  &__ask {
    grid-column: 1 / 7;
    grid-row: 2 / 3;

    @media only screen and (max-width: $bp-medium) {
      grid-column: 2 / 12;
      grid-row: 2 / 3;
      margin-bottom: 64px;
    }

    @media only screen and (max-width: $bp-small) {
      grid-column: 1 / 2;
      margin-bottom: 56px;
    }
  }

  &__form {
    grid-column: 7 / -1;
    grid-row: 2 / 3;

    @media only screen and (max-width: $bp-medium) {
      grid-column: 2 / 12;
      grid-row: 3 / 4;
    }

    @media only screen and (max-width: $bp-small) {
      grid-column: 1 / 2;
    }
  }
}
</style>
