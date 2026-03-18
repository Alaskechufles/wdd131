const data = {
  conditions: "Mild and Humid",
  temperature: 18,
  windSpeed: 5,
};

const calculateWindChill = (temperature, windSpeed) =>
  13.12 +
  0.6215 * temperature -
  11.37 * Math.pow(windSpeed, 0.16) +
  0.3965 * temperature * Math.pow(windSpeed, 0.16);

const temperatureElement = document.querySelector("#temperature");
const windSpeedElement = document.querySelector("#windSpeed");
const windChillElement = document.querySelector("#windChill");
const conditionsElement = document.querySelector("#conditions");

conditionsElement.textContent = data.conditions;
temperatureElement.textContent = data.temperature;
windSpeedElement.textContent = data.windSpeed;
if (data.temperature <= 10 && data.windSpeed > 4.8) {
  windChillElement.textContent = `${calculateWindChill(
    data.temperature,
    data.windSpeed
  ).toFixed(2)}°C`;
} else {
  windChillElement.textContent = "N/A";
}
