import React, {Fragment, useState,useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {
  const [busqueda, setBusqueda] = useState({
    ciudad:'',
    pais:''
  });
  const [consultar, setConsutar] = useState(false);
  const [resultadoApi, setResultadoApi] = useState({});
  const [errorConsulta, setErrorConsulta] = useState(false);

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
        setConsutar(false); //Lo volvemos a false ya que en el formulario se hizo true, se renueva el false para que valide una nueva consulta evitando multiples consultas
        //console.clear();
        //console.log(data.weather[0].description);
        //console.log(data.name);

        
        //Detectando error de consulta
        if (data.cod === "404") { 
          setErrorConsulta(true);
        }else{
          setErrorConsulta(false);
        }
      }
      consultarApi(); //Se llama adentro
      //Error de dependencias
      // eslint-disable-next-line
    }
  },[consultar]);


  //Condicional de componentes
  let componenteErrorClima;
  if (errorConsulta) {
    componenteErrorClima = <Error mensaje='No hay resultados'/>   
  }else{
    componenteErrorClima = <Clima resultadoApi={resultadoApi} />
  }




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
              {errorConsulta?
                <Error mensaje='Todos los campos son obligaotiors'/>
                :
                null
              }
              {componenteErrorClima}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
