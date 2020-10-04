$(document).ready(function (){
    console.log("this is loading");
    //DOM VARIABLES
     var currentDay = $("#currentDay");
     var hour = $(".hour");
     var saveBtn = $(".saveBtn");
     var textareaDiv = $("textarea");

    // JS VARIABLES

    //FUNCTION CALLS




 <!--1. HTML, CSS, Javascript documents -->
 <!-- 2. Scale out with boilerplate -->
 <!-- 3. Put moment.js link in to access jQuery library -->
 <!-- 4. Insert jumbotron from Bootstrap -->
 <!-- 5. Create div container for form  -->
 <!-- 6. Create an array for days of the week--> JQUERY
 <!-- 7. Create array for 9-5 workday hours--> JQUERY
 <!-- 8. create local storage to save text event -->
//  1. date and time

//  3. display current date (location: top of calendar (CSS))
moment().format('dddd'); 
moment().format("MMM Do"); 
//  4. onscroll function (possible)
//  5. format: standard business hours - section off each hour
//  6. format: days - not weeks or months etc.
//  7. each time block will be placed in categories based on three factors:
//     a. past
//     b. present
//     c. future
// 8. function that allows clicking within the time-block (each block must have an onclick function)
//     hint: jquery will be of big assistance
// 9. The event blocks take in input
// 10. eventlistener() - create a save button for each block to save the input (step 9)
//     hint: jquery
     saveBtn.on("click", function (){
      localStorage.setItem("textarea", "time");
     });
// 11. grab the users input - saveto local storage (onclick of step 10)
// 12. onload()- eventpreventdefault
// 13. allow for the input to remain on the page - even on refresh

});