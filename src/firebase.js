import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDc9bsbXoz65HVWNew6DZsrbs--Zcj-c_8",
  authDomain: "react-firebase-auth-7cd51.firebaseapp.com",
  projectId: "react-firebase-auth-7cd51",
  storageBucket: "react-firebase-auth-7cd51.firebasestorage.app",
  messagingSenderId: "114527446005",
  appId: "1:114527446005:web:348e43df1eae692011f6bc",
  measurementId: "G-SJEV698WF5"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// OAuth Providers
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const githubProvider = new GithubAuthProvider();
export default app;
