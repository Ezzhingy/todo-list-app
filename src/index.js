import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { initializeApp } from "firebase/app";
import { getFirebaseConfig } from "./components/firebase/firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function getProfilePicUrl() {
  return getAuth().currentUser.photoURL || "/images/profile_placeholder.png";
}

function getUserName() {
  return getAuth().currentUser.displayName;
}

function isUserSignedIn() {
  return !!getAuth().currentUser;
}

export function checkSignedInWithMessage() {
  // Return true if the user is signed in Firebase
  if (isUserSignedIn()) {
    return true;
  }

  // Display a message to the user using a Toast.
  alert("You must sign-in first");
  return false;
}

function addSizeToGoogleProfilePic(url) {
  if (url.indexOf("googleusercontent.com") !== -1 && url.indexOf("?") === -1) {
    return url + "?sz=150";
  }
  return url;
}

function initFirebaseAuth() {
  onAuthStateChanged(getAuth(), authStateObserver);
}

function authStateObserver(user) {
  const userPicElement = document.getElementById("user-pic");
  const userNameElement = document.getElementById("user-name");
  const signOutButtonElement = document.getElementById("sign-out");
  const signInButtonElement = document.getElementById("sign-in");

  if (user) {
    // User is signed in!
    // Get the signed-in user's profile pic and name.
    const profilePicUrl = getProfilePicUrl();
    const userName = getUserName();

    // Set the user's profile pic and name.
    userPicElement.style.backgroundImage =
      "url(" + addSizeToGoogleProfilePic(profilePicUrl) + ")";
    userNameElement.textContent = userName;

    // Show user's profile and sign-out button.
    userNameElement.classList.remove("hide");
    userPicElement.removeAttribute("hidden");
    signOutButtonElement.removeAttribute("hidden");

    // Hide sign-in button.
    signInButtonElement.classList.add("hide");
  } else {
    // User is signed out!
    // Hide user's profile and sign-out button.
    userNameElement.classList.add("hide");
    userPicElement.setAttribute("hidden", "true");
    signOutButtonElement.setAttribute("hidden", "true");

    // Show sign-in button.
    signInButtonElement.classList.remove("hide");
  }
}

const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);
initFirebaseAuth();
