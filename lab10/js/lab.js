// index.js - purpose and description here
// Author: Ben Silver
// Date: 11/6/24

// Constants

// Functions
function generateRandomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}




async function main() {
  $("#make-convo").click(async function(){
    const newText = generateRandomText();
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
    $("#output p:last").css("opacity", "0");
    $("#output p:last").animate({opacity: '1'}, "slow");
    while (true){
        await new Promise(resolve => setTimeout(resolve, 2000)); //Added as a suggestion from gemini so that all of the iterations
        const newText = generateRandomText();                    //don't run synchronously
        $("#output").append('<div class="text"><p>' + newText + '</p></div>');
        $("#output p:last").css("opacity", "0");
        $("#output p:last").animate({opacity: '1'}, "slow");
    }
  });
  
}

// let's get this party started
main();
