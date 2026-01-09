// --- VALIDACIÓN DEL NOMBRE (Solo letras) ---
let nombreUsuario = "";
// Expresión regular: Solo permite letras (mayúsculas, minúsculas, acentos y espacios)
const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

while (true) {
    nombreUsuario = prompt("Por favor, ingresa tu nombre (solo letras):");
    
    if (nombreUsuario !== null && soloLetras.test(nombreUsuario)) {
        break; // Sale del ciclo si el nombre es válido
    }
    console.error("Error: El nombre solo puede contener letras y no puede estar vacío.");
    alert(" Nombre no válido. Por favor, usa solo letras.");
}

// --- VALIDACIÓN DE LA EDAD (Solo números positivos) ---
let edadEntrada = "";
let edadUsuario;

while (true) {
    edadEntrada = prompt("Por favor, ingresa tu edad (solo números):");
    edadUsuario = Number(edadEntrada);

    // Validamos que sea un número, que no esté vacío y que sea mayor a 0
    if (edadEntrada !== "" && !isNaN(edadUsuario) && edadUsuario > 0) {
        break; // Sale del ciclo si la edad es un número válido
    }
    console.error("Error: La edad debe ser un número válido mayor a 0.");
    alert(" Edad no válida. Por favor, ingresa un número real.");
}

// ==========================================
// TASK 4: Mensajes Dinámicos
// ==========================================

if (edadUsuario < 18) {
    const mensaje = `Hola ${nombreUsuario}, eres menor de edad. ¡Sigue aprendiendo!`;
    alert(mensaje);
    console.log(mensaje);
} else {
    const mensaje = `Hola ${nombreUsuario}, eres mayor de edad. ¡Prepárate para grandes retos!`;
    alert(mensaje);
    console.log(mensaje);
}