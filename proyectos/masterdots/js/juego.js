//Variables globales
var iniciadoMarcado=false;

//Funcion de randomización de colores (REFERENCIA A mozilla developer)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


//Funcion rellenar nick y poner avatar
function rellenarFormularioUsuario() {
    document.getElementById("nick").value=nick;
    document.getElementById("avatarImg").src=avatarImg;
}

function pintarPanelJuego() {
    document.getElementById("juego").style.gridTemplateColumns="repeat("+tamano+", 1fr)";
    document.getElementById("juego").style.gridTemplateRows="repeat("+tamano+", 1fr)";
    //Elementos de forma automatica
    let items="";
    let color=["rojo","verde"];
    let colorRnd=0;
    for (let index = 0; index < (parseInt(tamano)*parseInt(tamano)); index++) {
        if (index%2>0) colorRnd=getRandomInt(2);
        items+=`<div class="containerItem"><div class="item ${color[colorRnd]}"></div></div>`;
    }
    document.getElementById("juego").innerHTML=items;
}

function programarEventosJuegos() {
    const items=document.getElementsByClassName('item');
    for (let item of items) {
        item.addEventListener('mousedown', comenzarMarcar);
        item.addEventListener('mouseover', continuarMarcando);

    }
    document.addEventListener('mouseup', finalizarMarcado);
}

// Funciones del juego

/**
 * Iniciar el marcado de los dots
 * @param { * } event
 */
function comenzarMarcar(event) {
    let item=event.target;
    let containerItem=event.target.parentElement;
    if (item.classList.contains('rojo')) containerItem.classList.add('rojo');
    else containerItem.classList.add('verde');
    if (!iniciadoMarcado) iniciadoMarcado=true;
    console.log("se ha pinchado sobre un circulo");
}

/**
 * Iniciar el marcado de los dots
 * @param { * } event
 */
//Main
function continuarMarcando(event) {
    if (iniciadoMarcado) {
        let item=event.target;
        let containerItem=event.target.parentElement;
        if (item.classList.contains('rojo')) containerItem.classList.add('rojo');
        else containerItem.classList.add('verde');
    }
    console.log("pasando sobre un circulo");
}

/**
 * Finalizar el marcado de los dots
 * @param { * } event
 */
function finalizarMarcado(event) {
    iniciadoMarcado=false;
    console.log("dejar de pinchar")
}



//Capturamos datos de usuario
getDatosUsuario();
//Comprobamos los datos
if (!comprobacionDatosUsuario()) location="index.html";
//Rellenamos el formulario, panel y eventos
rellenarFormularioUsuario();
pintarPanelJuego();
programarEventosJuegos();
