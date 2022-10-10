import { getAuth } from "firebase/auth"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD07VvW4F9nWBsIOkG1Edq8egUw72JNJ_Q",
  authDomain: "vue3-udemy-48833.firebaseapp.com",
  projectId: "vue3-udemy-48833",
  storageBucket: "vue3-udemy-48833.appspot.com",
  messagingSenderId: "99485740750",
  appId: "1:99485740750:web:0f7654ec51123ee0e1ea9f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth()

export {auth};