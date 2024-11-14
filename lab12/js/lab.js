// index.js - purpose and description here
// Author: Ben Silver
// Date: 11/13/24

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function sortingHat(str){
  let length = str.length;
  let mod = length % 4;
  let house;
  console.log(mod);
  switch (mod){
    case 0:
      house = "Gryffindor";
      break;
    case 1:
      house = "Ravenclaw";
      break;
    case 2:
      house = "Slytherin";
      break;
    default:
      house = "Hufflepuff";
      break;
  }
  return house;
}

function main() {
  console.log("Main function started.");
  $("#button").click(function(){
    const userName = $("#input").val();
    harryPotterHouse = sortingHat(userName);
    $("#output").html('<div class="text"><p>' + harryPotterHouse + '</p></div>');

  });
}

// let's get this party started
main();
