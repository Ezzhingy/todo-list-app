import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { initializeApp } from "firebase/app";
import { getFirebaseConfig } from "./components/firebase/firebase-config";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const firebaseAppConfig = getFirebaseConfig();
const app = initializeApp(firebaseAppConfig);
