//Estructuras de datos

//Objetos: son estructuras de datos de datos que tienen las caracteristicas de definir
//los datos que contienen a partir de propiedades con un formato de strings

//Propiedades
//son creadas con un nombre y pueden almacenar cualquier tipo de datos válido de JS

//sintáxis: {}

const pedro = {};

const maria = {
    "nombre": "María",
    "edad": true,
    "casada":true,
    "noCuenta": null,
    apellidos: "Flores Magon",
    apellidos: "Hernadez",
};

let apellidos = "Fragoso"

// Obtener valores del objeto
//sintaxis: objeto.nombrepropiedad
//sintaxis: objeto["nombredelapropiedad"]
//sintaxis: propiedad dinámicas objeto[variable] nombre de la propiedad a buscar

//asignación de valores a propiedades
//sintaxis: objeto[nombredelaoperación] = nuevovalor

//agregar nuevas propiedades
//sintaxis: objeto[nombredelanuevapropiedad] = valor
//recorrer un objeto
//for (let propiedad in objeto) {}

//métodos especiales
//me va a regresar un arreglo de datos
//Object
//values
//sintaxis: Object().values(objeto)

//entries
//sintaxis: Object.entries(objeto)
//estructura: [key, value]

//Métodos
//son creados con un nombre y pueden almacenar solo un tipo de dato function
//El nombre de los métodos son únicas en el objeto
//sintaxis: nombremetodo: function() {}

//funcion anonima: una función normal pero al ser declarada no se le asigna un nombre

//POO Programación orientada a objetos
//Clase: Son modelos que contienen propiedadezs y métodos
//objetos: SON REPRESENTACIONES DE LAS CLASES

//Para que un objeto surja de una clase se requiere un proceso llamado instancia

//operador llamado new

//Pilares de la POO

//abstracción
//es el proceso de analizar y obtener las principales propiedades y acciones de algo de la vida real

//automovil
//propiedades
//color, número de llantas, marca, modelo, cilindros, transmisión, precio, tamaño, tracción

//acciones - metodos de la clase
//encender, apagar, acelerar, frenar, tocar el claxon, estacionarse

//encapsulamiento
//es la capacidad de contener toda la función y solo puede ser ejecutada o consumida por el objeto

//herencia
//es un proceso en el cual voy a poder transferir propiedades y metodos de una clase a otra

//polimorfismo
//es la capacidad de ejecutar de diversas maneras una acción

//funciones constructoras

//function Persona(nombre, edad, profesion)