// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCGPdpuKjRGjAw3tmasBX-0jzNYpS2eQIw",
    authDomain: "timbre-2.firebaseapp.com",
    databaseURL: "https://timbre-2.firebaseio.com",
    storageBucket: "timbre-2.appspot.com",
    messagingSenderId: "206297061668"
  };
  firebase.initializeApp(config);



 var fireDb = firebase.database();


   fireDb.ref().update({
           p1: {
                name: "Player 1",
                choice: "null",
                loss: 0,
                wins: 0
            }
});


//var connectedRef = firebase.database().ref(".info/connected");
//connectedRef.on("value", function(snap) {
  //if (snap.val() === true) {
    //alert("connected");
  //} else {
   // alert("not connected");
 // }
//});

	
$(document).ready(function() {





		$("#logInBtn").on("click", function(event) {

			var email = $("#email").val();

			var password = $("#password").val();




				alert("Password : " + password );
				alert("Email : " + email );


				firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});



});


		});

	



