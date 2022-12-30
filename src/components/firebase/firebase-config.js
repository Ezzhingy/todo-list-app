const config = {
  apiKey: "AIzaSyDQgl-CBe_LLgHO4jNUIwBEst-NzKY6Ees",
  authDomain: "todo-list-app-9ad7c.firebaseapp.com",
  projectId: "todo-list-app-9ad7c",
  storageBucket: "todo-list-app-9ad7c.appspot.com",
  messagingSenderId: "613265046354",
  appId: "1:613265046354:web:43fa4e29c996054213588b",
};

export function getFirebaseConfig() {
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
