
//this makes our returned data show up in a global array
var gData = [];

//set arguments variable ...so far this isnt the solution; need to consolidate
//  var oArgs = {
//       app_key: "2CH4skmC8kN48Lr4",
//       q: "music",
//       where: "San Diego", 
//       within: 15,
//       units: "miles",
//       page_size: 4,
//       sort_order: "popularity"
//    };
// var northInland = oArgs.postal_code = "92027";



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
      postal_code:"92101",
      within: 15,
      units: "miles",
      page_size: 6,
      sort_order: "popularity"
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
    for (var i = 0; i < app.events.event.length; i++) {

    gData.push({
    city: app.events.event[i].city_name,
    venue: app.events.event[i].venue_name,
    title: app.events.event[i].title,
    artist: app.events.event[i].performers.performer.name,//this goes to itunes
    when: app.events.event[i].start_time,
    //url: app.events.event[0].url,
    imageStr: app.events.event[i].image.medium.url}),
    
    console.log(gData[i]);

   
  
  //moment.js date/time display conversion 
    var returnedDate = gData[i].when;
    console.log(returnedDate);

    var displayDate = moment(returnedDate).format("dddd, MMMM Do YYYY, h:mm:ss a");
    console.log(displayDate);



// Dynamic results return div
        //create an event return div and assign it a class to reference
        var eventResult = $("<div>");
        eventResult.attr("class","local-event")
        
        //make a div to store the event text/info return
        var eventInfo = $("<div>");
        eventInfo.attr("class","info-event");

        //create variables for the desired display info
        var eventDate = $("<p>").text(displayDate);
        var eventTitle = $("<p>").text(gData[i].title); 
        var eventVenue = $("<p>").text(gData[i].venue); 
         
        // Make an image div for the returned image and 
        var eventImage = $("<img>"); 

        // Set the image's src and id //note, need this for itunes call
        eventImage.attr("src",gData[i].imageStr);
        eventImage.attr("id",gData[i].artist ? gData[i].artist : gData[i].title);
        eventImage.attr("class","artist-pic");
        //eventImage.attr("onclick","showRecordPlayer()"); both methods work, cool
        
        // Append the p variable to the eventInfo variable.
        eventDate.appendTo(eventInfo);
        eventTitle.appendTo(eventInfo);
        eventVenue.appendTo(eventInfo);

        // Append both the info and the image variables to the eventResult variable.
        eventInfo.appendTo(eventResult);
        eventImage.appendTo(eventResult);

      //send it to the HTML div
       $(".single-event").prepend(eventResult);


        $(".artist-pic").on("click", function(){
          event.preventDefault();
          showRecordPlayer();
      //this isnt working bc the image is just a URL, not accesing the api, im only getting 1st btn info; maybe import the itunes info here
            $(".detail-date").append(eventDate);
            $(".detail-title").append(eventTitle);
            $(".detail-venue").append(eventVenue);
        // //$(".detail-genre").append(gData[i].genre)
        });
//ITUNES API CALLING
  //  $.getJSON(
  //     'https://itunes.apple.com/search?term=the+cure&limit=25&callback=?', 
  //     function iTunesCall( data ) {
  //       myData = data;
  //        console.log(data)
  //        console.log(myData.results[0].previewUrl);
       
  // var fSound = myData.results[0].previewUrl;
  //        var sound = new Audio(fSound);
  // sound.play();
  //    });
  //   });

  
    

    // //first try html grabs
    // $("#city_search").html("<br>Event Location : " + gData[i].city + "<br>" );
    
    // $("#data-date").html(displayDate);
    // $("#data-eventName").html(gData[i].title);
    // $("#data-venue").html(gData[i].venue);
    // //$("#test4").html("<br>" + eventListing.url + "<br>" );

    // $("#dImg").attr("src",gData[i].imageStr);
    // //$("#data-image").append("<img src='" + gData[i].imageStr + "' width='180' height='180'>");
    
    // console.log(gData[i].imageStr);
    }
  });
}
// function clickNorthCoastal(){
//    var oArgs = {
//       app_key: "2CH4skmC8kN48Lr4",
//       q: "music",
//       where: "San Diego", 
//       postal_code:"92011",
//       within: 10,
//       units: "miles",
//       page_size: 10,
//       sort_order: "popularity",
//    };
   










