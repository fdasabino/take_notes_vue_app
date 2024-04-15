<script setup lang="ts">
import { vPreventScroll } from "@/directives/vPreventScroll";
import "./Loader.scss";
</script>

<template>
    <div
        v-prevent-scroll
        class="loader">
        <div class="pulse"></div>
        <h3>Loading...</h3>
    </div>
</template>
