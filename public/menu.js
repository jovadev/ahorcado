window.onload=main;
function main(){
    const btn_agregar=document.querySelector('.menu_nav.agregar');//devulve el elemento li
    const div_seccion_agrega=document.querySelector(".modal_agregar");//.div_seccion_agrega
    const tablero_juego=document.getElementById('tablero_juego');
    if(btn_agregar){
        btn_agregar.addEventListener('click',function(){
            let txtBtn=this.childNodes[0].innerText;
            document.querySelector(".menu_nav").classList.remove("show");
            div_seccion_agrega.classList.toggle('show');
            this.childNodes[0].innerText=txtBtn==="AGREGAR"?"Cerrar":"AGREGAR";
            noClickScroll(div_seccion_agrega);
        });    
    }
    const btn_menu=document.querySelector('.btn_menu');
    if(btn_menu){
        btn_menu.addEventListener('click',()=>{
            const menu=document.querySelector('.menu_nav');  
            const btn_menu_icon=document.querySelector(".btn_menu i");           
           if(btn_menu_icon.className==="fas fa-window-close"){
               btn_agregar.childNodes[0].innerText="AGREGAR";
               div_seccion_agrega.classList.remove('show');
               menu.classList.remove('show');
            }else{
                menu.classList.add('show')
            }
            noClickScroll(menu,tablero_juego);
            cambiaIconos(btn_menu_icon);
        });
    } //fin if
}//fin main
function cambiaIconos(btn_menu_icon){
    btn_menu_icon.classList.toggle("fa-window-close");
    btn_menu_icon.classList.toggle("fa-bars");
}
function noClickScroll(elActual){
    elActual.classList.forEach((clase)=>{
        clase==="show"?
            document.documentElement.style.overflow="hidden"
        :
            document.documentElement.style.overflow="auto";
    });
    
}