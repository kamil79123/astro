    // Pobieranie dzisiejszej daty
    var today = new Date();
    
    // Dodawanie jednego dnia
    today.setDate(today.getDate() + 1);
    
    // Formatujemy datę jako "YYYY-MM-DD"
    var year = today.getFullYear();
    var month = ("0" + (today.getMonth() + 1)).slice(-2);
    var day = ("0" + today.getDate()).slice(-2);
    
    var formattedDate = year + "-" + month + "-" + day;

const lat = 53.1003;
const lng = 18.0742;
const end = formattedDate;
const params = 'windSpeed,airTemperature,cloudCover,humidity,visibility';

fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&end=${end}&source=noaa&lng=${lng}&params=${params}`, {
  headers: {
    'Authorization': '8925478e-4a72-11ef-9acf-0242ac130004-892547f2-4a72-11ef-9acf-0242ac130004'
  }
}).then((response) => response.json()).then((jsonData) => {
    console.log(jsonData);
    var airTemperatureAtMidnight;
    for (var i = 0; i < jsonObj.hours.length; i++) {
        if (jsonObj.hours[i].time === "2024-07-25T00:00:00+00:00") {
            airTemperatureAtMidnight = jsonObj.hours[i].airTemperature.noaa;
            break;
        }
    }
  $('#pogoda').html('<p>Temperatura: '+airTemperatureAtMidnight);
  console.log(airTemperatureAtMidnight);
});