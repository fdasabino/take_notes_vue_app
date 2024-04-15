import type { Note } from "@/types/types";
import { defineStore } from "pinia";
import { useToast } from "vue-toast-notification";

const title = `Date: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`;
const $toast = useToast();

const openToast = (message: string, type: string) => {
    $toast.open({
        position: "bottom",
        message: message,
        type: type,
    });
};

export const useStoreNotes = defineStore("storeNotes", {
    state: () => ({
        notes: [] as Note[],
    }),
    actions: {
        createNote(content: string) {
            const generateId = new Date().getTime().toString();
            const note = {
                id: generateId,
                title,
                content,
            };

            this.notes.unshift(note);
            openToast("Note added successfully...", "success");
        },
        deleteNote(idToDelete: string) {
            this.notes = this.notes.filter((note) => note.id !== idToDelete);
            openToast("Your note has been deleted successfully...", "info");
        },
        updateNote(idToUpdate: string, content: string) {
            const note = this.notes.find((note) => note.id === idToUpdate);
            if (note) {
                note.content = content;
                openToast("Note updated successfully...", "success");
            }
        },
    },
    getters: {
        getNoteById: (state) => (id: string) => {
            return state.notes.find((note) => note.id === id);
        },
    },
});
