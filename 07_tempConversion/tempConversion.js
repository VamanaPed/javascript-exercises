const convertToCelsius = function(fahernheit) {
  if(!Number.isFinite(fahernheit)) return "ERROR";

  let celsius = ((fahernheit) -32) * (5/9);
  return Number.parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(celcius) {
  if(!Number.isFinite(celcius)) return "ERROR";

  let fahernheit = (celcius * (9/5)) + 32;
  return Number.parseFloat(fahernheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
