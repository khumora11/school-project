import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcufHDurfvhBnvOzLNaNL-yd5q9XVjpyw",
  authDomain: "schoolproject-efb61.firebaseapp.com",
  projectId: "schoolproject-efb61",
  storageBucket: "schoolproject-efb61.firebasestorage.app",
  messagingSenderId: "274733539897",
  appId: "1:274733539897:web:371455f8482018251d23e8",
  measurementId: "G-M4R0898NYK",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
