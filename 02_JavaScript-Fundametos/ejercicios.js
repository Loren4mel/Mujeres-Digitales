// 🏗️ EJERCICIOS DE PROGRAMACIÓN ORIENTADA A OBJETOS
// ================================================
// Para ejecutar: node ejercicios-poo.js
// Resuelve cada ejercicio y ejecuta para ver los resultados

console.log("🏗️ EJERCICIOS DE POO - HERENCIA Y POLIMORFISMO");
console.log("=".repeat(55));

// =================================================================
// 📚 EJERCICIOS BÁSICOS
// =================================================================

console.log("\n📚 EJERCICIOS BÁSICOS");
console.log("-".repeat(30));

// EJERCICIO BÁSICO 1: Jerarquía de Figuras Geométricas
console.log("\n> Ejercicio 1: Sistema de Figuras Geométricas 📐");
console.log("Crea una jerarquía de figuras con cálculos matemáticos:");

// TODO: Completa la clase base Figura
class Figura {
  // Agrega propiedad: color
  // Agrega constructor que reciba color
  // Agrega método obtenerColor() que retorne el color
  // Agrega método cambiarColor(nuevoColor) que cambie el color
  // Agrega métodos calcularArea() y calcularPerimetro() que solo muestren mensaje de "debe implementarse"
}

// TODO: Completa la clase Rectangulo que herede de Figura
class Rectangulo extends Figura {
  // Agrega propiedades adicionales: ancho, alto
  // Agrega constructor que reciba color, ancho, alto
  // Implementa calcularArea() = ancho * alto
  // Implementa calcularPerimetro() = 2 * (ancho + alto)
}

// TODO: Completa la clase Circulo que herede de Figura
class Circulo extends Figura {
  // Agrega propiedad adicional: radio
  // Agrega constructor que reciba color, radio
  // Implementa calcularArea() = Math.PI * radio * radio
  // Implementa calcularPerimetro() = 2 * Math.PI * radio
}

// Pruebas del ejercicio 1
console.log("Pruebas de figuras geométricas:");
try {
  const rectangulo = new Rectangulo("rojo", 5, 3);
  const circulo = new Circulo("azul", 4);

  console.log(
    `   Rectángulo ${rectangulo.obtenerColor ? rectangulo.obtenerColor() : "sin color"}: Área = ${
      rectangulo.calcularArea ? rectangulo.calcularArea() : ">> Completa"
    }, Perímetro = ${rectangulo.calcularPerimetro ? rectangulo.calcularPerimetro() : ">> Completa"}`
  );
  console.log(
    `   Círculo ${circulo.obtenerColor ? circulo.obtenerColor() : "sin color"}: Área = ${
      circulo.calcularArea ? circulo.calcularArea().toFixed(2) : ">> Completa"
    }, Perímetro = ${
      circulo.calcularPerimetro ? circulo.calcularPerimetro().toFixed(2) : ">> Completa"
    }`
  );
} catch (error) {
  console.log("   >> Completa las clases para ver los resultados");
}

// EJERCICIO BÁSICO 2: Sistema de Cuentas Bancarias
console.log("\n> Ejercicio 2: Cuentas Bancarias con Herencia 💰");
console.log("Implementa diferentes tipos de cuentas bancarias:");

// TODO: Completa la clase base CuentaBanco
class CuentaBanco {
  // Agrega propiedades: titular, saldo
  // Agrega constructor que reciba titular, saldoInicial = 0
  // Agrega método depositar(cantidad) que agregue al saldo
  // Agrega método obtenerSaldo() que retorne el saldo
  // Agrega método obtenerInfo() que retorne info del titular y saldo
}

// TODO: Completa la clase CuentaAhorros que herede de CuentaBanco
class CuentaAhorros extends CuentaBanco {
  // Agrega propiedad adicional: tasaInteres
  // Agrega constructor que reciba titular, saldoInicial, tasaInteres
  // Agrega método calcularInteres() que calcule interés sobre el saldo
  // Sobrescribe obtenerInfo() para incluir la tasa de interés
}

// TODO: Completa la clase CuentaCorriente que herede de CuentaBanco
class CuentaCorriente extends CuentaBanco {
  // Agrega propiedad adicional: limiteSobregiro
  // Agrega constructor que reciba titular, saldoInicial, limiteSobregiro
  // Sobrescribe depositar() para validar que no exceda el límite
  // Agrega método retirar(cantidad) que valide sobregiro
}

// Pruebas del ejercicio 2
console.log("Pruebas de cuentas bancarias:");
try {
  const ahorros = new CuentaAhorros("María García", 1000, 0.05);
  const corriente = new CuentaCorriente("Juan Pérez", 500, 200);

  console.log(
    "   Cuenta de ahorros:",
    ahorros.obtenerInfo ? ahorros.obtenerInfo() : ">> Completa la clase"
  );
  console.log(
    "   Cuenta corriente:",
    corriente.obtenerInfo ? corriente.obtenerInfo() : ">> Completa la clase"
  );
} catch (error) {
  console.log("   >> Completa las clases para ver los resultados");
}

