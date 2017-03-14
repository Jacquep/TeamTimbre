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


//this make our returned data show up in a global array
var gData = [];


//ACCESSING THE API
//i dont know what this is but it makes my API work
function show_alert(){
  var oArgs = {
            app_key:"2CH4skmC8kN48Lr4",
            id: "20218701",
            page_size: 10,
  };
  EVDB.API.call("/events/get", oArgs, function(oData) {
    // Note: this relies on the custom toString() methods below:still dont know what it means but paranoid to remove
  });
}
//setting my arguments to return data
function clickSanDiegoMetro(){
   var oArgs = {
      app_key: "2CH4skmC8kN48Lr4",
      q: "music",
      where: "San Diego", 
      postal_code:"92109",
      within: 20,
      units: "miles",
      page_size: 10,
      sort_order: "popularity",
   };
   

   //api call plus  console checking of info
   EVDB.API.call("/events/search", oArgs, function(oData) {
    var app = oData;
    console.log(app)
    console.log(app.events.event[0].city_name);
    console.log(app.events.event[0].venue_name);
    console.log(app.events.event[0].postal_code);
    console.log(app.total_items); 
    

    //iterate through the search results an return the results as objects into a global array
    for (var i = 0; i < app.total_items - 1; i++) {

    gData.push({
    city: app.events.event[i].city_name ? app.events.event[i].city_name : "null",
    venue: app.events.event[i].venue_name,
    title: app.events.event[i].title,
    //artist: app.events.event[i].performers.performer.name,//this goes to itunes
    when: app.events.event[i].start_time,
    //url: app.events.event[0].url,
    imageStr: app.events.event[i].image.medium.url}),
    
    console.log(gData[i]);

   


    //moment date/time conversion moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    //this isnt doing anything  -_-
    var displayDate = moment().format(gData[i].when, "LLLL");
    console.log(displayDate);
    console.log(gData[i].when);


    $("#city_search").html("<br>Event Location : " + gData[i].city + "<br>" );
    
    $("#data-date").html(displayDate);
    $("#data-eventName").html(gData[i].title);
    $("#data-venue").html(gData[i].venue);
    //$("#test4").html("<br>" + eventListing.url + "<br>" );
    $("#data-image").append("<img src='" + gData[i].imageStr + "' width='180' height='180'>");
    }
  });
}

function clickNorthCoastal(){
   var oArgs = {
      app_key: "2CH4skmC8kN48Lr4",
      q: "music",
      where: "San Diego", 
      postal_code:"92011",
      within: 10,
      units: "miles",
      page_size: 10,
      sort_order: "popularity",
   };
   

   //api call plus  console checking of info
   EVDB.API.call("/events/search", oArgs, function(oData) {
    var app = oData;
    console.log(app)
    console.log(app.events.event[0].city_name);
    console.log(app.events.event[0].venue_name);
    console.log(app.events.event[0].postal_code);
    console.log(app.total_items); 
    

    //iterate through the search results an return the results as objects into a global array
    for (var i = 0; i < app.total_items - 1; i++) {

    gData.push({
    city: app.events.event[i].city_name ? app.events.event[i].city_name : "null",
    venue: app.events.event[i].venue_name,
    title: app.events.event[i].title,
    //artist: app.events.event[i].performers.performer.name,//this goes to itunes
    when: app.events.event[i].start_time,
    //url: app.events.event[0].url,
    imageStr: app.events.event[i].image.medium.url}),
    
    console.log(gData[i]);

   


    //moment date/time conversion moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    //this isnt doing anything  -_-
    var displayDate = moment().format(gData[i].when, "LLLL");
    console.log(displayDate);
    console.log(gData[i].when);


    $("#city_search").html("<br>Event Location : " + gData[i].city + "<br>" );
    
    $("#data-date").html(displayDate);
    $("#data-eventName").html(gData[i].title);
    $("#data-venue").html(gData[i].venue);
    //$("#test4").html("<br>" + eventListing.url + "<br>" );
    $(".rounded-circle").append("<img src='" + gData[i].imageStr + "' width='180' height='180'>");
  }
    });

    

}








