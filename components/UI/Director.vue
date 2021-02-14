<template>
  <div class="director">
    <input
      type="checkbox"
      class="director__checkbox"
      :id="'more' + id"
      data-label="More Information"
    />
    <div class="director__side director__side--front">
      <nuxt-img
        class="director__avatar"
        :src="image"
        loading="lazy"
        width="62"
      />
      <h3 class="director__name director__name--front heading-3">
        {{ person }}
      </h3>
      <p class="director__position">{{ position }}</p>
      <label :for="'more' + id" class="director__btn director__btn--cross">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="#012F34" fill-rule="evenodd" d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"/></svg>
      </label>
    </div>
    <div class="director__side director__side--back">
      <h3 class="director__name director__name--back heading-3">
        {{ person }}
      </h3>
      <p class="director__quote paragraph-2">
        {{ quote }}
      </p>
      <div class="director__socials">
        <a href="#" aria-label="Twitter" class="director__social">
          <svg
            class="director__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="20"
          >
            <path
              fill="#FFF"
              d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
            />
          </svg>
        </a>
        <a href="#" aria-label="Twitter" class="director__social">
          <svg
            class="director__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
          >
            <path
              fill="#FFF"
              d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"
            />
          </svg>
        </a>
      </div>
      <label :for="'more' + id" class="director__btn director__btn--close">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17"><path fill="#012F34" fill-rule="evenodd" d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"/></svg>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    person: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    quote: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.director {
  perspective: 150rem;
  text-align: center;
  position: relative;
  height: 25.3rem;
  margin-bottom: 2.8rem;

  &__side {
    transition: all 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 25.3rem;
    backface-visibility: hidden;

    &--front {
      display: grid;
      grid-template-rows: 32px repeat(2, min-content) 1fr 28px;
      background-color: $sacramento-state-green;
    }

    &--back {
      display: grid;
      grid-template-rows: 35px repeat(2, min-content) 1fr 28px;
      background-color: $dark-green;
      transform: rotateY(180deg);
    }
  }

  &__checkbox {
    display: none;
  }

  &__checkbox:checked ~ &__side--front {
    transform: rotateY(-180deg);
  }

  &__checkbox:checked ~ &__side--back {
    transform: rotateY(0);
  }

  &__avatar {
    @include avatar(9.6rem);

    grid-row: 2 / 3;
    margin: auto;
  }

  &__name {
    color: $rapture-blue;

    &--front {
      grid-row: 3 / 4;
      margin-top: 1.6rem;
    }

    &--back {
      grid-row: 2 / 3;
    }
  }

  &__position {
    grid-row: 4 / 5;
    text-align: center;
    font-style: italic;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  &__btn {
    grid-row: 5 / 6;
    width: 5.6rem;
    height: 5.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    margin: auto;
    cursor: pointer;
    transition: background-color 0.4s;

    &--cross {
      background-color: $light-coral;

      &:hover {
        background-color: $rapture-blue;
      }
    }

    &--close {
      background-color: $rapture-blue;

      &:hover {
        background-color: $light-coral;
      }
    }
  }

  &__quote {
    grid-row: 3 / 4;
    margin-top: 0.8rem;
    margin-bottom: 2.4rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 250px;
    width: 90%;
  }

  &__socials {
    grid-row: 4 / 5;
  }

  &__social {
    margin-right: 1.6rem;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    &:hover svg path {
      fill: $light-coral;
    }
  }
}
</style>
