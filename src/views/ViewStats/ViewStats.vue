<script setup lang="ts">
import { useStoreNotes } from "@/stores/storeNotes";
import { computed } from "vue";
import "./ViewStats.scss";

const storeNotes = useStoreNotes();

// computed
const totalCharacters = computed(() => {
    return storeNotes.notes.reduce((acc, note) => acc + note.content.length, 0);
});
</script>

<template>
    <div class="stats">
        <div class="stats__header">
            <h1>My Stats</h1>
            <img
                src="../../assets/imgs/LOGO.webp"
                alt="logo" />
        </div>

        <div class="stats__container">
            <div class="stats__item">
                <h2>Number of Posts:</h2>
                <p>{{ storeNotes.notes.length }}</p>
            </div>

            <div class="stats__item">
                <h2>Total characters typed:</h2>
                <p>{{ totalCharacters }}</p>
            </div>
        </div>
    </div>
</template>
