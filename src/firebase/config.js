import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firebase-firestore"
import "firebase/firebase-storage"
import firebaseConfig from "./key"


firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const db = firebase.firestore()
const storage = firebase.storage();

export{auth,db,storage}