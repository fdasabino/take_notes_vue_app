<script setup lang="ts">
import { defineEmits, defineProps, onUpdated, ref } from "vue";

defineProps({
    modelValue: String,
    placeholder: String,
});

const textareaRef = ref(null as HTMLTextAreaElement | null);
const emit = defineEmits(["update:modelValue"]);

const handleInput = (event: Event) => {
    if (!(event.target instanceof HTMLTextAreaElement)) return;
    emit("update:modelValue", event.target.value);
};

onUpdated(() => {
    if (textareaRef.value) {
        textareaRef.value.focus();
    }
});
</script>

<template>
    <div class="notes__input">
        <div class="form_input">
            <textarea
                ref="textareaRef"
                :value="modelValue"
                @input="handleInput"
                :placeholder="placeholder" />
        </div>

        <div class="notes__input__buttonContainer">
            <slot name="button" />
        </div>
    </div>
</template>
