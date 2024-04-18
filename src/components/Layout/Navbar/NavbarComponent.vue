<script setup lang="ts">
// imports
import {
    ArrowLeftStartOnRectangleIcon,
    BookOpenIcon,
    PencilIcon,
    PresentationChartBarIcon,
} from "@heroicons/vue/24/outline";

import { useStoreAuth } from "@/stores/storeAuth";
import { watch } from "vue";
import { RouterLink } from "vue-router";
import "./NavbarComponent.scss";

// store
const storeAuth = useStoreAuth();
const user = storeAuth.$state.user;

watch(
    () => storeAuth.$state.user,
    (newUser) => {
        user.id = newUser.id;
        user.email = newUser.email;
    }
);
</script>

<template>
    <div class="navbar">
        <div class="wrapper">
            <div class="wrapper__left">
                <RouterLink to="/">
                    <PencilIcon />
                    <h1>Take Notes</h1>
                </RouterLink>
            </div>
            <div class="wrapper__right">
                <RouterLink
                    to="/"
                    active-class="active"
                    ><BookOpenIcon /> <span>Notes</span></RouterLink
                >
                <RouterLink
                    to="/stats"
                    active-class="active"
                    ><PresentationChartBarIcon /> <span>Stats</span></RouterLink
                >
                <div
                    v-if="user.id !== ''"
                    class="wrapper__right__logout">
                    <span @click="storeAuth.signOutUser"
                        >Sign out <small>{{ user.email }}</small></span
                    >
                </div>
            </div>
        </div>
    </div>
</template>
