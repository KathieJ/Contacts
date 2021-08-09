import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBiPEnCTig513ep65OUrkRJkGSh2hdSwAU",
    authDomain: "memory-book-bd2f6.firebaseapp.com",
    projectId: "memory-book-bd2f6",
    storageBucket: "memory-book-bd2f6.appspot.com",
    messagingSenderId: "718707838331",
    appId: "1:718707838331:web:14082115131c6ab22bc1de",
    measurementId: "G-HGLWTMPKTR"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
