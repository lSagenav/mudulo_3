// ==========================================
// HISTORIA DE USUARIO SEMANA 2
// Gestión de datos con Objetos, Sets y Maps (Entrada Manual)
// ==========================================

// Array para almacenar los productos ingresados por el usuario
const productos = [];

// TASK 1: Ingreso dinámico de productos
alert("--- INICIO DE GESTIÓN DE INVENTARIO ---\n Vamos a ingresar los productos manualmente.");

while (true) {
    // 1. Solicitamos el nombre
    let nombre = prompt("Ingresa el nombre del producto (o escribe 'salir' para terminar):");
    
    // Condición de salida
    if (nombre === null || nombre.toLowerCase() === 'salir' || nombre.trim() === "") {
        break;
    }

    // 2. Solicitamos el precio
    let precioInput = prompt(`Ingresa el precio para "${nombre}":`);
    let precio = parseFloat(precioInput);

    // Validación básica de precio
    while (isNaN(precio) || precio <= 0) {
        alert("Por favor, ingresa un precio numérico válido mayor a 0.");
        precioInput = prompt(`Ingresa el precio correcto para "${nombre}":`);
        precio = parseFloat(precioInput);
    }

    // 3. Solicitamos la categoría
    let categoria = prompt(`Ingresa la categoría para "${nombre}" (ej: Tecnología, Hogar, Ropa):`);
    while (!categoria || categoria.trim() === "") {
        categoria = prompt("La categoría es obligatoria. Intenta de nuevo:");
    }

    // TASK 1 (Continuación): Creación del objeto
    // Generamos un ID único simple basado en la cantidad actual
    const nuevoProducto = {
        id: productos.length + 1,
        nombre: nombre,
        precio: precio,
        categoria: categoria
    };

    // Guardamos en el array principal
    productos.push(nuevoProducto);
    console.log(`Producto agregado: ${nombre}`);
    
    // Preguntamos si quiere continuar (Opcional, ya que 'salir' funciona arriba)
    if (!confirm("¿Deseas agregar otro producto?")) {
        break;
    }
}

// Si no se ingresaron productos, detenemos el script
if (productos.length === 0) {
    console.warn("No se ingresaron productos. El análisis ha terminado.");
} else {
    console.log("--- Carga de datos finalizada. Iniciando análisis... ---");

    // TASK 5: Mostrar lista completa inicial (Validación visual)
    console.table(productos);

    // ==========================================
    // TASK 2: Uso de Set (Nombres Únicos)
    // ==========================================
    console.log("--- Análisis de Unicidad (Set) ---");
    const nombresUnicos = new Set();
    
    // Llenamos el Set con los nombres ingresados
    productos.forEach(p => nombresUnicos.add(p.nombre));

    // Si el usuario ingresó "Laptop" dos veces, el Set solo mostrará una.
    console.log(`Total de productos ingresados: ${productos.length}`);
    console.log(`Total de productos únicos (por nombre): ${nombresUnicos.size}`);
    
    // Recorrer el Set con for...of
    for (const nombre of nombresUnicos) {
        console.log(`Nombre único registrado: ${nombre}`);
    }

    // ==========================================
    // TASK 3: Uso de Map (Agrupación por Categoría)
    // ==========================================
    console.log("--- Clasificación por Categorías (Map) ---");
    const mapaCategorias = new Map();

    productos.forEach(prod => {
        // Si la categoría no existe en el mapa, inicializamos un array vacío
        if (!mapaCategorias.has(prod.categoria)) {
            mapaCategorias.set(prod.categoria, []);
        }
        // Agregamos el nombre del producto al array de esa categoría
        mapaCategorias.get(prod.categoria).push(prod.nombre);
    });

    // TASK 4: Iteración del Map con forEach
    mapaCategorias.forEach((listaNombres, categoria) => {
        console.log(`Categoría [${categoria}]: Contiene ${listaNombres.length} productos -> ${listaNombres.join(", ")}`);
    });

    // ==========================================
    // EXTRAS: Formato de Moneda
    // ==========================================
    const formatoMoneda = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' });
    
    console.log("--- Resumen de Inventario ---");
    // TASK 4 (Continuación): Iterar Objeto con for...in (Simulado sobre el array)
    productos.forEach(prod => {
        console.log(`ID: ${prod.id} | Producto: ${prod.nombre} | Precio: ${formatoMoneda.format(prod.precio)}`);
    });
}