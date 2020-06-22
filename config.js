import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAleZ5u14mgc292s7tBTF2CcIuUz2SDxCU",
    authDomain: "bedtimestories-58524.firebaseapp.com",
    databaseURL: "https://bedtimestories-58524.firebaseio.com",
    projectId: "bedtimestories-58524",
    storageBucket: "bedtimestories-58524.appspot.com",
    messagingSenderId: "1018527290727",
    appId: "1:1018527290727:web:4851b5b5f148da13f6cbc2"
};

// Initialize Firebase
if (!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
