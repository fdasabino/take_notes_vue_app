<script setup lang="ts">
import { RouterView } from "vue-router";
import NavbarComponent from "./components/Navbar/NavbarComponent.vue";
</script>

<template>
    <NavbarComponent />
    <main>
        <RouterView />
    </main>
</template>

<style scoped></style>
