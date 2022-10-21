<template>
  <section>
    <div class="card card-body mb-4 pb-1">
      <h1>Product Listing</h1>
    </div>
    <section class="container-fluid">
      <section v-if="loading">Loading</section>

      <section v-else>
        <div class="row gy-4">
          <div
            class="col-12 col-md-6 col-lg-3 col-xxl-2 my-4"
            v-for="item in productList"
            :key="item.id"
          >
            <productListCard :item="item" />
          </div>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import ProductListCard from '@/components/Product/ListCard.vue'

export default {
  name: 'ProductListView',

  components: {
    ProductListCard,
  },

  data() {
    return {
      productList: [],
      loading: true,
      api: 'https://61922b19aeab5c0017105dfb.mockapi.io/product',
    }
  },

  methods: {
    async getProductList() {
      return this.axios.get(this.api).then((resp) => {
        this.productList = resp.data
      })
    },
  },

  mounted() {
    this.getProductList().then(() => {
      this.loading = false
    })
  },
}
</script>

<style scoped>
.detail-btn {
  transition: all 0.3s ease-in-out !important;
}

.detail-btn:hover i {
  padding-left: 0.3rem;
  transition: all 0.3s ease-in-out !important;
}

.pointer {
  cursor: pointer;
}

.card-shadow {
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05) !important;
}

.card-shadow:hover {
  box-shadow: 0 2px 15px -3px rgb(0 0 0 / 16%),
    0 10px 20px -2px rgb(0 0 0 / 10%) !important;
  transition: all 0.3s ease-in-out;
}
</style>
