$(document).ready(function (){
    //console.log("this is loading");
    //DOM VARIABLES....How to write dom variables in jquery?
    document.getElementById("currentDay");
   document.getElementsByClassName("lead");
   
    // JS VARIABLES
    var currentDay = document.getElementById("currentDay");
    // var myLeadPara =  document.getElementsByClassName("lead");

   // var currentDay = $("#currentDay");
    var hour = $(".hour");
    var saveBtn = $(".saveBtn");
    var textareaDiv = $("textarea");

    var text9AM = $("#text9AM");  //WHAT does it mean when it's declared but value never read?
    var text10AM = $("#text10AM");
    var text11AM = $("#text11AM");
    var text12PM = $("#text12PM");
    var text1PM = $("#text1PM");
    var text2PM = $("#text2PM");
    var text3PM = $("#text3PM");
    var text4PM = $("#text4PM");
    var text5PM = $("#text5PM");

    var currentTime =  parseInt(moment().format('HM'));
    var currentTimeInt = parseInt("currentTime");
alert(currentTime);

//var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];


//  <!--1. HTML, CSS, Javascript documents -->
//  <!-- 2. Scale out with boilerplate -->
//  <!-- 3. Put moment.js link in to access jQuery library -->
//  <!-- 4. Insert jumbotron from Bootstrap -->
//  <!-- 5. Create div container for form  -->
//  <!-- 6. Create an array for days of the week--> JQUERY
//  <!-- 7. Create array for 9-5 workday hours--> JQUERY
//  <!-- 8. create local storage to save text event -->
//  1. date and time

//  3. display current date (location: top of calendar (CSS))
document.getElementById("currentDay").innerHTML =  moment().format('dddd MMM Do');
// moment().format('dddd'); 
// moment().format("MMM Do"); 

//FUNCTION CALLS
//  4. onscroll function (possible)
//  5. format: standard business hours - section off each hour
//  6. format: days - not weeks or months etc.
//  7. each time block will be placed in categories based on three factors:
//     a. past
//     b. present
//     c. future
// $("textarea").
// 8. function that allows clicking within the time-block (each block must have an onclick function)
//     hint: jquery will be of big assistance
      
// 9. The event blocks take in input
// 10. eventlistener() - create a save button for each block to save the input (step 9)
//     hint: jquery
     console.log(saveBtn);
     saveBtn.on("click", function (){
        console.log(text9AM.val());

      localStorage.setItem("9AM", text9AM.val());
      
      localStorage.setItem("10AM", text10AM.val());
      localStorage.setItem("11AM", text11AM.val());
      localStorage.setItem("12PM", text12PM.val());
      localStorage.setItem("1PM", text1PM.val());
      localStorage.setItem("2PM", text2PM.val());
      localStorage.setItem("3PM", text3PM.val());
      localStorage.setItem("4PM", text4PM.val());
      localStorage.setItem("5PM", text5PM.val());
     });
// 11. grab the users input - saveto local storage (onclick of step 10)
 $("#text9AM").append(localStorage.getItem("9AM")); //should I put .getItem before appending?
 $("#text10AM").append(localStorage.getItem("10AM"));
 $("#text11AM").append(localStorage.getItem("11AM"));
 $("#text12PM").append(localStorage.getItem("12PM"));
 $("#text1PM").append(localStorage.getItem("1PM"));
 $("#text2PM").append(localStorage.getItem("2PM"));
 $("#text3PM").append(localStorage.getItem("3PM"));
 $("#text4PM").append(localStorage.getItem("4PM"));
 $("#text5PM").append(localStorage.getItem("5PM"));
 
// 12. onload()- eventpreventdefault
// 13. allow for the input to remain on the page - even on refresh

});