// =================================================================
// 🏗️ PROGRAMACIÓN ORIENTADA A OBJETOS (POO) - GUÍA PRÁCTICA
// =================================================================
// Este archivo te enseña POO desde cero con ejemplos reales y prácticos
// Para ejecutar: node app.js

console.log("🏗️ PROGRAMACIÓN ORIENTADA A OBJETOS (POO)");
console.log("📚 Conceptos: Clases, Encapsulación, Herencia y Polimorfismo");
console.log("=".repeat(60));

// La POO es un paradigma de programación que se basa en el concepto de "objetos"
// que contienen datos (atributos) y código (métodos)

// =================================================================
// 📚 1. ¿QUÉ ES UNA CLASE? - CONCEPTO BÁSICO
// =================================================================

console.log("\n📚 1. ¿QUÉ ES UNA CLASE?");
console.log("Una clase es como un molde o plantilla para crear objetos");
console.log("Vamos a crear una clase User paso a paso:");

// Creamos nuestra primera clase: User
// Una clase agrupa datos (propiedades) y funciones (métodos) relacionados
class User {
  // Propiedades estáticas - pertenecen a la clase, no a las instancias
  static countUser = 0;

  // Propiedades de instancia - cada objeto tendrá sus propios valores
  nombre;
  edad;
  email;
  fechaNacimiento;
  contraseña;

  // Constructor - se ejecuta cuando creamos un nuevo objeto
  constructor(nombre, email, fechaNacimiento, contraseña = "default123") {
    User.countUser++; // Incrementamos el contador de usuarios

    this.nombre = nombre;
    this.email = email;
    this.fechaNacimiento = fechaNacimiento;
    this.edad = this.calcularEdad(); // Calculamos la edad automáticamente
    this.contraseña = contraseña;
  }

