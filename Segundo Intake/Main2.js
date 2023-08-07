// ESTRUCTURAS DE CONTROL

// Condicionales

// if
// opera mediante el uso de una expresión
// sintaxis: if (expresión es verdadera) {}

// ejemplo: saber si una persona apartir de su edad puede votar
// edad sea minimo 18 años

let edad = 17;

if (edad >= 18) {
  console.log("la persona puede votar!!!");
}

// if else
// opera mediante el uso de una expresión,
// pero si la expresión no se cumple entrará la bloque de else
// sintaxis: if (expresión es verdadera) {} else {}

// ejemplo: saber si una persona apartir de su edad puede votar
// edad sea minimo 18 años

if (edad >= 18) {
  console.log("la persona puede votar!!!");
} else {
  console.log("la persona aún no puede votar!!!");
}

// if else if
// opera mediante el uso de una expresión,
// pero si la expresión no se cumple entrará validará la expresión if del bloque de else
// sintaxis: if (expresión es verdadera) {} else if(expresión es verdadera) {}

// ejemplo: saber si una persona apartir de su edad puede votar
// edad sea minimo 18 años
// si la persona tiene entre 18 y 25, mandarle mensaje de que votara en la casilla a
// si la persona tiene entre 26 y 45, mandarle mensaje de que votara en la casilla b
// si la persona es mayor de 46, mandarle mensaje de que votara en la casilla c

if (edad >= 18) {
  console.log("la persona puede votar!!!");
} else if (edad == 17) {
  console.log("la persona le falta muy poco para poder votar!!!");
} else {
  console.log("la persona aún no puede votar!!!");
}

// switch: es una estructura condicional que nos permite apartir de una expresión y
// un conjunto de valores ejecutar un bloque de código
/**
 * Sintaxis: switch(expresion) {
 *  case (number o string):
 *    break;
 *  default: se ejecuta solo si los casos no hacen match con la expresión
 * }
 */

// ejemplo: somos una agencia de viajes, y el usuario puede ejegir entre nuestros
// diferentes destinos

let destino = "USA";

// if (destino == "Alemania") {
//   console.log("precio: $000.000")
// } else if (destino == "Cuba") {
//   console.log("precio: $000.000")
// } else if (destino == "Caribe") {
//   console.log("precio: $000.000")
// } else if (destino == "USA") {
//   console.log("precio: $000.000")
// } else if (destino == "Canada") {
//   console.log("precio: $000.000")
// } else if (destino == "Francia") {
//   console.log("precio: $000.000")
// } else if (destino == "Belice") {
//   console.log("precio: $000.000")
// } else {
//   console.log("Lo sentimos, aún no tenemos ese destino disponible!")
// }

// switch(destino) {
//   case "Alemania":
//     console.log("precio actual: $100.00");
//     break;
//   case "Cuba":
//     console.log("precio actual: $200.00");
//     break;
//   case "Caribe":
//     console.log("precio actual: $300.00");
//     break;
//   case "USA":
//     console.log("precio actual: $400.00");
//     break;
//   case "Canada":
//     console.log("precio actual: $400.00");
//     break;
//   case "Francia":
//     console.log("precio actual: $600.00");
//     break;
//   case "Belice":
//     console.log("precio actual: $200.00");
//     break;
//   default:
//     console.log("Lo sentimos, aún no tenemos ese destino disponible!")
// }

// Variante
// switch(destino) {
//   case "Alemania":
//     console.log("precio actual: $100.00");
//     break;
//   case "Cuba":
//   case "Belice":
//     console.log("precio actual: $200.00");
//     break;
//   case "Caribe":
//     console.log("precio actual: $300.00");
//     break;
//   case "USA":
//   case "Canada":
//     console.log("precio actual: $400.00");
//     break;
//   case "Francia":
//     console.log("precio actual: $600.00");
//     break;
//   default:
//     console.log("Lo sentimos, aún no tenemos ese destino disponible!")
// }

// prompt
// prompt("Destino a visitar: ")
// const dataUser = prompt("Destino a visitar: ")
// los prompt siempre regresan valores string
// quiero obtener la edad de una persona
// coerción explicita para convertir valores

