import type { IUser } from "./interface/user.interface";
import FetchData from "./Festchdata";

export class User implements IUser {
  id: number;
  name: string;
  email: string | null;
  edad: number | string;

  fetch: FetchData = new FetchData("https://dummyjson.com/users/1");

  constructor(user: IUser) {
    const { id, name, email, edad } = user;

    this.id = id;
    this.name = name;
    this.email = email;
    this.edad = edad;
  }

  async fetchUser(): Promise<void> {
    const user = await this.fetch.getAxios();
    //const user = await this.fetch.get();
    this.updateUser(user);
  }

  private updateUser(user: { id: number; firstName: string; email: string; age: number }): void {
    if (user) {
      const { id, firstName, email, age } = user;

      this.id = id;
      this.name = firstName;
      this.email = email;
      this.edad = age;
    }
  }
}

export default User;
