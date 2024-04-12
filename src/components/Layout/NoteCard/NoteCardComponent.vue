<script setup lang="ts">
import { useStoreNotes } from "@/stores/storeNotes";
import { PencilSquareIcon, TrashIcon } from "@heroicons/vue/24/outline";
import { computed, defineProps } from "vue";
import ButtonComponent from "../Button/ButtonComponent.vue";
import "./NoteCardComponent.scss";

const props = defineProps<{
    title: string;
    content: string;
    id: string;
}>();

// store
const storeNotes = useStoreNotes();

// computed
const noteLength = computed(() => {
    const contentLength: string =
        props.content.length > 1
            ? `${props.content.length} characters`
            : `${props.content.length} character`;
    return contentLength;
});
</script>

<template>
    <div class="note_card">
        <div class="note_card__header">
            <div class="note_card__header__title">
                <h3>
                    {{ props.title }}
                </h3>
            </div>
            <div class="note_card__header__ctas">
                <ButtonComponent
                    variant="danger"
                    @click="storeNotes.deleteNote(id)">
                    <TrashIcon /> <span>Delete</span>
                </ButtonComponent>
                <ButtonComponent
                    variant="primary"
                    @click="storeNotes.editNote(id)">
                    <PencilSquareIcon /> <span>Edit</span>
                </ButtonComponent>
            </div>
        </div>
        <div class="note_card__content">
            <p>{{ props.content }}</p>
        </div>
        <div class="note_card__length">
            <small>{{ noteLength }} </small>
        </div>
    </div>
</template>
