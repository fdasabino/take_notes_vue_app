// Import Vue
import { createPinia } from "pinia";
import { createApp } from "vue";
import router from "./router";

// Import global styles
import "vue-toast-notification/dist/theme-default.css";
import "./assets/input.scss";
import "./assets/main.scss";

// Import views
import App from "./App.vue";
const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
