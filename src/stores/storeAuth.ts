import { openToast } from "@/directives/openToast";
import { defineStore } from "pinia";
import { auth } from "../firebase/firebase";
import { useStoreNotes } from "./storeNotes";

// import firebase auth functions
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

export const useStoreAuth = defineStore("storeAuth", {
    // initial state
    state: () => ({
        user: {
            id: "",
            email: "",
        },
    }),

    actions: {
        // onAuthStateChanged
        init() {
            const storeNotes = useStoreNotes();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.user.id = user.uid;
                    this.user.email = user.email ?? "";
                    this.router.push("/");
                    storeNotes.init();
                } else {
                    this.user.id = "";
                    this.user.email = "";
                    this.router.push("/auth");
                    storeNotes.clearNotes();
                }
            });
        },

        // sign up
        async signUp(credentials: { email: string; password: string }) {
            try {
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    credentials.email,
                    credentials.password
                );
                const user = userCredential.user;
                openToast(`Your account ${user.email}, has been created successfully.`, "success");
            } catch (error: Error | any) {
                const errorMessage = error.message;
                openToast(errorMessage, "error");
            }
        },

        // sign out
        async signOutUser() {
            try {
                await signOut(auth);
                openToast("You have been signed out successfully.", "info");
            } catch (error: Error | any) {
                const errorMessage = error.message;
                openToast(errorMessage, "error");
            }
        },

        // sign in
        async signInUser(credentials: { email: string; password: string }) {
            try {
                const userCredential = await signInWithEmailAndPassword(
                    auth,
                    credentials.email,
                    credentials.password
                );
                const user = userCredential.user;
                openToast(`Welcome back ${user.email}`, "success");
            } catch (error: Error | any) {
                const errorMessage = error.message;
                openToast(errorMessage, "error");
            }
        },
    },
});
