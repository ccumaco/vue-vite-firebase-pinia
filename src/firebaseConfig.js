import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD07VvW4F9nWBsIOkG1Edq8egUw72JNJ_Q",
    authDomain: "vue3-udemy-48833.firebaseapp.com",
    projectId: "vue3-udemy-48833",
    storageBucket: "vue3-udemy-48833.appspot.com",
    messagingSenderId: "99485740750",
    appId: "1:99485740750:web:0f7654ec51123ee0e1ea9f"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage(firebaseApp);

export { auth, db, storage };
