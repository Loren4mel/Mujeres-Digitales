// 📚 FUNDAMENTOS DE JAVASCRIPT - GUÍA PRÁCTICA
// ============================================
// Este archivo te enseña JavaScript desde cero de manera simple y práctica
// Para ejecutar: node app.js

// =================================================================
// 🔤 1. VARIABLES Y TIPOS DE DATOS
// =================================================================

// Crear variables con datos simples
const nombre = "Ana García";
let edad = 22;
const esEstudiante = true;

// Mostrar las variables en pantalla
console.log("📝 Mis variables:");
console.log("   Nombre:", nombre);
console.log("   Edad:", edad);
console.log("   Es estudiante:", esEstudiante);

// Tipos de datos principales
const texto = "¡Hola SENA!";
const numero = 100;
const verdadero = true;
const falso = false;
const vacio = null;

console.log("\n🎯 Tipos de datos:");
console.log("   Texto (string):", texto);
console.log("   Número (number):", numero);
console.log("   Verdadero (boolean):", verdadero);
console.log("   Falso (boolean):", falso);
console.log("   Vacío (null):", vacio);

// Plantillas de texto (Template Literals)
const mensaje = `Hola ${nombre}, tienes ${edad} años`;
console.log("\n💬 Mensaje con plantilla:", mensaje);

// =================================================================
// ⚡ 2. OPERADORES (CÁLCULOS Y COMPARACIONES)
// =================================================================

const numero1 = 10;
const numero2 = 3;

console.log("\n🔢 Operadores matemáticos:");
console.log("   Suma:", numero1 + numero2); // 13
console.log("   Resta:", numero1 - numero2); // 7
console.log("   Multiplicación:", numero1 * numero2); // 30
console.log("   División:", numero1 / numero2); // 3.33...

console.log("\n🎯 Comparaciones:");
console.log("   10 es igual a 10?", 10 == 10); // true
console.log("   10 es mayor que 3?", 10 > 3); // true
console.log("   10 es menor que 3?", 10 < 3); // false

const tieneCarnet = true;
const esMayorEdad = true;

console.log("\n🧠 Operadores lógicos:");
console.log("   Tiene carnet Y es mayor de edad:", tieneCarnet && esMayorEdad); // true
console.log("   Tiene carnet O es mayor de edad:", tieneCarnet || esMayorEdad); // true
console.log("   NO tiene carnet:", !tieneCarnet); // false

// =================================================================
// 📦 3. ARRAYS (LISTAS DE DATOS)
// =================================================================

// Crear una lista de frutas
const frutas = ["manzana", "banana", "naranja", "pera"];
const numeros = [1, 2, 3, 4, 5];

console.log("\n🍎 Mi lista de frutas:", frutas);
console.log("   Primera fruta:", frutas[0]); // manzana
console.log("   Segunda fruta:", frutas[1]); // banana
console.log("   Total de frutas:", frutas.length); // 4

// Métodos útiles para arrays
console.log("\n🔧 Operaciones con arrays:");

// Duplicar todos los números
const numerosDobles = numeros.map(function (numero) {
  return numero * 2;
});
console.log("   Números originales:", numeros);
console.log("   Números duplicados:", numerosDobles);

// Encontrar solo números pares
const numerosPares = numeros.filter(function (numero) {
  return numero % 2 === 0;
});
console.log("   Solo números pares:", numerosPares);

// Sumar todos los números
const suma = numeros.reduce(function (total, numero) {
  return total + numero;
}, 0);
console.log("   Suma de todos los números:", suma);

// Recorrer la lista y mostrar cada fruta
console.log("\n🔄 Mostrar cada fruta:");
frutas.forEach(function (fruta, posicion) {
  console.log(`   ${posicion + 1}. ${fruta}`);
});

// =================================================================
// 🏗️ 4. OBJETOS (AGRUPACIÓN DE DATOS)
// =================================================================

// Crear un objeto estudiante con sus propiedades
const estudiante = {
  nombre: "Ana García",
  edad: 22,
  programa: "Desarrollo de Software",
  activo: true,
  materias: ["JavaScript", "HTML", "CSS"],

  // Método para saludar
  saludar: function () {
    return `¡Hola! Soy ${this.nombre} y estudio ${this.programa}`;
  },

  // Método para agregar materia
  agregarMateria: function (nuevaMateria) {
    this.materias.push(nuevaMateria);
    return `${nuevaMateria} agregada exitosamente`;
  },
};

console.log("\n👤 Información del estudiante:");
console.log("   Nombre:", estudiante.nombre);
console.log("   Edad:", estudiante.edad, "años");
console.log("   Programa:", estudiante.programa);
console.log("   Estado:", estudiante.activo ? "Activo" : "Inactivo");
console.log("   Materias:", estudiante.materias.join(", "));

console.log("\n💬 Usando métodos del objeto:");
console.log("   Saludo:", estudiante.saludar());
console.log("  ", estudiante.agregarMateria("TypeScript"));
console.log("   Materias actualizadas:", estudiante.materias.join(", "));

