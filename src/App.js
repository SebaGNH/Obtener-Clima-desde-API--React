import React, {Fragment, useState,useEffect} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';


function App() {
  const [busqueda, setBusqueda] = useState({
    ciudad:'',
    pais:''
  });
  const [consultar, setConsutar] = useState(false);

  //Para que consulte la api solo si cambia entre true a false
  useEffect(()=>{
    //key 39d3f92c88350d8f0a3b39e4579e3b07
    const consultarApi = async () => {
      const {ciudad,pais} = busqueda;
      const API_key = '39d3f92c88350d8f0a3b39e4579e3b07';
      const respuesta = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${API_key}`);

    const data =  await respuesta.json();
    console.clear();
    console.log(data.weather[0].description)
    //console.log(frase[0])
    //frase.then(resultado => console.log(resultado));
    }
    consultarApi(); //Se llama adentro
  },[consultar]);



  return (
    <Fragment>
      <Header
        titulo="Clima React App"
      />
    <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsutar={setConsutar}
              />
            </div>
            <div className="col m6 s12">
              2
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