// =================================================================
// 🚀 EJERCICIOS AVANZADOS
// =================================================================

console.log("\n\n🚀 EJERCICIOS AVANZADOS");
console.log("-".repeat(30));

// EJERCICIO AVANZADO 1: Sistema de Empleados Completo
console.log("\n>> Ejercicio Avanzado 1: Gestión de Empleados 👥");
console.log("Crea un sistema completo de gestión de empleados:");

// Datos de ejemplo para el sistema
const departamentos = ["desarrollo", "diseño", "marketing", "ventas", "recursos humanos"];
const proyectos = [
  { nombre: "App Móvil", estado: "activo", desarrolladores: [] },
  { nombre: "Web Corporativa", estado: "completado", desarrolladores: [] },
  { nombre: "Sistema CRM", estado: "planificación", desarrolladores: [] },
];

// TODO: Implementa la clase base Empleado
class Empleado {
  // Propiedades: nombre, email, salarioBase, departamento, fechaIngreso
  // Constructor que reciba todos los parámetros
  // Método calcularSalario() que retorne salarioBase
  // Método obtenerInfo() que retorne información completa
  // Método calcularAntiguedad() que calcule años trabajados
  // Método trabajar() que retorne mensaje genérico
}

// TODO: Implementa la clase Desarrollador que herede de Empleado
class Desarrollador extends Empleado {
  // Propiedades adicionales: lenguajes[], proyectosCompletados, nivel ("junior", "semi-senior", "senior")
  // Constructor que reciba parámetros base + lenguajes, nivel
  // Sobrescribe calcularSalario() para agregar bono por nivel y proyectos
  // Método programar(lenguaje) que valide si conoce el lenguaje
  // Método completarProyecto() que incremente proyectosCompletados
  // Sobrescribe trabajar() con mensaje específico
}

// TODO: Implementa la clase Gerente que herede de Empleado
class Gerente extends Empleado {
  // Propiedades adicionales: equipoACargo[], bonoPorEmpleado
  // Constructor que reciba parámetros base + bonoPorEmpleado
  // Sobrescribe calcularSalario() para agregar bono por equipo
  // Método agregarEmpleado(empleado) que agregue al equipo
  // Método organizarReunion(tema) que retorne mensaje
  // Sobrescribe trabajar() con mensaje específico
}

// TODO: Implementa funciones auxiliares del sistema
function crearReporteEmpleado(empleado) {
  // Usa destructuring para extraer datos del empleado
  // Calcula salario total y antigüedad
  // Retorna objeto con reporte completo
}

function buscarEmpleadosPorDepartamento(empleados, departamento) {
  // Filtra empleados por departamento usando filter
  // Retorna array de empleados del departamento
}

function calcularNominaTotal(empleados) {
  // Usa reduce para sumar todos los salarios
  // Retorna total de nómina
}

function obtenerDesarrolladoresSenior(empleados) {
  // Filtra desarrolladores que sean "senior"
  // Usa instanceof y filter
}

// Datos de prueba
const empleadosEmpresa = [
  // Se crearán cuando completes las clases
];

// Pruebas del ejercicio avanzado 1
console.log("Sistema de empleados:");
try {
  // Crear empleados de prueba
  const dev1 = new Desarrollador(
    "Ana López",
    "ana@empresa.com",
    3000,
    "desarrollo",
    "2022-01-15",
    ["JavaScript", "Python"],
    "senior"
  );
  const gerente1 = new Gerente(
    "Carlos Ruiz",
    "carlos@empresa.com",
    5000,
    "desarrollo",
    "2020-03-10",
    200
  );

  console.log(
    "   Desarrollador:",
    dev1.obtenerInfo ? dev1.obtenerInfo() : ">> Completa la clase Desarrollador"
  );
  console.log(
    "   Gerente:",
    gerente1.obtenerInfo ? gerente1.obtenerInfo() : ">> Completa la clase Gerente"
  );
} catch (error) {
  console.log("   >> Completa las clases para ver los resultados");
}

// EJERCICIO AVANZADO 2: Tienda Online con Polimorfismo
console.log("\n>> Ejercicio Avanzado 2: E-commerce Avanzado 🛒");
console.log("Implementa un sistema completo de tienda online:");

const categorias = ["electronica", "ropa", "hogar", "deportes", "libros"];
const descuentos = {
  electronica: 0.05,
  ropa: 0.1,
  hogar: 0.07,
  deportes: 0.12,
  libros: 0.03,
};

// TODO: Implementa el sistema de productos
class Producto {
  // Propiedades: id, nombre, precio, categoria, stock, descripcion
  // Constructor que reciba todos los parámetros
  // Método obtenerInfo() que retorne información completa
  // Método aplicarDescuento(porcentaje) que modifique el precio
  // Método estaDisponible() que verifique stock > 0
  // Método reducirStock(cantidad) que reduzca el stock
}

// TODO: Implementa la clase ProductoDigital que herede de Producto
class ProductoDigital extends Producto {
  // Propiedades adicionales: tamanoArchivo, formato, licencia
  // Constructor que reciba parámetros base + digitales (stock siempre infinito)
  // Sobrescribe reducirStock() para no hacer nada (producto digital)
  // Método descargar() que retorne enlace de descarga
  // Sobrescribe obtenerInfo() para incluir info digital
}

