<script setup lang="ts">
import { vOnClickOutside, vOnKeyStroke } from "@vueuse/components";
import { onKeyStroke } from "@vueuse/core";
import { defineProps } from "vue";
import ButtonComponent from "../Button/ButtonComponent.vue";
import "./DeleteModal.scss";

const props = defineProps({
    id: {
        type: [String, Number],
        required: true,
    },
    showModal: {
        type: Boolean,
        required: true,
    },
    deleteFunction: {
        type: Function,
        required: true,
    },
    closeModal: {
        type: Function,
        required: true,
    },
});

const handleDelete = () => {
    props.deleteFunction(props.id);
    props.closeModal();
};

onKeyStroke("Escape", () => {
    props.closeModal();
});
</script>

<template>
    <div
        v-if="props.showModal"
        ref="modal"
        class="modal">
        <div
            class="modal__content"
            v-on-click-outside="props.closeModal as any">
            <div class="modal__content__header">
                <h2>Delete Note</h2>
                <p>Are you sure you want to delete this note?</p>
            </div>
            <div class="modal__content__body">
                <ButtonComponent
                    variant="primary"
                    @click="$props.closeModal">
                    Cancel
                </ButtonComponent>
                <ButtonComponent
                    variant="danger"
                    @click="handleDelete">
                    Delete
                </ButtonComponent>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
