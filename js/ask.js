// npm i sweetalert --> Library that generates popups! 
import swal from 'sweetalert';
import {getCityWeather} from '.getweather.js'; // We use {} in {getCityWeather} beacause we only whant to import the actual function not the all page.

const button = document.getElementById('btn'); // gets the button from the HTML

button.addEventListener("click", (event) => { // Runs a function every time you click. "event" its the argument but usually use "e".
                                              // "addEventListener" works kinda like "onclick" but its a better practice
    swal({
        text: 'Type the city...',
        content: "input",
        button: {
          text: "Search!",
          closeModal: true, // If false doenst close the model 
        },
      })
      .then(city => {
        if (!city) throw null;
       
        return getCityWeather(city);
      })
      
});
