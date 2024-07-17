const API_KEY = "fd42cc713d4b3d08ef9316811052a4f8";

const cityInput = document.querySelector(".inputCity");
const weatherform = document.querySelector(".weatherForm");
const card = document.querySelector(".card");

async function getData(city) {
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  await fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      const result = {
        Name: data.Name,
      };
    });

  return result;
}

function DisplayData(data) {
  const cityName = document.createElement("h1");
  card.appendChild(cityName);
  cityName.textContent = data;
}

weatherform.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = cityInput.value;
  const result = getData(city);

  DisplayData(result);
});
