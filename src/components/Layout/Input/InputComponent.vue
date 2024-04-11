<script setup lang="ts">
import { computed, defineEmits, defineProps, ref, watch } from "vue";
import "./InputComponent.scss"; // Ensure the path to your SCSS file is correct

// Define the props the component accepts
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
    providers: Object,
    modelValue: String, // Accepting modelValue for v-model compatibility
});

// Define what events this component can emit
const emit = defineEmits(["update:modelValue"]);

// Reactive reference for the input value
const inputValue = ref(props.modelValue);

// Watch for external changes to modelValue and update the local input value
watch(
    () => props.modelValue,
    (newValue) => {
        if (newValue !== inputValue.value) {
            inputValue.value = newValue;
        }
    }
);

// Emit changes to update the parent component's v-model binding
const handleInput = (event: any) => {
    emit("update:modelValue", event.target.value);
};

// Compute the wrapper class names based on the error and touched states
const wrapperClassName = computed(() => [
    "form_input",
    props.error && props.touched ? "wrapper_error" : "",
]);

// Compute the input class names similarly
const inputClassName = computed(() => [props.error && props.touched ? "input_error" : ""]);

// Compute the placeholder text, showing errors if touched
const resolvedPlaceholder = computed(() =>
    props.error && props.touched ? props.error : props.placeholder
);

// Determine whether to render an input or a textarea based on the type prop
const inputOrTextareaComponent = computed(() => (props.type === "textarea" ? "textarea" : "input"));

const inputProps = computed(() => ({
    onInput: handleInput, // Handle input event
    onBlur: props.onBlur, // Pass onBlur handler if provided
}));
</script>

<template>
    <div :class="wrapperClassName">
        <!-- Use a dynamic component to switch between input and textarea -->
        <component
            :is="inputOrTextareaComponent"
            v-bind="inputProps"
            :value="inputValue"
            @input="handleInput"
            :placeholder="resolvedPlaceholder"
            :class="inputClassName" />
    </div>
</template>
