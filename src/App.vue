<template>
  <div id="app">
    <!-- nav -->
    <NavBar />
    <!-- nav -->

    <router-view />

    <!-- foot -->
    foot
    <!-- foot -->
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/index.vue';

export default {
  components: {
    NavBar,
  },
};
</script>

<style></style>
