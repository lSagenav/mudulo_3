// ==========================================
// HISTORIA DE USUARIO SEMANA 3
// Gestión del DOM y Local Storage
// ==========================================

// TASK 2: Selección de elementos
const inputNota = document.getElementById("inputNota");
const btnAgregar = document.querySelector("#btnAgregar");
const listaNotasUI = document.querySelector("#listaNotas");

console.log("DOM Cargado:", { inputNota, btnAgregar, listaNotasUI });

// TASK 5: Persistencia (Cargar datos)
let notas = JSON.parse(localStorage.getItem("notas")) || [];
console.log(`Se cargaron ${notas.length} notas del Local Storage.`);

const guardarEnStorage = () => {
    localStorage.setItem("notas", JSON.stringify(notas));
};

// TASK 3 & 4: Renderizado y Eliminación
const renderizarNotas = () => {
    listaNotasUI.innerHTML = ""; // Limpiar lista visual

    notas.forEach((textoNota, index) => {
        const li = document.createElement("li");
        li.textContent = textoNota;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        
        // Evento Eliminar
        btnEliminar.onclick = () => {
            notas.splice(index, 1);
            guardarEnStorage();
            renderizarNotas();
            console.log("Nota eliminada.");
        };

        li.appendChild(btnEliminar);
        listaNotasUI.appendChild(li);
    });
};

// Evento Agregar
btnAgregar.addEventListener("click", () => {
    const texto = inputNota.value.trim();

    if (texto === "") {
        alert("Por favor, escribe una nota válida.");
        return;
    }

    notas.push(texto);
    guardarEnStorage();
    renderizarNotas();
    
    console.log("Nota agregada:", texto);
    inputNota.value = "";
    inputNota.focus();
});

// Inicializar
renderizarNotas();