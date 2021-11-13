<template>
  <div class="card border-0 mb-4 shadow-sm">
    <img
      src="https://source.unsplash.com/1280x960/?coding,programming"
      class="card-img-top"
      alt="thumbnail"
    />
    <div class="card-body px-3">
      <router-link
        to="/detail-post"
        class="card-title text-dark text-decoration-none fw-bold fs-5"
        >{{ title }}</router-link
      >
      <p class="card-text">{ body }</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["id", "title", "author", "body"],
};
</script>

<style></style>
