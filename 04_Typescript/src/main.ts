import './style.css'
import {user as UserClass} from './modules/user';
import type {IUser} from './interface/user.interface';


const datauser: IUser = {
  id: 1,
  name: "Alex",
  email: "alex@example.com",
  edad: 30,
};

const user = new UserClass(datauser.id, datauser.name, datauser.email, datauser.edad);

console.log(user);


