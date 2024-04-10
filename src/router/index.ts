import { createRouter, createWebHashHistory } from "vue-router";

// Import views
import ViewNotes from "@/views/ViewNotes.vue";
import ViewStats from "@/views/ViewStats.vue";

const routes = [
    {
        path: "/",
        name: "ViewNotes",
        component: ViewNotes,
    },
    {
        path: "/stats",
        name: "Stats",
        component: ViewStats,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
