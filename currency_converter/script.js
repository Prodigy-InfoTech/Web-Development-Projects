
// Select elements by class and ID
var select = document.querySelectorAll('.currency'),

input_currency = document.getElementById('input_currency'),

output_currency = document.getElementById('output_currency');

// API host
const host = 'api.frankfurter.app';

// Fetch currency data
fetch(`https://${host}/currencies`)
  .then((data) => data.json())
  .then((data) => {

    // Convert currency data to an array of entries
    const entries = Object.entries(data)

    // Loop through entries and populate select dropdowns
    for(i = 0; i < entries.length; i++)
    {
        select[0].innerHTML += `<option value = "${entries[i][0]}"> ${entries[i][0]} </option>`
        select[1].innerHTML += `<option value = "${entries[i][0]}"> ${entries[i][0]} </option>`
    }
  });


// Function to perform currency conversion
function converter(){
  var input_currency_val = input_currency.value;

  if(select[0].value != select[1].value){
    const host = 'api.frankfurter.app';

    // Fetch the latest exchange rate data
    fetch(`https://${host}/latest?amount=${input_currency_val}&from=${select[0].value}&to=${select[1].value}`)
    .then((val) => val.json())
    .then((val) => {
      // Set the output currency value to the converted value
      output_currency.value = Object.values(val.rates)[0];
    });
  }
  else{
    // Alert the user to select two different currencies
    alert("please select two different currency")
  }
}