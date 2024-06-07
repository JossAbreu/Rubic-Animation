import type { RouteRecordRaw } from "vue-router";
import AppLayout from "@layouts/AppLayout.vue";

export const HomeRouter: RouteRecordRaw = {
  path: "/",
  name: "Home",
  component: () => import("@modules/Home/HomePage.vue"),
  meta: {
    iconName: "Home",
    title: "Rubic Animation - Home",
    layout: AppLayout,
    requiresAuth: false,
  },
  children: [],
};
