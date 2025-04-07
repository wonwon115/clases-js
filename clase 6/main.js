// que es un array en js?
// es un objeto que contiene una lista de elementos ordenados
// los elementos pueden ser de cualquier tipo

/* const array1 = [1, 2, 3, 4, 5];
const array2 = ["c1","c2","c3"]
const array3 = [1, "hola", true, null, undefined, {nombre: "Juan", edad: 30}, [1,2,3]];

console.log(array1);
console.log(array2);
console.log(array3);

// Accediendo a elementos del array usando índice
console.log(array1[0]); // salida: 1
console.log(array1[1]); // salida: 2
console.log(array1[2]); // salida: 3

// Usando el método array.at() (forma moderna)
console.log(array1.at(0)); // salida: 1
console.log(array1.at(-1)); // salida: 5 (último elemento)

let resultado = numero[2] + nuermo[3];
console.log(resultado);

const paises = ["0254", "0658", "0568"]; */

/* const numeros = [1,2,3,4,5,6,7,8,9,10];

console.log(numeros[0]);
console.log(multi); // Output: 5


let sum = numeros[0] + numeros[1];
let multi = numeros[4] * numeros[9];

console.log(multi); // Output: 5
console.log(sum); // Output: 3
 */

/* const numeros = [1,2,3,4,5,6,7,8,9,10];

for (let i=0; i<6; i++) {
    console.log(numeros[i]);
}

// propiedad length
console.log(numeros.length); // Output: 10

// recorrer un array con un for
for (let i=0; i < numeros.length; i++) {
    console.log(numeros[i]);
} */
// length es una propiedad de los arrays que devuelve la cantidad de elementos que contiene el array.

// agregar elemenos a un array usando el metodo push


/* const myArray = ["rocio", "sofia", "milagros"];
// agregar un elemento al final del array
myArray.push("Karen");



console.log(myArray.length); // Output: 4
console.log(myArray); // Output: ["rocio", "sofia", "milagros", "Karen"] 
//agregar un elemento al inicio del array
myArray.unshift("Sol");
console.log(myArray); // Output: ["Sol", "rocio", "sofia", "milagros", "Karen"]

myArray.shift(); */

/* POP Y shift
Son metodos de los arrays que permiten eliminar el último o el primer elemento del array, respectivamente.
Estos métodos modifican el array original y devuelven el elemento eliminado.
*/
const myArray = ["Sol", "rocio", "sofia", "milagros", "Karen"];
myArray.pop();
console.log(myArray); // Output: ["Sol", "rocio", "sofia", "milagros"]

myArray.shift();
console.log(myArray); // Output: ["rocio", "sofia", "milagros"]

/*
splice
Es un método de los arrays que permite eliminar elementos especificos de un array y/o reemplazarlos por nuevos elementos.
*/

const paises = ["Argentina", "Brasil", "Chile", "Colombia", "Ecuador", "Peru"];

// Eliminar elementos
/* paises.splice(2, 3); // Elimina 3 elementos a partir del índice 2   
paises.splice(1, 1); // Elimina 1 elemento a partir del índice 1
paises.splice(0, 2); // Elimina 2 elementos a partir del índice 0 */
paises.splice(3, 1); // Elimina 1 elemento a partir del índice 3
console.log(paises); // Output: ["Argentina", "Chile", "Ecuador", "Peru"]

// Reemplazar elementos
paises.splice(1, 1, "Uruguay", "Paraguay"); // Reemplaza 1 elemento a partir del índice 1 con "Uruguay" y "Paraguay"
console.log(paises); // Output: ["Argentina", "Uruguay", "Paraguay", "Ecuador", "Peru"]

// Agregar elementos
paises.splice(2, 0, "Bolivia", "Venezuela"); // Agrega "Bolivia" y "Venezuela" a partir del índice 2 sin eliminar elementos
console.log(paises); // Output: ["Argentina", "Uruguay", "Bolivia", "Venezuela", "Paraguay", "Ecuador", "Peru"] 

