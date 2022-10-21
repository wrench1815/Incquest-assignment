<template>
  <div class="card card-shadow mt-4 h-100">
    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
      <a class="">
        <img
          :src="item.image"
          alt="product image"
          class="img-fluid w-100 shadow rounded-5"
        />
      </a>
    </div>
    <div class="card-body">
      <h4>{{ item.name }}</h4>

      <h5 class="text-primary">Rs. {{ item.price }}</h5>

      <p>
        {{ item.description }}
      </p>

      <a class="d-inline-block text-primary pointer">
        <span class="d-flex detail-btn"
          ><span class="border-bottom border-primary"> see more </span>
          <i class="ri-arrow-right-s-line"></i>
        </span>
      </a>
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

<style></style>
