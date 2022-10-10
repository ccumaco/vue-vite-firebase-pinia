import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import { defineStore } from 'pinia'

export const useUserStore = defineStore("userStore", {
    state: () => ({
        userData: "carlos@gmail.com"
    }),
    actions:{
        async registerUser () {
            try {
                const { user } = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                console.log(user);
            } catch (error) {
                console.log(error);
            }
        }
    }
})