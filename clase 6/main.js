// abstraccción de datos 
/* empecemos por analizar el siguiente codigo.
se declara una variable que a traves de un iterador, va a acumulando 
la sua del contador
*/ 

let total = 0;
for (let i =1; i<=10; i++){
    total += i;
}
console.log(total);//55

/* ahora lo presentamos resumido en una funcion y ocupa solo una linea de codigo */
/* console.log( sumarRango(1, 10) );//55 */