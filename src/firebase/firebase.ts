import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhbdQkvk1kzJM5w1Ody0Pkp8Ew01gyqJk",
    authDomain: "take-notes-46820.firebaseapp.com",
    projectId: "take-notes-46820",
    storageBucket: "take-notes-46820.appspot.com",
    messagingSenderId: "804717540080",
    appId: "1:804717540080:web:5fc6cc7aef1b6011004835",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
