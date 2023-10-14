import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
    apiKey: "AIzaSyC8Vc79iwk6XS-wPFip4kqbSaPw-YQLFn8",
    authDomain: "olxclone-4010f.firebaseapp.com",
    projectId: "olxclone-4010f",
    storageBucket: "olxclone-4010f.appspot.com",
    messagingSenderId: "592922039066",
    appId: "1:592922039066:web:6b748edd16f77f003212a3",
    measurementId: "G-1K7HXVK6CR"
  };

  export const Firebase= firebase.initializeApp(firebaseConfig)//named export