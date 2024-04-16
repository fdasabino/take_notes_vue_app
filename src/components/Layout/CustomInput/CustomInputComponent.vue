<script setup lang="ts">
import { vAutoFocus } from "@/directives/vAutofocus";
import { defineEmits, defineProps, onUpdated, ref } from "vue";
import "./CustomInput.scss";

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
                maxlength="100"
                ref="textareaRef"
                :value="modelValue"
                @input="handleInput"
                :placeholder="placeholder"
                v-auto-focus />
            <span>{{ modelValue?.length }} / 100</span>
        </div>

        <div class="notes__input__buttonContainer">
            <slot name="button" />
        </div>
    </div>
</template>
