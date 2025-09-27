export interface IUser {
  id: number;
  name: string;
  email: string | null;
  edad: number | string;

  obtenerInformacion?: (user: IUser) => string;
}

export interface IUser {
  id: number;
  name: string;
  email: string | null;
  edad: number | string;
}
