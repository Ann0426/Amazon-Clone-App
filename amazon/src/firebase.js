import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAEfQ2CKu1YOamuCsUv4zBgiLBwAnru06Q",
    authDomain: "challenge-8eab4.firebaseapp.com",
    databaseURL: "https://challenge-8eab4.firebaseio.com",
    projectId: "challenge-8eab4",
    storageBucket: "challenge-8eab4.appspot.com",
    messagingSenderId: "801767388540",
    appId: "1:801767388540:web:dc57187e430c96d978a0f9",
    measurementId: "G-VXX24Y4R04"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };