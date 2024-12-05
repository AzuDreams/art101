// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants
const button = document.getElementById('activate');
const ouptutDiv = document.getElementById('output');
const pokemonNumber = Math.floor(Math.random() * (1025));
console.log(pokemonNumber);
const primUrl = "https://pokeapi.co/api/v2/pokemon/" + pokemonNumber
console.log(primUrl);

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  button.addEventListener('click', () => {
    const pokemonNumber = Math.floor(Math.random() * (1025));
    console.log(pokemonNumber);
    const primUrl = "https://pokeapi.co/api/v2/pokemon/" + pokemonNumber
    console.log(primUrl);
    $.ajax({
      // The URL for the request (from the api docs)

      url: primUrl,
      // The data to send (will be converted to a query string)
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType : "json",
      // What do we do when the api call is successful
      //   all the action goes in here
      success: function(data) {
          // do stuff
          console.log(data);
          $("#output").html('<div class="text"><p> Pokemon: ' + data.name  + "<br>" +
          "Ability: " + data.abilities[0].ability.name +
          '</p></div>');
          


      },
      // What we do if the api call fails
      error: function (jqXHR, textStatus, errorThrown) { 
          // do stuff
          console.log("Error:", textStatus, errorThrown);
      }
  })
  });
}

// let's get this party started
main();
