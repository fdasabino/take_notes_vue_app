<script setup lang="ts">
import { computed, defineProps } from "vue";
import "./InputComponent.scss"; // Adjust the path as necessary

const props = defineProps({
    icon: String,
    name: String,
    rows: Number,
    placeholder: String,
    type: {
        type: String,
        default: "text", // Default to text if not specified
    },
    label: String,
    error: String,
    touched: Boolean,
    onChange: Function,
    onBlur: Function,
    csrfToken: String,
    providers: Object,
    callbackUrl: String,
});

const wrapperClassName = computed(() => [
    "form_input", // Adjust with actual class for base input
    props.error && props.touched ? "wrapper_error" : "", // Adjust with actual class for error state
]);

const inputClassName = computed(() => [
    props.error && props.touched ? "input_error" : "", // Adjust with actual class for error state
]);

const resolvedPlaceholder = computed(() =>
    props.error && props.touched ? props.error : props.placeholder
);

const inputProps = computed(() => ({
    ...props,
    onInput: props.onChange, // Vue uses `v-on:input` instead of `onChange`
    onBlur: props.onBlur,
}));

// Determine whether to render an input or a textarea based on the type prop
const inputOrTextareaComponent = computed(() => (props.type === "textarea" ? "textarea" : "input"));
</script>

<template>
    <div :class="wrapperClassName">
        <!-- Placeholder for Icon Rendering -->
        <component
            :is="inputOrTextareaComponent"
            v-bind="inputProps"
            :placeholder="resolvedPlaceholder"
            :class="inputClassName" />
    </div>
</template>
