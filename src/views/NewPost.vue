<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <div class="title px-2">
          <h1 class="mb-3">Add New Post</h1>
        </div>
        <Form />
      </div>
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
export default {
  name: "NewPost",
  components: {
    Form,
  },
};
</script>
