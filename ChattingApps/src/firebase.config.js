// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnNJjEEazJTHVX5Lv33CY6zh8vED0gSvc",
  authDomain: "free-chat-bangladesh.firebaseapp.com",
  projectId: "free-chat-bangladesh",
  storageBucket: "free-chat-bangladesh.appspot.com",
  messagingSenderId: "605444864810",
  appId: "1:605444864810:web:7d8a4eeada3a2866e1bc53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig