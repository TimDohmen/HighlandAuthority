import firebase from "firebase/app"
import Storage from "firebase/storage"

var firebaseConfig = {
  apiKey: "AIzaSyCvdfYoMzEZ474OzhVYM8-f4_wVaUTiiSg",
  authDomain: "highlandauthority.firebaseapp.com",
  databaseURL: "https://highlandauthority.firebaseio.com",
  projectId: "highlandauthority",
  storageBucket: "highlandauthority.appspot.com",
  messagingSenderId: "662208193024",
  appId: "1:662208193024:web:292f70ea75f09dd9c9eee5",
  measurementId: "G-RQXG3X27RF"
};

firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage()