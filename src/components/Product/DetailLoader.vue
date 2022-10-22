<template>
  <div>
    <div
      class="card card-body bg-transparent shadow-0 min-vh-80 d-none d-lg-flex"
    >
      <div class="container-fluid">
        <div class="row flex-column-reverse flex-lg-row">
          <div
            class="col-lg-5 my-auto card card-body blur detail-card ms-lg-5 py-5 mt-4 mt-lg-0 border-danger"
          >
            <div class="placeholder-wave">
              <h2 class="mb-4 placeholder w-100 placeholder-xs"></h2>
              <h5 class="text-primary placeholder placeholder-xs w-25"></h5>
              <br />
              <p class="text-muted placeholder placeholder-xs w-50"></p>
              <p class="text-muted">
                <span class="placeholder w-100 placeholder-xs"></span>
                <span class="placeholder w-75 placeholder-xs"></span>
                <span class="placeholder w-50 placeholder-xs"></span>
                <span class="placeholder w-100 placeholder-xs"></span>
                <span class="placeholder w-50 placeholder-xs"></span>
              </p>
            </div>
          </div>
          <div
            class="col-lg-7 bg-white rounded-5 product-image border-danger pb-3"
          >
            <div class="row mt-3">
              <div class="col-12">
                <img
                  class="w-100 rounded-5 shadow-sm mt-0 mt-lg-7 border placeholder-wave placeholder bg-secondary"
                  style="height: 70vh"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="container d-lg-none">
      <div class="">
        <img
          class="img-fluid w-100 rounded-5 border-bottom border-danger img-height object-cover shadow-warning-lg placeholder-wave placeholder bg-secondary"
          style="height: 60vh"
        />

        <div
          class="card card-body shadow-warning border-top border-2 border-danger bg-white mt-n5 mx-3 mx-md-5 blur z-index-5"
        >
          <h2 class="mb-4 placeholder w-100 placeholder-xs"></h2>
          <h5 class="text-primary placeholder placeholder-xs w-25"></h5>
          <br />
          <p class="text-muted placeholder placeholder-xs w-50"></p>
          <p class="text-muted">
            <span class="placeholder w-100 placeholder-xs"></span>
            <span class="placeholder w-75 placeholder-xs"></span>
            <span class="placeholder w-50 placeholder-xs"></span>
            <span class="placeholder w-100 placeholder-xs"></span>
            <span class="placeholder w-50 placeholder-xs"></span>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProductDetailLoader',
}
</script>

<style scoped>
.shadow-warning {
  box-shadow: 0 0.5rem 1rem rgba(var(--mdb-danger-rgb), 0.15) !important;
}

.shadow-warning-lg {
  box-shadow: 0 1rem 3rem rgba(var(--mdb-danger-rgb), 0.175) !important;
}

.pointer {
  cursor: pointer;
}

.blur {
  box-shadow: inset 0 0 2px #fefefed1;
  -webkit-backdrop-filter: saturate(200%) blur(30px);
  backdrop-filter: saturate(200%) blur(30px);
  background-color: rgba(255, 255, 255, 0.8) !important;
}

.min-vh-80 {
  min-height: 80vh !important;
}

.detail-card {
  border-left: 2px solid #e0e0e0;
  border-right: 2px solid #e0e0e0;
  box-shadow: 0 0.5rem 1rem rgba(var(--mdb-danger-rgb), 0.15) !important;
}

.product-image {
  border-left: 2px solid #e0e0e0;
  border-right: 2px solid #e0e0e0;
  box-shadow: 0 0.5rem 1rem rgba(var(--mdb-danger-rgb), 0.15) !important;
}

@media (min-width: 992px) {
  .detail-card {
    margin-right: -10rem;
    border-left: 0px;
    border-bottom: 2px solid #e0e0e0;
    border-right: 2px solid #e0e0e0;
    border-top-right-radius: 0% !important;
    border-bottom-left-radius: 0% !important;
    box-shadow: 0 1rem 3rem rgba(var(--mdb-danger-rgb), 0.175) !important;
  }

  .product-image {
    border-top: 2px solid #e0e0e0;
    border-left: 2px solid #e0e0e0;
    border-right: 0px;
    border-top-right-radius: 0% !important;
    border-bottom-left-radius: 0% !important;
    box-shadow: 0 1rem 3rem rgba(var(--mdb-danger-rgb), 0.175) !important;
  }
}
</style>
