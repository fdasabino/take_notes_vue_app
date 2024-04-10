<script setup lang="ts">
import { RouterLink } from "vue-router";
import styles from "./NavbarComponent.module.scss";
</script>

<template>
    <div :class="styles.navbar">
        <RouterLink to="/">Notes</RouterLink>
        <RouterLink to="/stats">Stats </RouterLink>
    </div>
</template>
