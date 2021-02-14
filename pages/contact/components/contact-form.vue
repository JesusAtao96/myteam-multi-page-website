<template>
  <form class="form" @submit.prevent="onSave">
    <div class="form__control" :class="{ 'form__control--error': !name && isTouched }">
      <input class="form__input" type="text" v-model="name" placeholder="Name" />
      <span class="form__error">This field is required</span>
    </div>
    <div class="form__control" :class="{ 'form__control--error': !email && isTouched }">
      <input class="form__input" type="email" v-model="email" placeholder="Email Address" />
      <span class="form__error">This field is required</span>
    </div>
    <div class="form__control" :class="{ 'form__control--error': !company && isTouched }">
      <input class="form__input" type="text" v-model="company" placeholder="Company Name" />
      <span class="form__error">This field is required</span>
    </div>
    <div class="form__control" :class="{ 'form__control--error': !title && isTouched }">
      <input class="form__input" type="text" v-model="title" placeholder="Title" />
      <span class="form__error">This field is required</span>
    </div>
    <div class="form__control" :class="{ 'form__control--error': !message && isTouched }">
      <textarea class="form__input form__input--textarea" v-model="message" placeholder="Message"></textarea>
      <span class="form__error">This field is required</span>
    </div>

    <button class="form__button" title="Submit">submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      company: '',
      title: '',
      message: '',
      isTouched: false,
    }
  },
  methods: {
    onSave() {
      this.isTouched = true;
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: grid;
  row-gap: 2.4rem;

  @media only screen and (max-width: $bp-medium) {
    margin: 0 18px;
  }

  @media only screen and (max-width: $bp-small) {
    margin: 0;
  }

  &__control {
    display: inherit;
  }

  &__input {
    width: 100%;
    font: inherit;
    color: $white;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2.5rem;
    letter-spacing: -0.115385px;
    border: 0;
    border-bottom: 1px solid $white;
    background: transparent;
    padding: 0 0 16px 14px;

    &--textarea {
      height: 84px;
    }

    &::placeholder {
      color: rgba($white, .6);
      mix-blend-mode: normal;
    }

    &:focus {
      border-bottom: 1px solid $rapture-blue;
      outline: none;
    }
  }

  &__error {
    font-style: italic;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.3rem;
    color: $light-coral;
    margin-top: 8px;
    margin-left: 14px;
    display: none;
  }

  &__control--error &__input {
    border-bottom: 1px solid $light-coral;

    &::placeholder {
      color: rgba($light-coral, .6);
    }
  }

  &__control--error &__error {
    display: block;
  }

  &__button {
    @include button($deep-jungle-green, $white, $white, $white, $light-coral);

    width: 123px;
    font-weight: 600;
  }
}
</style>
