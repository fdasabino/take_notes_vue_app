<script setup lang="ts">
import "./ButtonComponent.scss";

interface ButtonProps {
    variant?: "primary" | "success" | "danger" | "google";
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const props = defineProps<ButtonProps>();

const buttonStyles = {
    primary: "btnPrimary",
    success: "btnSuccess",
    danger: "btnDanger",
    google: "btnGoogle",
};
</script>

<template>
    <button
        :class="['button', buttonStyles[props.variant || 'primary'], props.className]"
        :type="props.type || 'button'"
        :disabled="props.disabled"
        @click="props.onClick"
        @mouseenter="props.onMouseEnter"
        @mouseleave="props.onMouseLeave">
        <slot></slot>
    </button>
</template>
