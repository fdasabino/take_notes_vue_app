<script setup lang="ts">
import { useStoreNotes } from "@/stores/storeNotes";
import { PencilSquareIcon, TrashIcon } from "@heroicons/vue/24/outline";
import { onClickOutside } from "@vueuse/core";
import { computed, defineProps, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import ButtonComponent from "../Button/ButtonComponent.vue";
import DeleteModalComponent from "../Modal/DeleteModalComponent.vue";
import "./NoteCardComponent.scss";

const props = defineProps<{
    title: string;
    content: string;
    id: string;
}>();

// refs
const showModal = ref(false);

// store
const storeNotes = useStoreNotes();

// route
const route = useRouter();

// methods

const openModal = () => {
    showModal.value = true;
};

const deleteItem = (id: string) => {
    storeNotes.deleteNote(id);
    showModal.value = false;
};

// computed
const noteLength = computed(() => {
    const contentLength: string =
        props.content.length > 1
            ? `${props.content.length} characters`
            : `${props.content.length} character`;
    return contentLength;
});

const handleEditNote = (id: string) => {
    route.push(`/edit/${id}`);
};
</script>

<template>
    <div class="note_card">
        <DeleteModalComponent
            v-if="showModal"
            :id="props.id"
            :deleteFunction="deleteItem">
        </DeleteModalComponent>
        <div class="note_card__header">
            <div class="note_card__header__title">
                <h3>
                    {{ props.title }}
                </h3>
            </div>
            <div class="note_card__header__ctas">
                <ButtonComponent
                    variant="danger"
                    @click="openModal">
                    <TrashIcon /> <span>Delete</span>
                </ButtonComponent>
                <ButtonComponent
                    variant="primary"
                    @click="handleEditNote(props.id)">
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
