<template>
  <form class="px-2" @submit.prevent="addPost">
    <div class="mb-4 mt-4">
      <label for="title" class="form-label">Title</label>
      <input
        type="text"
        class="form-control"
        id="title"
        v-model="title"
        required
      />
    </div>
    <div class="mb-4">
      <label for="author" class="form-label">Author</label>
      <input
        type="text"
        class="form-control"
        id="author"
        v-model="author"
        required
      />
    </div>
    <div class="mb-4">
      <label for="body" class="form-label">Body</label>
      <input id="body" type="hidden" name="body" required />
      <trix-editor input="body" ref="body"></trix-editor>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    <router-link to="/" class="btn btn-danger ms-2">Cancel</router-link>
  </form>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      title: "",
      author: "",
      post: [],
    };
  },
  methods: {
    addPost() {
      this.post.push([
        {
          title: this.title,
          author: this.author,
          body: body.value,
        },
      ]);

      localStorage.setItem("post", JSON.stringify(this.post));

      this.$router.push("/");
    },
  },
};
</script>

<style></style>
