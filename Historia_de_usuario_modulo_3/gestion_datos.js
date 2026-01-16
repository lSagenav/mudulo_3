// ==========================================
// CONFIGURACIÓN INICIAL
// ==========================================

// 1. Array principal para los productos
const productos = [];

// 2. Formateador para moneda (Puntos de miles: 45.000.000)
const formateadorDinero = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
});

// ==========================================
// TAREA 1, 3 y 5: CAPTURA MANUAL CON CATEGORÍA
// ==========================================

console.log("--- Iniciando captura dinámica de productos y categorías ---");

while (true) {
    let nombreP, precioP, categoriaP;

    // A. Validación de Nombre (TASK 5)
    while (true) {
        nombreP = prompt("Ingrese el nombre del producto:");
        const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        if (nombreP && soloLetras.test(nombreP)) break;
        alert("Error: El nombre solo puede contener letras.");
    }

    // B. Validación de Categoría (NUEVA MODIFICACIÓN MANUAL)
    while (true) {
        categoriaP = prompt(`¿A qué categoría pertenece '${nombreP}'? (Ej: Tecnología, Hogar, Alimentos):`);
        const soloLetrasCat = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        if (categoriaP && soloLetrasCat.test(categoriaP)) break;
        alert("Error: La categoría solo puede contener letras.");
    }

    // C. Validación de Precio (TASK 5)
    while (true) {
        let entradaPrecio = prompt(`Ingrese el precio para '${nombreP}':`);
        precioP = Number(entradaPrecio);
        if (entradaPrecio !== "" && !isNaN(precioP) && precioP > 0) break;
        alert("Error: Ingrese un precio numérico válido mayor a 0.");
    }

    // D. Guardar el objeto (TASK 1)
    // Agregamos la propiedad 'categoria' al objeto
    productos.push({
        id: productos.length + 101,
        nombre: nombreP,
        categoria: categoriaP,
        precio: precioP
    });

    // --- Control de continuación ---
    if (!confirm("¿Deseas agregar otro producto?")) break;
}

// ==========================================
// TAREA 2: USO DE SET (Nombres únicos)
// ==========================================
const nombresUnicos = new Set();
productos.forEach(p => nombresUnicos.add(p.nombre));

console.log("\n--- Tarea 2: Set de nombres únicos ---");
console.log(nombresUnicos);

// ==========================================
// TAREA 3: USO DE MAP (Asociación Manual)
// ==========================================
const categoriasMap = new Map();
productos.forEach(p => {
    // Ahora asociamos la categoría que el usuario ingresó manualmente
    categoriasMap.set(p.nombre, p.categoria);
});

// ==========================================
// TAREA 4: ITERACIÓN Y VISUALIZACIÓN FINAL
// ==========================================

console.log("\n--- Tarea 4: Resumen Final del Inventario ---");

// Creamos la tabla con los precios formateados ($ 45.000.000)
const productosParaTabla = productos.map(p => ({
    id: p.id,
    nombre: p.nombre,
    categoria: p.categoria, // Se muestra la categoría manual en la tabla
    precio: formateadorDinero.format(p.precio)
}));

console.table(productosParaTabla);

// 1. Iteración for...in (Propiedades del primer producto)
if (productos.length > 0) {
    console.log("\nPropiedades del primer producto registrado:");
    for (let propiedad in productos[0]) {
        console.log(`- ${propiedad}: ${productos[0][propiedad]}`);
    }
}

// 2. Iteración forEach sobre el Map (Relación manual)
console.log("\nRelación Producto -> Categoría (Ingresada por usuario):");
categoriasMap.forEach((cat, prod) => {
    console.log(`El producto [${prod}] fue clasificado en: ${cat}`);
});

alert("Inventario actualizado. Revisa la consola para ver los detalles.");