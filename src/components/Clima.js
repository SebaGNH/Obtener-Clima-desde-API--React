import React from 'react'


const Clima = ({resultadoApi}) => {

  //Grados Kelvin
  const kelvin = (parseFloat(resultadoApi.main.temp- 273.15,10)).toFixed(2);
  const tempMax = (parseFloat(resultadoApi.main.temp_max- 273.15,10)).toFixed(2);
  const tempMin = (parseFloat(resultadoApi.main.temp_min- 273.15,10)).toFixed(2);

  return (
    
    <>
      <div className="card-panel white col s12">
        <div className="black-text">
          <h2>Clima de {resultadoApi.name}</h2>
          <p>{kelvin} <span>&#x2103;</span></p>
          <p>Maxima: {tempMax} <span>&#x2103;</span></p>
          <p>Minima: {tempMin} <span>&#x2103;</span></p>
        </div>
      </div>
    </>
  );
}
export default Clima;
