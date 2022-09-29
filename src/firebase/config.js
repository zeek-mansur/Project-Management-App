import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyDeX5QLS3cHxaSnGBbTDtjytRBqtwJhyCI",
    authDomain: "thecolabsite.firebaseapp.com",
    projectId: "thecolabsite",
    storageBucket: "thecolabsite.appspot.com",
    messagingSenderId: "1057661338402",
    appId: "1:1057661338402:web:74cd71524d5b66fc6a9b7b"
  };


  // init fire 

  firebase.initializeApp(firebaseConfig)

  // init services

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  // time stamp

  const timestamp = firebase.firestore.Timestamp


  export {projectFirestore, projectAuth, projectStorage, timestamp}