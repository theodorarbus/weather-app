// Skapar en tom array där vi lagrar dagarna i den ordning de kommer när vi gör vårat api-anrop
const dayNames = [];
// Skapar ett nytt datumobjekt för dagens datum när vi gör vårat api-anrop
const currentDate = new Date();
// Skapar en array där index 0 är söndag och 6 lördag
const daysOfWeek = ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"];

//loopar igenom de 7 kommande dagarna från dagens datum
for (let i = 0; i < 7; i++) {
  // Beräknar index för varje veckodag de 7 kommande dagarna, alltså så att vi vet om de är "Sön", "Mån" etc
  const nextDayIndex = (currentDate.getDay() + i) % 7;
  //Fyller arrayen med 7 veckodagar så ordningen är korrekt, börjar med vad det är för dag idag.
  dayNames.push(daysOfWeek[nextDayIndex]);
}
//sparar latitud och longitud för varje stad i ett objekt där nycklarna är stadens namn.
const cities = {
    "Miami": { lat: 25.761681, lon: -80.191788 },
    "Haparanda": { lat: 65.8335, lon: 24.1333 },
    "Norrköping": { lat: 58.5953, lon: 16.1830 },
    "Yakutsk": { lat: 62.035454, lon: 129.675476}
};

/*
funktion som hämtar väderdata från api baserat på vald stad.
Den använder latitud och longitud  från objektet'cities' för att hämta rätt koordinater till den valda staden.
 */
function fetchCityWeather(city) { 
    const { lat, lon } = cities[city]; 
    return fetch(`https://api.weatherapi.com/v1/forecast.json?key=9cfbd445da5343709f0132314240711&q=${lat},${lon}&lang=sv&days=7`)
        .then(response => response.json())
        .then(data => {
            if (data && data.forecast) {
                // Hämtar timdata för första dagen i väderprognosen
                const hourlyData = data.forecast.forecastday[0].hour;
                // skapar en Array med de specifika timmar vi vill hämta temperaturen för
                const selectedHours = [6, 8, 10, 12, 14, 16, 18];

                // Skapar en ny array (hourlyTemps) genom att använda map-funktionen 
                // Den baseras på det urvalet vi gjort i selectedHours
                const hourlyTemps = selectedHours.map(hour => {
                    // Använder find för att hitta objekt i första dagen i väderprognosen som matchar de timmar vi valt
                    const hourData = hourlyData.find(h => new Date(h.time).getHours() === hour);
                    
                    // När ett objekt hittas returneras temperaturen för den timmen
                    // Om inget objekt hittas så returneras undefined för den timmen. 
                    return { temperature: hourData &&  hourData.temp_c,
                            HourlyIconUrl: hourData && `https:${hourData.condition.icon}`
                    };
                });
                // En array av väderprognoser för veckan hämtar min och max temp för varje dag
                const weeklyForecast = data.forecast.forecastday.map(day => ({
                    date: day.date,
                    max_temp: day.day.maxtemp_c,
                    min_temp: day.day.mintemp_c,
                    WeeklyIcon: day.day.condition.icon,
                }));
                console.log(weeklyForecast);
                // Skapar ett objekt "currentWeather" som innehåller aktuell väderinformation (för de valda städerna) som vi ska visa på vår sida
                const currentWeather = {
                    temp_now: data.current.temp_c,
                    iconUrl: `https:${data.current.condition.icon}`,
                    feels_like: data.current.feelslike_c,
                    uv_index: data.current.uv,
                    description: data.current.condition.text,
                    wind_speed: data.current.wind_kph,
                    humidity: data.current.humidity,
                    sunrise: data.forecast.forecastday[0].astro.sunrise,
                    sunset: data.forecast.forecastday[0].astro.sunset
                };
                //returnerar ett objekt som kombinerar hourlyTemps och currentWeather
                return {
                    hourlyTemps, ...currentWeather, weeklyForecast
                };

            } else {
        
                throw new Error("Api-svaret innehåller inte den förväntande väderdatan");
            }
        })
        //fångar alla typer av fel såsom nätverk, api-fel, ogiltig data och loggar i konsolen.
        .catch(error => console.error("Error fetching city data:", error));
}

