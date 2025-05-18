import React from 'react';


function Weather() {
    return (
<div className="weather-box">
<h2 id="city-name">CLIMA</h2> 
<div className="cidade">
  <input type="text" id="city-input" placeholder="Digite o nome da cidade"/>
  <button id="get-weather">Buscar</button>
</div>
 
<p id="temperature">Temperatura: </p>

<div className="umidade-box">
  <img id="weather-icon" alt=""/>
  <p id="humidity">Umidade: </p>
</div>

<p id="description">Descrição: </p>

</div>
)
}
export default Weather;