  // Getters y Setters - métodos para acceder y modificar propiedades
  getNombre() {
    return this.nombre;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  // Métodos de lógica de negocio - funcionalidad específica de la clase
  calcularEdad() {
    const hoy = new Date();
    const nacimiento = new Date(this.fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  }

  saludar() {
    console.log(
      `   Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y mi email es ${this.email}.`
    );
  }

  // Métodos estáticos - pertenecen a la clase, no a las instancias
  static descripcion() {
    console.log("   Esta clase representa un usuario con nombre, email y fecha de nacimiento.");
  }

  static cantidad() {
    return User.countUser;
  }
}

console.log("\n🎯 Creando objetos (instancias) de la clase User:");

// Creamos múltiples usuarios usando la clase como molde
const usuario = new User("Ana", "ana@example.com", "1990-01-01");
const usuario2 = new User("Luis", "luis@example.com", "1985-05-15");
const usuario3 = new User("Marta", "marta@example.com", "2000-10-10");

console.log("\n👋 Cada usuario puede saludar:");
usuario.saludar();
usuario2.saludar();
usuario3.saludar();

console.log("\n🔧 Modificando datos del usuario:");
usuario.setNombre("Luisa");
let nombreActualizado = usuario.getNombre();
console.log("   Nombre actualizado:", nombreActualizado);

console.log("\n📊 Información de la clase:");
User.descripcion();
console.log(`   Total de usuarios creados: ${User.cantidad()}`);

console.log("\n✅ Conceptos aprendidos:");
console.log("   🏗️  Cómo crear una clase con propiedades y métodos");
console.log("   🎯 Cómo crear objetos (instancias) usando 'new'");
console.log("   📊 Métodos estáticos vs métodos de instancia");
console.log("   🔧 Getters y setters para controlar el acceso a datos");

// 📋 Ahora que entendemos las clases básicas, veamos los CONCEPTOS FUNDAMENTALES DE POO:

// =================================================================
// 🔒 2. ENCAPSULACIÓN - PROTEGER DATOS INTERNOS
// =================================================================

// La encapsulación permite ocultar los detalles internos de un objeto
// y exponer solo lo necesario a través de métodos públicos

console.log("\n🔒 2. ENCAPSULACIÓN:");
console.log("Protegemos los datos internos y controlamos el acceso");

class CuentaBancaria {
  #saldo; // Propiedad privada (privada con #)
  titular;

  constructor(titular, saldoInicial = 0) {
    this.titular = titular;
    this.#saldo = saldoInicial;
  }

  // Método público para acceder al saldo
  obtenerSaldo() {
    return this.#saldo;
  }

  // Método público para depositar
  depositar(cantidad) {
    if (cantidad > 0) {
      this.#saldo += cantidad;
      console.log(`Depósito de $${cantidad} realizado. Saldo actual: $${this.#saldo}`);
    } else {
      console.log("La cantidad debe ser mayor a 0");
    }
  }

  // Método público para retirar
  retirar(cantidad) {
    if (cantidad > 0 && cantidad <= this.#saldo) {
      this.#saldo -= cantidad;
      console.log(`Retiro de $${cantidad} realizado. Saldo actual: $${this.#saldo}`);
    } else {
      console.log("Fondos insuficientes o cantidad inválida");
    }
  }
}

console.log("\n💰 Ejemplo práctico - Cuenta Bancaria:");
const cuenta = new CuentaBancaria("Juan Pérez", 1000);
cuenta.depositar(500);
cuenta.retirar(200);
console.log(`   Saldo final de ${cuenta.titular}: $${cuenta.obtenerSaldo()}`);

// =================================================================
// 🧬 3. HERENCIA - REUTILIZAR Y EXTENDER CÓDIGO
// =================================================================

// La herencia permite crear nuevas clases basadas en clases existentes
// La clase hija hereda atributos y métodos de la clase padre

console.log("\n🧬 3. HERENCIA:");
console.log("Creamos nuevas clases basadas en clases existentes");

class Vehiculo {
  marca;
  modelo;
  año;

  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  arrancar() {
    console.log(`${this.marca} ${this.modelo} está arrancando...`);
  }

  detener() {
    console.log(`${this.marca} ${this.modelo} se ha detenido.`);
  }

  obtenerInfo() {
    return `${this.marca} ${this.modelo} (${this.año})`;
  }
}

// Clase hija que hereda de Vehiculo
class Coche extends Vehiculo {
  numeroPuertas;
  tipoCombustible;

  constructor(marca, modelo, año, numeroPuertas, tipoCombustible) {
    super(marca, modelo, año); // Llama al constructor de la clase padre
    this.numeroPuertas = numeroPuertas;
    this.tipoCombustible = tipoCombustible;
  }

  // Método específico de Coche
  abrirPuertas() {
    console.log(`Abriendo las ${this.numeroPuertas} puertas del ${this.modelo}`);
  }

  // Sobrescribir método de la clase padre (Polimorfismo)
  arrancar() {
    console.log(`El coche ${this.marca} ${this.modelo} está encendiendo el motor...`);
  }
}

// Otra clase hija que hereda de Vehiculo
class Motocicleta extends Vehiculo {
  cilindrada;
  tipoMoto;

  constructor(marca, modelo, año, cilindrada, tipoMoto) {
    super(marca, modelo, año);
    this.cilindrada = cilindrada;
    this.tipoMoto = tipoMoto;
  }

  hacerCaballito() {
    console.log(`${this.modelo} está haciendo un caballito!`);
  }

  // Sobrescribir método de la clase padre
  arrancar() {
    console.log(`La motocicleta ${this.marca} ${this.modelo} está encendiendo con un rugido...`);
  }
}

console.log("\n🚗 Ejemplo práctico - Vehículos:");

const miCoche = new Coche("Toyota", "Corolla", 2023, 4, "Gasolina");
const miMoto = new Motocicleta("Honda", "CBR600", 2022, 600, "Deportiva");

console.log("   📋 Información del coche:", miCoche.obtenerInfo());
console.log("   📋 Información de la moto:", miMoto.obtenerInfo());

console.log("\n   🔧 Probando métodos:");
miCoche.arrancar(); // Método sobrescrito
miCoche.abrirPuertas(); // Método específico de Coche
miCoche.detener(); // Método heredado de Vehiculo

miMoto.arrancar(); // Método sobrescrito
miMoto.hacerCaballito(); // Método específico de Motocicleta
miMoto.detener(); // Método heredado de Vehiculo

// =================================================================
// 🎭 4. POLIMORFISMO - MISMA ACCIÓN, DIFERENTES FORMAS
// =================================================================

// El polimorfismo permite que objetos de diferentes clases
// respondan de manera diferente al mismo método

console.log("\n🎭 4. POLIMORFISMO:");
console.log("Misma acción, diferentes implementaciones");

const vehiculos = [
  new Vehiculo("Ford", "Fiesta", 2020),
  new Coche("BMW", "X5", 2023, 5, "Diésel"),
  new Motocicleta("Yamaha", "R1", 2023, 1000, "Deportiva"),
];

console.log("\n   🚀 Cada vehículo arranca diferente:");
vehiculos.forEach((vehiculo) => {
  console.log(`   📍 ${vehiculo.obtenerInfo()}`);
  console.log(`      `, vehiculo.arrancar ? vehiculo.arrancar() : "Arrancando..."); // Cada clase implementa arrancar() de forma diferente
});

// =================================================================
// 👥 5. EJEMPLO AVANZADO: SISTEMA DE EMPLEADOS
// =================================================================

console.log("\n👥 5. EJEMPLO AVANZADO - Sistema de Empleados:");
console.log("Aplicamos herencia en un caso real de empresa");

class Empleado {
  nombre;
  apellido;
  salarioBase;

  constructor(nombre, apellido, salarioBase) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.salarioBase = salarioBase;
  }

  calcularSalario() {
    return this.salarioBase;
  }

  obtenerNombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  }

