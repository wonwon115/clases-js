// propiedades de los objetos math

/* se puede acceder a algunas constantes matematicas a traves del obejto Math
como pueden ser el numero PI o las constantes de Euler */

console.log(Math.E)// resultado: 2.718281828459045
console.log(Math.PI)// resultado: 3.141592653589793
console.log(Math.SQRT2)// resultado: 1.4142135623730951
console.log(Math.SQRT1_2)// resultado: 0.7071067811865476
console.log(Math.LN2)// resultado: 0.6931471805599453
console.log(Math.LN10)// resultado: 2.302585092994046
console.log(Math.LOG2E)// resultado: 1.4426950408889634
console.log(Math.LOG10E)// resultado: 0.4342944819032518

// Métodos de redondeo
console.log(Math.round(4.7)); // 5 - Redondea al entero más cercano
console.log(Math.ceil(4.2)); // 5 - Redondea hacia arriba
console.log(Math.floor(4.7)); // 4 - Redondea hacia abajo
console.log(Math.trunc(4.7)); // 4 - Elimina la parte decimal

// Métodos para encontrar valores extremos
console.log(Math.max(5, 10, 15)); // 15 - Devuelve el número mayor
console.log(Math.min(5, 10, 15)); // 5 - Devuelve el número menor

// Potencias y raíces
console.log(Math.pow(2, 3)); // 8 - Eleva 2 a la potencia 3
console.log(Math.sqrt(16)); // 4 - Raíz cuadrada
console.log(Math.cbrt(27)); // 3 - Raíz cúbica

// Valor absoluto
console.log(Math.abs(-5)); // 5 - Valor absoluto

// Funciones trigonométricas (en radianes)
console.log(Math.sin(0)); // 0 - Seno
console.log(Math.cos(0)); // 1 - Coseno
console.log(Math.tan(0)); // 0 - Tangente
console.log(Math.asin(1)); // 1.5707... - Arcoseno
console.log(Math.acos(1)); // 0 - Arcocoseno
console.log(Math.atan(1)); // 0.7853... - Arcotangente
console.log(Math.atan2(1, 1)); // 0.7853... - Arcotangente de y/x

// Funciones logarítmicas
console.log(Math.log(Math.E)); // 1 - Logaritmo natural
console.log(Math.log10(100)); // 2 - Logaritmo en base 10
console.log(Math.log2(8)); // 3 - Logaritmo en base 2

// Funciones exponenciales
console.log(Math.exp(1)); // 2.7182... - e elevado a la potencia x

// Funciones hiperbólicas
console.log(Math.sinh(0)); // 0 - Seno hiperbólico
console.log(Math.cosh(0)); // 1 - Coseno hiperbólico
console.log(Math.tanh(0)); // 0 - Tangente hiperbólica

// Números aleatorios
console.log(Math.random()); // Número aleatorio entre 0 (inclusive) y 1 (exclusive)
console.log (Math.random() * 10); // Número aleatorio entre 0 y 10
console.log (Math.random() * 50); // Número aleatorio entre 0 y 50
console.log (Math.random() * 10 + 20); // Número aleatorio entre 20 y 70
console.log(Math.floor(Math.random() * 10) + 1); // Número aleatorio entre 1 y 10 ambos incluidos

const generadorDeNumeros = () => {
    return Math.random() * 100;
};
const resultado = generadorDeNumeros();
console.log(resultado);


// Funciones de signo
console.log(Math.sign(-5)); // -1 - Devuelve el signo de un número
console.log(Math.sign(5)); // 1
console.log(Math.sign(0)); // 0

// Comprobar si un número es entero o finito
console.log(Number.isInteger(5)); // true
console.log(Number.isFinite(5)); // true
console.log(Number.isNaN(NaN)); // true

// Funciones para trabajar con bits
console.log(Math.clz32(1)); // 31 - Cuenta los ceros iniciales en la representación binaria de 32 bits
console.log(Math.imul(2, 3)); // 6 - Multiplicación de enteros de 32 bits
console.log(Math.fround(1.337)); // 1.3370000123977661 - Redondea a la precisión de punto flotante más cercana

// Función hiperbólica inversa
console.log(Math.asinh(1)); // 0.8813735870195429 - Arcoseno hiperbólico
console.log(Math.acosh(2)); // 1.3169578969248166 - Arcocoseno hiperbólico
console.log(Math.atanh(0.5)); // 0.5493061443340548 - Arcotangente hiperbólica

// Función para calcular hipotenusa
console.log(Math.hypot(3, 4)); // 5 - Calcula la raíz cuadrada de la suma de los cuadrados

const generadorDeContraseñas = (longitud) => {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i=0; i<longitud; i++){
        const indice = Math.random()* caracteres.length;
    }

};
generadorDeContraseñas(10);