import { Perfil } from "src/perfil/entities/perfil.entity";

export class User {
  id?: string;
  name: string;
  email: string;
  password: string;
  cpf: number;
  isAdmin: string;
  createdAt?: Date;
  updatedAt?: Date;
}
