<script setup lang="ts">
// imports
import ButtonComponent from "@/components/Layout/Button/ButtonComponent.vue";
import NoteCardComponent from "@/components/Layout/NoteCard/NoteCardComponent.vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { FaceFrownIcon, PlusCircleIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";
import "./ViewNotes.scss";

//refs
const storeNotes = useStoreNotes();
const newNote = ref("");
const newNoteRef = ref();

// methods
const addNote = (note: string) => {
    storeNotes.createNote(note);
    newNote.value = "";
    newNoteRef.value.focus();
};
</script>

<template>
    <div class="notes">
        <div class="notes__input">
            <div class="form_input">
                <textarea
                    ref="newNoteRef"
                    v-model="newNote"
                    placeholder="Add a new note..." />
            </div>

            <div class="notes__input__buttonContainer">
                <ButtonComponent
                    variant="tertiary"
                    @click="addNote(newNote)"
                    :disabled="newNote.length === 0">
                    <PlusCircleIcon /> Add Note
                </ButtonComponent>
            </div>
        </div>
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
