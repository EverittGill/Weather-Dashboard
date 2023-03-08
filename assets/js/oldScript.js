var searchFormEl = document.querySelector('#city-search');

console.log("hello")


// function handleSearchFormSubmit(event) {
//     event.preventDefault();
  
//     const searchInputVal = document.querySelector('#chosen-city').value;
  
//     if (!searchInputVal) {
//       console.error('You need a search input value!');
//       return;
//     }
  
//     const geoApiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${searchInputVal}&limit=1&appid=${apiKey}`;
  
//     fetch(geoApiUrl)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch location data');
//         }
//         return response.json();
//       })
//       .then(response => {
//         if (!response.length) {
//           throw new Error('No results found');
//         }
//         console.log('Location data:', response);
//         const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${response[0].lat}&lon=${response[0].lon}&appid=${apiKey}`;
//         return fetch(apiUrl);
//       })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch weather data');
//         }
//         return response.json();
//       })
//       .then(response => {
//         console.log('Weather data:', response);
//         const currentData = response.list[0];
//         const temperatureInKelvin = currentData.main.temp;
//         const temperatureInFahrenheit = Math.round((temperatureInKelvin - 273.15) * 9/5 + 32);
//         const wind = currentData.wind.speed;
//         const humidity = currentData.main.humidity;
//         const clouds = currentData.clouds.all;
  
//         const tableEl = document.createElement('table');
//         const tr1El = document.createElement('tr');
//         const tr2El = document.createElement('tr');
//         const tr3El = document.createElement('tr');
//         const tr4El = document.createElement('tr');
//         const td1El = document.createElement('td');
//         const td2El = document.createElement('td');
//         const td3El = document.createElement('td');
//         const td4El = document.createElement('td');
//         const td5El = document.createElement('td');
//         const td6El = document.createElement('td');
//         const td7El = document.createElement('td');
//         const td8El = document.createElement('td');
  
//         td1El.textContent = 'City';
//         td2El.textContent = searchInputVal;
//         td3El.textContent = 'Temperature';
//         td4El.textContent = `${temperatureInFahrenheit} °F`;
//         td5El.textContent = 'Wind';
//         td6El.textContent = `${wind} m/s`;
//         td7El.textContent = 'Humidity';
//         td8El.textContent = `${humidity}%`;
  
//         tr1El.appendChild(td1El);
//         tr1El.appendChild(td2El);
//         tr2El.appendChild(td3El);
//         tr2El.appendChild(td4El);
//         tr3El.appendChild(td5El);
//         tr3El.appendChild(td6El);
//         tr4El.appendChild(td7El);
//         tr4El.appendChild(td8El);
  
//         tableEl.appendChild(tr1El);
//         tableEl.appendChild(tr2El);
//         tableEl.appendChild(tr3El);
//         tableEl.appendChild(tr4El);
  
//         const resultsDivEl = document.querySelector('#results');
//         resultsDivEl.innerHTML = '';
//         resultsDivEl.appendChild(tableEl);
//       })
//       .catch(error => {
//         console.error(error);
//       });
  
//     putInLocalStorage(searchInputVal);
//   }
  
//   const
  

// const API_KEY = "c363e65858c43c9c425877e218ab40c4";
// const response = await fetch(`api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}`)















// +++++++++++++++++++++++++++++++++++++++++++++++++ my code that runs the search button once a city has been added
function handleSearchFormSubmit(event) {
    console.log(event)
    event.preventDefault();

    var searchInputVal = document.querySelector('#chosen-city').value


    if (!searchInputVal) {
        console.error('You need a search input value!');
        return;
    } else {
        console.log(searchInputVal)
    }

    
    putInLocalStorage(searchInputVal)
    displayWeather(searchInputVal)
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);





// handling local storage

function putInLocalStorage(searchInputVal) {
    if (!localStorage.getItem("history")) {
        let arr = [searchInputVal]
        localStorage.setItem("history", JSON.stringify(arr));
    } else {
        let arr = JSON.parse(localStorage.getItem("history"));
        arr.push(searchInputVal);
        localStorage.setItem("history", JSON.stringify(arr));
    }

    renderText()
}


