<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <div class="title px-2">
          <h1 class="mb-3">Add New Post</h1>
        </div>
        <Form @submitPost="submitPost" />
      </div>
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
export default {
  name: "NewPost",
  data() {
    return {
      posts: [],
    };
  },
  components: {
    Form,
  },
  methods: {
    // method submitPost berfungsi untuk menambahkan data ke localstorage
    submitPost(data) {
      this.posts.push({
        id: data.id,
        title: data.title,
        author: data.author,
        thumbnail: data.thumbnail,
        body: data.body,
      });

      // variabel currentItems akan mengecek jika ada item yang sudah dimasukan ke localstorage sebelumnya
      const currentItems = localStorage.getItem("posts-storage") || "[]";

      // berfungsi untuk menambahkan data baru ke localstorage tepat setelah data lama
      localStorage.setItem(
        "posts-storage",
        JSON.stringify([...JSON.parse(currentItems), ...this.posts])
      );

      // kembalikan ke route home setelah submit data
      this.$router.push("/");
    },
  },
};
</script>
