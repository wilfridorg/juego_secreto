let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asigarTextoElemento(elemento,texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;

}
function verificarIntento() {
    let numerosDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   

    if (numerosDeUsuario === numeroSecreto) {
        asigarTextoElemento('p', `acertaste el numero en ${intentos} ${(intentos === 1 ) ? 'vez': 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //el usuario no acerto
        if (numerosDeUsuario> numeroSecreto) {
            asigarTextoElemento('p', 'el numero es menor');
            
        }else {
            asigarTextoElemento('p', 'el numero es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
   document.querySelector('#valorUsuario').value = '';
 
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros 
    if (listaNumerosSorteados.length == numeroMaximo) {
        asigarTextoElemento('p', 'ya se probaron todos los numeros posibles');
        
    } else{

        // si el numero generado esta incdluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();        
        } else{   
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
  }
    
}

function condicionesIniciales() {
    asigarTextoElemento('h1','juega el numero secreto');
    asigarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();

    //deshabilitar el boton de nuevo
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
    
}

condicionesIniciales();

//--------------------------------------------- ejercicio 1
// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

// function calcularMasa(peso,estaturalcuadrado) {
//     return peso/(estaturalcuadrado**2);
    
    
// }
// let calculo = parseInt(calcularMasa(92,1.75));
// console.log(calculo);
//--------------------------------------------- ejercicio 1
//--------------------------------------------- ejercicio 2
//Crea una función que calcule el valor del factorial de un número pasado como parámetro.
// function calcularFactoria(num) {
//     if (num < 0) {
//         return(`no se puede calcular factorial de ${num}`)        
//        }else {  
//            if(num === 0 || num === 1) {
//          return 1;
//     }    else {
//         let resultado = 1;
//         for (let index = 2; index <= num; index++) {
//             resultado *=index;
            
            
//         }
//         return resultado;
//       }
//     }
// }

// let total = calcularFactoria(4);
// console.log(total);

//--------------------------------------------- ejercicio 2
//--------------------------------------------- ejercicio 3
//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

// function calcularReales(numer) {
// return numer * 4.80
    
// }

// let totalReales = calcularReales(5);
// console.log(totalReales);

//--------------------------------------------- ejercicio 3
//--------------------------------------------- ejercicio 4
//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.


// function areaPerimetro(h,a) {
//     let area = h * a;
//     let perimetro = 2 * h + 2 * a;
  
//     console.log(`El área es ${area}`);
//     console.log(`El perímetro es ${perimetro}`);
//   }
  
//   areaPerimetro(2, 2);

//--------------------------------------------- ejercicio 4

//--------------------------------------------- ejercicio 5
// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

// function areaPerimetroCircular(r) {
//     let area = 3.14159*(r*r);
//     let perimetro = 2 * 3.14159 * r;

//  console.log(`el area de es ${area}`);
//  console.log(`el perimetro circualr es ${perimetro}`);
// }
// areaPerimetroCircular(5);
//--------------------------------------------- ejercicio 5
//--------------------------------------------- ejercicio 6
//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

// function tablaMultilicar(numX) {
    
//     for (let index = 1; index <= 9; index++) {
//         let resultado = numX * index;
//         console.log(`${numX} x ${index} = ${resultado}`);
        
//     }
   
// }
// let calcula = tablaMultilicar(6);

//--------------------------------------------- ejercicio 6









//--------------------------------------------- ejercicio 1
// function holaConsola() {

//     console.log('hola mundo');
    
// }
// holaConsola();
//---------------------------------------------ejercicio 1

//--------------------------------------------- ejercicio 2

// function dameNombre(nombre) {

//     console.log(`hola, ${nombre}`);
    
// }

// dameNombre('wilfrido');
//--------------------------------------------- ejercicio 2

//--------------------------------------------- ejercicio 3

// function porDos(numero) {
//     return  numero * 2;
    
// }

// let doble = porDos(130);
// console.log(doble);
//--------------------------------------------- ejercicio 3


//--------------------------------------------- ejercicio 4

// function promedio(num1,num2,num3) {

//     return (num1+num2+num3)/3;
    
// }
// let doble = promedio(1,2,3);
// console.log(doble);

//--------------------------------------------- ejercicio 4
//--------------------------------------------- ejercicio 5
// function mayor(num1,num2) {

//     if (num1 > num2) {
//         return num1
        
//     }else{
//         return num2
//     }
    
// }

// let indicar = mayor(5,3);
// console.log(indicar);

//--------------------------------------------- ejercicio 5

//--------------------------------------------- ejercicio 6
// function multiplicar(numero) {

//     return numero * numero
    
// }

// let resultado = multiplicar(240);
// console.log(resultado);


//--------------------------------------------- ejercicio 6


//--------------------------------------------- ejercicio 1
//Crea una lista vacía llamada "listaGenerica".

//let listaGenerica = [];
//--------------------------------------------- ejercicio 1
//--------------------------------------------- ejercicio 2
//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

// let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];
//--------------------------------------------- ejercicio 2
//--------------------------------------------- ejercicio 3
//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
// let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];


// lenguagesDeProgramacion.push('Java', 'Ruby' , 'GoLang');
// console.log(lenguagesDeProgramacion);
//--------------------------------------------- ejercicio 3
//--------------------------------------------- ejercicio 4
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
// let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];


// lenguagesDeProgramacion.push('Java', 'Ruby' , 'GoLang');


// function mostrarLenguajes() {
//     for (let index = 0; index < lenguagesDeProgramacion.length; index++) {
//         console.log(lenguagesDeProgramacion[index]);
        
//     }
    
// }

// mostrarLenguajes();

//--------------------------------------------- ejercicio 4
//--------------------------------------------- ejercicio 5
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
// let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];


// lenguagesDeProgramacion.push('Java', 'Ruby' , 'GoLang');


// function mostrarLenguajes() {
//     for (let index = lenguagesDeProgramacion.length - 1; index >= 0; index--) {
//         console.log(lenguagesDeProgramacion[index]);
        
//     }
    
// }

// mostrarLenguajes();
//--------------------------------------------- ejercicio 5
//--------------------------------------------- ejercicio 6
//Crea una función que calcule el promedio de los elementos en una lista de números.

// let listaNume = [89,5,46,789,28,607,25,9,65]


// function promeNume() {
//     let suma =0;
//     for (let index = 0; index < listaNume.length; index++) {
        
//          suma += listaNume[index]/(listaNume.length);      
        
//     }
//    return suma; 
// }
// let resultado = promeNume(listaNume);
// console.log(resultado);
//--------------------------------------------- ejercicio 6
//--------------------------------------------- ejercicio 7
//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

// let listaNum = [6, 8, 9, 13, 25, 47];

// function identificar() {
//     if (listaNum.length === 0) {
//         console.log("El arreglo está vacío.");
//         return;
//     }

//     let mayor = listaNum[0];
//     let menor = listaNum[0];

//     for (let i = 1; i < listaNum.length; i++) {
//         // Encontrar el número mayor
//         if (listaNum[i] > mayor) {
//             mayor = listaNum[i];
//         }

//         // Encontrar el número menor
//         if (listaNum[i] < menor) {
//             menor = listaNum[i];
//         }
//     }

//     console.log("Elementos en la lista:");
//     for (let i = 0; i < listaNum.length; i++) {
//         console.log(listaNum[i]);
//     }

//     console.log("Número mayor:", mayor);
//     console.log("Número menor:", menor);
// }

// identificar();


//--------------------------------------------- ejercicio 7
//--------------------------------------------- ejercicio 8
//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

// let lista = [10,20,30]

// function sumarLista() {
//     let suma=0;
//     for (let i = 0; i < lista.length; i++) {
//         suma += lista[i];
        
//     }
//     return suma;
// }
// let resultado = sumarLista();
// console.log(resultado);
//--------------------------------------------- ejercicio 8
//--------------------------------------------- ejercicio 9
//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.


//--------------------------------------------- ejercicio 9
//--------------------------------------------- ejercicio 10
//--------------------------------------------- ejercicio 10
//--------------------------------------------- ejercicio 11
//--------------------------------------------- ejercicio 11


