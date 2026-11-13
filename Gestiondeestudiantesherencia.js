// Clase base: Estudiante
class Estudiante {

    // Constructor con los atributos principales
    constructor(nombre, edad, matricula) {
        this.nombre = nombre;
        this.edad = edad;
        this.matricula = matricula;
    }

    // Método para mostrar los datos del estudiante
    mostrarDatos() {
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + this.edad);
        console.log("Matrícula: " + this.matricula);
        console.log("----------------------");
    }

    // Método para actualizar la edad
    actualizarEdad(nuevaEdad) {
        this.edad = nuevaEdad;
        console.log("Edad actualizada correctamente.");
    }
}

// Clase derivada: EstudiantePresencial
// Hereda los atributos y métodos de Estudiante
class EstudiantePresencial extends Estudiante {

    constructor(nombre, edad, matricula, salon) {
        super(nombre, edad, matricula);
        this.salon = salon;
    }

    // Método exclusivo de la clase presencial
    mostrarSalon() {
        console.log("Salón: " + this.salon);
    }

    // Sobrescritura del método mostrarDatos
    mostrarDatos() {
        super.mostrarDatos();
        console.log("Tipo: Estudiante presencial");
        console.log("Salón: " + this.salon);
        console.log("----------------------");
    }
}

// Clase derivada: EstudianteEnLinea
// También hereda de la clase Estudiante
class EstudianteEnLinea extends Estudiante {

    constructor(nombre, edad, matricula, plataforma) {
        super(nombre, edad, matricula);
        this.plataforma = plataforma;
    }

    // Método exclusivo del estudiante en línea
    mostrarPlataforma() {
        console.log("Plataforma: " + this.plataforma);
    }

    // Sobrescritura del método mostrarDatos
    mostrarDatos() {
        super.mostrarDatos();
        console.log("Tipo: Estudiante en línea");
        console.log("Plataforma: " + this.plataforma);
        console.log("----------------------");
    }
}

// PROGRAMA PRINCIPAL

// Crear objetos de las clases derivadas
const estudiante1 = new EstudiantePresencial(
    "Carlos", 18, "A001", "Aula 101"
);

const estudiante2 = new EstudianteEnLinea(
    "Maria", 20, "A002", "Moodle"
);

const estudiante3 = new EstudiantePresencial(
    "Juan", 19, "A003", "Aula 202"
);

// Mostrar información de los estudiantes
console.log("LISTA DE ESTUDIANTES");

estudiante1.mostrarDatos();
estudiante2.mostrarDatos();
estudiante3.mostrarDatos();

// Actualizar la edad de un estudiante
console.log("ACTUALIZACIÓN DE EDAD");

estudiante1.actualizarEdad(19);

// Mostrar información actualizada
console.log("DATOS ACTUALIZADOS");
estudiante1.mostrarDatos();

// Utilizar métodos exclusivos
console.log("MÉTODOS EXCLUSIVOS");

estudiante2.mostrarPlataforma();
estudiante1.mostrarSalon();