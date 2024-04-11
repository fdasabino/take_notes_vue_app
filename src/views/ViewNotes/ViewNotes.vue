<script setup lang="ts">
// imports
import ButtonComponent from "@/components/Layout/Button/ButtonComponent.vue";
import InputComponent from "@/components/Layout/Input/InputComponent.vue";
import NoteCardComponent from "@/components/Layout/NoteCard/NoteCardComponent.vue";
import { PlusCircleIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";
import "./ViewNotes.scss";

// constants
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

//refs
const newNote = ref("fdsafdsfdfs");
console.log(newNote.value);
// methods
</script>

<template>
    <div class="notes">
        <div class="notes__input">
            <InputComponent
                v-model="newNote"
                type="textarea"
                placeholder="Add a new note..." />

            <div class="notes__input__buttonContainer">
                <ButtonComponent
                    variant="tertiary"
                    @click="() => {}">
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
