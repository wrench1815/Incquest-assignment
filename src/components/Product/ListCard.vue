<template>
  <div class="card card-shadow mt-4 h-100">
    <div
      class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 rounded-5"
    >
      <RouterLink
        :to="`/product/${item.id}`"
        class="overflow-hidden d-block rounded-5 shadow ripple"
        data-mdb-ripple-color="primary"
      >
        <img
          :src="item.image"
          alt="product image"
          class="img-fluid w-100 scale rounded-5"
        />
      </RouterLink>
    </div>
    <div class="card-body">
      <h4>{{ item.name }}</h4>

      <h5 class="text-primary">Rs. {{ item.price }}</h5>

      <p>
        {{ item.description }}
      </p>

      <RouterLink
        :to="`/product/${item.id}`"
        class="d-inline-block text-primary pointer ripple"
        data-mdb-ripple-unbound="true"
        data-mdb-ripple-color="primary"
      >
        <span class="d-flex detail-btn"
          ><span class="border-bottom border-primary"> see more </span>
          <i class="ri-arrow-right-s-line"></i>
        </span>
      </RouterLink>
    </div>
    <div class="card-footer text-muted">
      <span class="d-flex gap-1">
        <i class="ri-boxing-line"></i>
        {{ item.type }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductListCard',

  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.card-shadow {
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05) !important;
}

.card-shadow:hover {
  box-shadow: 0 2px 15px -3px rgb(0 0 0 / 16%),
    0 10px 20px -2px rgb(0 0 0 / 10%) !important;
  transition: all 0.3s ease-in-out;
}
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

.scale {
  transition: all 0.3s ease-in-out !important;
}

.scale:hover {
  transition: all 0.3s ease-in-out !important;
  transform: scale(1.1);
  transform-origin: 50%;
}
</style>
