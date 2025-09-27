import type { User, Animales } from "./02.interfaces.ts";

let nombre: string = "Juan";
let num: number = 30;
let booleano: boolean = true;
let cualquiera: any = "Hola";

console.log(`${nombre} - ${num} - ${booleano} - ${cualquiera}`);

let numeros: number[] = [1, 2, 3, 4, 5];

console.log(numeros);

let textos: string[] = ["Hola", "Mundo"];

console.log(textos);

let user: User = {
  id: 1,
  name: "Juan",
  email: "juan@example.com",
  edad: 30,

  carreras: [
    {
      nombre: "Ingeniería",
      duracion: 5,
    },
  ],
};

let user2: User = {
  id: 2,
  name: "María",
  email: "maria@example.com",
  edad: 25,
  habilidades: ["JavaScript", "TypeScript", "Node.js"],

  carreras: [
    {
      nombre: "Diseño",
      duracion: 4,
    },
  ],
};

console.log(user, user2);

function mostrarUsuario(usuario: User) {
  const { id, name, email, edad, habilidades } = usuario;

  console.log(`ID: ${id}`);
  console.log(`Nombre: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Edad: ${edad}`);

  // tradicional
  if (habilidades) {
    console.log(`Habilidades: ${habilidades.join(", ")}`);
  } else {
    console.log("Habilidades: No tiene habilidades");
  }

  // Ternmario
  console.log(`Habilidades: ${habilidades ? habilidades.join(", ") : "No tiene habilidades"}`);
}

let perro: Animales = {
  nombre: "Firulais",
  edad: 3,

  sonido: () => {
    return "Guau Guau";
  },
};

console.log(perro);
