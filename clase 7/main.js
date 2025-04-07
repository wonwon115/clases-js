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