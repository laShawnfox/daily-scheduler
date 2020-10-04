$(document).ready(function (){
    console.log("this is loading");
    //DOM VARIABLES
     var currentDay = $("#currentDay");
     var hour = $(".hour");
     var saveBtn = $(".saveBtn");
     var textareaDiv = $("textarea");
   
    // JS VARIABLES

    var currentTime =  moment().format("HH");
    //var currentTimeInt = parseInt("currentTime");
   var now = parseInt(moment().format('HH'));
console.groupCollapsed(now);



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
moment().format('dddd'); 
moment().format("MMM Do"); 

//FUNCTION CALLS
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
      localStorage.setItem("9AM", ($TEXT9AM.VAL()));
      localStorage.setItem("10AM", ($TEXT10AM.VAL()));
      localStorage.setItem("11AM", ($TEXT11AM.val()));
      localStorage.setItem("12PM", ($TEXT12PM.val()));
      localStorage.setItem("1PM", ($TEXT1PM.val()));
      localStorage.setItem("2PM", ($TEXT2PM.val()));
      localStorage.setItem("3PM", ($TEXT3PM.val()));
      localStorage.setItem("4PM", ($TEXT4PM.val()));
      localStorage.setItem("5PM", ($TEXT5PM.val()));
     });
// 11. grab the users input - saveto local storage (onclick of step 10)
 $("#text9AM").append(localStorage.getItem("9AM"));
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