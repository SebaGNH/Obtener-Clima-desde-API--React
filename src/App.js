import React, {Fragment, useState,useEffect} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';


function App() {
  const [busqueda, setBusqueda] = useState({
    ciudad:'',
    pais:''
  });
  const [consultar, setConsutar] = useState(false);
  const [resultadoApi, setResultadoApi] = useState({});

  //Para que consulte la api solo si cambia entre true a false
  //Solo consulta si es true
  useEffect(()=>{
    if (consultar) {      
      //key 39d3f92c88350d8f0a3b39e4579e3b07
      const consultarApi = async () => {
        const {ciudad,pais} = busqueda;
        const API_key = '39d3f92c88350d8f0a3b39e4579e3b07';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${API_key}`;
        const respuesta = await fetch(url);
        const data =  await respuesta.json();
        
        setResultadoApi(data);
        //console.clear();
        //console.log(data.weather[0].description);
      }
      consultarApi(); //Se llama adentro
    }
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
