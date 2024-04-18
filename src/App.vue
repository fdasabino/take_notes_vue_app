<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView, useRoute } from "vue-router";
import NavbarComponent from "./components/Layout/Navbar/NavbarComponent.vue";
import { useStoreAuth } from "./stores/storeAuth";

const storeAuth = useStoreAuth();
const route = useRoute();

onMounted(() => {
    storeAuth.init();
});
</script>

<template>
    <NavbarComponent v-if="route.name !== 'Auth'" />
    <main>
        <RouterView />
    </main>
</template>

<style scoped></style>