//metodo join
/*
este metodo convierte un array en una cadena de texto,
 separando cada elemento del array con el separador que le indiquemos.
 El método`join()` que vemos en la línea 110-112 nos puede servir para convertir un array en una cadena de texto, 
 uniendo todos los elementos con el separador que especifiquemos. Esto es útil en muchos escenarios como:

1. Mostrar listas de elementos en una interfaz de usuario de forma legible
2. Crear cadenas CSV para exportar datos
3. Construir URLs con parámetros
4. Generar mensajes o textos a partir de colecciones de datos
5. Formatear datos para enviarlos a una API o almacenarlos en una base de datos
*/
const myArray2 = ["Sol", "rocio", "sofia", "milagros", "Karen"];
const myString = myArray2.join(", ");
console.log(myString); // Output: "Sol, rocio, sofia, milagros, Karen"

/*
metodo concat
El método`concat()` en JavaScript se utiliza para combinar dos o más arrays, 
creando un nuevo array sin modificar los originales. Sus características principales son:

1. Devuelve un nuevo array que contiene todos los elementos de los arrays originales en el orden en que se proporcionaron.
2. No modifica los arrays originales (a diferencia de métodos como push o splice).
3. Puede recibir múltiples argumentos, tanto arrays como valores individuales.
*/
const gatos = ["orejona", "pelota", "yuliana", "mochila"];
const perros = ["sony", "cody", "angueto", "bruce"];

perros.push("Raton");

const mascotas = gatos.concat(perros);

console.log(gatos);
console.log(perros);
console.log(mascotas); 

//metodo indexOf
/*
El método`indexOf()` en JavaScript se utiliza para buscar el índice de la primera aparición de un elemento en un array.
*/
const chicas = ["Sol", "rocio", "sofia", "milagros", "Karen"];

console.log(chicas.indexOf("rocio")); // Output: 1
console.log(chicas.indexOf("sofia")); // Output: 2
console.log(chicas.indexOf("milagros")); // Output: 3
console.log(chicas.indexOf("Karen")); // Output: 4

/* metodo includes

El método`includes()` en JavaScript se utiliza para verificar si un array contiene un elemento específico.
Devuelve true si el elemento está presente en el array, y false en caso contrar io.
 */
const chicas2 = ["Sol", "rocio", "sofia", "milagros", "Karen"];

console.log(chicas2.includes("rocio")); // Output: true
console.log(chicas2.includes("sofia")); // Output: true
console.log(chicas2.includes("milagros")); // Output: true
console.log(chicas2.includes("agus")); // Output: false

/* como eliminar el nombre de un array usando el metodo splice
 */

const usuarios = ["wonwon115","mrdogo115","zalachenco","elpolloal","jasonmostacho"]

const eliminarUsuario = (nombreUsuario) => {
    let index = usuarios.indexOf(nombreUsuario);
    
    if (index !== -1) {
        usuarios.splice(index, 1);

    }
};
eliminarUsuario("zalachenco");
console.log(usuarios);

//array + objetos 

const productos = [
    {id: 1, nombre: "camisa", precio: 100},
    {id: 2, nombre: "pantalon", precio: 200},
    {id: 3, nombre: "zapatos", precio: 300},
    {id: 4, nombre: "gorra", precio: 400},
]
for (const producto of productos) {
    console.log(producto);
}

class Indumentaria {
    constructor(codigo, nombre, precio, stock) {
        this.codigo = String(codigo);
        this.nombre = String(nombre);
        this.precio = Number(precio);
        this.stock = Number(stock);    
    }
    sumarImporte(){
        this.precioBase = this.precioBase * 1.21 * 1.85; // Calculamos sobre el valor numérico
    }
}
const producto = [];

const producto1 = new Indumentaria("13589k", " CAMARA 29 x 1.95 VALVULA AUTO - KYOWA ",  3.256 , 56);
console.log(producto1); // Muestra el producto con precio inicial

