<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
    <RouterLink to="/">Notes</RouterLink>
    <RouterLink to="/stats">Stats</RouterLink>
    <RouterView />
</template>

<style scoped></style>
