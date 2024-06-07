import "./Tailwind.css";
// import MATERIAL SYMBOLS
import "material-symbols";

//Import XYZ ANIMATIONS
import VueAnimXyz from "@animxyz/vue3";
import "@animxyz/core";

//Import vue tippy for tooltips
import { TippyPlugin } from "tippy.vue";
import "tippy.js/animations/scale.css";
import "tippy.js/animations/scale-subtle.css";
import "tippy.js/animations/scale-extreme.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/animations/perspective-subtle.css";
import "tippy.js/animations/perspective-extreme.css";
import "tippy.js/dist/tippy.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

app.use(TippyPlugin, {
  tippyDefaults: {}, // convenience to set tippy.js default props
});

app.use(router);
app.use(pinia);

app.use(VueAnimXyz);
app.mount("#app");