  trabajar() {
    console.log(`${this.obtenerNombreCompleto()} está trabajando...`);
  }
}

class Gerente extends Empleado {
  bono;
  equipoACargo;

  constructor(nombre, apellido, salarioBase, bono, equipoACargo) {
    super(nombre, apellido, salarioBase);
    this.bono = bono;
    this.equipoACargo = equipoACargo;
  }

  calcularSalario() {
    return this.salarioBase + this.bono;
  }

  dirigirReunion() {
    console.log(
      `${this.obtenerNombreCompleto()} está dirigiendo una reunión con su equipo de ${
        this.equipoACargo
      } personas.`
    );
  }

  trabajar() {
    console.log(
      `${this.obtenerNombreCompleto()} está gestionando el equipo y tomando decisiones estratégicas...`
    );
  }
}

class Desarrollador extends Empleado {
  lenguajes;
  proyectosCompletados;

  constructor(nombre, apellido, salarioBase, lenguajes, proyectosCompletados = 0) {
    super(nombre, apellido, salarioBase);
    this.lenguajes = lenguajes;
    this.proyectosCompletados = proyectosCompletados;
  }

  calcularSalario() {
    const bonoPorProyecto = this.proyectosCompletados * 100;
    return this.salarioBase + bonoPorProyecto;
  }

  programar() {
    console.log(
      `${this.obtenerNombreCompleto()} está programando en ${this.lenguajes.join(", ")}...`
    );
  }

  trabajar() {
    console.log(
      `${this.obtenerNombreCompleto()} está desarrollando software y resolviendo bugs...`
    );
  }
}

console.log("\n💼 Simulación del sistema:");

const empleados = [
  new Empleado("Ana", "García", 2000),
  new Gerente("Carlos", "López", 5000, 2000, 8),
  new Desarrollador("María", "Rodríguez", 3500, ["JavaScript", "Python", "Java"], 5),
];

empleados.forEach((empleado) => {
  console.log(`   👤 ${empleado.obtenerNombreCompleto()}: Salario $${empleado.calcularSalario()}`);
  console.log(`       ${empleado.trabajar ? empleado.trabajar() : "Trabajando..."}`);

  if (empleado instanceof Gerente) {
    console.log(
      `       ${empleado.dirigirReunion ? empleado.dirigirReunion() : "Dirigiendo reunión..."}`
    );
  } else if (empleado instanceof Desarrollador) {
    console.log(`       ${empleado.programar ? empleado.programar() : "Programando..."}`);
  }
  console.log("   " + "-".repeat(50));
});

// =================================================================
// 📝 RESUMEN DE CONCEPTOS APRENDIDOS
// =================================================================

console.log("\n📝 RESUMEN DE CONCEPTOS:");
console.log("🔒 Encapsulación: Ocultar detalles internos y exponer solo lo necesario");
console.log("🧬 Herencia: Crear nuevas clases basadas en clases existentes (extends, super)");
console.log("🎭 Polimorfismo: Diferentes clases responden de manera diferente al mismo método");
console.log("⚡ La herencia permite reutilizar código y crear jerarquías de clases");
console.log("🔧 El uso de 'super()' llama al constructor de la clase padre");
console.log("🎯 Los métodos pueden ser sobrescritos en las clases hijas");

// =================================================================
// 🎉 CONCLUSIÓN
// =================================================================

console.log("\n" + "=".repeat(60));
console.log("🎉 ¡FELICIDADES! Has completado POO y Herencia en JavaScript");
console.log("✅ Encapsulación con propiedades privadas");
console.log("✅ Herencia con extends y super");
console.log("✅ Polimorfismo con sobrescritura de métodos");
console.log("✅ Casos prácticos reales");
console.log("🚀 ¡Estás listo para los ejercicios prácticos!");
console.log("=".repeat(60));
