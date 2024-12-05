// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants
const button = document.getElementById('activate');
const ouptutDiv = document.getElementById('output');

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  button.addEventListener('click', () => {
    $.ajax({
      // The URL for the request (from the api docs)
      data:{

      },


      url: "https://xkcd.com/614/info.0.json",
      // The data to send (will be converted to a query string)
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType : "json",
      // What do we do when the api call is successful
      //   all the action goes in here
      success: function(data) {
          // do stuff
          $("#output").html('<img src=\"' + data.img + '\">')
          console.log(data);
          


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
