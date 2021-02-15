import firebase from 'firebase';
require('@firebase/firestore')

    var firebaseConfig = {
      apiKey: "AIzaSyBRmgMDhvthRJa5T9ZHcfw1eQbmYnnMNCY",
      authDomain: "barter-system-10a94.firebaseapp.com",
      databaseURL: "https://barter-system-10a94.firebaseio.com",
      projectId: "barter-system-10a94",
      storageBucket: "barter-system-10a94.appspot.com",
      messagingSenderId: "928678247918",
      appId: "1:928678247918:web:2f984dcf6103472f51e2ff"
    };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
