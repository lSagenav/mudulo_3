// ==========================================
// CONFIGURACIÓN INICIAL
// ==========================================
const API_URL = 'http://localhost:3000/productos';
const listaUI = document.getElementById('listaProductos');
const nombreInput = document.getElementById('nombreProducto');
const precioInput = document.getElementById('precioProducto');
const btnGuardar = document.getElementById('btnGuardar');
const mensajeEstado = document.getElementById('mensajeEstado');

// Estado global de la aplicación
let productos = [];

// ==========================================
// FUNCIONES DE UTILIDAD (DOM & LOCAL STORAGE)
// ==========================================

// Configuración para moneda colombiana (COP) sin decimales
const formatoMoneda = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
});

// Función para mostrar mensajes dinámicos
const mostrarMensaje = (texto, esError = false) => {
    mensajeEstado.textContent = texto;
    mensajeEstado.className = esError ? 'error' : 'exito';
    mensajeEstado.style.display = 'block';
    setTimeout(() => { mensajeEstado.style.display = 'none'; }, 3000);
};

// Sincronizar con Local Storage (TASK 4)
const guardarEnLocalStorage = () => {
    localStorage.setItem('productos', JSON.stringify(productos));
};

// Renderizar elementos en el DOM (TASK 3)
const renderizarProductos = () => {
    listaUI.innerHTML = ''; // Limpiar lista
    productos.forEach(producto => {
        // Crear elementos
        const li = document.createElement('li');
        
        // AQUÍ ESTÁ EL CAMBIO: Usamos formatoMoneda.format()
        li.innerHTML = `
            <span><strong>${producto.nombre}</strong> - ${formatoMoneda.format(producto.precio)}</span>
            <div class="acciones">
                <button class="btn-editar" data-id="${producto.id}">✏️</button>
                <button class="btn-eliminar" data-id="${producto.id}">🗑️</button>
            </div>
        `;
        listaUI.appendChild(li);
    });
};
// ==========================================
// FETCH API - OPERACIONES CRUD (TASK 5)
// ==========================================

// 1. GET: Obtener productos del servidor
const obtenerProductos = async () => {
    try {
        const respuesta = await fetch(API_URL);
        if (!respuesta.ok) throw new Error('Error al conectar con API');
        
        const datos = await respuesta.json();
        productos = datos; // Actualizamos estado local
        
        guardarEnLocalStorage(); // Persistencia local
        renderizarProductos(); // Mostrar en DOM
        console.log("GET: Datos recibidos", productos);
    } catch (error) {
        console.error("Error GET:", error);
        mostrarMensaje("Usando datos locales (Offline)", true);
        // Fallback: Si falla la API, cargamos de Local Storage
        productos = JSON.parse(localStorage.getItem('productos')) || [];
        renderizarProductos();
    }
};

// 2. POST: Agregar nuevo producto
const agregarProducto = async (nombre, precio) => {
    try {
        const nuevoProducto = { nombre, precio }; // JSON Server crea el ID automático
        
        const respuesta = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevoProducto)
        });

        if (!respuesta.ok) throw new Error('Error al guardar');

        const productoGuardado = await respuesta.json();
        productos.push(productoGuardado); // Actualizamos array
        
        guardarEnLocalStorage();
        renderizarProductos();
        mostrarMensaje("Producto agregado correctamente");
    } catch (error) {
        console.error("Error POST:", error);
        mostrarMensaje("Error al guardar en el servidor", true);
    }
};

// 3. DELETE: Eliminar producto
const eliminarProducto = async (id) => {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        // Filtrar el array local para quitar el eliminado
        productos = productos.filter(p => p.id !== id); // Nota: JSON Server usa strings o nums ids
        
        guardarEnLocalStorage();
        renderizarProductos();
        mostrarMensaje("Producto eliminado");
    } catch (error) {
        console.error("Error DELETE:", error);
        mostrarMensaje("No se pudo eliminar", true);
    }
};

// 4. PUT: Editar producto (Simplificado con prompt para no complicar el UI)
const editarProducto = async (id) => {
    const productoActual = productos.find(p => p.id == id);
    const nuevoNombre = prompt("Nuevo nombre:", productoActual.nombre);
    const nuevoPrecio = prompt("Nuevo precio:", productoActual.precio);

    if (nuevoNombre && nuevoPrecio) {
        try {
            const respuesta = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nombre: nuevoNombre, precio: nuevoPrecio })
            });

            const dataActualizada = await respuesta.json();
            
            // Actualizamos el array local buscando el índice
            const index = productos.findIndex(p => p.id == id);
            productos[index] = dataActualizada;

            guardarEnLocalStorage();
            renderizarProductos();
            mostrarMensaje("Producto actualizado");
        } catch (error) {
            console.error("Error PUT:", error);
        }
    }
};

// ==========================================
// EVENTOS Y VALIDACIÓN (TASK 2)
// ==========================================

btnGuardar.addEventListener('click', () => {
    const nombre = nombreInput.value.trim();
    const precio = precioInput.value.trim();

    if (!nombre || !precio) {
        alert("Por favor completa todos los campos.");
        return;
    }

    agregarProducto(nombre, precio);
    nombreInput.value = '';
    precioInput.value = '';
});

// Delegación de eventos para botones dinámicos (Editar/Eliminar)
listaUI.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-eliminar')) {
        const id = e.target.dataset.id;
        if(confirm("¿Seguro que deseas eliminar?")) eliminarProducto(id);
    }
    
    if (e.target.classList.contains('btn-editar')) {
        const id = e.target.dataset.id;
        editarProducto(id);
    }
});

// Inicializar app
document.addEventListener('DOMContentLoaded', obtenerProductos);