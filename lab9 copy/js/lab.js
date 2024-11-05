// index.js - purpose and description here
// Author: Ben Silver
// Date: 11/4/24

// Constants

// Functions



function main() {
  console.log("Main function started.");
  $("#challenge").append("<button id='button-challenge'>Apply CSS</button>");
  
  $("#button-challenge").click(function(){
    $("#challenge").animate({opacity: '0'}, "slow");
    setTimeout(function (){
      $("#challenge").toggleClass("special");} //Had to use a timeout since the toggle would not wait for the animation to finish
    , 500);
    
    $("#challenge").animate({opacity: '1'}, "slow");
  });
}

// let's get this party started
main();
