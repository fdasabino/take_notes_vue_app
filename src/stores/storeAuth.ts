import { openToast } from "@/directives/openToast";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { defineStore } from "pinia";
import { auth } from "../firebase/firebase";

export const useStoreAuth = defineStore("storeNotAuth", {
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
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.user = {
                        id: user.uid,
                        email: user.email ?? "",
                    };
                } else {
                    this.user = {
                        id: "",
                        email: "",
                    };
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
