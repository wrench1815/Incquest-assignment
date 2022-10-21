<template>
  <!-- Footer -->
  <footer class="text-center bg-gradient bg-white pt-4 pb-2">
    <p>
      Internship Assignment submittion by Hardeep Kumar to
      <span class="fw-bold text-primary">Incquet Solutions</span>
    </p>
  </footer>
  <!-- Footer -->
</template>

<script>
export default {
  name: 'FooterComponent',

  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>

<style></style>
