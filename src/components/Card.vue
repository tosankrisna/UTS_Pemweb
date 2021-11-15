<template>
  <div class="card border-0 mb-4">
    <img :src="thumbnail" class="card-img-top" alt="thumbnail" />
    <div class="card-body">
      <router-link
        :to="`/detail-post/${id}`"
        class="card-title text-dark text-decoration-none fw-bold"
        >{{ title }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["id", "title", "author", "thumbnail", "body"],
};
</script>

<style scoped>
.card-img-top {
  max-width: 100%;
  height: 180px;
  border-radius: 15px;
}

.card-body {
  min-height: 100px;
  overflow: hidden;
  padding: 5px;
}
</style>
