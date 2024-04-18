<script setup lang="ts">
// imports
import {
    ArrowLeftStartOnRectangleIcon,
    BookOpenIcon,
    PencilIcon,
    PresentationChartBarIcon,
} from "@heroicons/vue/24/outline";

import { useStoreAuth } from "@/stores/storeAuth";
import { RouterLink } from "vue-router";
import "./NavbarComponent.scss";

// store
const storeAuth = useStoreAuth();
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
                <div class="wrapper__right__logout">
                    <ArrowLeftStartOnRectangleIcon />
                    <span @click="storeAuth.signOutUser">Sign out</span>
                </div>
            </div>
        </div>
    </div>
</template>
