import { useStoreAuth } from "@/stores/storeAuth";
import { createRouter, createWebHashHistory } from "vue-router";

// Import views
import { openToast } from "@/directives/openToast";
import ViewAuth from "@/views/ViewAuth/ViewAuth.vue";
import ViewEditNote from "@/views/ViewEditNote/ViewEditNote.vue";
import ViewNotes from "@/views/ViewNotes/ViewNotes.vue";
import ViewStats from "@/views/ViewStats/ViewStats.vue";

const routes = [
    {
        path: "/auth",
        name: "Auth",
        component: ViewAuth,
    },
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

router.beforeEach(async (to, from) => {
    const storeAuth = useStoreAuth();

    if (!storeAuth.user.id && to.name !== "Auth") {
        return {
            name: "Auth",
        };
    }

    if (storeAuth.user.id && to.name === "Auth") {
        openToast("You are already logged in... Start writing... 🩵 ", "warning");
        return {
            name: "ViewNotes",
        };
    }
});

export default router;
