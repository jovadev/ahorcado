import { useState} from "react";
import "./AgregarPalabra.css";
import Swal from 'sweetalert2';

function AgregarPalabras(props) {
  let [palabraNueva, agregaPalabra] = useState("");
  let cambiaBolsa = props.cambiaBolsa;
  function handleKeyPress(event) {
    let key = event.key;
    let noNumero=isNaN(+event.key);
    let regex = /[A-Za-zñÑ]/;
    if (!regex.test(key) ) {
      event.preventDefault();
    }
  }
  function handleInput(event) {
    let palabra = event.target.value.trim();
    agregaPalabra(palabra.toLowerCase());
  }
  function handlerSubmit(e) {
    e.preventDefault();
    if (!e.target.palabra.value) {return;}
    let bolsaPalabras = JSON.parse(localStorage.getItem('bolsa_palabras'));
    e.target.palabra.value = "";
    e.target.palabra.focus();
    let existe =bolsaPalabras.findIndex((element) => element === palabraNueva) !== -1 ? true : false;
    if (palabraNueva && !existe) {
      bolsaPalabras.unshift(palabraNueva);
      localStorage.setItem("bolsa_palabras", JSON.stringify(bolsaPalabras));
    }
    agregaPalabra("");
    cambiaBolsa();
  }
  function eliminar(palabra) {
    let bolsaPalabras =JSON.parse(localStorage.getItem('bolsa_palabras'));
    if(bolsaPalabras){
      let indice = bolsaPalabras.findIndex((item) => item === palabra);
      bolsaPalabras.splice(indice, 1);
      localStorage.setItem("bolsa_palabras", JSON.stringify(bolsaPalabras));
      Swal.fire({
        title:'Se eliminó la palabra '+palabra.toUpperCase(),
        width:300
      });
    }else{
      localStorage.setItem("bolsa_palabras", JSON.stringify([]));
    }
    cambiaBolsa();
  }
  function borrarPalabras() {
    localStorage.setItem("bolsa_palabras", JSON.stringify([]));
    Swal.fire({
      title:'Se han eliminado todas la palabras',
      width:300
    });
    cambiaBolsa();
  }
  function ListarPalabras() {
    let bolsaPalabras = JSON.parse(localStorage.getItem('bolsa_palabras'));
    if(!bolsaPalabras){
      localStorage.setItem('bolsa_palabras',JSON.stringify([]));
    }
    if(bolsaPalabras.length){
    return <ul>{bolsaPalabras.map((word) => (
      <li key={word}>{word}
        <button onClick={() => eliminar(word)}>
          <i className="far fa-trash-alt"></i>
        </button>
      </li>
    ))}</ul>
    }else{
        return MensajeSinPalabras();
    }
  }
  function MensajeSinPalabras() {
    return (
      <div className="div_no_words_message">
        <p>No hay palabras agregadas</p>
        <p>Agregue algunas palabras para poder jugar</p>
      </div>
    );
  }
  return (
    <div id="modal_agregar" className="modal_agregar">
    <div className="div_seccion_agrega">
      <div className="div_agrega">
        <p>Agrega las palabras de desees:</p>
        <form onSubmit={(e) => handlerSubmit(e)}>
          <input
            className="entrada_palabra"
            type="text"
            name="palabra"
            placeholder="Introduce una palabra"
            onKeyPress={(e) => handleKeyPress(e)}
            onInput={(e) => handleInput(e)}
            value={palabraNueva}
          />
          <div className="div_agrega_buttons">
            <div>
              <input type="submit" value="Agregar"></input>
              <button onClick={() => borrarPalabras()}>Borrar palabras</button>
            </div>
          </div>
        </form>

        <div className="lista_palabras">
          <ListarPalabras />
        </div>
      </div>
    </div>
    </div>
  );
}

export default AgregarPalabras;
