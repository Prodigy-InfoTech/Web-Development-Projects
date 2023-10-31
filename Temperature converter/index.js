function convertTemperature() {
  const tempInput = document.getElementById('tempInput').value;
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;
  let result;

  if (fromUnit === 'celsius') {
    if (toUnit === 'fahrenheit') {
      result = (tempInput * 9) / 5 + 32;
    } else if (toUnit === 'kelvin') {
      result = parseFloat(tempInput) + 273.15;
    } else {
      result = tempInput; // No conversion needed (from Celsius to Celsius)
    }
  } else if (fromUnit === 'fahrenheit') {
    if (toUnit === 'celsius') {
      result = ((tempInput - 32) * 5) / 9;
    } else if (toUnit === 'kelvin') {
      result = ((tempInput - 32) * 5) / 9 + 273.15;
    } else {
      result = tempInput; // No conversion needed (from Fahrenheit to Fahrenheit)
    }
  } else if (fromUnit === 'kelvin') {
    if (toUnit === 'celsius') {
      result = tempInput - 273.15;
    } else if (toUnit === 'fahrenheit') {
      result = ((tempInput - 273.15) * 9) / 5 + 32;
    } else {
      result = tempInput; // No conversion needed (from Kelvin to Kelvin)
    }
  }

  document.getElementById('result').innerHTML = `Result: ${result.toFixed(
    2
  )} ${toUnit}`;
}
