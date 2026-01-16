// console.log("funciona")

// const numbers =[1,2,3,4,5,6,7,8,9]

// const doubles = numbers.map((num)=> num * 8 )

// console.log(doubles)

// numbers.forEach((number) => {
//     console.log(`el doble es ${number * 2}`)
// })


// /*********************************************************************** */

// const coders = [
//     { name: 'Edwin', cohort: 1},
//     { name: 'Pedro', cohort: 2},
//     { name: 'Felipe', cohort: 3},
// ]

// coders.forEach((coders) =>{
//     const message = `Hola ${coders.name} pertenece a  ${coders.cohort}`
//     console.log(message)
// })



// /********************************************************************** */




// const user = {
//     name: " kevin",
//     lastName: "Restrepo",
//     age: 19,
//     email: "kevin@correo.com",
//     addres: {
//         calle: " avenida siempre viva",
//         numero: "123",
//         city: "medellin",
//     }
// }   

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))


// const ArrayKeys = Object.values(user)
// console.log(ArrayKeys[2])


// let myMap = new Map();
// myMap.set('name', 'Antonio');
// myMap.set(123,'ID');

// console.log(myMap)



// /************************************************************************** */


// console.table(user)
// console.error("marca error")
// console.info("nose nada")

// /************************************************************************** */


// const name2 = " David henao "
// const upperCase = name2.toUpperCase()
// const lowerCase = name2.toLowerCase()
// const trim = name2.trim()


// console.log(upperCase)
// console.log(lowerCase)
// console.log(trim)



// /********************************************************************************** */
import { getDay, saludar, upperCase } from "./utils.js"

const button = document.getElementById('btn');
const pantalla = document.getElementById('pantalla'); // Seleccionamos el contenedor

button.addEventListener('click', () => {
    const ahora = new Date();

    // Lógica de descomposición
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const nombreDia = diasSemana[ahora.getDay()];
    const diaNum = ahora.getDate();
    const mes = ahora.getMonth() + 1;
    const anio = ahora.getFullYear();

    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');

    // 3. EN LUGAR DE CONSOLE.LOG, ESCRIBIMOS EN EL DOM
    const mensaje = `Hoy es ${nombreDia} ${diaNum}/${mes}/${anio} - ${horas}:${minutos}:${segundos}`;
    
    pantalla.textContent = mensaje; 
    
    // Opcional: Cambiar el color cada vez que se hace clic
    pantalla.style.color = "blue";

    saludar()
});


// /********************************************************************************** */

// const fullDate = new  Date

// console.log(fullDate)
// const dateString = fullDate.toString()
// const day = dateString.slice(0,3)
// const date = dateString.slice(4,15)
// const hour = dateString.slice(16,24)


// console.log(day)
// console.log(date)
// console.log(hour)




// /********************************************************************************** */


