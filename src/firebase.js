import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA1lgd4bSbg3ivjaVZuRpQCNXMHi0dweew",
    authDomain: "formweb-79e70.firebaseapp.com",
    databaseURL: "https://formweb-79e70-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "formweb-79e70",
    storageBucket: "formweb-79e70.appspot.com",
    messagingSenderId: "115722797473",
    appId: "1:115722797473:web:b8eb508e6c0a0878f2cbe0",
    measurementId: "G-S2FXJ6MTJX"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db, auth}