/* let repetir = true;
while (repetir) {
    console.log("dentro del while")
    repetir = confirm ("¿desea seguir en el bucle?");
}; */

/* let entrada = prompt ("introduce un numero");

while (entrada != "ESC") {
    alert ("el dato ingresado es: " + entrada);
    entrada = prompt ("cualquiera que lea esto se la come ");
}; */

/* let repetir = false;
do {
    console.log("Solo una ves");
}while (repetir); */

// ejemplo 1 

/* let userEmail = "";
let confirmUserEmail = "";
let askAgain = true;
do {
    userEmail = prompt("introduce tu email");
    confirmUserEmail = prompt("confirma tu email");
    if (userEmail == confirmUserEmail) {
        alert("El" + userEmail + "es correcto");
        askAgain = false;
    }else {
        alert("Los emails no coinciden")
    }
}while (askAgain) */

let entrada = prompt("introduce un numero");
while (entrada != "ESC") {
    switch (entrada) {
        case "ROCIO":
            alert("Hermosa sonrisa");
            break;
        case "MILI":
            alert("henormes tetas");
            break;
        case "SOFIA":
            alert("BUEN CULO");
            break;
    }
}