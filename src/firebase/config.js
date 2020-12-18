import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBJKo5Eb7SX37D2lMHmAjKzrMdUjpydl_k",
    authDomain: "firegram-flor.firebaseapp.com",
    projectId: "firegram-flor",
    storageBucket: "firegram-flor.appspot.com",
    messagingSenderId: "635351246454",
    appId: "1:635351246454:web:ecacbcc63e88fabc09e157"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Servicios
const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };