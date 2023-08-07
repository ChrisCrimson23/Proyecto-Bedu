//Estructuras de datos
//datos
//una lista de elementos ordenados
//Su principal característica es el uso de índices comenzado con el 0
//llegando a tener n número de elementos
//se posicionan de acuerdo a como vayan siendo ingresados al arreglo

//Sintaxis: les arreglo = [] // esta es la más común
//Sintaxis: let arreglo = new Array(número de elementos);

//Ejemplo:
//Guardar la lista de nombres de alumnos

//Posicionamiento 0, 1, 2, 3, 4, 5
//último elemento n-1, donde n es el total de elementos
//n=6
let alumnos = ["Pedro", "Alex", "Christopher", "Ivan", "Adrian", "Enrique"];

//obtengamos el total de elementos
//length: longitud del arreglo
//sintaxis: arreglo.legth

//valor de posiciones
//[]
//sintaxis: arreglo[posición]

arreglo [5] //Enrique
arreglo [0] //Pedro
arreglo [6] //undefined

//fijar valores a posiciones
//[] =
//sintaxis: arreglo[índice] = nuevo valor

alumnos[3] = "Germán";

//valor de posiciones en string
//[]
//sintaxis: arreglo[posición]
let nombre = "Jesús";
//012345
"Jesús" // 5
nombre[2] // "s"

nombre = "J es us";
//0123456
"J es us" // 7
nombre[2] // "e"
//método split
//sintaxis: string.split(caracter de patrón de corte)

//ejemplo:
const cadena = "anita lavo la tina sin necesidad de mojarse"
const nuevoArreglo = cadena.split(",")
// ["anita lavó la tina", "sin necesidad de mojarse"]

//método push
//método de los arreglos que me permite agregar más elementos a mi arreglo original
//sintaxis: arreglo.push(valor)

//ejemplo:

//forEach
//método de los arreglos que nos permite iterar los elementos de arreglo original
//sintaxis: arreglo.forEach()

alumnos.forEach(function(elemento, índice, array) {
    console.log(elemento, índice, array);
});

//for(iniciador, finalizador, iterador)
for (let i = 0; i <= (alumnos.legth - 1); i++) {
    console.log(alumnos[i], i, )
}

let totalinvitados = 0
const pregunta=prompt("Excelente día, a continuanción registre su nombre para asistir al evento")
function registrarinvitados(invitados) {
    const númerodeinvitados = invitados.split(",").length;
    totalinvitadosinvitados += númerodeinvitados;
    console.log('Registrados {númerodeinvitados} invitados. Total: {totalinvitados} personas');
}

function obtenertotaldeinvitados() {
    console.log('El total de invitados al evento es de: {totalinvitados} personas.');
}

numeros.push(3,4,5)