import { getDateAndTime } from "@/directives/getDateAndTime";
import { openToast } from "@/directives/openToast";
import { db } from "@/firebase/firebase";
import type { Note } from "@/types/types";
import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

import {
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    orderBy,
    query,
    setDoc,
    updateDoc,
} from "firebase/firestore";

const notesCollection = collection(db, "notes");

// "title" is the date and time of the note saved in the database
const notesCollectionQuery = query(notesCollection, orderBy("title", "desc"));

export const useStoreNotes = defineStore("storeNotes", {
    // initial state
    state: () => ({
        notes: [] as Note[],
        loading: false,
    }),
    actions: {
        // get
        async getNotes() {
            this.loading = true;
            try {
                onSnapshot(notesCollectionQuery, (items) => {
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
                    this.loading = false;
                });
            } catch (error: Error | any) {
                openToast(error.message, "error");
            } finally {
                const timeout = setTimeout(() => {
                    this.loading = false;
                }, 1000);
                return () => clearTimeout(timeout);
            }
        },
        // create
        async createNote(content: string) {
            const generateId = uuidv4();
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
        // delete
        async deleteNote(idToDelete: string) {
            await deleteDoc(doc(notesCollection, idToDelete))
                .then(() => {
                    openToast("Your note has been deleted successfully...", "info");
                })
                .catch((error) => {
                    openToast(error.message, "error");
                });
        },
        // update
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
