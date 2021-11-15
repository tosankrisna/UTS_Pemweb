<template>
  <form class="px-2" @submit.prevent="submit">
    <div class="mb-4 mt-4">
      <label for="title" class="form-label">Title</label>
      <input
        type="text"
        class="form-control"
        id="title"
        v-model="postData.title"
        placeholder="Enter Post Title"
        required
      />
    </div>
    <div class="mb-4">
      <label for="author" class="form-label">Author</label>
      <input
        type="text"
        class="form-control"
        id="author"
        v-model="postData.author"
        placeholder="Enter Your Name"
        required
      />
    </div>
    <div class="mb-4">
      <label for="thubnail" class="form-label">Thumbnail</label>
      <input
        type="text"
        class="form-control"
        id="thumbnail"
        v-model="postData.thumbnail"
        placeholder="Enter Image Url"
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
      // data postingan terdiri dari id, title, author, thumbnail, dan body
      postData: {
        id: Math.random().toString(5).substr(2, 5),
        title: "",
        author: "",
        thumbnail: "",
        body: "",
      },
    };
  },
  methods: {
    // fungsi submit untuk melakukan custom event ke parent dengan membawa data post
    submit() {
      this.postData.body = body.value;
      this.$emit("submitPost", this.postData);
    },
  },
};
</script>

<style></style>
