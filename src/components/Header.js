import './Input_Modo.css';
import './Navegacion.css';
import './Footer.css';
import React from 'react';
function Header(props) {
  return (
        <header className="app_header">
            <div className="logo_div">
              <div className="logo"></div>
              <h1>El Ahorcado</h1>
            </div>
          <nav className="menu_nav">
            <ul>
              <li className="tipo_modo">
                <label className="switch">
                  <input type="checkbox" onChange={props.onClick}/>
                    <span id="slider" className="slider round"></span>
                </label></li>
              <li className="menu_nav agregar"><button type="button" placeholder="Agregar palabras">Agregar</button></li>
            </ul>
          </nav>
          <span className={props.style==="white"?"btn_menu":"btn_menu white"}>
            <i className="fas fa-bars"></i>
          </span>
        </header>
  );
}
export default Header;
