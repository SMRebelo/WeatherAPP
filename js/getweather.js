const key = "b182adc399c946b9800225331231509";

export function getCityWeather(city) {
  // const getCityWeather = (city) => {}     <--- this is the best way to declare a function!!!!
  fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=4&aqi=no&alerts=no`
  ) //axios gets the information from the API in the WEB
    .then(async (res) => {
      res.data = await res.json();

      // returns the result in a variable called "res".
      document.getElementById(
        "tempDegres"
      ).innerHTML = `${res.data.current.temp_c} °C`; // res.data because axios library works that way
      document.getElementById(
        "place"
      ).innerHTML = `${res.data.location.name}, ${res.data.location.country}`;

      let date = res.data.location.localtime.split(" "); // split is use to genarate a matriz(ARRAY)
      date = date[0]; // gets the fist index of the array
      let [year, mon, day] = date.split("-"); // super hard core gamer stuff -> desconstroi o arrays e guarda já nas variaveis!!!

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

      document.getElementById("date").innerHTML = `${day} ${
        month[+mon - 1]
      } ${year}`; // "${month[+mon-1]}" we have to convert to a number and subtract minus 1 because of the array starts at zero!

      let dayOfWeek = new Date(+year, +mon - 1, +day).toLocaleString("en-us", {
        weekday: "long",
      });
      document.getElementById("dayOfWeek").innerHTML = `${dayOfWeek}`;

      document.getElementById(
        "tempDesc"
      ).innerHTML = `${res.data.current.condition.text}`;

      const pathIcon = res.data.current.condition.icon.split("/");
      document.getElementById("tempImg").src = `./public/icons/${
        pathIcon[pathIcon.length - 2]
      }/${pathIcon[pathIcon.length - 1]}`;

      document.getElementById(
        "precipitation"
      ).innerHTML = `${res.data.forecast.forecastday[0].day.daily_chance_of_rain}%`;

      document.getElementById(
        "humidity"
      ).innerHTML = `${res.data.current.humidity}%`;

      document.getElementById(
        "wind"
      ).innerHTML = `${res.data.current.wind_kph} km/h`;

      /* DOWN HERE WE GONNA START THE 4 DAYS BOX PREDICTION */
      /* First Columm*/

      document.getElementById("logo1st").src = `./public/icons/${
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
      document.getElementById("logo2nd").src = `./public/icons/${
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
      document.getElementById("logo3rd").src = `./public/icons/${
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
      document.getElementById("logo4th").src = `./public/icons/${
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
}
