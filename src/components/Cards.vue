<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-lg-3" v-for="post in posts" :key="post.id">
        <Card
          :id="post.id"
          :title="post.title"
          :author="post.author"
          :body="post.body"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  components: {
    Card,
  },
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.posts = JSON.parse(localStorage.getItem("posts-storage") || "[]");
  },
};
</script>

<style></style>
