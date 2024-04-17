<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import NavbarComponent from "./components/Layout/Navbar/NavbarComponent.vue";
import { useStoreNotes } from "./stores/storeNotes";

const storeNotes = useStoreNotes();

// get notes from the server when the app is mounted
onMounted(() => {
    storeNotes.getNotes();
});
</script>

<template>
    <NavbarComponent />
    <main>
        <RouterView />
    </main>
</template>

<style scoped></style>
