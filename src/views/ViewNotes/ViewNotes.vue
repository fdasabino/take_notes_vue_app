<script setup lang="ts">
// imports
import ButtonComponent from "@/components/Layout/Button/ButtonComponent.vue";
import NoteCardComponent from "@/components/Layout/NoteCard/NoteCardComponent.vue";
import { PlusCircleIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";
import "./ViewNotes.scss";

//refs
const notes = ref([
    {
        id: "1",
        title: "Note 1",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae incidunt illo soluta quas provident possimus temporibus quisquam labore quaerat ullam, aspernatur, consequatur eum numquam ratione vel corporis unde deleniti repellendus molestiae, necessitatibus quod fuga in! Fuga eos tempore nesciunt voluptatem repellat obcaecati quo eveniet, facilis omnis saepe vero natus corrupti?",
    },
    {
        id: "2",
        title: "Note 2",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem labore doloribus fugiat suscipit a alias error provident sit? Labore odit reiciendis ipsam ut, eveniet earum architecto consequuntur ab. Tenetur est odio voluptatibus omnis voluptatum sint magni voluptatem nisi accusamus labore",
    },
    {
        id: "3",
        title: "Note 3",
        content:
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem labore doloribus fugiat suscipit a alias error provident sit? Labore odit reiciendis ipsam ut, eveniet earum architecto consequuntur ab.",
    },
    {
        id: "4",
        title: "Note 4",
        content: "This is the content of note 2",
    },
]);
const newNote = ref("");
const newNoteRef = ref();

// id generator
const generateId = new Date().getTime().toString();

// methods
const addNote = (note: string) => {
    let createdNote = {
        id: generateId,
        title: `Date: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`,
        content: note,
    };

    notes.value.unshift(createdNote);
    newNote.value = "";

    // focus on the input
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
                v-for="note in notes"
                :id="note.id"
                :key="note.id"
                :title="note.title"
                :content="note.content" />
        </div>
    </div>
</template>
