<template>
  <div class="card card-shadow mt-4 h-100">
    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
      <a class="placeholder-wave">
        <div
          class="placeholder d-block bg-secondary opacity-100 img-fluid w-100 shadow rounded-5 box"
        ></div>
      </a>
    </div>
    <div class="card-body placeholder-wave">
      <h4 class="placeholder placeholder-sm w-100"></h4>

      <h5 class="text-primary placeholder placeholder-xs w-25"></h5>

      <p class="placeholder placeholder-sm w-100 mt-4"></p>
      <p class="placeholder placeholder-sm w-75"></p>
      <p class="placeholder placeholder-sm w-50"></p>
      <p class="placeholder placeholder-sm w-75"></p>
      <p class="placeholder placeholder-sm w-50"></p>

      <br />

      <a class="placeholder btn btn-primary w-25 mt-4"> </a>
    </div>
    <div class="card-footer text-muted">
      <div class="placeholder placeholder-xs w-25"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductLoaderCard',
}
</script>

<style scoped>
.box {
  height: 14rem;
}
</style>
