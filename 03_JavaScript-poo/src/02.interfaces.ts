export interface User {
  id: number;
  name: string;
  email: string | null;
  edad: number | string;
  habilidades?: string[];

  carreras: {
    nombre: string;
    duracion?: number;
  }[];
}

export interface Animales {
  nombre: string;
  edad: number;

  // Métodos
  sonido: () => string;
}
