/* eslint-disable no-console */

import { register } from "register-service-worker";

console.log('IM IN WORKER');

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "production") {
  console.log('IM IN PRODUCTION');
  // eslint-disable-next-line no-undef
  register(`./service-worker.js`, {
  // register(`${process.env.BASE_URL}service-worker.js`, {
  // register(`/blue-sunflower/service-worker.js`, {
    ready() {
      console.log(
        "App is being served from cache by a service worker.\n" +
          "For more details, visit https://goo.gl/AFskqB"
      );
    },
    registered() {
      console.log("Service worker has been registered.");
    },
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updatefound() {
      console.log("New content is downloading.");
    },
    updated() {
      console.log("New content is available; please refresh.");
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    },
  });
}

console.log('IM FINISHED');
