<template>
  <div class="container">
    <img
      :src="post.thumbnail"
      style="width: 100%; max-height: 350px; object-fit: cover"
    />
    <h4 class="mt-3">{{ post.title }}</h4>
    <p>{{ post.author }}</p>
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

<style></style>
