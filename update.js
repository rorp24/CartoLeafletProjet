var user = firebase.auth().currentUser;

if (user) {

} else {
    //renvoi l'utilisateur a index s'il n'est pas loggé
    window.location = "index.html"
}