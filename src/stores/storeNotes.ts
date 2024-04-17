import { getDateAndTime } from "@/directives/getDateAndTime";
import { openToast } from "@/directives/openToast";
import { db } from "@/firebase/firebase";
import type { Note } from "@/types/types";
import { collection, deleteDoc, doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { defineStore } from "pinia";

const notesCollection = collection(db, "notes");

export const useStoreNotes = defineStore("storeNotes", {
    state: () => ({
        notes: [] as Note[],
    }),
    actions: {
        async getNotes() {
            onSnapshot(notesCollection, (items) => {
                let tempNotes = [] as Note[];

                items.forEach((item) => {
                    const note = {
                        id: item.id,
                        title: item.data().title,
                        content: item.data().content,
                    };
                    tempNotes.push(note as Note);
                });
                this.notes = tempNotes;
            });
        },
        async createNote(content: string) {
            const generateId = new Date().getTime().toString();
            await setDoc(doc(notesCollection, generateId), {
                id: generateId,
                title: getDateAndTime(),
                content,
            })
                .then(() => {
                    openToast("Note added successfully...", "success");
                })
                .catch((error) => {
                    openToast(error.message, "error");
                });
        },
        async deleteNote(idToDelete: string) {
            await deleteDoc(doc(notesCollection, idToDelete))
                .then(() => {
                    openToast("Your note has been deleted successfully...", "info");
                })
                .catch((error) => {
                    openToast(error.message, "error");
                });
        },
        async updateNote(idToUpdate: string, content: string) {
            await updateDoc(doc(notesCollection, idToUpdate), {
                content,
            })
                .then(() => {
                    openToast("Note updated successfully...", "success");
                })
                .catch((error) => {
                    openToast(error.message, "error");
                });
        },
    },
    getters: {
        getNoteById: (state) => (id: string) => {
            return state.notes.find((note) => note.id === id);
        },
    },
});
