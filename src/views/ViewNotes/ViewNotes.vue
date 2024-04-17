<script setup lang="ts">
// imports
import ButtonComponent from "@/components/Layout/Button/ButtonComponent.vue";
import CustomInputComponent from "@/components/Layout/CustomInput/CustomInputComponent.vue";
import LoaderComponent from "@/components/Layout/Loader/LoaderComponent.vue";
import NoteCardComponent from "@/components/Layout/NoteCard/NoteCardComponent.vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { FaceFrownIcon, PlusCircleIcon } from "@heroicons/vue/24/outline";
import { computed, ref } from "vue";
import "./ViewNotes.scss";

// refs
const storeNotes = useStoreNotes();
const newNote = ref("");

// methods
const addNote = (note: string) => {
    storeNotes.loading = true; // Start loading

    const timeout = setTimeout(() => {
        storeNotes.loading = false; // Stop loading
        newNote.value = "";
        storeNotes.createNote(note);
    }, 2000);

    return () => clearTimeout(timeout);
};

const updateNote = (value: string) => {
    newNote.value = value;
};

const computedMessage = computed(() => {
    if (newNote.value.length === 0) return "Start typing above 👆";
    if (newNote.value.length > 1 && newNote.value.length < 49)
        return "Click the green button to add you note 👉";
    if (newNote.value.length > 50)
        return "Woo!!! Thats lot to remember, don't forget to save it 😊💡";
});
</script>

<template>
    <div v-show="storeNotes.loading">
        <LoaderComponent />
    </div>
    <div class="notes">
        <CustomInputComponent
            :modelValue="newNote"
            placeholder="Type your note here..."
            @update:modelValue="updateNote">
            <template #button>
                <div class="notes__info">
                    <h3>{{ computedMessage }}</h3>
                </div>
                <ButtonComponent
                    variant="tertiary"
                    @click="addNote(newNote)"
                    :disabled="newNote.length === 0">
                    <PlusCircleIcon /> Add Note
                </ButtonComponent>
            </template>
        </CustomInputComponent>
        <div class="notes__list">
            <NoteCardComponent
                v-for="note in storeNotes.notes"
                :id="note.id"
                :key="note.id"
                :title="note.title"
                :content="note.content" />
        </div>

        <div
            v-if="!storeNotes.notes.length"
            class="notes__empty">
            <FaceFrownIcon />
            <p>Nothing to show here!!!</p>
            <small>Start typing to add a note!!!</small>
        </div>
    </div>
</template>
