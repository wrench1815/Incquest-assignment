<template>
  <div>
    <NavBar class="z-index-1000" />

    <div class="card card-body mb-4 pb-1">
      <p class="text-primary d-inline">
        <RouterLink to="/product/list" class="pointer d-inline-flex">
          <i class="ri-arrow-left-line me-1"></i> back
        </RouterLink>
      </p>
      <h2>Product Details</h2>
    </div>

    <section v-if="loading" class="container mb-5">
      <Loader />
    </section>

    <section class="mb-5" v-else>
      <div
        class="card card-body bg-transparent shadow-0 min-vh-80 d-none d-lg-flex"
      >
        <div class="container-fluid">
          <div class="row flex-column-reverse flex-lg-row">
            <div
              class="col-lg-5 my-auto card card-body blur detail-card ms-lg-5 py-5 mt-4 mt-lg-0 border-danger"
            >
              <div class="">
                <h1 class="mb-4">{{ product.name }}</h1>
                <h5 class="text-primary">Rs. {{ product.price }}</h5>
                <p class="text-muted">
                  <span class="d-flex gap-1">
                    <i class="ri-boxing-line"></i>{{ product.type }}
                  </span>
                </p>
                <p class="text-muted">{{ product.description }}</p>
              </div>
            </div>
            <div
              class="col-lg-7 bg-white rounded-5 product-image border-danger pb-3"
            >
              <div class="row mt-3">
                <div class="col-12">
                  <img
                    class="w-100 rounded-5 shadow-sm mt-0 mt-lg-7 border object-cover"
                    :src="product.image"
                    alt="product image"
                    loading="lazy"
                    @click="openImageModal"
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
            :src="product.image"
            class="img-fluid w-100 rounded-5 border-bottom border-danger img-height object-cover shadow-warning-lg"
            loading="lazy"
            @click="openImageModal"
          />

          <div
            class="card card-body shadow-warning border-top border-2 border-danger bg-white mt-n5 mx-3 mx-md-5 blur z-index-5"
          >
            <h1 class="mb-4">{{ product.name }}</h1>
            <h5 class="text-primary">Rs. {{ product.price }}</h5>
            <p class="text-muted">
              <span class="d-flex gap-1">
                <i class="ri-boxing-line"></i>{{ product.type }}
              </span>
            </p>
            <p class="text-muted fs-5">{{ product.description }}</p>
          </div>
        </div>
      </section>
    </section>

    <!-- Image Preview Modal -->
    <div
      class="modal top fade"
      id="imageModal"
      tabindex="-1"
      aria-labelledby="imageModalLabel"
      aria-hidden="true"
      data-mdb-backdrop="static"
      data-mdb-keyboard="true"
    >
      <div class="modal-dialog modal-fullscreen modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="imageModalLabel">Image Preview</h5>
            <button
              type="button"
              class="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="d-flex justify-content-center align-items-center h-100">
              <img
                :src="product.image"
                class="img-fluid"
                loading="lazy"
                alt="Product Image"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-mdb-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/index.vue'
import Loader from '@/components/Product/DetailLoader.vue'

import { Modal } from 'mdb-ui-kit'

export default {
  name: 'ProductDetailView',

  components: {
    NavBar,
    Loader,
  },

  data() {
    return {
      id: this.$route.params.id,
      product: {},
      loading: true,
    }
  },

  methods: {
    async getProduct() {
      const api = `https://61922b19aeab5c0017105dfb.mockapi.io/product/${this.id}`

      return this.axios
        .get(api)
        .then((resp) => {
          this.product = resp.data
        })
        .catch((err) => {
          console.log(err)
        })
    },

    openImageModal() {
      const myModalEl = document.getElementById('imageModal')
      const modal = new Modal(myModalEl)
      modal.show()
    },
  },

  mounted() {
    this.getProduct().then(() => {
      this.loading = false
    })
  },
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
