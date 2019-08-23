// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: $FIREBASE_KEY,
    authDomain: "projetleaflet.firebaseapp.com",
    databaseURL: "https://projetleaflet.firebaseio.com",
    projectId: "projetleaflet",
    storageBucket: "",
    messagingSenderId: "338184040216",
    appId: "1:338184040216:web:34d3bdac5f23773b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();