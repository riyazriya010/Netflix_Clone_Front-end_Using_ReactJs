
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2KJFYL69DfswqcsZy6hU-Qz3ySqJLRnU",
  authDomain: "netflix-clone-57d50.firebaseapp.com",
  projectId: "netflix-clone-57d50",
  storageBucket: "netflix-clone-57d50.appspot.com",
  messagingSenderId: "10090651033",
  appId: "1:10090651033:web:2c359f001c2efdd2124708",
  measurementId: "G-97VNFTTK1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the Firebase app to use it in your components
export { app, analytics };