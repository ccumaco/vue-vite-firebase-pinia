import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'
import { auth } from '../firebaseConfig'
import { defineStore } from 'pinia'
import router from "./../router"

export const useUserStore = defineStore("userStore", {
    state: () => ({
        userData: "carlos@gmail.com",
        loadingUser: false
    }),
    actions:{
        async registerUser (email,password) {
            this.loadingUser = true
            try {
                const { user } = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                this.userData = {
                    email: user.email,
                    uid: user.uid
                }
                console.log(user);
                router.push("/")
            } catch (error) {
                console.log(error);
            } finally {
                this.loadingUser = false
            }
        },
        async loginUser (email, password) {
            this.loadingUser = true
            try {
                const { user } = await signInWithEmailAndPassword(
                auth,
                email,
                password
                )
                this.userData = {
                    email: user.email,
                    uid: user.uid
                }
                router.push("/")
            } catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            } finally {
                this.loadingUser = false
            }
        },
        async logoutUser () {
            this.loadingUser = true
            try {
                await signOut(auth)
                this.user = null
                router.push("/login")
            } catch (error) {
                console.log(error, "error");
            } finally {
                this.loadingUser = false
            }
        },
        currentUser () {
            return new Promise(( resolve, reject ) => {
                const unsuscribe = onAuthStateChanged(auth, user => {
                    if (user) {
                        this.userData = {
                            email: user.email,
                            uid: user.uid
                        }
                    } else {
                        this.userData = null
                    }
                    resolve(user)
                }, e => {
                    reject(e);
                })
                unsuscribe()
            })
        }
    }
})