/* // funciones 

let resultdo = 0;

function sumarNumeros (numero1, numero2){
    resultado = numero1 + numero2;
};

let num1 = Number(prompt("ingrese un numero"));
let num2 = Number(prompt("ingrese otro numero"));       

sumarNumeros(num1, num2);
console.log(resultado); */

/* function sumarNumeros (numero1, numero2){
    return numero1 + numero2;
};
let resultado = sumarNumeros(2, 3);
console.log(resultado); */

/* function calculadora(num1, num2, operacion){
    switch(operacion){
        case"+":
            return num1 + num2;
        case"-":x
            return num1 - num2;
        case"*":
            return num1 * num2;
        case"/":
            return num1 / num2;
        default:
            return 0;
    }
}
let resultado = calculadora (2, 3, "+");
console.log(resultado); */
/* function sumarNumero(num1, num2){	
    let resultado = num1 + num2;
    console.log(resultado);

};
sumarNumero(2, 3);
 */


// ejemplo 2 

function explainVar(){
    var a =10;
    console.log(a);

    if (true){
        var a = 20;
        console.log(a);
    }

    console.log(a);  
}
explainVar();