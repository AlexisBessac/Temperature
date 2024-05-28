import { useState } from 'react';


function TemperatureInput(props) {
 return (
   <>
     <label>{props.name}</label>
     <input
       type="number"
       value={props.value}
       onChange={props.onChange}
     />
   </>
 )
}


function convertCelsiusToFahrenheit(celsius) {
 return (9 * celsius / 5) + 32;
}


function convertFahrenheitToCelsius(fahrenheit) {
 return (fahrenheit - 32) * 5 / 9;
}


function App() {
 const [celsius, setCelsius] = useState(0);
 const [fahrenheit, setFahrenheit] = useState(32);


 const handleChangeCelsius = (e) => {
   const celsiusNew = e.target.value;
   setCelsius(celsiusNew);
   setFahrenheit(convertCelsiusToFahrenheit(celsiusNew));
 }


 const handleChangeFahrenheit = (e) => {
   const fahrenheitNew = e.target.value;
   setFahrenheit(fahrenheitNew);
   setCelsius(convertFahrenheitToCelsius(fahrenheitNew));
 }


 return (
   <>
     <TemperatureInput
       name="°C"
       value={celsius}
       onChange={handleChangeCelsius}
     />
     <TemperatureInput
       name="°F"
       value={fahrenheit}
       onChange={handleChangeFahrenheit}
     />
   </>
 )
}


export default App;
