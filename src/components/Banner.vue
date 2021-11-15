<template>
  <div class="banner text-white">
    <div class="container d-flex flex-column px-2">
      <h1 class="display-5 fw-bold align-self-center mb-3 text-center">
        Welcome to My Blog
      </h1>
      <p class="col-md-8 fs-5 align-self-center text-center">
        Tempat dimana Anda dapat membuat tulisan anda sendiri secara gratis!
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.banner {
  height: 450px;
  object-fit: cover;
  background-image: linear-gradient(to top, #000000e3, rgba(139, 147, 154, 0)),
    url("../assets/banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.banner .container {
  padding: 150px 0;
}
</style>