// Funktion för att uppdatera väderdata för specifik stad.
function updateCityTemperature(city, cityIndex) {
   // Anropar fetchCityWeather-funktionen för att hämta väderdata
    fetchCityWeather(city).then(weatherData => {
        // Destrukturerar väderdata-objektet för att extrahera relevant data (så att man inte behöver skriva tex "Description: ${weatherData.description}")
        const { hourlyTemps, temp_now, feels_like, uv_index, description, wind_speed, humidity, sunrise, sunset, iconUrl, weeklyForecast } = weatherData;
            // lägger in temperaturerna på den stad som är vald i den vänstra dropdown menyn.
            if (cityIndex === 1) {
                document.getElementById("city1-current-icon").src = iconUrl;
                document.getElementById("temp1-06").innerText = `${Math.round(hourlyTemps[0].temperature)}°`;
                document.getElementById("temp1-06-icon").src = hourlyTemps[0].HourlyIconUrl;
                document.getElementById("temp1-08").innerText = `${Math.round(hourlyTemps[1].temperature)}°`;
                document.getElementById("temp1-08-icon").src = hourlyTemps[1].HourlyIconUrl;
                document.getElementById("temp1-10").innerText = `${Math.round(hourlyTemps[2].temperature)}°`;
                document.getElementById("temp1-10-icon").src = hourlyTemps[2].HourlyIconUrl;
                document.getElementById("temp1-12").innerText = `${Math.round(hourlyTemps[3].temperature)}°`;
                document.getElementById("temp1-12-icon").src = hourlyTemps[3].HourlyIconUrl;
                document.getElementById("temp1-14").innerText = `${Math.round(hourlyTemps[4].temperature)}°`;
                document.getElementById("temp1-14-icon").src = hourlyTemps[4].HourlyIconUrl;
                document.getElementById("temp1-16").innerText = `${Math.round(hourlyTemps[5].temperature)}°`;
                document.getElementById("temp1-16-icon").src = hourlyTemps[5].HourlyIconUrl;
                document.getElementById("temp1-18").innerText = `${Math.round(hourlyTemps[6].temperature)}°`;
                document.getElementById("temp1-18-icon").src = hourlyTemps[6].HourlyIconUrl;
                document.getElementById("temp-now1").innerText = `${Math.round(temp_now)}°`;
                document.getElementById("feels-like1").innerText = `Känns som: ${Math.round(feels_like)}°`;
                document.getElementById("uv-index1").innerText = `UV Index: ${Math.round(uv_index)}`;
                document.getElementById("description1").innerText = `${description}`;
                document.getElementById("wind-speed1").innerText = `Vind: ${Math.round(wind_speed)} km/h`;
                document.getElementById("humidity1").innerText = `Luftfuktighet: ${humidity}%`;
                document.getElementById("sunrise1").innerText = `Soluppgång: ${sunrise}`;
                document.getElementById("sunset1").innerText = `Solnedgång: ${sunset}`;

                //itererar genom weeklyForecast för att uppdatera väderinformation för varje dag
                weeklyForecast.forEach((day, index) => {
                    //hämtar veckodagens namn från dayNames arrayen baserat på index
                    const dayName = dayNames[index];
                    //uppdaterar max & min temperatur för dagen 
                    document.getElementById(`day${index + 1}-day-city1`).innerText = `${dayName}`;
                    document.getElementById(`day${index + 1}-max-city1`).innerText = `${Math.round(day.max_temp)}°`;
                    document.getElementById(`day${index + 1}-min-city1`).innerText = ` ${Math.round(day.min_temp)}°`;
                    document.getElementById(`day${index + 1}-icon-city1`).src = `https:${day.WeeklyIcon}`;
                  });


            // lägger in temperaturerna på den stad som är vald i den högra dropdown menyn.
            } else if (cityIndex === 2) {
                document.getElementById("city2-current-icon").src= iconUrl;
                document.getElementById("temp2-06").innerText = `${Math.round(hourlyTemps[0].temperature)}°`;
                document.getElementById("temp2-06-icon").src = hourlyTemps[0].HourlyIconUrl;
                document.getElementById("temp2-08").innerText = `${Math.round(hourlyTemps[1].temperature)}°`;
                document.getElementById("temp2-08-icon").src = hourlyTemps[1].HourlyIconUrl;
                document.getElementById("temp2-10").innerText = `${Math.round(hourlyTemps[2].temperature)}°`;
                document.getElementById("temp2-10-icon").src = hourlyTemps[2].HourlyIconUrl;
                document.getElementById("temp2-12").innerText = `${Math.round(hourlyTemps[3].temperature)}°`;
                document.getElementById("temp2-12-icon").src = hourlyTemps[3].HourlyIconUrl;
                document.getElementById("temp2-14").innerText = `${Math.round(hourlyTemps[4].temperature)}°`;
                document.getElementById("temp2-14-icon").src = hourlyTemps[4].HourlyIconUrl;
                document.getElementById("temp2-16").innerText = `${Math.round(hourlyTemps[5].temperature)}°`;
                document.getElementById("temp2-16-icon").src = hourlyTemps[5].HourlyIconUrl;
                document.getElementById("temp2-18").innerText = `${Math.round(hourlyTemps[6].temperature)}°`;
                document.getElementById("temp2-18-icon").src = hourlyTemps[6].HourlyIconUrl;
                document.getElementById("temp-now2").innerText = `${Math.round(temp_now)}°`;
                document.getElementById("feels-like2").innerText = `Känns som: ${Math.round(feels_like)}°`;
                document.getElementById("uv-index2").innerText = `UV Index: ${uv_index}`;
                document.getElementById("description2").innerText = `${description}`;
                document.getElementById("wind-speed2").innerText = `Vind: ${Math.round(wind_speed)} km/h`;
                document.getElementById("humidity2").innerText = `Luftfuktighet: ${humidity}%`;
                document.getElementById("sunrise2").innerText = `Soluppgång: ${sunrise}`;
                document.getElementById("sunset2").innerText = `Solnedgång: ${sunset}`;

                weeklyForecast.forEach((day, index) => {
                    const dayName = dayNames[index]; 
                    document.getElementById(`day${index + 1}-day-city2`).innerText = `${dayName}`;
                    document.getElementById(`day${index + 1}-max-city2`).innerText = `${Math.round(day.max_temp)}°`;
                    document.getElementById(`day${index + 1}-min-city2`).innerText = ` ${Math.round(day.min_temp)}°`;
                    document.getElementById(`day${index + 1}-icon-city2`).src = `https:${day.WeeklyIcon}`;
                  });
            }
        });
    }
    function handleCityChange(cityIndex) {
        //hämtar de valda städerna från dropdown-menyn
        const city1 = document.getElementById("city1").value;
        const city2 = document.getElementById("city2").value;

        //sparar de valda städerna i localStorage för att komma ihåg dom när man laddar om sidan
        
        localStorage.setItem("city1", city1);
        localStorage.setItem("city2", city2);
    
        // Förhindra att samma stad väljs i båda dropdowns
        const otherSelect = cityIndex === 1 ? "city2" : "city1";
        const selectedCity = cityIndex === 1 ? city1 : city2;
    
        // Uppdatera den andra dropdown-menyn
        updateOtherDropdown(otherSelect, selectedCity);
    
        // Uppdatera temperaturdata för vald stad
        updateCityTemperature(selectedCity, cityIndex);
    }
    
    function updateOtherDropdown(otherSelectId, selectedCity) {
        const otherSelect = document.getElementById(otherSelectId);
    
        // Loopar igenom alla alternativ i den andra dropdown-menyn
        for (const option of otherSelect.options) {
            // Inaktivera valet om det matchar den valda staden
            option.disabled = option.value === selectedCity;
        }
    }
    
   // Funktion för att ladda de sparade städerna från localStorage
   function loadSavedCities() {
     const savedCity1 = localStorage.getItem("city1") 
     const savedCity2 = localStorage.getItem("city2") 
    
     const city1Dropdown = document.getElementById("city1");
     const city2Dropdown = document.getElementById("city2");
     // Om ingen stad är sparad, visa "Välj stad" som standard
     
     if (savedCity1) {
        city1Dropdown.value = savedCity1;
     } else {
        city1Dropdown.innerHTML = '<option value="" disabled selected>Välj stad</option>' + city1Dropdown.innerHTML;
     }

     if (savedCity2)    
     {
        city2Dropdown.value = savedCity2;
     } 
     else 
     {
        city2Dropdown.innerHTML = '<option value="" disabled selected>Välj stad</option>' + city2Dropdown.innerHTML;
     }

     updateOtherDropdown("city2", savedCity1);
     updateOtherDropdown("city1", savedCity2);
     updateCityTemperature(savedCity1 || "", 1);
     updateCityTemperature(savedCity2 || "", 2);

}

// Kör loadSavedCities när sidan laddats klart
document.addEventListener("DOMContentLoaded", function() {
    loadSavedCities();  // Ladda de sparade städerna vid sidladdning
});