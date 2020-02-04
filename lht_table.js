"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Abraham Rivera Garcia
   Date: Feb 3 2020

	
*/

var thisDay = new Date("August 30,2018"); //sets the date

 //inserts this code in the variable tableHTML
 var tableHTML = "<table id='eventTable'> \
       <caption>Upcoming Events</captions> \
       <tr><th>Date</th><th>Event</th><th>Price</th></tr>";

//sets the time of End Date to 14 days after the this day variable
 var endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);


 for(var i = 0; i<eventDates.length; i++){
    var eventDate = new Date(eventDates[i]);
    var eventDay = eventDate.toDateString(); 
    var eventTime = eventDate.toLocaleTimeString(); //gets the time of the array


    if(thisDay <= eventDate && eventDate <= endDate){
       tableHTML += "<tr> \
          <td>" + eventDay + "@" + eventTime + "</td> \
          <td>" + eventDescriptions[i] + "</td> \
          <td>" + eventPrices[i] + "</td> \
       </tr>";
    }
 }
 //closes the Table element in the HTML
 tableHTML += "</table>";
 //Places all the code inside the tableHTML variable into code
 document.getElementById("eventList").innerHTML = tableHTML; 