// TODO: Implementa la clase ProductoFisico que herede de Producto
class ProductoFisico extends Producto {
  // Propiedades adicionales: peso, dimensiones, tiempoEnvio
  // Constructor que reciba parámetros base + físicos
  // Método calcularEnvio(distancia) que calcule costo de envío
  // Método empaquetarParaEnvio() que prepare el producto
  // Sobrescribe obtenerInfo() para incluir info de envío
}

// TODO: Implementa el carrito de compras
class CarritoCompras {
  // Propiedades: items[], descuentoTotal, cliente
  // Constructor que reciba cliente
  // Método agregarProducto(producto, cantidad) con validaciones
  // Método removerProducto(idProducto)
  // Método calcularSubtotal() usando reduce
  // Método aplicarCupon(codigoCupon) que aplique descuentos
  // Método calcularTotal() incluyendo descuentos e impuestos
  // Método finalizarCompra() que procese la compra
}

// TODO: Funciones del sistema de tienda
function buscarProductos(productos, termino) {
  // Busca productos por nombre o descripción
  // Usa filter e includes (case insensitive)
}

function filtrarPorCategoria(productos, categoria) {
  // Filtra productos por categoría específica
}

function ordenarPorPrecio(productos, ascendente = true) {
  // Ordena productos por precio usando sort
}

function generarReporteVentas(ventas) {
  // Genera reporte de ventas por categoría
  // Usa reduce y map para procesar datos
}

// Datos de prueba
const productosDisponibles = [
  // Se crearán cuando completes las clases
];

// Pruebas del ejercicio avanzado 2
console.log("Sistema de e-commerce:");
try {
  const carrito = new CarritoCompras("María García");
  console.log("   Carrito creado para:", carrito.cliente || ">> Completa la clase CarritoCompras");
} catch (error) {
  console.log("   >> Completa las clases para ver los resultados");
}

// =================================================================
// 🎯 EJERCICIO DESAFÍO: Sistema de Universidad
// =================================================================

console.log("\n\n🎯 EJERCICIO DESAFÍO");
console.log("-".repeat(30));

console.log("\n>>> Desafío: Sistema Universitario Completo 🎓");
console.log("Combina herencia, polimorfismo y encapsulación:");

/*
INSTRUCCIONES DEL DESAFÍO:

1. Crea jerarquía de Persona -> Estudiante, Profesor, Administrativo
2. Implementa sistema de Cursos con diferentes tipos
3. Crea sistema de Calificaciones con diferentes escalas
4. Implementa Matriculas con validaciones
5. Usa encapsulación para proteger datos sensibles
6. Aplica polimorfismo en métodos de cálculo
7. Implementa al menos 5 funciones auxiliares del sistema

Clases requeridas:
- Persona (base)
- Estudiante (hereda de Persona)
- Profesor (hereda de Persona)
- Administrativo (hereda de Persona)
- Curso
- CursoPresencial (hereda de Curso)
- CursoVirtual (hereda de Curso)
- Calificacion
- Matricula
- Universidad (contenedor principal)

Funcionalidades requeridas:
- Matricular estudiantes
- Asignar profesores a cursos
- Calcular promedios por diferentes escalas
- Generar reportes académicos
- Validar prerrequisitos
- Calcular costos de matrícula
*/

// TODO: Implementa el sistema universitario completo
// (Este desafío requiere aplicar todos los conceptos aprendidos)

console.log("Sistema universitario:");
console.log(
  "   >> Este es un desafío avanzado. Implementa todas las clases siguiendo las instrucciones."
);
console.log("   >> Aplica herencia, polimorfismo y encapsulación en un sistema real.");
console.log("   >> ¡Demuestra tu dominio de POO!");

// =================================================================
// 📖 INSTRUCCIONES FINALES
// =================================================================

console.log("\n\n📖 INSTRUCCIONES PARA COMPLETAR:");
console.log("=".repeat(50));
console.log("1. 🔍 Busca todos los comentarios que dicen 'TODO:'");
console.log("2. 💻 Implementa cada clase y método según las instrucciones");
console.log("3. ▶️  Ejecuta 'node ejercicios-poo.js' para probar tus soluciones");
console.log("4. ✅ Verifica que todos los ejercicios muestren resultados correctos");
console.log("5. 🎉 Cuando todo funcione, habrás dominado POO y Herencia!");

console.log("\n💡 TIPS:");
console.log("• 🧬 Usa 'extends' para crear herencia");
console.log("• 🔧 Usa 'super()' para llamar al constructor padre");
console.log("• 🎭 Sobrescribe métodos para lograr polimorfismo");
console.log("• 🔒 Usa '#' para propiedades privadas (encapsulación)");
console.log("• 🔍 Usa console.log() para debuggear tus clases");
console.log("• 📚 Revisa el archivo app.js si necesitas ejemplos");

console.log("\n🚀 ¡ÉXITO EN TUS EJERCICIOS DE POO!");