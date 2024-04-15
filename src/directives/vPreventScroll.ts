import { type DirectiveBinding } from "vue";

interface HTMLElementWithHandlers extends HTMLElement {
    _preventScrollHandlers?: EventListener;
}

export const vPreventScroll = {
    mounted(el: HTMLElementWithHandlers, binding: DirectiveBinding) {
        const preventScroll = (e: Event) => e.preventDefault();
        el.addEventListener("wheel", preventScroll);
        el.addEventListener("keydown", preventScroll, { passive: false });
        el.addEventListener("keyup", preventScroll, { passive: false });

        // Storing the reference for cleanup
        el._preventScrollHandlers = preventScroll;
    },
    unmounted(el: HTMLElementWithHandlers) {
        if (el._preventScrollHandlers) {
            el.removeEventListener("wheel", el._preventScrollHandlers);
            el.removeEventListener("keydown", el._preventScrollHandlers);
            el.removeEventListener("keyup", el._preventScrollHandlers);
        }
    },
};