// Extraer valores del objeto (destructuring)
const { nombre: nombreEstudiante, edad: edadEstudiante } = estudiante;
console.log("\n🎯 Datos extraídos del objeto:");
console.log("   Nombre extraído:", nombreEstudiante);
console.log("   Edad extraída:", edadEstudiante);

// =================================================================
// 🔧 5. FUNCIONES (BLOQUES DE CÓDIGO REUTILIZABLE)
// =================================================================

// Función tradicional para sumar
function sumar(a, b) {
  return a + b;
}

// Función almacenada en variable
const restar = function (a, b) {
  return a - b;
};

// Función flecha (arrow function) - más moderna
const multiplicar = (a, b) => a * b;

// Función con validación
const dividir = (a, b) => {
  if (b === 0) {
    return "Error: No se puede dividir por cero";
  }
  return a / b;
};

console.log("\n📐 Calculadora con funciones:");
console.log("   sumar(8, 3) =", sumar(8, 3));
console.log("   restar(8, 3) =", restar(8, 3));
console.log("   multiplicar(8, 3) =", multiplicar(8, 3));
console.log("   dividir(8, 3) =", dividir(8, 3));
console.log("   dividir(8, 0) =", dividir(8, 0));

// Función con valores por defecto
function crearSaludo(nombre = "Visitante", lugar = "SENA") {
  return `¡Bienvenido ${nombre} al ${lugar}!`;
}

console.log("\n👋 Saludos con valores por defecto:");
console.log("  ", crearSaludo());
console.log("  ", crearSaludo("María"));
console.log("  ", crearSaludo("Ana", "curso de JavaScript"));

// =================================================================
// 🎯 6. CONDICIONALES (TOMAR DECISIONES)
// =================================================================

const edadPersona = 18;
const tieneDocumento = true;

console.log("\n🚦 Condicionales simples:");

// If simple
if (edadPersona >= 18) {
  console.log("   Es mayor de edad ✅");
} else {
  console.log("   Es menor de edad ❌");
}

// If con múltiples condiciones
if (edadPersona >= 18 && tieneDocumento) {
  console.log("   Puede votar ✅");
} else if (edadPersona >= 18 && !tieneDocumento) {
  console.log("   Necesita documento para votar 📄");
} else {
  console.log("   No puede votar ❌");
}

// Switch para múltiples opciones
const dia = "lunes";

console.log("\n📅 Usando switch:");
switch (dia) {
  case "lunes":
    console.log("   Inicio de semana 💪");
    break;
  case "viernes":
    console.log("   ¡Ya casi fin de semana! 🎉");
    break;
  case "sábado":
  case "domingo":
    console.log("   ¡Fin de semana! 🎈");
    break;
  default:
    console.log("   Día normal de la semana");
}

// =================================================================
// 🔄 7. CICLOS (REPETIR CÓDIGO)
// =================================================================

console.log("\n🔄 Ciclos y repeticiones:");

// For tradicional
console.log("   Contando del 1 al 5:");
// Template literal para alinear números
for (let i = 1; i <= 5; i++) {
  console.log(`     ${i}. ¡Hola!`);
}

// While
console.log("\n   Contando hacia atrás:");
let contador = 5;
while (contador > 0) {
  console.log(`     ${contador}...`);
  contador--;
}
console.log("     ¡Despegue! 🚀");

// For...of para recorrer arrays
const colores = ["rojo", "azul", "verde", "amarillo"];
console.log("\n   Mis colores favoritos:");
for (const color of colores) {
  console.log(`     - ${color}`);
}

// =================================================================
// 🔍 8. MÉTODOS ÚTILES DE CONSOLE
// =================================================================

const estudiantes = [
  { nombre: "Ana", nota: 92 },
  { nombre: "Carlos", nota: 85 },
  { nombre: "María", nota: 88 },
];

console.log("\n📊 Formas de mostrar información:");

// Tabla ordenada
console.log("   Tabla de estudiantes:");
console.table(estudiantes);

// Agrupar información
console.group("   📋 Análisis de notas");
estudiantes.forEach((est) => {
  console.log(`${est.nombre}: ${est.nota >= 90 ? "🏆 Excelente" : "✅ Bueno"}`);
});
console.groupEnd();

// =================================================================
// 🚀 9. CONCEPTOS AVANZADOS BÁSICOS
// =================================================================

// Desestructuración de arrays - extraer valores fácilmente
const coloresArray = ["rojo", "azul", "verde", "amarillo"];
const [primerColor, segundoColor, , cuartoColor] = coloresArray;

console.log("\n🎯 Desestructuración de arrays:");
console.log("   Array original:", coloresArray);
console.log("   Primer color:", primerColor);
console.log("   Segundo color:", segundoColor);
console.log("   Cuarto color (saltamos el 3ro):", cuartoColor);

