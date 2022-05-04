import React from 'react';
import Casilla from "./components/Casilla";
export default function MuestraPalabra(props) {
    const adivinada=props.palabra.map((letra,i)=>
      <Casilla value={letra.toUpperCase()} key={i}/>
    );
    return (
      <div className="div_adivinada">
        {adivinada}
      </div>
    );
  }