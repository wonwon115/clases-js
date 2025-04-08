// filtrar números menores que 100

let numeros = [12,200,3300,40,55,12,30,400]

//programacion imperactiva -> el como
// el parcecido a como piensa una computadora

function filtrarMenoresQue100(){
    const menoresQue100 = [];

    for (let i=0; i<numeros.length; i++){
        if (numeros[i] < 100) {
            menoresQue100.push(numeros[i]);
        }
    }
    console.log(menoresQue100);
}
filtrarMenoresQue100(numeros);

//programacion declarativa
// se consentra en el que lo que tengo que hacer y es mucho mas parecido al leguaje humano
// esto tambien esta basado en el calculo lambda.

const menoresQue100 = numeros.filter(numero => numero < 100);
console.log(menoresQue100);