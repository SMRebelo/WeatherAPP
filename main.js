import "./Styles/style.css";
import "./Styles/leftContainer.css";
import "./Styles/rightContainer.css";
import "./js/ask.js";
import { getCityWeather } from "./js/getweather";
import "./js/selectDay.js";
import { getCityWeather2nd } from "/js/getweather2nd.js";
import { getCityWeather3rd } from "/js/getweather3rd.js";
import { getCityWeather4th } from "/js/getweather4th.js";

// BY RICARDO MOTA FREITA THE MOTHER FUCKING CHEF!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

window.onload = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, () => {});
  }

  //Get latitude and longitude;
  function successFunction(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    getCityWeather(`${lat},${long}`);
  }
};
// BY RICARDO MOTA FREITA THE MOTHER FUCKING CHEF!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!