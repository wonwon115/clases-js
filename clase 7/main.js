/*
abstraccion
empecemos por analizar el siguiente codigo en javascript. se declara una variable
que a traves de un iterador, va acumulando la suma del contador
*/
let total = 0;
for (let i = 1; i <= 10; i++){
    total +=i;
}
console.log(total); //55

//ahora lo presentamos resumido en unna funcion, y ocupa solo una linea de codigo
function sumar(numero){
    let total = 0;
    for (let i = 1; i <= numero; i++){
        total +=i;
    }
    return total;
}
console.log(sumar(10)); //55
/*
el segundo caso es lo que denominamos una abstraccio. reducimos el codigo a una
funcion que hace una tarea especifica, en este caso sumar numeros.
las abstracciones oculan detalles sobre la operacion a resolver y nos permite 
"hablar" sobre los problemas en un nivel mas alto (o mayor grado de abstraccion)
*/
// funciones de orden superior o funciones de alto orden
// funciones que pueden recibir otras funciones como argumentos o retornar funciones como resultado

function porCadaUno(numeros, fn){
    for (const num of numeros){
        fn(num);
    }
};
const numero =[1,2,3,4,5];

porCadaUno(numero, console.log);

/* metodos de busqueda y transformacion */

//FOR EACH metodo de busqueda
const repuestos =["eje", "llantas","plato","manija"]

repuestos.forEach(function (repuesto){
    console.log(repuesto);

});
repuestos.forEach((element) => {
    console.log(element);
});

//metodo filter filtra elementos de un array

const cursos = [
    {nombre: "javascrpit", precio: 300},
    {nombre: "python", precio: 200},
    {nombre: "c++", precio: 400},
    {nombre: "c#", precio: 500},
]
const resultado = cursos.filter(curso => curso.precio <= 300);
const resultado2 = cursos.filter(curso => curso.nombre === "c++");
console.log(resultado);
console.log(resultado2);

/* metodo some 
es un metodo de busqueda que devuelve true o false dependiendo si algun elemento del array cumple con
la condicion especificada en la funcion
*/

console.log( cursos.some(curso => curso.nombre === "c++"))
console.log( cursos.some(curso => curso.nombre === "javascrpit"))
console.log( cursos.some(curso => curso.nombre === "desarrollo web"))

/* metodo map 
este metodo transforma cada elemento del array en un nuevo valor, creando un nuevo array con los valores 
previamente establecidos
*/

const numeros =[1,2,3,4,5];
const numerosDuplicados =numeros.map(numero => numero * 2);
console.log(numerosDuplicados);

const paises = ["argentina", "brasil", "chile", "peru"];

/* 
Ejercicio: Array de productos de indumentaria con aplicación de IVA
Creamos un array con diferentes productos de indumentaria y usamos map para agregarles el IVA
*/

// Array de productos de indumentaria
const productosIndumentaria = [
    {codigo: "CAM001", nombre: "Camisa formal", precio: 5000, stock: 20},
    {codigo: "PAN002", nombre: "Pantalón de vestir", precio: 7500, stock: 15},
    {codigo: "REM003", nombre: "Remera básica", precio: 2500, stock: 30},
    {codigo: "ZAP004", nombre: "Zapatos de cuero", precio: 12000, stock: 10},
    {codigo: "CAM005", nombre: "Campera de invierno", precio: 15000, stock: 8},
    {codigo: "BUZ006", nombre: "Buzo con capucha", precio: 6000, stock: 12}
];

// Aplicamos el método map para agregar el IVA (21%) a cada producto
const productosConIVA = productosIndumentaria.map(producto => {
    return {
        ...producto,
        precio: producto.precio * 1.21 * 1.85
    };
});
console.log(productosConIVA);

const ingresoDeStock = productosIndumentaria.map(producto => {
    return {
        ...producto,
        stock: producto.stock + 10
    }

})
console.log(ingresoDeStock);


/* 
REDUCE 

*/
const valores = [1,2,3,4,5];

const reductor = numero.reduce((acumulador, numero) => acumulador + numero, 0 );
console.log(reductor); //15

// ejemplo de carrito de compras usando el metodo REDUCE
const carrito =[
    {nombre: "camisa", precio: 5000, cantidad: 4},
    {nombre: "pantalon", precio: 7500, cantidad: 2},
    {nombre: "remera", precio: 2500, cantidad: 3},
    {nombre: "zapatos", precio: 12000, cantidad: 1},
]
const cantidadTtotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);
console.log(cantidadTtotal);

const precioTotal = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0 );
console.log(precioTotal);

// SORT

const numeros2 = [5,2,8,1,9];

//orden ascendente
numeros2.sort((a,b) => a - b);
console.log(numeros2);

//orden descendente
numeros2.sort((a,b) => b - a);
console.log(numeros2);

const pokemons = [
    {nombre: "pikachu", tipo: "electrico", pokedex: 25},
    {nombre: "charmander", tipo: "fuego", pokedex: 3},
    {nombre: "bulbasaur", tipo: "planta", pokedex: 1},
    {nombre: "squirtle", tipo: "agua", pokedex: 7},
]
const ordenarPokedex = pokemons.sort((a,b) =>{
    if (a.pokedex > b.pokedex){
        return 1;
    }
    if (a.pokedex < b.pokedex){
        return -1;
    }
    return 0;
})
const ordenarPokedex2 = pokemons.sort((a,b) => a.pokedex - b.pokedex);

console.log(ordenarPokedex);
console.log(ordenarPokedex2);