// Desestructuración de objetos - extraer propiedades fácilmente
const persona = {
  nombre: "Carlos Ruiz",
  edad: 28,
  profesion: "Programador",
  ciudad: "Medellín",
  hobbies: ["leer", "jugar fútbol", "programar"],
};

const { nombre: nombrePersona, edad: edadPersonaObj, profesion } = persona;
const {
  ciudad,
  hobbies: [hobby1, hobby2],
} = persona;

console.log("\n🏗️ Desestructuración de objetos:");
console.log("   Nombre extraído:", nombrePersona);
console.log("   Edad extraída:", edadPersonaObj);
console.log("   Profesión extraída:", profesion);
console.log("   Ciudad extraída:", ciudad);
console.log("   Primer hobby:", hobby1);
console.log("   Segundo hobby:", hobby2);

// Spread operator (...) - expandir arrays
const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];
const todosLosNumeros = [...numeros1, ...numeros2];

console.log("\n📦 Spread operator con arrays:");
console.log("   Array 1:", numeros1);
console.log("   Array 2:", numeros2);
console.log("   Combinados:", todosLosNumeros);

// Spread operator con objetos
const datosBasicos = { nombre: "María", edad: 25 };
const datosCompletos = {
  ...datosBasicos,
  ciudad: "Bogotá",
  profesion: "Diseñadora",
  edad: 26, // Esto sobrescribe la edad anterior
};

console.log("\n📦 Spread operator con objetos:");
console.log("   Datos básicos:", datosBasicos);
console.log("   Datos completos:", datosCompletos);

// Rest parameters - recibir múltiples argumentos
function presentarPersonas(principal, ...otrasPersonas) {
  console.log("   Persona principal:", principal);
  console.log("   Otras personas:", otrasPersonas.join(", "));
}

console.log("\n⚡ Rest parameters:");
presentarPersonas("Ana", "Carlos", "María", "Pedro", "Lucía");

// Template literals con múltiples líneas
const carta = `
Estimado/a estudiante,

Te damos la bienvenida al programa de ${persona.profesion}.
Tu instructor será ${nombrePersona} y las clases serán en ${ciudad}.

¡Esperamos verte pronto!

Saludos,
El equipo del SENA
`;

console.log("\n📝 Template literals multilínea:");
console.log(carta);

// Optional chaining (?.) - acceder propiedades que pueden no existir
const usuario = {
  nombre: "Laura",
  contacto: {
    email: "laura@email.com",
    // telefono no existe
  },
};

console.log("\n🔗 Optional chaining:");
console.log("   Email:", usuario.contacto?.email || "No disponible");
console.log("   Teléfono:", usuario.contacto?.telefono || "No disponible");
console.log("   LinkedIn:", usuario.redes?.linkedin || "No disponible");

// Nullish coalescing (??) - valor por defecto solo para null/undefined
const configuracion = {
  tema: null,
  idioma: undefined,
  notificaciones: false,
};

const tema = configuracion.tema ?? "claro";
const idioma = configuracion.idioma ?? "español";
const notificaciones = configuracion.notificaciones ?? true; // No usa el default porque false no es null/undefined

console.log("\n🎛️ Nullish coalescing:");
console.log("   Tema:", tema);
console.log("   Idioma:", idioma);
console.log("   Notificaciones:", notificaciones);

// Valores verdaderos y falsos
const valores = [true, false, 1, 0, "texto", "", null, undefined, NaN];

console.log("\n🎯 Valores verdaderos (truthy) y falsos (falsy):");
valores.forEach((valor) => {
  const esVerdadero = !!valor;
  const valorMostrar =
    valor === null
      ? "null"
      : valor === undefined
      ? "undefined"
      : Number.isNaN(valor)
      ? "NaN"
      : JSON.stringify(valor);
  console.log(`   ${valorMostrar} es ${esVerdadero ? "verdadero ✅" : "falso ❌"}`);
});

// Short-circuit evaluation - evaluación de cortocircuito
const nombreUsuario = "";
const mensajeBienvenida = nombreUsuario && `Bienvenido, ${nombreUsuario}`;
const mensajePorDefecto = nombreUsuario || "Bienvenido, invitado";

console.log("\n⚡ Short-circuit evaluation:");
console.log("   Con nombre vacío:", mensajeBienvenida || "No hay mensaje");
console.log("   Mensaje por defecto:", mensajePorDefecto);

// =================================================================
// 🎉 EJECUTAR TODO EL CÓDIGO
// =================================================================

console.log("\n" + "=".repeat(60));
console.log("🎉 ¡FELICIDADES! Has completado los fundamentos de JavaScript");
console.log("✅ Variables y tipos de datos");
console.log("✅ Operadores");
console.log("✅ Arrays (listas)");
console.log("✅ Objetos");
console.log("✅ Funciones");
console.log("✅ Condicionales");
console.log("✅ Ciclos");
console.log("✅ Conceptos avanzados básicos");
console.log("🚀 ¡Estás listo para aprender más JavaScript!");
console.log("=".repeat(60));