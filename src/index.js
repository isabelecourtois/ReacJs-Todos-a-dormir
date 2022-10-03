import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCPIMN4wsGoqvFAsonUepTFKZ73FYV-Dg8",
  authDomain: "todos-a-dormir.firebaseapp.com",
  projectId: "todos-a-dormir",
  storageBucket: "todos-a-dormir.appspot.com",
  messagingSenderId: "972457590374",
  appId: "1:972457590374:web:22a7d1f5882357173577a7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

