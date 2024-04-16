<script setup lang="ts">
import { defineProps, ref } from "vue";
import ButtonComponent from "../Button/ButtonComponent.vue";
import "./DeleteModal.scss";

const props = defineProps({
    id: {
        type: [String, Number],
        required: true,
    },
    deleteFunction: {
        type: Function,
        required: true,
    },
});

const isVisible = ref(true);
const modal = ref<HTMLElement | null>(null);

const closeModal = () => {
    isVisible.value = false;
};

const handleDelete = () => {
    props.deleteFunction(props.id);
    closeModal();
};
</script>

<template>
    <div
        v-if="isVisible"
        ref="modal"
        class="modal">
        <div class="modal__content">
            <div class="modal__content__header">
                <h2>Delete Item</h2>
                <p>Are you sure you want to delete this item?</p>
            </div>
            <div class="modal__content__body">
                <ButtonComponent
                    variant="danger"
                    @click="handleDelete"
                    >Delete</ButtonComponent
                >
                <ButtonComponent
                    variant="primary"
                    @click="closeModal"
                    >Cancel</ButtonComponent
                >
            </div>
        </div>
    </div>
</template>

<style scoped></style>
