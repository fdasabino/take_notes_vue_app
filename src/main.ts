// Import Vue
import { createApp } from "vue";
import router from "./router";

// Import global styles
import "vue-toast-notification/dist/theme-default.css";
import "./assets/input.scss";
import "./assets/main.scss";

// Import views
import App from "./App.vue";

createApp(App).use(router).mount("#app");
