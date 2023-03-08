
var submitButton = document.getElementById("search-btn")
// var apiUrl = api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
var apiKey = "6d6afd4263c6c514857fdcb609beabb7"
submitButton.addEventListener("click", function(){
    getWeather();
    displayLocalStorageButtons();})
var weatherCard = document.querySelector(".weather-card")
var forecastCards = document.querySelector(".forecast-cards")
let localStorageArr = []
let history = document.querySelector(".history")



async function getWeather() {
    var chosenCity = $("#chosen-city").val()
    var apiKey = "6d6afd4263c6c514857fdcb609beabb7"
    let apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q="+ chosenCity + "&units=imperial&appid=" + apiKey 
    let response = await fetch(apiUrl)
    let weatherInfo = await response.json()
    todayWeather(weatherInfo)
}


function todayWeather(weatherInfo) {
    let todayTemp = weatherInfo.list[0].main.temp
    let todayHumidity = weatherInfo.list[0].main.humidity
    let todayWind = weatherInfo.list[0].wind.speed 
    let todayIconId = weatherInfo.list[0].weather[0].icon
    let iconUrl = "https://openweathermap.org/img/wn/" + todayIconId + "@2x.png"
  

    $(weatherCard).append($("<img>").attr("src", iconUrl))
    $(weatherCard).append($("<p>").text("Todays Temperature is " + todayTemp))
    $(weatherCard).append($("<p>").text("Todays humidity is " + todayHumidity))
    $(weatherCard).append($("<p>").text("Todays wind speed is " + todayWind))

    display5DayForecast(weatherInfo)
}


function display5DayForecast(weatherInfo) {
    for (let i = 7; i < weatherInfo.list.length; i+=8) {
        let eachDayTemp = weatherInfo.list[i].main.temp;
        let eachDayHumidity = weatherInfo.list[i].main.humidity;
        let eachDayWind = weatherInfo.list[i].wind.speed;
        let eachDayIconId = weatherInfo.list[i].weather[0].icon
        let iconUrl = "https://openweathermap.org/img/wn/" + eachDayIconId + "@2x.png"
   

        $(forecastCards).append($("<img>").attr("src", iconUrl))
        $(forecastCards).append($("<p>").text("this day temperature is " + eachDayTemp))
        $(forecastCards).append($("<p>").text("this day humidity is " + eachDayHumidity))
        $(forecastCards).append($("<p>").text("this day wind speed is " + eachDayWind))
    }
    putInLocalStorage(weatherInfo)
}

function putInLocalStorage(weatherInfo) {
    let searchedForCity = weatherInfo.city.name

    localStorageArr.push(searchedForCity);
    console.log(localStorageArr)
    JSON.stringify(localStorageArr)
    localStorage.setItem("city", JSON.stringify(localStorageArr));
}


function displayLocalStorageButtons() {
    var pastSearch = JSON.parse(localStorage.getItem("city"));

    for (let i = 0; i < pastSearch.length; i++) {
        $(history).append($("<button>").text(pastSearch[i]))
    }

    console.log(pastSearch)
}

// displayLocalStorageButtons()