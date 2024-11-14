// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants


// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function fizzBuzzBang(fizz, buzz, bang, loops){
  let outputString = "";
  for (let x = 1; x < loops; x++){
    outputString += x + " - ";
    console.log(outputString);
    if (x % fizz == 0){
      outputString += "Fizz"; 
    }
    if (x % buzz == 0){
      outputString += "Buzz";
    }
    if (x % bang == 0){
      outputString += "Bang"; 
    }
    outputString += "<br>";
  }
  return outputString;
}

function main() {
  $("#button").click(function(){
    let loops = $("#input1").val();
    let fizz = $("#input2").val();
    let buzz = $("#input3").val();
    let bang = $("#input4").val();
    let string = fizzBuzzBang(fizz,buzz,bang,loops);
    $("#output").html('<div class="text"><p>' + string + '</p></div>');

  });
  // the code that makes everything happen
}

// let's get this party started
main();
