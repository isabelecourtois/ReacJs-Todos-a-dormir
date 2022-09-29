import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPIMN4wsGoqvFAsonUepTFKZ73FYV-Dg8",
  authDomain: "todos-a-dormir.firebaseapp.com",
  projectId: "todos-a-dormir",
  storageBucket: "todos-a-dormir.appspot.com",
  messagingSenderId: "972457590374",
  appId: "1:972457590374:web:22a7d1f5882357173577a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

