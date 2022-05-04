export default function Panel(props) {
  let estiloPanel="div_panel ";
  let estiloBtn="btn ";
  if(props.estilo==="dark"){
    estiloPanel+="m"+props.estilo;
    estiloBtn+=props.estilo;
  }
    return (
      <div className={estiloPanel}>
        <div className="div_panel_buttons">
          <button id="btn_nuevo" type="button" 
            className={estiloBtn} 
            disabled={props.hayBolsa?false:true}
            onClick={props.reiniciar}>Juego nuevo</button>
          <button id="btn_respuesta" type="button" 
            className={estiloBtn}
            disabled={props.hayBolsa?false:true}
            onClick={props.seRinde}>Ver respuesta</button>
        </div>
      </div>
    ); 
}

