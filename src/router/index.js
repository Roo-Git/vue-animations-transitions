import { createRouter, createWebHashHistory } from "vue-router";
import AllUsers from "../views/AllUsers.vue";
import CourseGoals from "../views/CourseGoals.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: AllUsers,
    },
    {
      path: "/goals",
      component: CourseGoals,
    },
  ],
});

export default router;
