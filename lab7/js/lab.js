// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function makeItRainbow() {
  var userIntput = window.prompt("Input text to be displayed. Try to input enought text to reveal the image!");
  var userIntput = userIntput.toUpperCase();
  var userArray = userIntput.split("");
  var userArray = userArray.sort();
  var userInput = userArray.join("");
  document.writeln("<h5 class=\"rainbow\">" + userInput + "</h5>");
}

function main() {
  console.log("Main function started.");
  makeItRainbow();
  // the code that makes everything happen
}

// let's get this party started
main();
