class Alumno extends Persona{
    
    constructor(edad, altura, nombre, grupo, grado, altura, curp, nacionalidad) {
        //new Persona();
        super(edad, altura, nombre, curp, nacionalidad);
        this.grupo = grupo;
        this.grado = grado;
    }
    presentarse() {
        console.log("mi nombre es: ", this.nombre);
    }

    entregarTarea(realizo) {
        if(realizo) {
            console.log("Excelente");
        } else {
            console.log("Mal");
        }
    }
}