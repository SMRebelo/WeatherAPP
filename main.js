import "./Styles/style.css";
import "./Styles/leftContainer.css";
import "./Styles/rightContainer.css";
import "./js/ask.js";
import { getCityWeather } from "./js/getweather";
import "./js/selectDay.js";

// BY RICARDO MOTA FREITA THE MOTHER FUCKING CHEF!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

window.onload = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, () => {});
  }

  //Get latitude and longitude;
  function successFunction(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    window.city = (`${lat},${long}`);
    getCityWeather(`${lat},${long}`);
  }
};
// BY RICARDO MOTA FREITA THE MOTHER FUCKING CHEF!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!