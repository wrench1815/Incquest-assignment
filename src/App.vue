<template>
  <div id="app">
    <!-- nav -->
    <NavBar class="z-index-1000" />
    <!-- nav -->

    <router-view />

    <!-- foot -->
    <Footer />
    <!-- foot -->
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/index.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    NavBar,
    Footer,
  },
}
</script>

<style>
.z-index-0 {
  z-index: 0 !important;
}

.z-index-1 {
  z-index: 1 !important;
}

.z-index-2 {
  z-index: 2 !important;
}

.z-index-3 {
  z-index: 3 !important;
}

.z-index-4 {
  z-index: 4 !important;
}

.z-index-5 {
  z-index: 5 !important;
}

.z-index-1000 {
  z-index: 1000 !important;
}

/* avatars */
.avatar-xs {
  width: 24px !important;
  height: 24px !important;
  font-size: 0.75rem;
}

.avatar-sm {
  width: 36px !important;
  height: 36px !important;
  font-size: 0.875rem;
}

.avatar-lg {
  width: 58px !important;
  height: 58px !important;
  font-size: 0.875rem;
}

.avatar-xl {
  width: 74px !important;
  height: 74px !important;
}

.avatar-xxl {
  width: 110px !important;
  height: 110px !important;
}

.avatar {
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  border-radius: 0.75rem;
  height: 48px;
  width: 48px;
  transition: all 0.2s ease-in-out;
}
</style>
