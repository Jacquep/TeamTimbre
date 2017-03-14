// Initialize Firebase
  //Brian's the man but so is Kayla
  var config = {
     apiKey: "AIzaSyCWd9bfk2Z2wvy4nU3o3ahdJpO9KLTvayo",
     authDomain: "timbre-ee3e8.firebaseapp.com",
     databaseURL: "https://timbre-ee3e8.firebaseio.com",
    storageBucket: "timbre-ee3e8.appspot.com",
     messagingSenderId: "457573350640"
   };
   firebase.initializeApp(config);

   // Create a variable to reference the database
  var database = firebase.database();

//moving this to the firebase storage
 $(document).ready(function() {
     //login information
     $("#logInBtn").on("click", function(event) {
       event.preventDefault();
       var email = $("#email").val();
       var password = $("#password").val();
         alert("Password : " + password );
          alert("Email : " + email );
        //remember this logs this info in firebase in the AUTHENTICATION not the DATABASE7yhh
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function (user) {
          //user.uid
          //database()
          firebase.ref('users/' + user.uid).update({
            //name etc
          })
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
    });
 });

	



