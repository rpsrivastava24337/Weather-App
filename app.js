const apikey = "9214a8e4465bcef1afaf03dc9f9c2259"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input")
const searchButton = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apikey}`);
    var data = await response.json()
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;

    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png"
    }
    else if (data.weather[0].main == "Humidity") {
        weatherIcon.src = "images/humidity.png"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png"
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png"
    }
    else {
        weatherIcon.src = "images/Rain.png"

    }
}

searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value)
})

