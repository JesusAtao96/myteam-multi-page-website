<template>
  <div :class="{ open: isSidebarOpen }">
    <Header @onToggle="onToggle" />
    <transition name="fade">
      <Sidebar v-if="isSidebarOpen" @onToggle="onToggle" />
    </transition>
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
<style lang="scss" scoped>
.open {
  height: 100vh;
  overflow: hidden;
}
</style>
