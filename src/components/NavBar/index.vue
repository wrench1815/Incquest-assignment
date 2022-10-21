<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-white position-sticky top-0 shadow-0"
  >
    <div class="container-fluid">
      <router-link class="" to="/">
        <div class="rounded-circle border avatar text-dark fs-4">
          LA
        </div></router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#mainNavBar"
        aria-controls="mainNavBar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="ri-menu-2-fill"></i>
      </button>

      <div class="collapse navbar-collapse" id="mainNavBar">
        <div class="navbar-nav mx-auto">
          <router-link class="nav-link" exact-active-class="text-primary" to="/"
            >Home</router-link
          >
          <router-link
            class="nav-link"
            exact-active-class="text-primary"
            to="/login"
            >Login</router-link
          >
          <router-link
            class="nav-link"
            exact-active-class="text-primary"
            to="/product-list"
            >Product List</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBarIndex',
}
</script>

<style scoped></style>
