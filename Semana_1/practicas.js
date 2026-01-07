// let nombre = prompt("¿Cuál es tu nombre?");
// let edad = parseInt(prompt("¿Cuál es tu edad?")); // Convertir a número
// let ciudad = prompt("¿Cuál es tu ciudad?");

// // Validación de mayoría de edad
// let mensajeEdad = (edad >= 18) ? "mayor de edad" : "menor de edad";

// alert(`Eres ${nombre}, tienes ${edad} años, eres ${mensajeEdad} y vives en ${ciudad}.`);


// let num = 15;
// let lasName = "henao"
// let lasName2 = "Santamaria"
// let num2 = 15;
// let num3 = 20;
// let isActivate = true

// if (isActivate == true) {
//     console.log("El usuario esta activo");
// } else {
//     console.log("Usuario desactivado ")
// }

/*************************************************************** */

// let num = 16;
// let lasName = "henao"
// let lasName2 = "Santamaria"
// let num2 = "15";
// let num3 = 20;
// let isActivate = true

// if ( num != num2) {
//     console.log("Si cumple la validacion");
// } else {
//     console.log("No cumple la validacion ")
// }



// result = num ** num3
// num ++

// console.log(result)
// console.log(num)

// num > num2 ? msn = "si cumple" : msn = "no cumple"
// console.log(msn)


/****************************************************************** */

// let result;

// const sumar = (num1, num2 = 5 ) =>{
//     console.log("esto sirve pa sumar")
//     return num1 + num2
// }

// result = sumar(100)
// console.log(sumar(200))

// console.log(``)


/******************************************************************** */

// (function () {
//     console.log(" se imprime la funcion autoejecutable")
// }()
// )

/********************************************************************* */

// let stateUser = "active";
// let msn;

// switch (stateUser) {
//     case "active":
//         msn = " el usuario puede ingresar"
//         break

//     case "noActive":
//         msn = "el usuario no puede ingresar"
//         break
//     case "deleted":
//         msn = "el usuario se retito"
//         console.log(2 + 2)
//         console.log(msn)
//         break
//     default:
//         msn = "el usuario no tiene estado"
//         break
// }

// console.log(msn)


/*********************************************************************** */


function calcularPromedio() {
    let suma = 0;
    let cantidadNotas = 5;
    let notaActual;

    for (let i = 1; i <= cantidadNotas; i++) {
        // Pedimos la nota al usuario
        let entrada = prompt("Introduce la nota número " + i + ":");

        // Validación: Convertimos a número
        notaActual = parseFloat(entrada);

        // Si no es un número o el campo está vacío, restamos 1 al índice para repetir la nota
        if (isNaN(notaActual)) {
            alert("Error: Debes ingresar un valor numérico válido.");
            i--;
            continue;
        }

        // Sumamos la nota válida
        suma += notaActual;
    }

    // Cálculo del promedio
    let promedio = suma / cantidadNotas;

    // Condicional de aprobación
    let mensaje = (promedio >= 3.0) ? "APROBADO" : "REPROBADO";

    // Mostrar resultado final
    alert("Tu promedio es: " + promedio.toFixed(2) + "\nEstado: " + mensaje);
}

// Llamamos a la función
calcularPromedio();
console.log(calcularPromedio)