<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import NavbarComponent from "./components/Layout/Navbar/NavbarComponent.vue";
import { useStoreAuth } from "./stores/storeAuth";

const storeAuth = useStoreAuth();

onMounted(() => {
    storeAuth.init();
});
</script>

<template>
    <NavbarComponent />
    <main>
        <RouterView />
    </main>
</template>

<style scoped></style>
