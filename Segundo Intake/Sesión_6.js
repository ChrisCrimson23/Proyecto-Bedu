//PROGRAMACIÓN FUNCIONAL

//Inmutabilidad
//es la capacidad de no cambiar algo que ya fue generado
//ejemplo

let nombre = "Pedro";
let nombre1 = "María";

//Recursividad
//Concepto que se basa en el invocarse a si mismo n número de veces

//Funciones Impuras
//Son funciones provoca "side effects" o efecto secundario
//porque hacen uso de variables globales
//no regresan valores
//no reciben parámetros

//ejemplo

let nombre2 = "Pedro";

function saluda() {
console.log("Hola soy" + nombre2);
}

let total = 0;

function suma(num1, num2) {
    total = num1 + num2;
}

suma(4,5); //9
suma(8,5); //13
suma(6,5); //11
suma(4,5); // 9

//Funciones puras
//Son funciones que no provocan "side effects" o efectos secundarios
//no hacen uso de variables globales
//regresan valores
//reciben parámetros
//a la misma, la misma salida

//funciones de orden superior
//Son funciones que pueden recibir funciones como parámetros o mretornar funciones

//ejemplo

function terminar(valor) {
    throw new Error("Algo salió mal");
}

function finalizador(valor) {
    return "Exitoso"
}
function iniciaProceso(valorentrada, fallback, callback) {
    if (valorentrada) {
        callback("Exitoso")
    } else {
        fallback("Error")
    }
}

//iniciaProceso(true, terminar, finalizar);

//terminar;

//Funciones de primera clase
//son aquellas funciones que pueden ser tratadas como cualquier otra variable, por ejemplo, como parámetro

//Map

//es un método funcional que regrese un nuevo arreglo con el mismo número de elementos que el arreglo original
//pero no significa que tenga el mismo contenido que el arreglo original

//let dobleNumero = [];

//for (let número of números) {
    //dobleNúmero.push(número * 2);
//}

//console.log(dobleNúmero)

//let dobleNumero = números.map(function(valorActual, posición, arreglo) {
//console.log("valorActual", valorActual)
//console.log("posicion", posición)
//console.log("arreglo", arreglo)
//return valorActual * 2
//});
//console.log(dobleNumero)

const nombres = ["Pedro", "Ana", "Maria", "Antonio", "Jose Luis"];

const nuevoNombre = nombres.map((nombre) => {
  if (nombre.includes("o") && nombre.match(/o/g).length === 1) {
    return nombre.split("").reverse().join("");
  } else {
    return nombre;
  }
});

console.log(nuevoNombre);

//Arrow Functions
//funciones de nueva generación
//cambio de sintaxis
//se elimina la referencia del this
//return implicito
//one line

//Sintaxis: () => {}

//(valorActual) => ValorActual * 2

//class Persona {
//    constructor(nombre) {
    //Persona.nombre
    //this.nombre = nombre;
//}
//}

//function Persona(nombre) {
    //Persona.nombre
    //this.nombre = nombre;
//}

//const persona = {
    //nombre: "Antonio",

//saludar function}

//Filter
//Es un método funcional que regresa un nuevo arreglo con un número meno o igual de elementos
//que el arreglo original

//Sintaxis: arreglo.filter(function(valor, posicion, arreglo) {})

//obtener solo los elementos que tengan menos de 6 caracteres y al menos 1 letra "o"

const Numeros = [23, 67,1300, 45454, 6765, 198, 2, 4]

const NuevosNumeros = Numeros.filter((Impar) => Impar % 2 !==0);
    
console.log(NuevosNumeros);

//reduce
//es un método funcional que regresa cualquier tipo de dato todo en base al arreglo original

//sintaxis: arreglo.reduce(function(valorAnterior, ValorActual, posicion, arreglo){}, tipo de dato a operar)
//sintaxis: arreglo.reduce(function(valorAnterior, ValorActual, posicion, arreglo){}, {})

//Obtener el promedio de un alumno por sus calificaciones

const promedio = [8, 8.7, 9, 10, 5].reduce((valorAnterior, valorActual, posicion, arreglo) => {
    const acumulador = valorAnterior + valorActual;
    if(posicion ===(arreglo.leght - 1)) {
        return acumulador / arreglo.leght
    }
    return acumulador
} , 0);