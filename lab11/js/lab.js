// index.js - purpose and description here
// Author: Ben Silver
// Date: 11/12/24

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function sortString(inputString) {
  let string = inputString.split(''); //Splits the array into a string
  let newString = []; //Create a new array to hold to new strong
  for (let i = 0; i < string.length; i++){ //Iterate over the length of the new array
    newString[i] = string[Math.floor(Math.random() * string.length)]; //Pick a random letter from the original string and put it in the new string
  }
  return newString.join(''); //Join it into a string again before returning
}
function main() {
  console.log("Main function started.");
  $("#submit").click(function(){
    const userName = $("#user-name").val();
    userNameSorted = sortString(userName);
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');

  });
}

// let's get this party started
main();
