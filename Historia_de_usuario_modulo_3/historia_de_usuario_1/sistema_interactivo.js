// ==========================================
// HISTORIA DE USUARIO SEMANA 1
// Sistema Interactivo de Mensajes
// ==========================================

// TASK 1: Configuración inicial
console.log("Iniciando sistema interactivo...");

// TASK 2: Entrada de datos (usamos un ciclo para asegurar datos válidos)
while (true) {
    let nombre = prompt("Por favor, ingresa tu nombre:");
    
    // Validación: El nombre no debe estar vacío ni tener números
    if (!nombre || !/^[a-zA-Z\s]+$/.test(nombre)) {
        console.error("Error: El nombre no es válido (solo letras).");
        alert("Por favor ingresa un nombre válido (solo letras).");
        continue; // Reinicia el ciclo
    }

    let entradaEdad = prompt("Por favor, ingresa tu edad:");
    let edad = parseInt(entradaEdad);

    // TASK 3: Validación de la edad
    if (isNaN(edad) || edad <= 0) {
        console.error("Error: La edad ingresada no es un número válido.");
        alert("Debes ingresar una edad numérica válida.");
        continue; // Reinicia el ciclo
    }

    // TASK 4: Condicionales y mensajes dinámicos
    if (edad < 18) {
        let mensaje = `Hola ${nombre}, tienes ${edad} años. Eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`;
        console.log(mensaje);
        alert(mensaje);
    } else {
        let mensaje = `Hola ${nombre}, tienes ${edad} años. Eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
        console.log(mensaje);
        alert(mensaje);
    }

    // Rompemos el ciclo si todo salió bien
    break;
}