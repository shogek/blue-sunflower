import { createApp } from "vue";
import { createPinia } from "pinia";

// SERVICE WORKER FOR PWA
import { registerSW } from "virtual:pwa-register";

if ("serviceWorker" in navigator) {
  // && !/localhost/.test(window.location)) {
  registerSW();
}
// END OF SERVICE WORKER FOR PWA

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
