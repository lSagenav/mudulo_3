// ==========================================
// TASK 2: SELECCIÓN DE ELEMENTOS
// ==========================================
// Usamos getElementById para el ID único y querySelector para demostrar ambos métodos
const inputNota = document.getElementById("inputNota");
const btnAgregar = document.querySelector("#btnAgregar");
const listaNotasUI = document.getElementById("listaNotas");

console.log("Referencias cargadas:", { inputNota, btnAgregar, listaNotasUI });

// ==========================================
// TASK 5: PERSISTENCIA (LOCAL STORAGE)
// ==========================================
// Intentamos traer notas guardadas. Si no hay, empezamos con un arreglo vacío []
let notas = JSON.parse(localStorage.getItem("notas")) || [];
console.log(`Se cargaron ${notas.length} notas desde Local Storage.`);

// Función para guardar el arreglo actual en el almacenamiento del navegador
const guardarEnStorage = () => {
    localStorage.setItem("notas", JSON.stringify(notas));
};

// ==========================================
// TASK 3 & 4: AGREGAR Y ELIMINAR DEL DOM
// ==========================================

// Esta función "dibuja" la lista en el HTML
const renderizarNotas = () => {
    // Limpiamos la lista visual antes de volver a dibujarla
    listaNotasUI.innerHTML = "";

    notas.forEach((textoNota, index) => {
        // Creamos el elemento <li> (la fila de la nota)
        const li = document.createElement("li");
        li.textContent = textoNota;

        // Creamos el botón eliminar para esa nota específica
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        
        // Al hacer click en eliminar, filtramos el arreglo y guardamos
        btnEliminar.onclick = () => {
            notas.splice(index, 1); // Quitamos la nota del arreglo por su posición
            guardarEnStorage();     // Guardamos el cambio
            renderizarNotas();      // Volvemos a dibujar la lista
            console.log("Nota eliminada del sistema.");
        };

        li.appendChild(btnEliminar); // Metemos el botón dentro del <li>
        listaNotasUI.appendChild(li); // Metemos el <li> dentro de la <ul>
    });
};

// Evento principal para el botón "Agregar"
btnAgregar.addEventListener("click", () => {
    const texto = inputNota.value.trim(); // .trim() quita espacios vacíos al inicio/final

    if (texto === "") {
        alert("¡Error! La nota no puede estar vacía.");
        return; // Salimos de la función si está vacío
    }

    notas.push(texto);      // Agregamos al arreglo de memoria
    guardarEnStorage();     // Sincronizamos con Local Storage
    renderizarNotas();      // Actualizamos la pantalla
    
    inputNota.value = "";   // Limpiamos el campo
    inputNota.focus();      // Devolvemos el cursor al campo
    console.log("Nota agregada con éxito.");
});

// Al cargar el archivo por primera vez, dibujamos lo que recuperamos del Storage
renderizarNotas();