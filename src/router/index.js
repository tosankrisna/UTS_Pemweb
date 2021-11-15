import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NewPost from "../views/NewPost.vue";
import DetailPage from "../views/DetailPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/new-post",
    name: "NewPost",
    component: NewPost,
  },
  {
    path: "/detail-post/:id",
    name: "DetailPost",
    component: DetailPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
