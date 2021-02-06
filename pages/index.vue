<template>
<main>
  <home-find/>
  <home-build/>
  <home-delivering/>
  <contact-banner />
</main>
</template>

<script>
import HomeDelivering from '../components/Sections/Home/HomeDelivering.vue'
export default {
  components: { HomeDelivering },
  head: {
    title: 'Frontend Mentor | myteam website challenge - Homepage'
  }
}
</script>
