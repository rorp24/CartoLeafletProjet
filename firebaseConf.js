// Your web app's Firebase configuration
console.log($.getenv('FIREBASE_KEY'))
var firebaseConfig = {
    apiKey: '${FIREBASE_KEY}', //FIREBASE_KEY is stored in netlify env var
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