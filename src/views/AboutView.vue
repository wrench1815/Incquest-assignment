<template>
  <div>
    <NavBar class="z-index-1000" />
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/index.vue'

export default {
  name: 'AboutView',

  components: {
    NavBar,
  },
}
</script>
