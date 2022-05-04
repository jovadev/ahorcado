import React from "react";
import Casilla from "./components/Casilla";
export default function MuestraAbeceario(props){
    const abecedario=props.abecedario.map((letra,i)=>
        <Casilla value={letra.letra.toUpperCase()}
                onClick={() => props.onClick(letra,i)}
                key={i} 
                disabled={letra.seleccionada}
                abc={true}
                />);
    if(props.respuesta){
      return (<h3>Respuesta: {props.correcta.toUpperCase()}</h3>);
    }else{
    return (
      <div className="contenedor_abecedario">
        <h3>Seleccione una letra</h3>
        <div className="abecedario">
          {abecedario}  
        </div>
      </div>
    );
  }
}

