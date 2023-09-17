import axios from "axios";

const key = "011abb2c2e4742fc9d8134320231709";

export function getCityWeather4th(city) {

  axios
    .get(
      `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=4&aqi=no&alerts=no`
    )
    .then((res) => {
      document.getElementById(
        "tempDegres"
      ).innerHTML = `${res.data.forecast.forecastday[3].day.avgtemp_c} °C`; // res.data because axios library works that way      
      document.getElementById(
        "place"
      ).innerHTML = `${res.data.location.name}, ${res.data.location.country}`;

      let [year, mon, day] = res.data.forecast.forecastday[3].date.split("-"); // split is use to genarate a matriz(ARRAY)
      
      let month = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Set",
        "Oct",
        "Nov",
        "Dez",
      ];

      document.getElementById("date").innerHTML = `${day} ${ // ADDs one more day soo its day number two.
        month[+mon - 1]
      } ${year}`; // "${month[+mon-1]}" we have to convert to a number and subtract minus 1 because of the array starts at zero!

      let dayOfWeek = new Date(+year, +mon - 1, +day).toLocaleString("en-us", {
        weekday: "long",
      });
      document.getElementById("dayOfWeek").innerHTML = `${dayOfWeek}`;

      document.getElementById(
        "tempDesc"
      ).innerHTML = `${res.data.forecast.forecastday[3].day.condition.text}`;

      const pathIcon = res.data.forecast.forecastday[3].day.condition.icon.split("/");
      document.getElementById(
        "tempImg"
      ).src = `https://raw.githubusercontent.com/SMRebelo/WeatherAPP/main/public/icons/${
        pathIcon[pathIcon.length - 2]
      }/${pathIcon[pathIcon.length - 1]}`;

      document.getElementById(
        "precipitation"
      ).innerHTML = `${res.data.forecast.forecastday[3].day.daily_chance_of_rain}%`;

      document.getElementById(
        "humidity"
      ).innerHTML = `${res.data.forecast.forecastday[3].day.avghumidity}%`;

      document.getElementById(
        "wind"
      ).innerHTML = `${res.data.forecast.forecastday[3].day.maxwind_kph} km/h`;


    });
};