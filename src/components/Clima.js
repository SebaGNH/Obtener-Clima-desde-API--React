import React from 'react'
import PropTypes from 'prop-types'

const Clima = ({resultadoApi}) => {
  
  //Si no tine nombre corta ejecución
  if (!resultadoApi.name) return null;
  if (resultadoApi.code === 404) return null;
  
  //console.log(resultadoApi)
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
Clima.propTypes = {
  resultadoApi: PropTypes.object.isRequired
}

export default Clima;
