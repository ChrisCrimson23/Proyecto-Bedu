//Funciones
//Herramientas que encapsulan código el cual puede ser invocado y ejecutado apartir
//del nombre con el cual declaramos la función

//Sintáxis: función nombrefuncion() {}

//ejejmplo:
//crear una función que imprima un saludo

function imprimeSaludo() {
    console.log("Hola mundo");
}

//return
//nos permite regresar algo al termino de la función
//es la últ9ma línea que se ejecuta de una función
//sintáxis: function nombrefuncion () {
    //...
    //return expresión, variable, dato, callback, function
//}

//ejemplo:
//crear una función que nos regrese el resultado de una suma

function suma() {
    return 4 + 4
}

//crear una función que nos regrese un saludo
function saludo() {
    return "Hola desde la función"
}

//validar que nos regrese un return vacio
//nos regrese un undefined
function returnVacio() {
    return
}

//Guardar el valor de un return de una función, mientras la función regrese valores
const resultadoSuma = suma()

console.log("resultado", resultadoSuma);

//Parámetros
//Son valores que reciben datos en la función al ser operados
//se reciben en el orden en el que fuenron declarados

//ejemplo
//crear una función que ume dos valores
function sumaValores(valor1, valor2) {
    return valor1 + volaor2
}

//Suma de volores 5 + 6 = 11
sumaValores(5, 6)

prompt("Introduzca un número")
prompt("Eliga la que tipo de operación desea realizar: suma, resta, multiplicación o división")
prompt("Elija el sugundo número de la operación")

function

const prompt ("Elija la opéración que quiere realizar: suma, resta, multiplicación o división")

const Número1 = prompt ("Elija su primer número:")
const Operación = prompt ("Elija el tipo de operación: multiplicación, división, suma y resta")

//Parámetros por default:
//son parámetros que al momento de ser declarados tienen un valor
//este valor se usará solo en el caso que al momento de invocar la función
//no se envie todos los parámetros

//sintaxis: function nombredefunción(parámetro1 = valoraasignar, parámetro2) {
    //return valor1 + valor2
//}

//ejemplo
//crear una función que reciba el nombre del usuario y lo salude

function saludoUsuario(nombre = "usuario") {
    return "buen día" + nombre;
}

//reglas
//cuando sean más de un parámetro, los parámetros por defecto deben
//ir al final de la lista de parámetros
//si se desea ocupar un parámetro por defecto en medio o principio de la lista
//se debe enviar undefined como el valor en el espacio de ese parámetro

//parámetros REST   
//parámetros que se declaran de una manera especial
//los parámetros rest reciben un número no definido de valores

//sintáxis: función nombredelafunción(...parámetros) {}

//ejemplo:
//crear una función que reciba los datos del nombre de un usuario y que los imprima
//en pantalla

function nombreUsuario(...usuario) {
    console.log(usuario);
}

function promedioAlumnos(...calificaciones) {}

//Tarea 3

const servicios = {
    "1": { nombre: "CFE", costo: 250 },
    "2": { nombre: "Telmex", costo: 300 },
    "3": { nombre: "AT&T", costo: 450 },
    "4": { nombre: "Telcel", costo: 300 },
    "5": { nombre: "Gas", costo: 500 },
    "6": { nombre: "Agua", costo: 365 },
  };
  
  function mostrarMenuPrincipal() {
    console.log("Menú Principal");
    console.log("1) Iniciar sesión");
    console.log("2) Crear cuenta");
  }
  
  function mostrarMenuServicios(usuario) {
    console.log(`Bienvenido ${usuario}:`);
    console.log("Servicios disponibles:");
    console.log("1) CFE");
    console.log("2) Telmex");
    console.log("3) AT&T");
    console.log("4) Telcel");
    console.log("5) Gas");
    console.log("6) Agua");
  }
  
  function iniciarSesion() {
    const usuario = prompt("Usuario:");
    
    if (usuario === "" || usuario.length < 6) {
      console.log("Error: El usuario no cumple con los requisitos mínimos.");
      mostrarMenuPrincipal();
      return;
    }
    
    const contrasena = prompt(`Usuario: ${usuario}\nContraseña:`);
    
    if (contrasena === "" || contrasena.length < 8) {
      console.log("Error: La contraseña no cumple con los requisitos mínimos.");
      mostrarMenuPrincipal();
      return;
    }
    
    mostrarMenuServicios(usuario);
    const opcionServicio = prompt("Elige una opción:");
    
    if (!(opcionServicio in servicios)) {
      console.log("Error: Opción de servicio inválida.");
      mostrarMenuServicios(usuario);
      return;
    }
    
    const servicio = servicios[opcionServicio].nombre;
    const numeroCuenta = prompt(`Usuario: ${usuario}\nServicio: ${servicio}\nNúmero de cuenta:`);
    
    if (numeroCuenta === "" || numeroCuenta.length < 10) {
      console.log("Error: El número de cuenta no cumple con los requisitos mínimos.");
      mostrarMenuServicios(usuario);
      return;
    }
    
    const montoPagar = servicios[opcionServicio].costo;
    const cantidadPagar = prompt(`Usuario: ${usuario}\nServicio: ${servicio}\nNúmero de cuenta: ${numeroCuenta}\nEl monto a pagar es: $${montoPagar}\nCantidad a pagar:`);
    
    if (cantidadPagar === "" || parseFloat(cantidadPagar) !== montoPagar) {
      console.log("Error: Cantidad de pago incorrecta.");
      mostrarMenuServicios(usuario);
      return;
    }
    
    console.log(`Gracias, ${usuario}, por tu pago.`);
    const opcionPagarOtro = prompt("¿Deseas pagar otro servicio? (si/no)");
    
    if (opcionPagarOtro.toLowerCase() === "si") {
      mostrarMenuServicios(usuario);
    } else {
      console.log("Cerrando sesión...");
      console.log("Sesión cerrada.");
      mostrarMenuPrincipal();
    }
  }
  
  function crearCuenta() {
    console.log("Debes acudir a nuestras oficinas para crear tu cuenta.");
    mostrarMenuPrincipal();
  }
  
  function procesarOpcion(opcion) {
    switch (opcion) {
      case "1":
        iniciarSesion();
        break;
      case "2":
        crearCuenta();
        break;
      default:
        console.log("Error: Opción inválida.");
        mostrarMenuPrincipal();
        break;
    }
  }
  
  mostrarMenuPrincipal();
  const opcionPrincipal = prompt("Elige una opción:");
  
  procesarOpcion(opcionPrincipal);