/**
 * const userData = prompt("Edad: ") // pedro
 * const edad = Number(userData) // NaN
 * console.error("dato no procesable")
 * if (isNaN(edad)) {} else {}
 */

/**
 * somos una agencia de viajes, y el usuario puede elegir entre nuestros diferentes destinos:
    Guadalajara: 600
    CDMX: 300
    Monterrey: 800
    Saltillo: 500
    Yucatan: 900

    Preguntar al usuario a que destino quisiera viajar, responderle con el precio del viaje y si el destino no se encuentra en nuestro catalogo, mandarle un mensaje de disculpa
*/

// const respuesta = prompt(`Nuestros destinos: 
//   Guadalajara
//   CDMX
//   Monterrey
//   Saltillo
//   Yucatan

//   A que destino te gustaría Viajar: 
// `)

// switch(respuesta.toLowerCase()) {
//   case "Guadalajara".toLowerCase():
//     console.log("Precio actual: $600.00");
//     break;
//   case "CDMX".toLowerCase():
//     console.log("Precio actual: $300.00");
//     break;
//   case "Monterrey".toLowerCase():
//     console.log("Precio actual: $800.00");
//     break;
//   case "Saltillo".toLowerCase():
//     console.log("Precio actual: $500.00");
//     break;
//   case "Yucatan".toLowerCase():
//     console.log("Precio actual: $900.00");
//     break;
//   default:
//     console.log("Lo sentimos, aún no tenemos ese destino disponible!")
// }

// Iterables
// for: ejecutará n número de veces el bloque de código
// Sintaxis: for(iniciador; finalizador; iteracion) { bloque de código }
// iniciador: fija el valor de inicio del ciclo
// finalizador: es una expresión que de ser verdadera, permitirá la ejecución del bloque de código
// iteración: fija el valor de la siguiente iteración

// imprimir todos números del 0 al 9
// for (let i = 0; i <= 9; i++) {
//   console.log("iteracion:", i);
// }

// Solicitar al usuario de que número empieza, en que número termina
// y como quiere ir incrementando

// const inicioUsuario = prompt("Con que número empiezo: ")
// const finalUsuario = prompt("Con que número termino: ")
// const incrementoUsuario = prompt("Incremento: ")

// const inicio = Number(inicioUsuario)
// const final = Number(finalUsuario)
// const incremento = Number(incrementoUsuario)

// console.log("inicio: ", inicio)
// console.log("final: ", final)
// console.log("incremento: ", incremento)

// for (let i = inicio; i <= final; i+=incremento) {
//   console.log("iteracion:", i);
// }

// while: hibrido entre condicional y iterable
// sintaxis: while(expresion sea verdadera) {}

// imprimir todos números del 0 al 9
// let j = 0;
// while(j <= 9) {
//   console.log("j: ", j);
//   j++;
// }


/**
 * somos una agencia de viajes, y el usuario puede elegir entre nuestros diferentes destinos:
    Guadalajara: 600
    CDMX: 300
    Monterrey: 800
    Saltillo: 500
    Yucatan: 900

    Preguntar al usuario a que destino quisiera viajar, responderle con el precio del viaje y si el destino no se encuentra en nuestro catalogo, mandarle un mensaje de disculpa
    queremos validar si el usuario quiere revisar otro destino o salir por completo de nuestra aplicación
*/

// let intento = true;

// while(intento) {
//   const respuesta = prompt(`Nuestros destinos: 
//     Guadalajara
//     CDMX
//     Monterrey
//     Saltillo
//     Yucatan
  
//     A que destino te gustaría Viajar: 
//   `);
//   switch(respuesta.toLowerCase()) {
//     case "Guadalajara".toLowerCase():
//       console.log("Precio actual: $600.00");
//       break;
//     case "CDMX".toLowerCase():
//       console.log("Precio actual: $300.00");
//       break;
//     case "Monterrey".toLowerCase():
//       console.log("Precio actual: $800.00");
//       break;
//     case "Saltillo".toLowerCase():
//       console.log("Precio actual: $500.00");
//       break;
//     case "Yucatan".toLowerCase():
//       console.log("Precio actual: $900.00");
//       break;
//     default:
//       console.log("Lo sentimos, aún no tenemos ese destino disponible!")
//   }
//   const nuevaRespuesta = prompt(`Desea revisar un nuevo destino: s/n`);
//   intento = nuevaRespuesta.toLowerCase() == 's'
// } // expresion booleana true / false

