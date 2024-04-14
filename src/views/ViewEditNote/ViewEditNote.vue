<script setup lang="ts">
import ButtonComponent from "@/components/Layout/Button/ButtonComponent.vue";
import CustomInputComponent from "@/components/Layout/CustomInput/CustomInputComponent.vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { BackwardIcon, FolderIcon, XCircleIcon } from "@heroicons/vue/24/outline";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import "./ViewEditNote.scss";

const { getNoteById, updateNote } = useStoreNotes();

const route = useRoute();

const note = computed(() => {
    return getNoteById(route.params.id as string);
});

const noteContent = ref(note.value?.content || "");

const router = useRouter();

const sendMeBack = () => {
    router.back();
};

const saveNote = () => {
    updateNote(note.value?.id as string, noteContent.value);
    sendMeBack();
};
</script>

<template>
    <div class="editNote">
        <h3>Edit Note</h3>
        <CustomInputComponent
            v-model="noteContent"
            placeholder="Edit note...">
            <template #button>
                <ButtonComponent
                    @click="sendMeBack"
                    variant="secondary">
                    <BackwardIcon /> Back
                </ButtonComponent>
                <ButtonComponent
                    @click="saveNote"
                    :disabled="!noteContent"
                    variant="primary">
                    <FolderIcon /> Save Note
                </ButtonComponent>
            </template>
        </CustomInputComponent>
    </div>
</template>

<style scoped></style>
