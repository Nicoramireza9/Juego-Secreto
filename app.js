let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
   console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1)?"vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número Secreto es menor");
        }else {
            asignarTextoElemento("p", "El número Secreto es mayor");
        }
        intentos++; 
        limpiarCaja(); 
    
    }
    return;
}

function limpiarCaja() {
   document.querySelector("#valorUsuario").value = "";
   
}

function generarNumeroSecreto() {
        let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los números posibles");

    } else {
        //Si el número generado esta incluido en la lista

        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else
        listaNumerosSorteados.push(numeroGenerado);
    }    return numeroGenerado;
}

function condicionesIniciales() {
    asignarTextoElemento ("h1", "Juego del número Secreto");
    asignarTextoElemento ("p", `Indica un número del 1 al ${numeroMaximo} `);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpar caja
    limpiarCaja();
    //Indicar mensaje de intervalos de números
    //Generar el número aleatorio 
    //Inicializar el número de intentos 
    condicionesIniciales();
    //Desabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled" , "true")
}

condicionesIniciales();