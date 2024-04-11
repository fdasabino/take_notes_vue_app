<script setup lang="ts">
// imports
import { BookOpenIcon, PencilIcon, PresentationChartBarIcon } from "@heroicons/vue/24/outline";
import { RouterLink } from "vue-router";
import "./NavbarComponent.scss";
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
            </div>
        </div>
    </div>
</template>
