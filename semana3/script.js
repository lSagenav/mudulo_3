

// 1. Creamos un Array vacío para almacenar las tareas
const misTareas = [];

// 2. Capturamos los elementos del DOM
const input = document.getElementById("inputTarea");
const boton = document.getElementById("btn");
const listaUl = document.getElementById("listaTareas");

// 3. Evento del botón
boton.addEventListener("click", () => {
    const texto = input.value;

    if (texto === "") {
        alert("Escribe una tarea");
        return;
    }

    // --- PARTE 1: Actualizar la Interfaz (DOM) ---
    const li = document.createElement("li");
    li.textContent = texto;
    listaUl.appendChild(li);

    // --- PARTE 2: Actualizar la Consola ---
    // Agregamos la tarea al Array como un objeto
    misTareas.push({
        id: misTareas.length + 1,
        tarea: texto,
        fecha: new Date().toLocaleTimeString() // Hora en que se agregó
    });

    // Limpiamos la consola y mostramos la tabla actualizada
    console.clear();
    console.log("%c--- Lista de Tareas Actualizada ---", "color: blue; font-weight: bold;");
    console.table(misTareas);

    // Limpiamos el input
    input.value = "";
});