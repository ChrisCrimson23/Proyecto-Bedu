class Persona {

    //es el primero metodo en ser ejecutado
    //puede o no recibir parámetros
    constructor(edad, altura, nombre, curp, nacionalidad) {
        this.edad = edad;
        this.altura = altura;
        this.nombre = nombre;
        this.curp = curp;
        this.nacionalidad = nacionalidad;
    }

//puede o no recibir parametros
    presentarse() {
        console.log("Hola mi nombre es: ", this.nombre)
    }

    identificate() {
        return this.curp;
    }

    sumar(numero1, numero2) {
        return numero1 + numero2;
    }
}

class Calculadora {
    constructor(num1, num2) {
      this.num1 = num1;
      this.num2 = num2;
    }
  
    suma() {
      return this.num1 + this.num2;
    }
  
    resta() {
      return this.num1 - this.num2;
    }
  
    multiplicacion() {
      return this.num1 * this.num2;
    }
  
    division() {
      if (this.num2 !== 0 && this.num1 !==0) {
        return this.num1 / this.num2;
      } else {
        throw new Error("No se puede dividir entre cero, Duh.");
      }
    }
  }

