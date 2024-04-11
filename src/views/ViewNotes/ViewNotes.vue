<script setup lang="ts">
// imports
import ButtonComponent from "@/components/Layout/Button/ButtonComponent.vue";
import InputComponent from "@/components/Layout/Input/InputComponent.vue";
import NoteCardComponent from "@/components/Layout/NoteCard/NoteCardComponent.vue";
import { PlusCircleIcon } from "@heroicons/vue/24/outline";
import "./ViewNotes.scss";
</script>

<template>
    <div class="notes">
        <div class="notes__input">
            <InputComponent
                type="textarea"
                placeholder="Enter your note..." />

            <ButtonComponent
                variant="primary"
                @click="() => {}">
                <PlusCircleIcon /> Add Note
            </ButtonComponent>
        </div>
        <div class="notes__list">
            <NoteCardComponent
                :key="1"
                :title="'Note 1'"
                :content="'This is the content of note 1'"
                :id="'1'" />
            <NoteCardComponent
                :key="2"
                :title="'Note 2'"
                :content="'This is the content of note 2'"
                :id="'2'" />
        </div>
    </div>
</template>
