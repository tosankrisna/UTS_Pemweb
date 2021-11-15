<template>
  <div class="container mt-4 mb-5">
    <div
      class="img"
      :style="{ 'background-image': 'url(' + post.thumbnail + ')' }"
    ></div>
    <h4 class="mt-4 fw-bolder fs-2">{{ post.title }}</h4>
    <p class="fw-bold mt-3 mb-4">Posted by: {{ post.author }}</p>
    <p v-html="post.body"></p>
  </div>
</template>

<script>
export default {
  name: "DetailPage",
  data() {
    return {
      post: null,
    };
  },
  // mendapatkan data berdasarkan id yang dikirim lewat url
  created() {
    const localStorageItems = JSON.parse(localStorage.getItem("posts-storage"));
    const postById = localStorageItems.filter(
      (item) => item.id == this.$route.params.id
    );
    this.post = postById[0];
    console.log(this.post);
  },
};
</script>

<style scoped>
.img {
  padding: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  border-radius: 20px;
}

@media screen and (max-width: 400px) {
  .img {
    padding: 100px;
  }
}
</style>
