<script setup lang="ts">
import { useStoreNotes } from "@/stores/storeNotes";
import { PencilSquareIcon, TrashIcon } from "@heroicons/vue/24/outline";
import { computed, defineProps, ref } from "vue";
import { useRouter } from "vue-router";
import ButtonComponent from "../Button/ButtonComponent.vue";
import LoaderComponent from "../Loader/LoaderComponent.vue";
import DeleteModalComponent from "../Modal/DeleteModalComponent.vue";
import "./NoteCardComponent.scss";

// props
const props = defineProps<{
    title?: string;
    content: string;
    id: string | number;
}>();

// store
const storeNotes = useStoreNotes();

// refs
const showModal = ref(false);

// route
const route = useRouter();

// methods
const openModal = () => {
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};

const deleteItem = (id: string) => {
    showModal.value = false;
    storeNotes.loading = true; // Start loading

    const timeout = setTimeout(() => {
        storeNotes.loading = false; // Stop loading
        storeNotes.deleteNote(id);
    }, 2000);

    return () => clearTimeout(timeout);
};

const handleEditNote = (id: string) => {
    route.push(`/edit/${id}`);
};

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
    <div v-show="storeNotes.loading">
        <LoaderComponent />
    </div>
    <div class="note_card">
        <DeleteModalComponent
            :showModal="showModal"
            :closeModal="closeModal"
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
                    @click="handleEditNote(props.id as string)">
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
