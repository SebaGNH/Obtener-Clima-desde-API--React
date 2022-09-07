import React, { useState } from 'react';


const Formulario = ({busqueda, setBusqueda,setConsutar}) => {
  const [error, setError] = useState(false);

  //Funcion que coloca los elementos en el state
  const handleChange = (e) => {
    setBusqueda({
      ...busqueda,[ e.target.name] : e.target.value
    });
  }

  //Submit
  const submitHandler = (e) => {
    e.preventDefault();
  
  
    //Validar
    if (busqueda.ciudad.trim() === "" || busqueda.pais.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
  
  
    //Pasar al componente principal
    setConsutar(true);
  }


  return (
    <>
      <form action="" onSubmit={submitHandler}>
        {/*error? <p className='red darken-4 error'>Todos los campos son obligatorios</p>: null*/}

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
        <div className="input-field col s12">
        {error?
          <button 
            type='submit'
            className='waves-effect waves-light btn-large btn-block red accent-4'
            >Buscar Clima
          </button>        
        :
          <button 
            type='submit'
            className='waves-effect waves-light btn-large btn-block blue accent-4'
            >Buscar Clima
          </button>        
        }
        </div>
      </form>
    </>
  );
}
export default Formulario;