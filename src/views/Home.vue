<template>
  <div class="container">
    <div class="row">
      <div class="col col-md-8">
        <div class="title px-2">
          <h1 class="mb-3">Blog Posts</h1>
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
    <Cards />
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";
export default {
  name: "Home",
  components: {
    Cards,
  },
};
</script>
