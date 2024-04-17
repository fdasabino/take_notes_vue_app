import { getDateAndTime } from "@/directives/getDateAndTime";
import { openToast } from "@/directives/openToast";
import { db } from "@/firebase/firebase";
import type { Note } from "@/types/types";
import { collection, onSnapshot } from "firebase/firestore";
import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
    state: () => ({
        notes: [] as Note[],
    }),
    actions: {
        async getNotes() {
            onSnapshot(collection(db, "notes"), (items) => {
                let tempNotes = [] as Note[];
                items.forEach((item) => {
                    const note = {
                        id: item.id,
                        content: item.data().content,
                    };
                    tempNotes.push(note as Note);
                });

                this.notes = tempNotes;
            });
        },
        createNote(content: string) {
            const generateId = new Date().getTime().toString();
            const note = {
                id: generateId,
                title: getDateAndTime(),
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
