<template>
  <Banner />
  <div class="container">
    <div class="row">
      <div class="col col-md-8 mt-5 mb-3">
        <div class="title px-2">
          <h1 class="mb-3 fw-bold">Your Posts</h1>
        </div>
      </div>
      <div
        class="col col-md-4 d-flex justify-content-end align-items-center px-4"
      >
        <router-link to="/new-post" class="btn btn-primary rounded-pill px-3"
          >New Post</router-link
        >
      </div>
    </div>
    <!-- menampilkan card postingan jika terdapat data pada local storage -->
    <div v-if="availablePosts">
      <Cards />
    </div>
    <div
      class="d-flex mt-3 justify-content-center bg-danger rounded-3 px-3"
      v-else
    >
      <p class="text-white my-4">
        Anda belum memiliki postingan, klik tombol new post untuk membuat
        postingan.
      </p>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Cards from "@/components/Cards.vue";
export default {
  name: "Home",
  components: {
    Banner,
    Cards,
  },
  computed: {
    // mendapatkan data pada localstorage
    availablePosts() {
      return localStorage.getItem("posts-storage");
    },
  },
};
</script>
