const convertToCelsius = function(far) {
  let farConversion = (far - 32)*(5/9);
  return Math.round(farConversion*10)/10;

};

const convertToFahrenheit = function(cel) {
  let celConversion = (cel*(9/5))+32;
  return Math.round(celConversion*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