// takes local history and displays it as history on screen as a button

function renderText() {
    let localHistory = JSON.parse(localStorage.getItem("history"));
    var pastSearches = document.querySelector('.past-searches');
    pastSearches.innerHTML = ""
    console.log(localHistory)

    for (let i = 0; i < localHistory.length; i++) {
        var searchLocalHistory = document.createElement('button');
        searchLocalHistory.addEventListener("click", handleButtonClick)
        searchLocalHistory.innerText = localHistory[i]
        pastSearches.appendChild(searchLocalHistory)
    }

    // loop through it

    // append it to the dom as the inner text of a button

    // for each button call the handleSearchFormSubmit function onclick

}


function handleButtonClick(event) {
    let buttonText = event.target.innerText

}


renderText()



function displayWeather(searchInputVal) {
  const city = form.elements.city.value;
	
	try {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
		
		if (!response.ok) {
			throw new Error("City not found");
		}
		
		const data = await response.json();
		
		const weather = data.weather[0].description;
		const temp = data.main.temp;
		const humidity = data.main.humidity;
		
		weatherInfo.innerHTML = `<p>Weather: ${weather}</p><p>Temperature: ${temp}&deg;C</p><p>Weather: ${humidity}</p>`;
	} catch (error) {
		weatherInfo.innerHTML = "";
		const errorDiv = document.createElement("div");
		errorDiv.textContent = error.message;
		errorDiv.id = "error";
		weatherInfo.appendChild(errorDiv);
	}
}




































// remove lat and long and place city name


// const apiKey = "6d6afd4263c6c514857fdcb609beabb7"
                
// const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=30&lon=30&appid=${apiKey}`




// function displayWeather(searchInputVal) {

// const geoApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=$&limit=5&appid=${apiKey}`


// console.log(geoApiUrl)


//     ++++++++++++++++++++++++++++++++++++++++++++++ code that gets the current conditions into the console


// let returnedData;
// let searchedCity;
// the var below was for geoApiUrl
// var searchInputVal = document.querySelector('#chosen-city').value
// console.log(searchInputVal)
// fetch(geoApiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Failed to fetch location data');
//     }
//     return response.json();
//   })
//   .then(response => {
//     console.log(response)
//     if (!response.length) {
//       throw new Error('No results found');
//     }
//     console.log('Location data:', response);
//     returnedData = response;
//     const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${returnedData[0].lat}&lon=${returnedData[0].lon}&appid=${apiKey}`;
//     return fetch(apiUrl);
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Failed to fetch weather data');
//     }
//     return response.json();
//   })
//   .then(response => {
//     searchedCity = response;
//     console.log('Weather data:', response);
//     const currentData = searchedCity.list[0];
//     const temperature = currentData.main.temp;
//     const temperatureInFahrenheit = Math.round((temperature - 273.15) * 9/5 + 32);
//     const wind = currentData.wind.speed;
//     const humidity = currentData.main.humidity;
//     const clouds = currentData.clouds.all;
//     console.log(`Current temperature: ${temperatureInFahrenheit} f`);
//     console.log(`Current wind: ${wind} m/s`);
//     console.log(`Current humidity: ${humidity}%`);
//     console.log(`Current cloudiness: ${clouds}%`);
//   })
//   .catch(error => {
//     console.error(error);
//   });
// }



// let returnedData;
// let foundCity;
// let searchedCity;


// fetch(geoApiUrl)
//     .then(response => {
//         return response.json()
//     })
//     .then(response => {
//         console.log(response)
//         returnedData = response
//     })
//     .then(() => {
//         const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${returnedData[0].lat}&lon=${returnedData[0].lon}&appid=${apiKey}`

//         fetch(apiUrl)
//             .then(response2 => {
//                 return response2.json()
//             })
//             .then((response2) => {
//                 searchedCity = response2
            
//                 console.log(response2)
//                 console.log(response2 +"test")
//             })

//     })









// let placeLat = returnedData[0].lat
// let placeLon = returnedData[0].lon

// console.log(placeLat)
