import React, { useState } from 'react';


const Formulario = () => {
  const [busqueda, setBusqueda] = useState({
    ciudad:'',
    pais:''

  });

  //Funcion que coloca los elementos en el state
  const handleChange = (e) => {
    setBusqueda({
      ...busqueda,[ e.target.name] : e.target.value
    });
  }



  return (
    <>
      <form action="">
        <div className="input-field col s12">
          <input 
            type='text'
            name='ciudad'
            id='ciudad'
            value={busqueda.ciudad}
            onChange={(e)=>handleChange(e)}
          />
          <label htmlFor="ciudad">Ciudad:</label>
        </div>
        <div className="input-field col s12">
          <select 
            name="pais" 
            id="pais"
            value={busqueda.pais}
            onChange={(e)=>handleChange(e)}
          >
            <option value="">--Seleccione País--</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>
          <label htmlFor="pais">País: </label>
        </div> 
      </form>
    </>
  );
}
export default Formulario;