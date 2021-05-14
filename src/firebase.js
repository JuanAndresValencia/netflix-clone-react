import firebase from 'firebase/app'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBY7fJDxsnTL1cu1RISTPeUafu3dzaq91k",
    authDomain: "netflix-clone-react-57e2a.firebaseapp.com",
    projectId: "netflix-clone-react-57e2a",
    storageBucket: "netflix-clone-react-57e2a.appspot.com",
    messagingSenderId: "125139472702",
    appId: "1:125139472702:web:cef1fae409c723db0cdc6f",
    measurementId: "G-6JT2G262R5"
});

const auth = firebase.auth()
const db = firebase.firestore()

export { auth, db, firebaseConfig }