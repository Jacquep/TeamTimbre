  // Initialize Firebase
  //Brian's the man 
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

//url request to the eventful API
 var eventfulURL = "http://api.eventful.com/json/events/search?app_key=2CH4skmC8kN48Lr4&q=music"

//run ajax to send a request to the eventful server
	$.ajax({
   		url: eventfulURL,
   		method: "GET"
   	
//.done function will run what we need to run after we get the API data
		.done(function(response) {
		console.log(response);
//in here put all the gif display/reporting that will happen
		var results  = response.data 

			$("#eventAPIReturn").on("click", function(){
				return results
			});	
		})

	});