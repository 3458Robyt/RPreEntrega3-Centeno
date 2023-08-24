import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZ4zFljgtgvvF6FE3ho_oyUVq1-gIta4I",
  authDomain: "rpreentrega3-centeno.firebaseapp.com",
  projectId: "rpreentrega3-centeno",
  storageBucket: "rpreentrega3-centeno.appspot.com",
  messagingSenderId: "146432335734",
  appId: "1:146432335734:web:d14ca3f6b82940f8d8a457",
  measurementId: "G-ZGLWQN2WZT"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
