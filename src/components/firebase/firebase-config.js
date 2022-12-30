import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  deleteDoc,
  serverTimestamp,
  Firestore,
  getDocs,
} from "firebase/firestore";

const config = {
  apiKey: "AIzaSyDQgl-CBe_LLgHO4jNUIwBEst-NzKY6Ees",
  authDomain: "todo-list-app-9ad7c.firebaseapp.com",
  projectId: "todo-list-app-9ad7c",
  storageBucket: "todo-list-app-9ad7c.appspot.com",
  messagingSenderId: "613265046354",
  appId: "1:613265046354:web:43fa4e29c996054213588b",
};

function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}

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

export async function saveTodo(projectObj) {
  try {
    const recentTodoQuery = collection(getFirestore(), "todo");
    const querySnapshot = await getDocs(recentTodoQuery);
    if (querySnapshot.docs.length !== 0) {
      await deleteDoc(doc(getFirestore(), "todo", querySnapshot.docs[0].id));
    }
    await addDoc(collection(getFirestore(), "todo"), {
      allProjects: projectObj,
    });
  } catch (error) {
    console.error("Error writing new todo to Firebase Database", error);
  }
}

const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);
initFirebaseAuth();
