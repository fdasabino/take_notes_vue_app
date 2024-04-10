<script setup lang="ts">
// imports
import { BookOpenIcon, PencilIcon, PresentationChartBarIcon } from "@heroicons/vue/24/outline";
import { RouterLink } from "vue-router";
import "./NavbarComponent.scss";

// logic
</script>

<template>
    <div class="navbar">
        <div class="navbar__left">
            <RouterLink to="/">
                <PencilIcon />
                <h1>Notes App</h1>
            </RouterLink>
        </div>
        <div class="navbar__right">
            <RouterLink to="/"><BookOpenIcon /> Notes</RouterLink>
            <RouterLink to="/stats"><PresentationChartBarIcon /> Stats</RouterLink>
        </div>
    </div>
</template>
