/*//hämtar temp för Norrköping
function fetchNrkTemp() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=58.594719&lon=16.183630&appid=9e514380148c5283625c70c1bd7f0c78&units=metric')
    .then(response => response.json())
    .then(data => {
        if (data && data.list && data.list.length > 0) {
            const temp = Math.round(data.list[0].main.temp);
            console.log(` Norrköpings Temperatur: ${temp}`);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
}
// hämtar känns som temp för Norrköping
function fetchNrkFeelsTemp() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=58.594719&lon=16.183630&appid=9e514380148c5283625c70c1bd7f0c78&units=metric')
    .then(response => response.json())
    .then(data => {
        if (data && data.list && data.list.length > 0) {
            const feels_like = Math.round(data.list[0].main.feels_like);
            console.log(` Norrköpings Temperatur känns som: ${feels_like}`);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
}
//hämtar vind för norrköping i meter/s
function fetchNrkWindSpeed() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=58.594719&lon=16.183630&appid=9e514380148c5283625c70c1bd7f0c78&units=metric')
    .then(response => response.json())
    .then(data => {
        if (data && data.list && data.list.length > 0) {
            const nrkWindSpeed = data.list[0].wind.speed;
            console.log(` wind speed: ${nrkWindSpeed} Meter/S`);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
}
//hämtar blötma för Norrköping
function fetchNrkHumidity() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=58.594719&lon=16.183630&appid=9e514380148c5283625c70c1bd7f0c78&units=metric')
    .then(response => response.json())
    .then(data => {
        if (data && data.list && data.list.length > 0) {
            const nrkHumidity = data.list[0].main.humidity;
            console.log(` Blötma: ${nrkHumidity}`);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
}

//Hämtar väderbeskrivning för Norrköping
function fetchNrkDesc() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=58.594719&lon=16.183630&appid=9e514380148c5283625c70c1bd7f0c78&units=metric&lang=sv')
    .then(response => response.json())
    .then(data => {
        if (data && data.list && data.list.length > 0) {
            const nrkDesc = data.list[0].weather[0].description;
            console.log(` Väderbeskrivning: ${nrkDesc}`);
            //const iconCode = data.list[0].weather[0].icon;
            //const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
            //console.log(`${iconCode}`)
            //const weatherIcon = document.createElement('img');
            //weatherIcon.src = iconUrl;
            //document.body.appendChild(weatherIcon);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
}

//Hämtar soluppgång och solnedgång för Norrköping
function fetchNrkSun() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=58.594719&lon=16.183630&appid=9e514380148c5283625c70c1bd7f0c78&units=metric')
    .then(response => response.json())
    .then(data => {
        if (data && data.list && data.list.length > 0) {
            const nrkRise = data.city.sunrise;
            const nrkSet = data.city.sunset;

            const sunriseDate = new Date(nrkRise * 1000);
            const sunsetDate = new Date(nrkSet * 1000);
            console.log(`Soluppgång: ${sunriseDate.toLocaleTimeString()} | Solnedgång: ${sunsetDate.toLocaleTimeString()}`);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Hämtar temp för Haparandra
function fetchHaparandaTemp() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=65.835548&lon=24.136419&appid=9e514380148c5283625c70c1bd7f0c78&units=metric')
    .then(response => response.json())
    .then(data => {
        if (data && data.list && data.list.length > 0) {
            const temp = Math.round(data.list[0].main.temp);
            console.log(`Haparanda Temperatur: ${temp}°C`);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Hämtar känns som temp för Haparanda
function fetchHaparandaFeelsTemp() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=65.835548&lon=24.136419&appid=9e514380148c5283625c70c1bd7f0c78&units=metric')
    .then(response => response.json())
    .then(data => {
        if (data && data.list && data.list.length > 0) {
            const feels_like = Math.round(data.list[0].main.feels_like);
            console.log(`Haparanda Temperatur känns som: ${feels_like}°C`);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Hämtar vind för Haparanda
function fetchHaparandaWindSpeed() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=65.835548&lon=24.136419&appid=9e514380148c5283625c70c1bd7f0c78&units=metric')
    .then(response => response.json())
    .then(data => {
        if (data && data.list && data.list.length > 0) {
            const windSpeed = data.list[0].wind.speed;
            console.log(`Haparanda Wind Speed: ${windSpeed} m/s`);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Hämtar Blömta för Haparanda
function fetchHaparandaHumidity() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=65.835548&lon=24.136419&appid=9e514380148c5283625c70c1bd7f0c78&units=metric')
    .then(response => response.json())
    .then(data => {
        if (data && data.list && data.list.length > 0) {
            const humidity = data.list[0].main.humidity;
            console.log(`Haparanda Humidity: ${humidity}%`);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Hämtar väderbeskrivning för Haparanda
function fetchHaparandaDesc() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=65.835548&lon=24.136419&appid=9e514380148c5283625c70c1bd7f0c78&units=metric&lang=sv')
    .then(response => response.json())
    .then(data => {
        if (data && data.list && data.list.length > 0) {
            const desc = data.list[0].weather[0].description;
            console.log(`Haparanda Väderbeskrivning: ${desc}`);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Hämtar soluppgång och solnedgång för Haparanda
function fetchHaparandaSun() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=65.835548&lon=24.136419&appid=9e514380148c5283625c70c1bd7f0c78&units=metric')
    .then(response => response.json())
    .then(data => {
        if (data && data.city) {
            const sunrise = new Date(data.city.sunrise * 1000).toLocaleTimeString();
            const sunset = new Date(data.city.sunset * 1000).toLocaleTimeString();
            console.log(`Haparanda Soluppgång: ${sunrise} | Solnedgång: ${sunset}`);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
}
// Hämtar temp för Yakutsk
function fetchYakutskTemp() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=62.035454&lon=129.675476&appid=9e514380148c5283625c70c1bd7f0c78&units=metric')
    .then(response => response.json())
    .then(data => {
        if (data && data.list && data.list.length > 0) {
            const temp = Math.round(data.list[0].main.temp);
            console.log(`Yakutsk Temperatur: ${temp}°C`);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Hämtar känns som temp för Yakutsk
function fetchYakutskFeelsTemp() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=62.035454&lon=129.675476&appid=9e514380148c5283625c70c1bd7f0c78&units=metric')
    .then(response => response.json())
    .then(data => {
        if (data && data.list && data.list.length > 0) {
            const feels_like = Math.round(data.list[0].main.feels_like);
            console.log(`Yakutsk Temperatur känns som: ${feels_like}°C`);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Hämtar vind för Yakutsk
function fetchYakutskWindSpeed() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=62.035454&lon=129.675476&appid=9e514380148c5283625c70c1bd7f0c78&units=metric')
    .then(response => response.json())
    .then(data => {
        if (data && data.list && data.list.length > 0) {
            const windSpeed = data.list[0].wind.speed;
            console.log(`Yakutsk Wind Speed: ${windSpeed} m/s`);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Hämtar Blötma för Yakutsk
function fetchYakutskHumidity() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=62.035454&lon=129.675476&appid=9e514380148c5283625c70c1bd7f0c78&units=metric')
    .then(response => response.json())
    .then(data => {
        if (data && data.list && data.list.length > 0) {
            const humidity = data.list[0].main.humidity;
            console.log(`Yakutsk Humidity: ${humidity}%`);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Hämtar väderbeskrivning för Yakutsk
function fetchYakutskDesc() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=62.035454&lon=129.675476&appid=9e514380148c5283625c70c1bd7f0c78&units=metric&lang=sv')
    .then(response => response.json())
    .then(data => {
        if (data && data.list && data.list.length > 0) {
            const desc = data.list[0].weather[0].description;
            console.log(`Yakutsk Väderbeskrivning: ${desc}`);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
}
function fetchCityWeather(city) {
    const cities = {
        "Miami": { lat: 25.761681, lon: -80.191788 },
        "Haparanda": { lat: 65.8335, lon: 24.1333 },
        "Norrköping": { lat: 58.5953, lon: 16.1830 },
        "Yakutsk": { lat: 62.035454, lon: 129.675476 }
    };
    const { lat, lon } = cities[city]; // Get the latitude and longitude for the selected city
    return fetch(`https://api.weatherapi.com/v1/forecast.json?key=9cfbd445da5343709f0132314240711&q=${lat},${lon}&hours=24`)
        .then(response => response.json())
        .then(data => {
            if (data && data.forecast) {
                const hourlyData = data.forecast.forecastday[0].hour;
                const selectedHours = [8, 12, 16, 20];  // Specify the hours we are interested in
                const hourlyTemps = selectedHours.map(hour => {
                    const hourData = hourlyData.find(h => new Date(h.time).getHours() === hour);
                    return hourData ? hourData.temp_c : null;  // Return only the temperature (no time)
                });

                return hourlyTemps.filter(temp => temp !== null);  // Filter out any null values
            } else {
                throw new Error("Failed to fetch data");
            }
        })
        .catch(error => console.error("Error fetching city data:", error));
}
/*
// Function to update the HTML with temperatures for a selected city
function updateCityTemperature(city, cityIndex) {
    fetchCityWeather(city).then(temps => {
        // Update the respective city's temperatures
        if (cityIndex === 1) {
            document.getElementById("temp1-08").innerText = `${temps[0]}°C`;
            document.getElementById("temp1-12").innerText = `${temps[1]}°C`;
            document.getElementById("temp1-16").innerText = `${temps[2]}°C`;
            document.getElementById("temp1-20").innerText = `${temps[3]}°C`;
        } else if (cityIndex === 2) {
            document.getElementById("temp2-08").innerText = `${temps[0]}°C`;
            document.getElementById("temp2-12").innerText = `${temps[1]}°C`;
            document.getElementById("temp2-16").innerText = `${temps[2]}°C`;
            document.getElementById("temp2-20").innerText = `${temps[3]}°C`;
        }
    });
}

// Event listeners for when a city is selected from each dropdown
document.getElementById("city1").addEventListener("change", (event) => {
    const selectedCity = event.target.value;
    updateCityTemperature(selectedCity, 1);  // Update city 1's temperatures
});

document.getElementById("city2").addEventListener("change", (event) => {
    const selectedCity = event.target.value;
    updateCityTemperature(selectedCity, 2);  // Update city 2's temperatures
});

// Hämtar soluppgång och solnedgång för Yakutsk
function fetchYakutskSun() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=62.035454&lon=129.675476&appid=9e514380148c5283625c70c1bd7f0c78&units=metric')
    .then(response => response.json())
    .then(data => {
        if (data && data.city) {
            const sunriseUTC = new Date(data.city.sunrise * 1000);  // UTC time
            const sunsetUTC = new Date(data.city.sunset * 1000);  // UTC time

            // Convert UTC time to Yakutsk local time
            const sunrise = new Intl.DateTimeFormat('en-US', { 
                timeZone: 'Asia/Khandyga', 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit', 
                hour12: true 
            }).format(sunriseUTC);
            
            const sunset = new Intl.DateTimeFormat('en-US', { 
                timeZone: 'Asia/Khandyga', 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit', 
                hour12: true 
            }).format(sunsetUTC);

            console.log(`Yakutsk Soluppgång: ${sunrise} | Solnedgång: ${sunset}`);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
}
 


// Hämtar temp för Miami
function fetchMiamiTemp() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=25.761681&lon=-80.191788&appid=9e514380148c5283625c70c1bd7f0c78&units=metric')
    .then(response => response.json())
    .then(data => {
        if (data && data.list && data.list.length > 0) {
            const temp = Math.round(data.list[0].main.temp);
            console.log(`Miami Temperatur: ${temp}°C`);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Hämtar känns som temp för Miami
function fetchMiamiFeelsTemp() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=25.761681&lon=-80.191788&appid=9e514380148c5283625c70c1bd7f0c78&units=metric')
    .then(response => response.json())
    .then(data => {
        if (data && data.list && data.list.length > 0) {
            const feels_like = Math.round(data.list[0].main.feels_like);
            console.log(`Miami Temperatur känns som: ${feels_like}°C`);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Hämtar vind för Miami
function fetchMiamiWindSpeed() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=25.761681&lon=-80.191788&appid=9e514380148c5283625c70c1bd7f0c78&units=metric')
    .then(response => response.json())
    .then(data => {
        if (data && data.list && data.list.length > 0) {
            const windSpeed = data.list[0].wind.speed;
            console.log(`Miami Wind Speed: ${windSpeed} m/s`);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Hämtar Blötma för Miami
function fetchMiamiHumidity() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=25.761681&lon=-80.191788&appid=9e514380148c5283625c70c1bd7f0c78&units=metric')
    .then(response => response.json())
    .then(data => {
        if (data && data.list && data.list.length > 0) {
            const humidity = data.list[0].main.humidity;
            console.log(`Miami Humidity: ${humidity}%`);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Hämtar väderbeskrivning för Miami
function fetchMiamiDesc() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=25.761681&lon=-80.191788&appid=9e514380148c5283625c70c1bd7f0c78&units=metric&lang=sv')
    .then(response => response.json())
    .then(data => {
        if (data && data.list && data.list.length > 0) {
            const desc = data.list[0].weather[0].description;
            console.log(`Miami Väderbeskrivning: ${desc}`);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Hämtar soluppgång och solnedgång för Miami
function fetchMiamiSun() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=25.761681&lon=-80.191788&appid=9e514380148c5283625c70c1bd7f0c78&units=metric')
    .then(response => response.json())
    .then(data => {
        if (data && data.city) {
            const sunriseUTC = new Date(data.city.sunrise * 1000);  // UTC time
            const sunsetUTC = new Date(data.city.sunset * 1000);  // UTC time

            // Convert UTC time to Miami local time
            const sunrise = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }).format(sunriseUTC);
            const sunset = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }).format(sunsetUTC);

            console.log(`Miami Soluppgång: ${sunrise} | Solnedgång: ${sunset}`);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
}
*/