<script setup lang="ts">
import ButtonComponent from "@/components/Layout/Button/ButtonComponent.vue";
import CustomInputComponent from "@/components/Layout/CustomInput/CustomInputComponent.vue";
import LoaderComponent from "@/components/Layout/Loader/LoaderComponent.vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { BackwardIcon, FolderIcon } from "@heroicons/vue/24/outline";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import "./ViewEditNote.scss";

const storeNotes = useStoreNotes();
const route = useRoute();
const router = useRouter();

const note = computed(() => {
    return storeNotes.getNoteById(route.params.id as string);
});

const noteContent = ref(note.value?.content || "");

const sendMeBack = () => {
    router.back();
};

const saveNote = () => {
    storeNotes.loading = true; // Start loading
    const timeout = setTimeout(() => {
        if (note.value?.id && noteContent.value) {
            storeNotes.loading = false; // Stop loading
            storeNotes.updateNote(note.value.id, noteContent.value);
            sendMeBack();
        }
    }, 2000);

    return () => clearTimeout(timeout);
};

const noteLength = computed(() => noteContent.value.length);
</script>

<template>
    <div v-show="storeNotes.loading">
        <LoaderComponent />
    </div>
    <div class="edit__note">
        <div class="edit__note__header">
            <h3>Edit Note</h3>
        </div>
        <CustomInputComponent
            v-model="noteContent"
            placeholder="Edit note...">
            <template #button>
                <ButtonComponent
                    @click="sendMeBack"
                    variant="danger">
                    <BackwardIcon /> Back
                </ButtonComponent>
                <ButtonComponent
                    @click="saveNote"
                    :disabled="noteLength === 0"
                    variant="primary">
                    <FolderIcon /> Save Note
                </ButtonComponent>
            </template>
        </CustomInputComponent>
    </div>
</template>

<style scoped></style>
