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



var gData = [];




//ACCESSING THE API
//i dont know what this is?
function show_alert(){
  var oArgs = {
            app_key:"2CH4skmC8kN48Lr4",
            id: "20218701",
            page_size: 10,
  };
  EVDB.API.call("/events/get", oArgs, function(oData) {
      // Note: this relies on the custom toString() methods below
    });
}
function clickBtn()
{
   var oArgs = {
      app_key: "2CH4skmC8kN48Lr4",
      q: "music",
      where: "Chula Vista", 
      //postal_code:"92109",
      page_size: 10,
      sort_order: "popularity",
   };

   EVDB.API.call("/events/search", oArgs, function(oData) {
    var app = oData;
    console.log(app)
    console.log(app.events.event[0].city_name);
    console.log(app.events.event[0].venue_name);
    console.log(app.events.event[0].postal_code);
    console.log(app.total_items); 
    


    for (var i = 0; i < app.total_items - 1; i++) {
      //QA
      if (app.events.event[i].city_name === null)

    //my event object information
    //var eventListing 

    gData.push({
    city: app.events.event[i].city_name,
    venue: app.events.event[i].venue_name,
    title: app.events.event[i].title,
    //artist: app.events.event[i].performers.performer.name,//this goes to itunes
    when: app.events.event[i].start_time,
    //url: app.events.event[0].url,
    imageStr: app.events.event[i].image.medium.url});

  

    console.log(gData[i]);


    $("#test").html("<br>Event Location : " + gData[i].city + "<br>" );
    
    $("#test1").html(gData[i].when);
    $("#test2").html(gData[i].title);
    $("#test3").html(gData[i].venue);
    //$("#test4").html("<br>" + eventListing.url + "<br>" );
    $("#test5").append("<img src='" + gData[i].imageStr + "' width='180' height='180'>");
   
    //}
      // Note: this relies on the custom toString() methods below

    }

    });

}








function launchSearch(){
  //
  $("#launch-search").on("click",function(){

  //url request to the eventful API(this will access our events)
  var eventfulURL ="http://api.eventful.com/json/events/search?app_key=2CH4skmC8kN48Lr4&q=music"
  
  //grab our user input by building an onclick submit to the API
      //must reference the parameters: location by zip?, music, 

  //create our dropdown menu access
    //1. create variables to hold/call our San Diego regions >DEFINE these how??? 
        //construct this selection
    //2. on select we will send our request to the API

//run ajax to send a request to the eventful server
	   $.ajax({
   		url: eventfulURL,
   		method: "GET"
   	  })  
//.done function will run what we need to run after we get the API data
		    .done(function(response) {
		    console.log(response);
//in here put all the gif display/reporting that will happen
		    var results  = response.data 
        console.log(results);

//create a loop to iterate through out return
        //run through the results page
        for (var i = 0; i < results.length; i++) {



        }

//I want to return each search result as an eventObject
        var eventObject ={
          date: "",
          artist:"",
          venue:"",
          eventLink:"",
          
          artistImg:"",
          songLink:""
        }


		    });
  });
}
launchSearch();
