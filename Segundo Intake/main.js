// alert("hola desde el navegador")
console.log("despues del alert")
console.warn("esto es un advertencia")
console.error("esto es un error")

/*console.group("inicia el grupo de mensaje")
console.log("esto es un mensaje")
console.log("esto es un otro mensaje")
console.log("esto es un nuevo mensaje")
console.error("esto es un error")
console.groupEnd()*/

// de una sola linea

/*
  comentario multilines
*/

/**
 * @param nombre (string)
 * 
 * Esta funcion permite regresar un string concatenando el string
 * recibido en el parametro nombre
 */
function hola(nombre) {
}

// Tipos de datos
// datos primitivos
// string: tienen que vivir entre ""''`` "\""
// number 
// boolen: true, false

// datos compuestos o estructuras de datos
// object: array y los objectos
// function: 

// *symbol
// undefined: no existe
// null: vacio 

// variables
// ES5
// var nombre = "Pedro Fragoso Maldonado";

// function saludo(persona) {
//   nombre = persona;
//   nombre = undefined;
//   console.log(nombre);
// }

// ES6
// let: variables editables
// const: variables no editables
const nombre = "Pedro Fragoso Maldonado";
// nombre = "Raul" // no permitido valor si no que tampoco permite el cambio de tipo

let edad = 17;
console.log("edad:", edad)
edad = 45;
console.log("edad:", edad)
edad = "Miguel";
console.log("edad:", edad)

function saludo(persona) {
  let nombre = persona;
  nombre = undefined;
  console.log(nombre);
}

// typeof: obtener el tipo de dato, en formato string

// typeof variable
// typeof ""
// typeof 67
// typeof 67.9
// typeof true
// typeof undefined
// typeof null
// typeof saludo


console.log(typeof nombre)
console.log(typeof "")
console.log(typeof 67)
console.log(typeof 67.9)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof saludo)

// Conversión de valores
// Explicitos: metodo para la conversion
// Implicitos: coerción

// Conversion a string (Explicita)
String()
// Conversion a string (Implicita)
// concatenación cualquier valor + ""

// Conversion a number (Explicita)
Number()
// Conversion a number (Implicita)
// + 'cadena con caracteres numericos'
// multiplicar la cadena con caracteres numericos por 1

// Conversion a boolean (Explicita)
Boolean()
// Conversion a string (Implicita)
// Uso de signo de admiracion
// Thruty 
// Falsy

// Operadores básicos
// = asignación
// + adición mientras operemos valores numericos
// + concatenación mientras exista por lo menos un valor string
// - resta
// * multiplicación
// / división
// % modulo, residuo de una division
// ++ incremento, suma automatica

// Precedencia de operadores

// primer operador
// () agrupación
// (4+5) + 1 = 10
// segundo operador
// ++ y --
// 8 * 4-- = 32
// 8 * --4 = 24
// tercer operador
// + y - (suma y negacion unitario)
// +'123'
// -'123'
// 4 + (-'2') = 2
// 4 + (+'2') = 6
// cuarto operador
// * multiplicacion
// / division
// % modulo
// quinto operador
// + suma o adicion
// - resta


const a = 5;
const b = 10;
const c = 15;

console.log((3 + b) * c / a * 2);

console.log(((a + b * c) / 5) * 2);

console.log(b / a + 2 * c);

console.log((a + b + c / c) * a);

console.log(((3 * a) / +c) + a + b + c);  

console.log(a - (b + c) * (a * 5) / 1);