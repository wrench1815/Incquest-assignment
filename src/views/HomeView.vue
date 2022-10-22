<template>
  <div>
    <NavBar class="z-index-1000" />
    <Home />
  </div>
</template>

<script>
import Home from '@/components/Home/index.vue'
import NavBar from '@/components/NavBar/index.vue'

export default {
  name: 'HomeView',

  components: {
    NavBar,
    Home,
  },
}
</script>
