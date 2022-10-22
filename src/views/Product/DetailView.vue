<template>
  <div>
    <h2>Detail</h2>
    {{ route }}
  </div>
</template>

<script>
export default {
  name: 'ProductDetailView',

  data() {
    return {
      route: this.$route.params.id,
    }
  },
}
</script>

<style scoped></style>
