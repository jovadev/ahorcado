
let estiloSoporte="#000";
function dibujandoMono(intentos){
  funcionSwitch(intentos);
}
function funcionSwitch(intentos){
  switch(intentos){
    case 0: dibujaSoporte();
      break;
    case 1: dibujaCabeza();
      break;
    case 2: dibujaColumna();
      break;
    case 3: dibujaBrazos();
      break;
    case 4: dibujaPiernas();
      break;
    case 5: finaliza();
      break;
    default:
      break;
  }
}

function dibujaSoporte() {
  var canvas = document.getElementById("linea1");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0,0,200,250);//x,y,width,height  width=200 height=250
      ctx.lineWidth = 2;
      ctx.strokeStyle = estiloSoporte;
      ctx.beginPath();

      ctx.moveTo(60, 10);
      ctx.lineTo(60, 200); //columna
      ctx.moveTo(10, 200);
      ctx.lineTo(110, 200); //soporte inferior
      ctx.moveTo(60, 10);
      ctx.lineTo(130, 10); //soporte superior
      ctx.moveTo(130, 10);
      ctx.lineTo(130, 50); //tercera, de donde se cuelga el mono

      ctx.stroke();
    }
  }
}
function dibujaCabeza() {
  var canvas = document.getElementById("linea1");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.lineWidth = 2;
      ctx.strokeStyle = estiloSoporte;
      ctx.beginPath();
      ctx.arc(130, 70, 20, 0, Math.PI * 2, true);
      ctx.moveTo(145, 70);

      ctx.stroke();
    }
  }
}

function dibujaColumna() {
  var canvas = document.getElementById("linea1");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.lineWidth = 2;
      ctx.strokeStyle = estiloSoporte;
      ctx.beginPath();
      //columna
      ctx.moveTo(130, 90);
      ctx.lineTo(130, 140);

      ctx.stroke();
    }
  }
}
function dibujaBrazos() {
  var canvas = document.getElementById("linea1");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.lineWidth = 2;
      ctx.strokeStyle = estiloSoporte;
      //brazos
      ctx.moveTo(130, 115);
      ctx.lineTo(110, 115);
      ctx.moveTo(130, 115);
      ctx.lineTo(150, 115);

      ctx.stroke(); 
    }
  }
}
function dibujaPiernas() {
  var canvas = document.getElementById("linea1");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.lineWidth = 2;
      ctx.strokeStyle = estiloSoporte;
      ctx.beginPath();
      //piernas
      ctx.moveTo(130, 140);
      ctx.lineTo(110, 160);
      ctx.moveTo(130, 140);
      ctx.lineTo(150, 160);

      ctx.stroke();
    }
  }
}
function finaliza() {
  var canvas = document.getElementById("linea1");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.lineWidth = 2;
      ctx.strokeStyle = estiloSoporte;
      ctx.beginPath();

      ctx.moveTo(120, 80);
      ctx.lineTo(140, 80);

      ctx.moveTo(119, 57);
      ctx.lineTo(125, 63);
      ctx.moveTo(125, 57);
      ctx.lineTo(119, 63);

      ctx.moveTo(140, 57);
      ctx.lineTo(134, 63);
      ctx.moveTo(134, 57);
      ctx.lineTo(140, 63);

      ctx.stroke();
    }
  }
}

export default dibujandoMono;