// console.log("Muchas gracias por ocupar nuestros servicios");

//  do while


let intento = false;

function Oferta(descuentos) {
    switch (descuentos) {
        case "a":
            return respuesta * .45
            break;
        case "b":
            return respuesta * .30
            break;
        case "c":
            return respuesta * .60
            break;
        default:
            return prompt("El coódigo que introdujo no es válido, pro favor introduzca un código participante");
    }
  }

do {
  const respuesta = prompt(`Nuestros destinos: 
    Guadalajara
    CDMX
    Monterrey
    Saltillo
    Yucatan
  
    A que destino te gustaría Viajar: 
  `);
  console.log("El destino que escogió es: ", respuesta);

  switch(respuesta.toLowerCase()) {
    case "Guadalajara".toLowerCase():
      console.log("Precio actual: $600.00");
      break;
    case "CDMX".toLowerCase():
      console.log("Precio actual: $300.00");
      break;
    case "Monterrey".toLowerCase():
      console.log("Precio actual: $800.00");
      break;
    case "Saltillo".toLowerCase():
      console.log("Precio actual: $500.00");
      break;
    case "Yucatan".toLowerCase():
      console.log("Precio actual: $900.00");
      break;
    default:
      console.log("Lo sentimos, aún no tenemos ese destino disponible!")
  }
  const descuento = prompt("Usted ha elegido un destino que participa con un descuento, Introduzca el código de descuento si poseé uno:")
  const promoción = Oferta(descuento)
 
  let NuevoPrecio=0


  switch(respuesta.toLowerCase()) {
    case "Guadalajara".toLowerCase():
        NuevoPrecio = 600 - promoción
      console.log("Precio final de tu viaje sería: $", NuevoPrecio - descuentos);
      break;
    case "CDMX".toLowerCase():
      console.log("Precio final de tu viaje sería: $", NuevoPrecio - descuentos);
      break;
    case "Monterrey".toLowerCase():
      console.log("Precio final de tu viaje sería: $",NuevoPrecio - descuentos);
      break;
    case "Saltillo".toLowerCase():
      console.log("Precio final de tu viaje sería: $",NuevoPrecio - descuentos);
      break;
    case "Yucatan".toLowerCase():
      console.log("Precio final de tu viaje sería: $",NuevoPrecio - descuentos);
      break;
  }

  const nuevaRespuesta = prompt(`Desea revisar un nuevo destino: s/n`);
  intento = nuevaRespuesta.toLowerCase() == 's'

  
} while(intento)



const destinos = {
  Guadalajara: 600,
  CDMX: 300,
  Monterrey: 800,
  Saltillo: 500,
  Yucatan: 900,
};

const descuentos = {
  a: 0.45,
  b: 0.30,
  c: 0.60,
};

function calcularPrecioConDescuento(precio, descuento) {
  return precio - (precio * descuento);
}

function solicitarDestino() {
  const destino = prompt("Ingrese el destino al que desea viajar:");
  
  if (destinos.hasOwnProperty(destino)) {
    const precioViaje = destinos[destino];
    console.log(`El precio del viaje a ${destino} es de $${precioViaje}.`);
    
    const tieneDescuento = prompt("¿Tiene un código de descuento? (si/no)");
    
    if (tieneDescuento.toLowerCase() === "si") {
      const codigoDescuento = prompt("Ingrese el código de descuento (a, b o c):");
      
      if (descuentos.hasOwnProperty(codigoDescuento)) {
        const descuentoPorcentaje = descuentos[codigoDescuento] * 100;
        const descuentoAplicado = calcularPrecioConDescuento(precioViaje, descuentos[codigoDescuento]);
        console.log(`Se le aplicó un descuento del ${descuentoPorcentaje}%.`);
        console.log(`El precio del viaje con descuento es de $${descuentoAplicado}.`);
      } else {
        console.log("Código de descuento inválido.");
      }
    }
  } else {
    console.log("Lo sentimos, el destino no se encuentra en nuestro catálogo.");
  }
}

solicitarDestino();