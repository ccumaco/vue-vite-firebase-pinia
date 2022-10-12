import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore/lite";
import { defineStore } from "pinia"
import { auth, db } from "../firebaseConfig";
import { nanoid } from "nanoid"
import router from "../router";

export const useDatabaseStore = defineStore("database", {
    state: () => ({
        documents: [],
        loadingDocs: false
    }),
    actions: {
        async getUrls() {
            // information to firebase to user
            if (this.documents.length !== 0) {
                console.log("entro al if");
                return
            }
            this.loadingDocs = true
            try {
                const q = query(
                    collection(db, "urls"),
                    where("user", "==", auth.currentUser.uid)
                )
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach( doc =>{
                    console.log({ id: doc.id, data: doc.data()});
                    this.documents.push({
                        id:doc.id,
                        ...doc.data()
                    })
                })
            } catch (error) {
                console.log(error);
            } finally {
                this.loadingDocs = false
            }
        },
        async addUrl (name) {
            try {
                const objectDoc = {
                    name: name,
                    short: nanoid(6),
                    user: auth.currentUser.uid
                }
                const docRef = await addDoc(collection(db, "urls"), objectDoc)
                this.documents.push({
                    ...objectDoc,
                    id: docRef.id
                })
            } catch (error) {
                console.error(error);
            } finally {

            }
        },
        async readUrl (id){
            try {
                const docRef = doc(db, "urls", id)
                const docSnap = await getDoc(docRef)
                if (!docSnap.exists()) {
                    throw new Error("no existe el doc")
                }

                if (docSnap.data().user !== auth.currentUser.uid) {
                    throw new Error("no le pertenece ese documento")
                }
                return docSnap.data().name
            } catch (error) {
                console.log(error.message);
            } finally {

            }
        }, 
        async updateUrl (id, name){
            try {
                const docRef = doc(db, "urls", id)
                const docSnap = await getDoc(docRef)
                if (!docSnap.exists()) {
                    throw new Error("no existe el doc")
                }

                if (docSnap.data().user !== auth.currentUser.uid) {
                    throw new Error("no le pertenece ese documento")
                }
                await updateDoc(docRef, {
                    name: name
                })
                this.documents = this.documents.map( item => item.id === id ? ({...item, name: name}) : item)
                router.push("/")
            } catch (error) {
                console.log(error.message);
            } finally {

            }
        },
        async deleteUrl (id){
            try {
                const docRef = doc(db, "urls", id)
                const docSnap = await getDoc(docRef)
                if (!docSnap.exists()) {
                    throw new Error("no existe el doc")
                }

                if (docSnap.data().user !== auth.currentUser.uid) {
                    throw new Error("no le pertenece ese documento")
                }
                await deleteDoc(docRef)
                this.documents = this.documents.filter(
                    (item) => item.id !== id
                )
            } catch (error) {
                console.error(error);
            } finally {

            }
        }
    }
})