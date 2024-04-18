import { createRouter, createWebHashHistory } from "vue-router";

// Import views
import ViewAuth from "@/views/ViewAuth/ViewAuth.vue";
import ViewEditNote from "@/views/ViewEditNote/ViewEditNote.vue";
import ViewNotes from "@/views/ViewNotes/ViewNotes.vue";
import ViewStats from "@/views/ViewStats/ViewStats.vue";

const routes = [
    {
        path: "/",
        name: "ViewNotes",
        component: ViewNotes,
    },
    {
        path: "/auth",
        name: "Auth",
        component: ViewAuth,
    },
    {
        path: "/stats",
        name: "Stats",
        component: ViewStats,
    },
    {
        path: "/edit/:id",
        name: "EditNote",
        component: ViewEditNote,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
