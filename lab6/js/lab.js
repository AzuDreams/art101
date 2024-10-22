// index.js - purpose and description here
// Author: Ben Silver
// Date: 10/22/24

// Constants
var myMainRide ={
  make: "Human",
  model: "Male",
  color: "Pale White",
  year: 2003,   
  age: function() {
    return 2024 - this.year;
  }
}

var myTransport = [
  "Walking",
  " Bus",
  " Friends Car"];
// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  document.writeln("My methods of transport " + myTransport, "</br>");
  document.writeln("My main ride: <pre>",
      JSON.stringify(myMainRide, null, "\t"), "</pre>") 
}

// let's get this party started
main();
