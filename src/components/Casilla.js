import React from 'react';
import './Casilla.css';
function Casilla(props) {
  if(props.abc){
    return (
      <button className="casilla abc" onClick={props.onClick} 
      disabled={props.disabled}>{props.value} 
    </button>    
    );
  }else{
    return (
      <div className="casilla ficha"><h1>{props.value}</h1></div>    
    );
  }    
}
export default React.memo(Casilla);