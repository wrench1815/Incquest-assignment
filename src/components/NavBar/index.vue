<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light position-sticky top-0"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Incquet Assignment</a>
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#mainNavBar"
        aria-controls="mainNavBar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="mainNavBar">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <a class="nav-link" href="#">Features</a>
          <a class="nav-link" href="#">Pricing</a>
          <a class="nav-link disabled">Disabled</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBarIndex',
};
</script>

<style scoped></style>
