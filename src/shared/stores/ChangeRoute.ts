import router from "@/router";

export function ChangeRoute(route: String) {
  router.push({ path: String(route) });
  console.log("navigate to", route);
}
