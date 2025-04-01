/* const persona1 ={
    nombre: 'Agus',
    apellido: 'Zalazar',
    edad: 25,
}

persona1["nombre"] = "Florencia"

console.log(persona1.nombre)
console.log(persona1.apellido)
console.log(persona1["edad"]) */

/* function Persona (nombre, apellido, edad){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad

    this.hablar = function (){
        console.log("Hola, soy " + this.nombre)
    }
}
const persona1 = new Persona("Agus", "Zalazar", 25)
const persona2 = new Persona("Rocio", "Zalazar", 22)

persona1.hablar();
persona2.hablar(); */

/* const producto1 ={
    nombre: "Camara r29",
    marca:"Jiluer",
    precio: 7500,   
}
producto1["nombre"] = "Camara r29"

for (const propiedad in prodcuto1){
    console.log(propiedad);
} */

/* class persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    hablar(){
        console.log("Hola, soy " + this.nombre)
    }
}
const persona1 = new Persona("Agus", "Zalazar", 25)
const persona2 = new Persona("Rocio", "Zalazar", 22)

persona1.hablar();
persona2.hablar(); */

/* function Persona (nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;

    this.hablar = function (){
        console.log("Hola, soy " + this.nombre)
    }
}

const persona1 = new Persona ("Rocio", 22, "presidente castillo")
const persona2 = new Persona ("Flor", 19, "presidente castillo")

persona1.hablar();
persona2.hablar(); */

//operador in y for

/* const persona = {
    nombre: "Rocio",
    apellido: "Zalazar",
    edad: 22,
}
console.log("nombre" in persona);
console.log("origen" in persona);

for (const propiedad in persona){
    console.log(persona1[propiedad])
} */

/* const producto1 = {
    nombre: "Camara r29",
    marca: "Jiluer",
    precio: 7500,
}

// Acceder a la propiedad marca usando notación de punto
console.log(producto1.marca);

// Forma alternativa usando notación de corchetes
console.log(producto1["marca"]);

// También puedes verificar si las propiedades existen
console.log("marca" in producto1); // true

// Iterar a través de todas las propiedades
for (const propiedad in producto1) {
    if (propiedad === "marca") {
        console.log(producto1[propiedad]);
    }
} */

// ejemplo con clases constructoras

class Producto {
    constructor(nombre, marca, precio) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.vendido = false;
    }
    sumarIva(){
        this.precio = this.precio*1.21;
    }
    vender(){
        this.vendido = true;
    }
};

const producto1 = new Producto("Camara r29", "Jiluer", 7500);
const producto2 = new Producto("Cambio 10vel","lTWOO", 14000);
console.log(producto1);

producto1.sumarIva();
producto1.vender();

console.log(producto1);

producto2.sumarIva();
console.log(producto2);