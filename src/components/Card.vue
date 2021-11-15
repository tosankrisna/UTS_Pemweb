<template>
  <div class="card border-0 mb-4 shadow-sm">
    <img
      :src="thumbnail"
      class="card-img-top"
      style="max-width: 100%; height: 180px"
      alt="thumbnail"
    />
    <div
      class="card-body py-2 px-3"
      style="min-height: 120px; overflow: hidden"
    >
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

<style></style>
