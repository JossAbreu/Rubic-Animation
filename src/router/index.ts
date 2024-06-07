import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalized,
} from "vue-router";

import { HomeRouter } from "../modules/Home/router/index";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ ...HomeRouter }],
});

// set meta titles routes
router.afterEach((to: RouteLocationNormalized) => {
  const title: string = String(to.meta.title) || "Rubic Animation "; // Fallback to a default title if not specified
  document.title = title;
});
// end set meta titles routes

export default router;
