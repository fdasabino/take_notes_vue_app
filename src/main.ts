// Import Vue
import { createApp } from "vue";
import router from "./router";

// Import global styles
import "./assets/main.scss";

// Import views
import App from "./App.vue";

createApp(App).use(router).mount("#app");
