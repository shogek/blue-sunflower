import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// import "./registerServiceWorker";

import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {
    console.log("onNeedRefresh called!");
  },
  onOfflineReady() {
    console.log("onOfflineReady called!");
  },
});
console.log(updateSW);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
