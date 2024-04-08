/* JS Para comprobar datos de formulario */

//Capturar valor del input nick
const nickInput=document.getElementById('nick');
console.log(nickInput.nodeType);
nickInput.value="PACO";
console.log(nickInput.value);

//Capturar valor del select

const tamanoInput=document.getElementById('tamano');
console.log(tamanoInput.value)
console.log(tamanoInput.options[tamanoInput.selectedIndex].text);


function test() {
    console.log("Evento sobre raton");
}