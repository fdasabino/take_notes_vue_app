import { createPinia, type PiniaPluginContext } from "pinia";
import { createApp } from "vue";
import { type Router } from "vue-router";
import App from "./App.vue";
import router from "./router";

// Import global styles
import "vue-toast-notification/dist/theme-default.css";
import "./assets/main.scss";

declare module "pinia" {
    export interface PiniaCustomProperties {
        router: Router;
    }
}

const routerPlugin = (router: Router) => {
    return (context: PiniaPluginContext) => {
        context.store.router = router;
    };
};

const pinia = createPinia();
pinia.use(routerPlugin(router));

createApp(App).use(router).use(pinia).mount("#app");

/*
This TypeScript file is the main entry point for a Vue.js application that uses the Vue Router for routing and Pinia for state management.

The declare module block is used to augment the Pinia module with custom properties. In this case, a router property of type Router is added to the PiniaCustomProperties interface. This allows the router instance to be accessed from the Pinia store.

A routerPlugin function is defined which takes a router instance and returns a function that takes a PiniaPluginContext. This returned function adds the router instance to the store property of the context. This plugin is then used with the pinia instance created by createPinia().

*/
