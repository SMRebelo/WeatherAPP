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

      /* DOWN HERE WE GONNA START THE 4 DAYS BOX PREDICTION */
      /* First Columm*/

      document.getElementById(
        "logo1st"
      ).src = `https://raw.githubusercontent.com/SMRebelo/WeatherAPP/main/public/icons/${
        pathIcon[pathIcon.length - 2]
      }/${pathIcon[pathIcon.length - 1]}`;

      let firstDay = new Date(+year, +mon - 1, +day).toLocaleString("en-us", {
        weekday: "short",
      });
      document.getElementById("day1st").innerHTML = `${firstDay}`;

      document.getElementById(
        "temp1st"
      ).innerHTML = `${res.data.current.temp_c} °C`;

      /* Second Columm*/

      const pathIconSecond =
        res.data.forecast.forecastday[1].day.condition.icon.split("/");
      document.getElementById(
        "logo2nd"
      ).src = `https://raw.githubusercontent.com/SMRebelo/WeatherAPP/main/public/icons/${
        pathIconSecond[pathIconSecond.length - 2]
      }/${pathIconSecond[pathIconSecond.length - 1]}`;

      [year, mon, day] = res.data.forecast.forecastday[1].date.split("-"); // split is use to genarate a matriz(ARRAY)

      dayOfWeek = new Date(+year, +mon - 1, +day).toLocaleString("en-us", {
        weekday: "short",
      });
      document.getElementById("day2nd").innerHTML = `${dayOfWeek}`;

      document.getElementById(
        "temp2nd"
      ).innerHTML = `${res.data.forecast.forecastday[1].day.avgtemp_c} °C`;

      /* Third Columm*/

      const pathIconthird =
        res.data.forecast.forecastday[2].day.condition.icon.split("/");
      document.getElementById(
        "logo3rd"
      ).src = `https://raw.githubusercontent.com/SMRebelo/WeatherAPP/main/public/icons/${
        pathIconthird[pathIconthird.length - 2]
      }/${pathIconthird[pathIconthird.length - 1]}`;

      [year, mon, day] = res.data.forecast.forecastday[2].date.split("-"); // split is use to genarate a matriz(ARRAY)

      dayOfWeek = new Date(+year, +mon - 1, +day).toLocaleString("en-us", {
        weekday: "short",
      });
      document.getElementById("day3rd").innerHTML = `${dayOfWeek}`;

      document.getElementById(
        "temp3rd"
      ).innerHTML = `${res.data.forecast.forecastday[2].day.avgtemp_c} °C`;

      /* fourth Columm*/

      const pathIconFourth =
        res.data.forecast.forecastday[3].day.condition.icon.split("/");
      document.getElementById(
        "logo4th"
      ).src = `https://raw.githubusercontent.com/SMRebelo/WeatherAPP/main/public/icons/${
        pathIconFourth[pathIconFourth.length - 2]
      }/${pathIconFourth[pathIconFourth.length - 1]}`;

      [year, mon, day] = res.data.forecast.forecastday[3].date.split("-"); // split is use to genarate a matriz(ARRAY)

      dayOfWeek = new Date(+year, +mon - 1, +day).toLocaleString("en-us", {
        weekday: "short",
      });
      document.getElementById("day4th").innerHTML = `${dayOfWeek}`;

      document.getElementById(
        "temp4th"
      ).innerHTML = `${res.data.forecast.forecastday[3].day.avgtemp_c} °C`;
    });
};