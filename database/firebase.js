import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyA96B9Xi9eGHM4O6LxLnZLXaFmHO8pRsIg",
    authDomain: "auth-afd14.firebaseapp.com",
    projectId: "auth-afd14",
    storageBucket: "auth-afd14.appspot.com",
    messagingSenderId: "768273240480",
    appId: "1:768273240480:web:12b3b342b41514128854c5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)


const db = firebase.firestore()
export default {
    firebase,
    db
}
