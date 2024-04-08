var valorInt;
var submitButton;
var formEntrada;
var monedaSelec;
var monedaCambiar;
var error;
var monedaInicial;
var monedaDestino;

function comprobarForm(event) {
    // Obtener los valores seleccionados en los campos de selección de moneda
    var currencyValue = monedaSelec.value;
    var currencyResultValue = monedaCambiar.value;

    // Comprobar si los valores seleccionados son iguales
    if (currencyValue === currencyResultValue) {
        // Si son iguales, mostrar el mensaje de error y prevenir el envío del formulario
        event.preventDefault();
        error.innerText = "No puedes convertir a la misma moneda";
        return false;
    }
    return true;
}

function valorConvertido(event) {
    // Obtener el valor del input
    var valorInt = parseFloat(document.getElementById("valorm").value);

    // Obtener los valores seleccionados en los campos de selección de moneda
    var monedaInicial = document.getElementById("monedaSel").value;
    var monedaDestino = document.getElementById("monedaCam").value;

    // Realizar la conversión de moneda
    var resultado = 0;

    // Realizar la conversión basada en las monedas seleccionadas
    if (monedaInicial === "euro" && monedaDestino === "libra") {
        resultado = valorInt * 0.86; // Conversión de Euro a Libra
    } else if (monedaInicial === "euro" && monedaDestino === "dolar") {
        resultado = valorInt * 1.08; // Conversión de Euro a Dólar
    } else if (monedaInicial === "libra" && monedaDestino === "euro") {
        resultado = valorInt * 1.17; // Conversión de Libra a Euro
    } else if (monedaInicial === "libra" && monedaDestino === "dolar") {
        resultado = valorInt * 1.26; // Conversión de Libra a Dólar
    } else if (monedaInicial === "dolar" && monedaDestino === "euro") {
        resultado = valorInt * 0.92; // Conversión de Dólar a Euro
    } else if (monedaInicial === "dolar" && monedaDestino === "libra") {
        resultado = valorInt * 0.79; // Conversión de Dólar a Libra
    }

    // Mostrar el resultado de la conversión
    document.getElementById("result").value = resultado.toFixed(2);

    // Guardar los datos de conversión en el localStorage
    localStorage.setItem('conversor_datos', JSON.stringify({
        valor: valorInt,
        monedaInicial: monedaInicial,
        monedaDestino: monedaDestino,
        resultado: resultado.toFixed(2)
    }));

    // Prevenir el envío del formulario
    event.preventDefault();
}

//DOM
function cargarDom() {
    valorInt = document.getElementById("valorm");
    error = document.getElementById("error");
    formEntrada = document.getElementById("formconver");
    submitButton = document.getElementById("buttonConvert");

    // Obtener los elementos de selección de moneda
    monedaSelec = document.getElementById("monedaSel");
    monedaCambiar = document.getElementById("monedaCam");

    // Agregar event listener para el evento 'submit' del formulario
    formEntrada.addEventListener('submit', valorConvertido);

    // Agregar event listener para el evento 'submit' del formulario
    formEntrada.addEventListener('submit', comprobarForm);

    // Cargar datos guardados en localStorage si existen
    var datosGuardados = JSON.parse(localStorage.getItem('conversor_datos'));
    if (datosGuardados) {
        document.getElementById("valorm").value = datosGuardados.valor;
        document.getElementById("monedaSel").value = datosGuardados.monedaInicial;
        document.getElementById("monedaCam").value = datosGuardados.monedaDestino;
        document.getElementById("result").value = datosGuardados.resultado;
    }
}

// Dom cargado
document.addEventListener('DOMContentLoaded', cargarDom);