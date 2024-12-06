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


function main() {
  button.addEventListener('click', () => {
    const pokemonNumber = Math.floor(Math.random() * (1025));
    console.log(pokemonNumber);
    const primUrl = "https://pokeapi.co/api/v2/pokemon/" + pokemonNumber
    console.log(primUrl);
    $.ajax({

      url: primUrl,
      type: "GET",
      dataType : "json",
      success: function(data) {
          // do stuff
          console.log(data);
          $("#output").html('<div class="text"><p> Pokemon: ' + data.name  + "<br>" +
          "Ability: " + data.abilities[0].ability.name +
          '</p></div>');
          


      },
      error: function (jqXHR, textStatus, errorThrown) { 
          console.log("Error:", textStatus, errorThrown);
      }
  })
  });
}

main();
