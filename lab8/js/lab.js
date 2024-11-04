// index.js - testing Anon Functions and Callbacks
// Author: Ben Silver
// Date: 11/1/24

// Constants
let array = [0,1,2,3,4,5,6,7,8,9,10];

// Functions

function factorial(x){
  if (x == 0 || x == 1){
      return x;
  }
  let total = 1;
  for (let y = 1; y <= x; y++){
      total *= y;
  }
  return total;
}
function main() {
  console.log(factorial(5));
  console.log(factorial(17));
  let mapping = array.map(factorial);
  console.log(mapping);
  console.log(array.map(function(x){
    return x*x;
  }));
  // the code that makes everything happen
}

// let's get this party started
main();
