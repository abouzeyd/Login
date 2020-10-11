import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyA6wtYf-Uq7qAjJSCMUspqAZVDjy8HDx4I",
  authDomain: "login-f8de0.firebaseapp.com",
  databaseURL: "https://login-f8de0.firebaseio.com",
  projectId: "login-f8de0",
  storageBucket: "login-f8de0.appspot.com",
  messagingSenderId: "146540620788",
  appId: "1:146540620788:web:b63c124d62ed12fecae7a1",
}
firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const fireStore = firebase.firestore()
