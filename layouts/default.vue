<template>
  <div :class="{ 'open': isSidebarOpen }">
    <Header @onToggle="onToggle" />
    <Sidebar v-if="isSidebarOpen" @onToggle="onToggle" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: false,
    }
  },
  methods: {
    onToggle(isToggled) {
      this.isSidebarOpen = isToggled
    },
  },
}
</script>
<style>
  .open {
    height: 100vh;
    overflow: hidden;
  }
</style>
