<template>
  <section>
    <NavBar class="z-index-1000">
      <template v-slot:searchBar v-if="loading">
        <div class="placeholder-wave placeholder placeholder-xs w-25"></div>
      </template>

      <template v-slot:searchBar v-else>
        <form class="w-auto" @submit.prevent="searchProduct">
          <input
            type="search"
            class="form-control"
            placeholder="Search Product"
            aria-label="Search"
            v-model="searchTerm"
          />
        </form>
      </template>
    </NavBar>

    <div class="card card-body mb-4 pb-1">
      <h1>Product Listing</h1>
      <p class="text-danger fw-bold">
        Total Products: {{ this.productList.length }}
      </p>
    </div>
    <section class="container-fluid">
      <section class="row gy-4" v-if="loading">
        <div
          class="col-12 col-md-6 col-lg-3 col-xxl-2 my-4"
          v-for="item in 5"
          :key="item"
        >
          <ProductLoaderCard />
        </div>
      </section>

      <section v-else>
        <div v-if="productList.length == 0">Nothing to show here</div>

        <div class="row gy-4" v-else>
          <div
            class="col-12 col-md-6 col-lg-3 col-xxl-2 my-4"
            v-for="item in productList"
            :key="item.id"
          >
            <ProductListCard :item="item" />
          </div>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import ProductListCard from '@/components/Product/ListCard.vue'
import ProductLoaderCard from '@/components/Product/LoaderCard.vue'
import NavBar from '@/components/NavBar/index.vue'

export default {
  name: 'ProductListView',

  components: {
    ProductListCard,
    ProductLoaderCard,
    NavBar,
  },

  data() {
    return {
      productList: [],
      loading: true,
      api: 'https://61922b19aeab5c0017105dfb.mockapi.io/product',

      searchTerm: '',
    }
  },

  methods: {
    async getProductList() {
      return this.axios.get(this.api).then((resp) => {
        this.productList = resp.data
      })
    },

    async searchProduct() {
      let api = this.api
      if (this.searchTerm.length != 0) {
        api = `${this.api}?name=${this.searchTerm}`
      }
      this.loading = true

      return this.axios.get(api).then((resp) => {
        this.productList = resp.data
        this.loading = false
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

<style scoped></style>
