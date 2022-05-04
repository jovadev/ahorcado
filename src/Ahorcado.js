import React from "react";
import "./Tablero.css";
import Panel from './Panel';
import Monito from './DibujaMonito';
import MuestraPalabra from "./MuestraPalabra";
import MuestraAbecedario from './MuestraAbecedario.js';
import AgregarPalabras from './AgregarPalabras';
const MAX_INTENTOS=5;
const estadoInicial=()=>{
  if(!localStorage.getItem('bolsa_palabras')){
    localStorage.setItem("bolsa_palabras",JSON.stringify([]));
  }
  let bolsaPalabras=JSON.parse(localStorage.getItem("bolsa_palabras"));
  let existeBolsa=bolsaPalabras.length?true:false;
  let longBolsa=existeBolsa?bolsaPalabras.length:0;
  let indiceSeleccionada=existeBolsa?Math.floor(Math.random()*longBolsa):null;
  let arrayPalabra=existeBolsa?bolsaPalabras[indiceSeleccionada].split(""):null;
  return { 
    arrayPalabra:existeBolsa?arrayPalabra:[],
    arraySalida:existeBolsa?new Array(arrayPalabra.length).fill(" "):[],
    intentos:0,
    abecedario: generaAbecedario(),//array de objetos
    verRespuesta:false,
    correcta:existeBolsa?bolsaPalabras[indiceSeleccionada]:null,
    };
}

class Ahorcado extends React.Component {
  constructor(props) {
    super(props);
    if(!localStorage.getItem('bolsa_palabras')){
      localStorage.setItem("bolsa_palabras",JSON.stringify(["libreta","mesa","television"]));
    }
    this.hayBolsa=JSON.parse(localStorage.getItem('bolsa_palabras')).length?true:false;
    this.state=estadoInicial();
  }
  componentDidMount(){    
    Monito(0);
  }
  componentDidUpdate(prevProps,prevState){
    if(this.hayBolsa){
      let {arrayPalabra,arraySalida,intentos}=this.state;
      arrayPalabra=arrayPalabra.join("");
      arraySalida=arraySalida.join(""); 
      let palabrasIguales=arrayPalabra===arraySalida;
      if((palabrasIguales || intentos===5) && !prevState.verRespuesta){
        this.setState({verRespuesta:true});
      }
    }
  }
  reiniciar(){
    this.setState(estadoInicial());
    this.hayBolsa=JSON.parse(localStorage.getItem('bolsa_palabras')).length?true:false;
  }
  checaLetra(objLetra){
    let {arrayPalabra,intentos}=this.state;
    if(intentos>=MAX_INTENTOS){ return; }
    let copiaSalida=[...this.state.arraySalida];
    let falla=!arrayPalabra.includes(objLetra.letra);
    let copiaAbecedario=this.state.abecedario.map((abc)=>
      abc.letra===objLetra.letra?{...abc,seleccionada:true}:abc
    );
    arrayPalabra.forEach((letter,index)=>{
        if(objLetra.letra===letter){
            copiaSalida[index]=objLetra.letra;
        }   
    }); 
    this.setState((state)=>({
      abecedario: copiaAbecedario,
      arraySalida:copiaSalida,
      intentos: falla?state.intentos+1:state.intentos,
    }));
  }
  render() { 
      let {abecedario,arraySalida,verRespuesta,correcta,intentos}=this.state;
      let siAcierta=correcta===arraySalida.join("");
      let resultado=siAcierta?<h3>Felicidades!!</h3>:<h3>Sigue intentando...</h3>;
      let tableros=
          <div className="contenedor_adivinada_abecedario">  
            <MuestraPalabra  palabra={arraySalida}/>
            <MuestraAbecedario
              abecedario={abecedario}
              onClick={(letra,i)=>this.checaLetra(letra,i)}
              correcta={correcta}
              respuesta={verRespuesta}
            />
          </div>;
        return (
          <div>
            <div className="tablero_juego" id="tablero_juego">
              <div>
                <Canvas intentos={intentos} />
                <Panel
                  reiniciar={()=>this.reiniciar()}
                  estilo={this.props.estilo}
                  seRinde={()=>this.setState({verRespuesta:true})}
                  hayBolsa={this.hayBolsa}
                />  
                {this.hayBolsa?tableros:<MensajeNoPalabras />}
                {verRespuesta && resultado}
                <br/> 
              </div>
            </div>
            <AgregarPalabras cambiaBolsa={()=>this.reiniciar()}/>
          </div>
        );
  }
}

function Canvas({intentos}){
  return(
    <div className="container_canvas" >
        <canvas id="linea1" width="160" height="210">Su navegador no soporta canvas :( </canvas>
        {Monito(intentos)}
    </div>
  )
}
function MensajeNoPalabras(){
  return (
    <div className="div_mensaje_sin_palabras">
      <p>Necesita agregar algunas palabras para poder jugar</p>
      <p>Puede agregar palabras dando click en <strong><span>Agregar</span></strong></p>
    </div>
  );
}
function generaAbecedario(){
  const abc="abcdefghijlkmnñopqrstuvwxyz";
  const abecedario=[];
  for(let i=0;i<abc.length;i++){
    abecedario.push({
      letra:abc[i],
      seleccionada:false,
    });
  }
  return abecedario;
};
Ahorcado.defaultProps={
  estilo:'tablero_juego',
}
export default Ahorcado;
